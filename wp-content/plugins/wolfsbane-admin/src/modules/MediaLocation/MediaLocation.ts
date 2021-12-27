import IMediaLocationConfig from "./IMediaLocationConfig";
import TeboUtility from "../TeboUtility";
import FormNotification, { NotificationStatus } from "../FormNotification/FormNotification";

enum Action {
    GetMediaLocation = 'get_media_location',
    DeleteMediaLocation = 'delete_media_location',
    SaveMediaLocation = 'save_media_location'
}

export default class MediaLocation {

    private formEl: HTMLFormElement;
    private locationNameEl: HTMLInputElement;
    private locationSlugEl: HTMLInputElement;
    private saveEl: HTMLInputElement;
    private clearEl: HTMLInputElement;
    private listBlockEl: HTMLElement;

    private notificationForm: FormNotification | null = null;

    constructor(private config: IMediaLocationConfig) {
        this.formEl = document.getElementById(this.config.formId)! as HTMLFormElement;
        this.locationNameEl = this.formEl.querySelector('#mediaLocationName') as HTMLInputElement;
        this.locationSlugEl = this.formEl.querySelector('#mediaLocationSlug') as HTMLInputElement;
        this.saveEl = this.formEl.querySelector('#saveLocationForm') as HTMLInputElement;
        this.clearEl = this.formEl.querySelector('#clearLocationForm') as HTMLInputElement;

        // this.tableEl = document.querySelector(`#${this.config.listElId}`) as HTMLElement;
        this.listBlockEl = document.querySelector(`#${this.config.listElId}`) as HTMLElement ?? this.createListBlockEl();

        this.setup();
    }

    private editClickHandler(e: Event): void {
        e.preventDefault();

        if (!this.formEl.dataset.url) return;

        const el = (e.target || e.srcElement) as HTMLElement;
        const mediaLocationId = +(el.getAttribute('data-id') || '0');

        let formData = new FormData();

        this.formEl.setAttribute('data-id', mediaLocationId + '');

        formData.append("mediaLocationId", mediaLocationId + '');
        formData.append("action", Action.GetMediaLocation);
        formData.append("nonce", (document.getElementById(Action.GetMediaLocation + '_nonce')! as HTMLInputElement).value);

        fetch(this.formEl.dataset.url, {
            method: "POST",
            body: new URLSearchParams(formData as URLSearchParams)
        }).then(response => {
            if (response.ok) {
                if (TeboUtility.isJsonResponse(response))
                    return response.json();

                return response.text();
            }

            return Promise.reject(response);
        }).then(result => {
            if (!TeboUtility.tryParseToJson(result)) return;

            let message = '';
            const outcome = JSON.parse(result);

            if (!outcome.success)
                message = 'Unable to send contact form message';

            if (outcome.success) {
                this.locationNameEl.value = outcome.data.result.name;
                this.locationSlugEl.value = outcome.data.result.slug;
            }
        }).catch(error => {
            // enable the submit button
            // this.submitEl.disabled = false;

            this.notificationForm?.show(NotificationStatus.Danger, "Problem retrieving media location information");
        });
    }

    private deleteClickHandler(e: Event): void {
        e.preventDefault();

        if (!this.formEl.dataset.url) return;
        if (!confirm("Are you sure you want to delete the media location?")) return;

        const el = (e.target || e.srcElement) as HTMLElement;
        const mediaLocationId = +(el.getAttribute('data-id') || '0');

        let formData = new FormData();

        this.formEl.setAttribute('data-id', mediaLocationId + '');

        formData.append("mediaLocationId", mediaLocationId + '');
        formData.append("action", Action.DeleteMediaLocation);
        formData.append("nonce", (document.getElementById(Action.DeleteMediaLocation + '_nonce')! as HTMLInputElement).value);

        fetch(this.formEl.dataset.url, {
            method: "POST",
            body: new URLSearchParams(formData as URLSearchParams)
        }).then(response => {
            if (response.ok) {
                if (TeboUtility.isJsonResponse(response))
                    return response.json();

                return response.text();
            }

            return Promise.reject(response);
        }).then(result => {
            if (!TeboUtility.tryParseToJson(result)) return;

            let message = '';
            const outcome = JSON.parse(result);

            if (!outcome.success)
                message = 'Unable to send contact form message';

            if (outcome.success) {
                this.removeRow(mediaLocationId);
                this.notificationForm?.show(NotificationStatus.Success, "Media location was deleted successfully");
            }
        }).catch(response => {
            if (TeboUtility.isString(response)) console.log(response);
            if (!TeboUtility.isFunction(response.text)) return;

            return response.text().then(text => {
                if (TeboUtility.tryParseToJson(text))
                    return this.handleError(text);

                this.notificationForm?.show(NotificationStatus.Danger, text);
                console.error(text);
            });
            // this.notificationForm?.show(NotificationStatus.Danger, "Problem deleting media location information");
        });
    }

    private saveClickHandler(e: Event): void {
        e.preventDefault();

        if (!this.formEl.dataset.url) return;

        const el = (e.target || e.srcElement) as HTMLElement;
        const mediaLocationId = +(this.formEl.getAttribute('data-id') || '0');
        const mediaLocationName = this.locationNameEl.value;
        const mediaLocationSlug = this.locationSlugEl.value;

        let formData = new FormData();

        this.formEl.setAttribute('data-id', mediaLocationId + '');

        formData.append("mediaLocationId", mediaLocationId + '');
        formData.append("mediaLocationName", mediaLocationName);
        formData.append("mediaLocationSlug", mediaLocationSlug);
        formData.append("action", Action.SaveMediaLocation);
        formData.append("nonce", (document.getElementById(Action.SaveMediaLocation + '_nonce')! as HTMLInputElement).value);

        fetch(this.formEl.dataset.url, {
            method: "POST",
            body: new URLSearchParams(formData as URLSearchParams)
        }).then(response => {
            if (response.ok) {
                if (TeboUtility.isJsonResponse(response))
                    return response.json();

                return response.text();
            }

            return Promise.reject(response);
        }).then(result => {
            if (!TeboUtility.tryParseToJson(result)) return;

            let message = '';
            const outcome = JSON.parse(result);

            if (!outcome.success)
                message = 'Unable to send contact form message';

            if (outcome.success) {
                this.addNewRow(outcome.data.result.id, mediaLocationName, mediaLocationSlug);
                this.clearForm();
                this.notificationForm?.show(NotificationStatus.Success, "Media location was saved successfully");
            }
        }).catch(error => {
            this.notificationForm?.show(NotificationStatus.Danger, "Problem saving media location information");
        });
    }

    private addNewRow(mediaLocationId: number, mediaLocationName: string, mediaLocationSlug: string): void {
        if (!mediaLocationId) return;

        this.removeRow(mediaLocationId);
        this.listBlockEl?.insertAdjacentHTML('beforeend', `
            <li data-id="${mediaLocationId}" class="data-list__item">
                <div class="data-list__title">${mediaLocationName}</div>
                <div class="data-list__subtitle">${mediaLocationSlug}</div>
                <div class="data-list__controls">
                    <div></div>
                    <div class="btn-group float-right" role="group" aria-label="Action">
                        <button id="edit-${mediaLocationId}"
                            data-id="${mediaLocationId}" type="button"
                            class="${this.config.editButtonClass} btn btn-link btn-sm">Edit</button>
                        <button id="delete-${mediaLocationId}"
                            data-id="${mediaLocationId}" type="button"
                            class="${this.config.deleteButtonClass} btn btn-link btn-sm">Delete</button>
                    </div>
                </div>
            </li>
        `);
        
    }

    private removeRow(mediaLocationId: number) {
        if (!mediaLocationId) return;

        this.listBlockEl.querySelector(`[data-id="${mediaLocationId}"]`)?.remove();
    }

    private handleError(error: string) {
        try {
            let result = JSON.parse(error);
            const errors = result.data.errors;

            if (TeboUtility.isArray(errors)) {
                let message = '<ul>';
                errors.forEach((item, index) => {
                    message += `<li>${item}</li>`;
                });
                message += `</ul>`;
                this.notificationForm?.show(NotificationStatus.Danger, message);
                return;
            }

            if (!TeboUtility.isObject(errors)) return;


            let message = '<ul>';
            for (const x in result?.data?.errors) {
                for (const y in result?.data?.errors[x]) {
                    message += `<li>${result?.data?.errors[x][y]}</li>`;

                }
            }
            message += `</ul>`;
            this.notificationForm?.show(NotificationStatus.Danger, message);

        }
        catch (e) {
            console.error(error);
        }
    }

    private clearClickHandler(e: Event): void {
        e.preventDefault();

        const el = (e.target || e.srcElement) as HTMLElement;
        const mediaLocationId = +(this.formEl.getAttribute('data-id') || '0');

        this.clearForm();
    }

    private clearForm(): void {
        this.formEl.setAttribute('data-id', '');
        this.locationNameEl.value = '';
        this.locationSlugEl.value = '';
        this.formEl.reset();
    }

    private createListBlockEl(): HTMLElement {
        let el = document.createElement("ul");

        el.setAttribute('id', this.config.listElId);
        el.classList.add('data-list');

        this.formEl.insertAdjacentElement('afterend', el);

        return el;
    }

    private setup(): void {
        this.notificationForm = new FormNotification({
            containerId: 'mgt-center-notification',
            messageElClass: 'alert-message'
        });

        TeboUtility.live(`.${this.config.editButtonClass}`, 'click', this.editClickHandler.bind(this), this.listBlockEl);
        TeboUtility.live(`.${this.config.deleteButtonClass}`, 'click', this.deleteClickHandler.bind(this), this.listBlockEl);

        /* document.querySelectorAll(`.${this.config.editButtonClass}`).forEach(item => {
            item.addEventListener('click', this.editClickHandler.bind(this), false);
        });

        document.querySelectorAll(`.${this.config.deleteButtonClass}`).forEach(item => {
            item.addEventListener('click', this.deleteClickHandler.bind(this), false);
        }); */

        this.saveEl.addEventListener('click', this.saveClickHandler.bind(this), false);
        this.clearEl.addEventListener('click', this.clearClickHandler.bind(this), false);
    }
    
}
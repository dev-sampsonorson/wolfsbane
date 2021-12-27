import _ from "lodash";
import TeboUtility from "../TeboUtility";
import FormNotification, { NotificationStatus } from "../FormNotification/FormNotification";
import IMediaDataConfig, { MediaType } from "./IMediaDataConfig";
import Result from "../Result";
import { trim } from "jquery";

enum Action {
    GetMediaLocation = 'get_media_location',
    DeleteMediaLocation = 'delete_media_location',
    SaveMediaLocation = 'save_media_location',
    GetMediaData = 'get_media_data',
    DeleteMediaData = 'delete_media_data',
    SaveMediaData = 'save_media_data',
}

enum SupportFileType {
    Mp3 = 'mp3',
    Ogg = 'ogg'
}

export default class MediaData {

    private formEl: HTMLFormElement;
    private mediaTitleEl: HTMLInputElement;
    private mediaArtistEl: HTMLInputElement;
    private mediaLocationEl: HTMLInputElement;
    private mediaOrderEl: HTMLInputElement;
    private mediaMp3El: HTMLInputElement | null;
    private mediaOggEl: HTMLInputElement | null;
    private mediaVideoUrlEl: HTMLInputElement | null;
    private mediaVideoIdEl: HTMLInputElement | null;
    private saveEl: HTMLInputElement;
    private clearEl: HTMLInputElement;
    private listBlockEl: HTMLElement;
    private mp3UploadEl: HTMLElement;
    private oggUploadEl: HTMLElement;
    private uploadDisplayEls: HTMLElement[];
    private uploadWrapperEls: HTMLElement[];
    private mutationObserver!: MutationObserver;

    private notificationForm: FormNotification | null = null;

    constructor(private config: IMediaDataConfig) {
        this.formEl = document.getElementById(this.config.formId)! as HTMLFormElement;
        this.mediaTitleEl = this.formEl.querySelector(`:scope #${this.config.mediaTitleElId}`) as HTMLInputElement;
        this.mediaArtistEl = this.formEl.querySelector(`:scope #${this.config.mediaArtistElId}`) as HTMLInputElement;
        this.mediaLocationEl = this.formEl.querySelector(`:scope #${this.config.mediaLocationElId}`) as HTMLInputElement;
        this.mediaOrderEl = this.formEl.querySelector(`:scope #${this.config.mediaOrderElId}`) as HTMLInputElement;
        this.mediaMp3El = this.config.mediaMp3ElId ? this.formEl.querySelector(`:scope #${this.config.mediaMp3ElId}`) as HTMLInputElement : null;
        this.mediaOggEl = this.config.mediaOggElId ? this.formEl.querySelector(`:scope #${this.config.mediaOggElId}`) as HTMLInputElement : null;
        this.mediaVideoUrlEl = this.config.mediaVideoUrlElId ? this.formEl.querySelector(`:scope #${this.config.mediaVideoUrlElId}`) as HTMLInputElement : null;
        this.mediaVideoIdEl = this.config.mediaVideoIdElId ? this.formEl.querySelector(`:scope #${this.config.mediaVideoIdElId}`) as HTMLInputElement : null;
        this.saveEl = this.formEl.querySelector(`:scope #${this.config.saveButtonId}`) as HTMLInputElement;
        this.clearEl = this.formEl.querySelector(`:scope #${this.config.cancelButtonId}`) as HTMLInputElement;


        this.uploadWrapperEls = Array.from(this.formEl.querySelectorAll(`:scope .${this.config.uploadWrapperElClass}`) || []);
        this.uploadDisplayEls = Array.from(this.formEl.querySelectorAll(`:scope .${this.config.uploadDisplayElClass}`) || []);

        this.mp3UploadEl = this.formEl.querySelector(`:scope .${this.config.mp3UploadElClass}`) as HTMLElement;
        this.oggUploadEl = this.formEl.querySelector(`:scope .${this.config.oggUploadElClass}`) as HTMLElement;
        this.listBlockEl = document.querySelector(`#${this.config.listElId}`) as HTMLElement ?? this.createListBlockEl();

        this.setup();
    }

    private editClickHandler(e: Event): void {
        e.preventDefault();

        if (!this.formEl.dataset.url) return;

        const el = (e.target || e.srcElement) as HTMLElement;
        const mediaDataId = +(el.getAttribute('data-id') || '0');

        let formData = new FormData();

        this.formEl.setAttribute('data-id', mediaDataId + '');

        formData.append("mediaDataId", mediaDataId + '');
        formData.append("action", Action.GetMediaData);
        formData.append("nonce", (document.getElementById(Action.GetMediaData + '_nonce')! as HTMLInputElement).value);

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
                message = 'Unable to retrieve media data';

            if (outcome.success) {
                this.mediaTitleEl.value = outcome.data.result.title;
                this.mediaArtistEl.value = outcome.data.result.artist;
                this.mediaLocationEl.value = outcome.data.result.locationId;
                this.mediaOrderEl.value = outcome.data.result.order;

                if (this.mediaVideoUrlEl) this.mediaVideoUrlEl!.value = outcome.data.result.videoUrl;
                if (this.mediaVideoIdEl) this.mediaVideoIdEl!.value = outcome.data.result.videoId;

                this.uploadWrapperEls.forEach(item => {
                    let fileInputEl = item.querySelector('[type=file]') as HTMLInputElement;
                    let attachmentInfoEl = item.querySelector(`.${this.config.attachmentInfoElClass}`)! as HTMLElement;
                    let isMp3FileInput = fileInputEl.id === 'mediaMp3';
                    let isOggFileInput = fileInputEl.id === 'mediaOgg';
                    let hasMp3File = trim(outcome.data.result.mp3Filename) !== '';
                    let hasOggFile = trim(outcome.data.result.oggFilename) !== '';

                    if (isMp3FileInput) {
                        if (hasMp3File) {
                            item.classList.add(this.config.attachedMediaClass);
                            attachmentInfoEl.innerHTML = outcome.data.result.mp3Filename; //'media-file.mp3';
                        } else {
                            item.classList.remove(`${this.config.attachedMediaClass}`);
                        }
                    }

                    if (isOggFileInput) {
                        if (hasOggFile) {
                            item.classList.add(this.config.attachedMediaClass);
                            attachmentInfoEl.innerHTML = outcome.data.result.oggFilename; //'media-file.ogg';
                        } else {
                            item.classList.remove(`${this.config.attachedMediaClass}`);
                        }
                    }
                });
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
        if (!confirm("Are you sure you want to delete the media data?")) return;

        const el = (e.target || e.srcElement) as HTMLElement;
        const mediaDataId = +(el.getAttribute('data-id') || '0');

        let formData = new FormData();

        this.formEl.setAttribute('data-id', mediaDataId + '');

        formData.append("mediaDataId", mediaDataId + '');
        formData.append("action", Action.DeleteMediaData);
        formData.append("nonce", (document.getElementById(Action.DeleteMediaData + '_nonce')! as HTMLInputElement).value);

        fetch(this.formEl.dataset.url, {
            method: "POST",
            body: new URLSearchParams(formData as URLSearchParams)
        }).then(response => {
            this.formEl.setAttribute('data-id', '');

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
                this.notificationForm?.show(NotificationStatus.Danger, "Unable to send contact form message");

            if (outcome.success) {
                this.removeRow(mediaDataId);
                this.notificationForm?.show(NotificationStatus.Success, "Media data was deleted successfully");
            }
        }).catch(error => {
            this.notificationForm?.show(NotificationStatus.Danger, "Problem deleting media data information");
        });
    }

    private saveClickHandler(e: Event): void {
        e.preventDefault();
        const el = (e.target || e.srcElement) as HTMLElement;
        let result: Result;

        this.notificationForm?.hide();

        result = this.saveForm(el);

        if (!result.IsSuccessful())
            this.notificationForm?.show(NotificationStatus.Danger, result.getMessage());
    }

    private saveForm(el): Result {
        try {
            let result: Result;

            if (!this.formEl.dataset.url) return Result.Error("Cannot save form", "Data url not specified");

            const formData = new FormData();
            const mediaDataId = +(this.formEl.getAttribute('data-id') || '0');
            const mediaTitle = trim(this.mediaTitleEl.value);
            const mediaArtist = trim(this.mediaArtistEl.value);
            const locationId = trim(this.mediaLocationEl.value);
            const order = trim(this.mediaOrderEl.value);

            if (!mediaTitle) return Result.Error("Media title is required");
            if (!mediaArtist) return Result.Error("Media artist is required");

            formData.append("mediaDataId", mediaDataId + '');
            formData.append("mediaTypeId", this.config.mediaType + '');
            formData.append("mediaTitle", mediaTitle);
            formData.append("mediaArtist", mediaArtist);
            formData.append("locationId", locationId);
            formData.append("order", order);
            formData.append("action", Action.SaveMediaData);
            formData.append("nonce_name", Action.SaveMediaData + '_nonce');
            formData.append("nonce", (document.getElementById(Action.SaveMediaData + '_nonce')! as HTMLInputElement).value);

            if (this.config.mediaType === MediaType.Beats || this.config.mediaType === MediaType.Songs) {
                result = this.appendUploadData(mediaDataId, formData, this.mediaMp3El?.files || null, SupportFileType.Mp3);
                if (!result.IsSuccessful()) return result;

                result = this.appendUploadData(mediaDataId, formData, this.mediaOggEl?.files || null, SupportFileType.Ogg);
                if (!result.IsSuccessful()) return result;
            }

            if (this.config.mediaType === MediaType.YouTubeVideo) {
                formData.append("videoUrl", trim(this.mediaVideoUrlEl?.value || ''));
                formData.append("videoId", trim(this.mediaVideoIdEl?.value || ''));
            }

            fetch(this.formEl.dataset.url, {
                method: "POST",
                body: formData
            }).then(response => {
                if (response.ok) {
                    if (TeboUtility.isJsonResponse(response)) {
                        return response.json();
                    }

                    return response.text();
                }

                return Promise.reject(response);
            }).then(result => {
                if (!TeboUtility.tryParseToJson(result)) return;

                let message = '';
                const outcome = JSON.parse(result);

                if (!outcome.success)
                    message = 'Unable to save media data';

                if (outcome.success) {
                    console.log('outcome.data.result', outcome.data.result);
                    this.addNewRow(outcome.data.result);
                    this.clearForm();
                    this.notificationForm?.show(NotificationStatus.Success, "Media data was saved successfully");
                }
            }).catch(response => {
                if (TeboUtility.isString(response)) console.log(response);
                // if (!TeboUtility.isObject(response)) return;
                if (!TeboUtility.isFunction(response.text)) return;

                return response.text().then(text => {
                    if (TeboUtility.tryParseToJson(text))
                        return this.handleError(text);

                    this.notificationForm?.show(NotificationStatus.Danger, "Unable to upload file; combined file size could be larger than limit");
                    console.error(text);
                });
            });

            return Result.Success();
        } catch (err) {
            return Result.Error(TeboUtility.isObject(err) ? err?.message : err);
        }
    }

    private formAttrMutationHandler(value: MutationRecord, index: number, array: MutationRecord[]): void {
        if (value.type == "attributes") {
            const mediaDataId: number = +(this.formEl.getAttribute('data-id') || '0');

            this.uploadWrapperEls.forEach(item => {
                if (mediaDataId <= 0) {
                    item.classList.remove(this.config.attachedMediaClass);
                    item.classList.add(`${this.config.noMediaClass}`);
                } else {
                    item.classList.remove(`${this.config.noMediaClass}`);
                    // item.classList.add(`${this.config.attachedMediaClass}`);
                }
            });
        }
    }

    private mediaFileChangeHandler(e: Event): void {
        e.preventDefault();
        const el = (e.target || e.srcElement) as HTMLInputElement;
        const isMp3El = el.id === this.mediaMp3El?.id || '';
        const mediaDataId: number = +(this.formEl.getAttribute('data-id') || '0');
        const wrapperEl = TeboUtility.getClosest(el, `.${this.config.uploadWrapperElClass}`) as HTMLElement;
        let attachmentInfoEl = wrapperEl.querySelector(`.${this.config.attachmentInfoElClass}`)! as HTMLElement;

        if (!el.files || el.files.length <= 0) return;

        const fileName = el?.files![0].name;
        const fileSize = el?.files![0].size;
        const fileAttached = fileSize > 0;


        if (fileAttached) {
            wrapperEl?.classList.remove(this.config.noMediaClass);
            wrapperEl?.classList.add(this.config.attachedMediaClass);

            attachmentInfoEl.innerHTML = fileName;
        } else {
            wrapperEl?.classList.remove(this.config.attachedMediaClass);
            wrapperEl?.classList.add(this.config.noMediaClass);

            attachmentInfoEl.innerHTML = isMp3El ? 'media-file.mp3' : 'media-file.ogg';
        }
    }

    private appendUploadData(mediaDataId: number, formData: FormData, files: FileList | null, fileType: SupportFileType) {

        if (files === null || typeof files === 'undefined') throw `Cannot retrieve files to be uploaded`;
        if (mediaDataId <= 0 && (!files?.length || files?.length <= 0)) throw `No ${fileType} file to upload`;
        if (mediaDataId <= 0 && files?.length > 1) throw `You cannot not upload more than one ${fileType} file`;

        for (let i = 0; i < files?.length; i++) {
            const fileName = files[i].name;
            const fileSize = files[i].size;
            
            if (!TeboUtility.hasExtension(fileName, [fileType])) return Result.Error(`File type for ${fileType} version must be an ${fileType}`);
            if (fileSize > (this.config?.maxFileSize || 15728640)) return Result.Error(`Max file size for ${fileType} version exceed`);

            formData.append(fileType + 'Filename', files[i]);
        }

        return Result.Success();
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

            /* return error.text().then(text => {
                console.error('Error saving media data');
            }); */
        }
    }

    private addNewRow(mediaData: any): void {
        if (!mediaData) return;

        this.removeRow(mediaData.id);

        console.log('decodeURIComponent(mediaData.videoUrl)', decodeURIComponent(mediaData.videoUrl));
        console.log('mediaData.videoId', mediaData.videoId);

        if (+mediaData.typeId === MediaType.YouTubeVideo) {
            this.listBlockEl?.insertAdjacentHTML('beforeend', `
                <li data-id="${mediaData.id}" class="data-list__item">
                    <div class="row">
                        <div class="col-12 col-sm-6 col-md-6 col-xl-3 mb-3">
                            <h6 class="my-0">${_.unescape(mediaData.title)}</h6>
                            <small class="text-muted">Title</small>
                        </div>
                        <div class="col-12 col-sm-6 col-md-6 col-xl-3 mb-3">
                            <h6 class="my-0">${_.unescape(mediaData.artist)}</h6>
                            <small class="text-muted">Artist</small>
                        </div>
                        <div class="col-12 col-sm-6 col-md-6 col-xl-3 mb-xl-3">
                            <h6 class="my-0">${mediaData.locationName}</h6>
                            <small class="text-muted">Location</small>
                        </div>
                        <div class="col-12 col-sm-6 col-md-6 col-xl-3 mb-xl-3">
                            <h6 class="my-0">${mediaData.order}</h6>
                            <small class="text-muted">Order</small>
                        </div>
                        <div class="col-12 col-sm-6 col-md-6 col-xl-3 mb-xl-3">
                            <h6 class="my-0 overflow-hidden">
                                <a href="${decodeURIComponent(mediaData.videoUrl)}" target="_blank" class="text-break">
                                ${decodeURIComponent(mediaData.videoUrl)}
                                </a>
                            </h6>
                            <small class="text-muted">Video URL</small>
                        </div>
                        <div class="col-12 col-sm-6 col-md-6 col-xl-3 mb-xl-3">
                            <h6 class="my-0">${mediaData.videoId}</h6>
                            <small class="text-muted">Video ID</small>
                        </div>
                    </div>
                    <div class="data-list__controls">
                        <div class="btn-group float-right" role="group" aria-label="Action">
                            <button id="edit-${mediaData.id}"
                                data-id="${mediaData.id}" type="button"
                                class="video-form-edit-button btn btn-link btn-sm">Edit</button>
                            <button id="delete-${mediaData.id}"
                                data-id="${mediaData.id}" type="button"
                                class="video-form-delete-button btn btn-link btn-sm">Delete</button>
                        </div>
                    </div>
                </li>
            `);
        } else {
            this.listBlockEl?.insertAdjacentHTML('beforeend', `
                <li data-id="${mediaData.id}" class="data-list__item">
                    <div class="row">
                        <div class="col-12 col-sm-6 col-md-6 col-xl-3 mb-3">
                            <h6 class="my-0">${mediaData.title}</h6>
                            <small class="text-muted">Title</small>
                        </div>
                        <div class="col-12 col-sm-6 col-md-6 col-xl-3 mb-3">
                            <h6 class="my-0">${mediaData.artist}</h6>
                            <small class="text-muted">Artist</small>
                        </div>
                        <div class="col-12 col-sm-6 col-md-6 col-xl-3 mb-xl-3">
                            <h6 class="my-0">${mediaData.locationName}</h6>
                            <small class="text-muted">Location</small>
                        </div>
                        <div class="col-12 col-sm-6 col-md-6 col-xl-3 mb-xl-3">
                            <h6 class="my-0">${mediaData.order}</h6>
                            <small class="text-muted">Order</small>
                        </div>
                    </div>
                    <div class="data-list__controls">
                        <ul class="icon-list">
                            <li class="icon-list__item">
                                <a class="icon-list__link icon-list__link--mp3" href="${mediaData.mp3Url}" target="_blank"></a>
                            </li>
                            <li class="icon-list__item">
                                <a class="icon-list__link icon-list__link--ogg" href="${mediaData.oggUrl}" target="_blank"></a>
                            </li>
                        </ul>
                        <div class="btn-group float-right" role="group" aria-label="Action">
                            <button id="edit-${mediaData.id}"
                                data-id="${mediaData.id}" type="button"
                                class="${this.config.editButtonClass} btn btn-link btn-sm">Edit</button>
                            <button id="delete-${mediaData.id}"
                                data-id="${mediaData.id}" type="button"
                                class="${this.config.deleteButtonClass} btn btn-link btn-sm">Delete</button>
                        </div>
                    </div>
                </li>
            `);
        }
    }

    private removeRow(mediaDataId: number) {
        if (!mediaDataId) return;

        this.listBlockEl.querySelector(`[data-id="${mediaDataId}"]`)?.remove();
    }

    private clearClickHandler(e: Event): void {
        e.preventDefault();

        const el = (e.target || e.srcElement) as HTMLElement;
        const mediaLocationId = +(this.formEl.getAttribute('data-id') || '0');

        this.clearForm();
    }

    private clearForm(): void {
        this.formEl.setAttribute('data-id', '');
        this.formEl.reset();

        this.uploadWrapperEls.forEach(item => {
            item?.classList.remove(this.config.attachedMediaClass);
            item?.classList.add(this.config.noMediaClass);
        });
    }

    private createListBlockEl(): HTMLElement {
        let el = document.createElement("ul");

        el.setAttribute('id', this.config.listElId);
        el.classList.add('data-list');

        this.formEl.insertAdjacentElement('afterend', el);

        return el;
    }

    private setup(): void {
        const mediaDataId = +(this.formEl.getAttribute('data-id') || '0');

        this.mutationObserver = new MutationObserver(mutations => {
            mutations.forEach(this.formAttrMutationHandler.bind(this));
        });

        this.mutationObserver.observe(this.formEl, {
            attributes: true //configure it to listen to attribute changes
        });

        this.formEl.setAttribute('data-id', mediaDataId + '');

        this.notificationForm = new FormNotification({
            containerId: 'mgt-center-notification',
            messageElClass: 'alert-message'
        });

        TeboUtility.live(`.${this.config.editButtonClass}`, 'click', this.editClickHandler.bind(this), this.listBlockEl);
        TeboUtility.live(`.${this.config.deleteButtonClass}`, 'click', this.deleteClickHandler.bind(this), this.listBlockEl);

        this.saveEl.addEventListener('click', this.saveClickHandler.bind(this), false);
        this.clearEl.addEventListener('click', this.clearClickHandler.bind(this), false);

        this.mediaMp3El?.addEventListener('change', this.mediaFileChangeHandler.bind(this), false);
        this.mediaOggEl?.addEventListener('change', this.mediaFileChangeHandler.bind(this), false);

        this.mp3UploadEl?.addEventListener('click', (e) => {
            e.preventDefault();
            TeboUtility.simulateClick(this.mediaMp3El);
            return false;
        }, false);

        this.oggUploadEl?.addEventListener('click', (e) => {
            e.preventDefault();
            TeboUtility.simulateClick(this.mediaOggEl);
            return false;
        }, false);
    }

}
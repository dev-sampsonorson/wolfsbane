import IContactFormConfig from "./IContactFormConfig";
import $ from 'jquery';
import parsley from 'parsleyjs';
import TeboUtility from "../TeboUtility";
import { listenerCount } from "process";
import { group } from "console";
import { forEach } from "lodash";




export default class ContactForm {
    private formEl: HTMLFormElement;
    private formWrapperEl: HTMLElement;
    private outcomeEl: HTMLElement;
    private submitEl: HTMLButtonElement;
    private parsleyObj: any;

    private domParser: DOMParser;

    constructor(private config: IContactFormConfig) {
        this.domParser = new DOMParser();

        this.formEl = document.getElementById(this.config.formId)! as HTMLFormElement;
        this.formWrapperEl = document.getElementById(this.config.formWrapperId)! as HTMLElement;
        this.outcomeEl = this.formWrapperEl?.querySelector(`.${this.config.outcomeBlockClass}`)! as HTMLElement;
        this.submitEl = this.formEl?.querySelector(`:scope #${this.config.submitButtonId}`)! as HTMLButtonElement;

        if (this.formEl === null || this.formWrapperEl === null) return;

        this.formEl.action = this.config.endpoint;

        this.parsleyObj = (jQuery(this.formEl) as any).parsley({
            uiEnabled: true,
            inputs: 'input, textarea, select',
            excluded: 'input[type=button], input[type=submit], input[type=reset], input[type=hidden]',
            validationThreshold: 3,
            focus: 'none',
            errorClass: this.config.errorClass,
            successClass: this.config.successClass,
            errorsWrapperClass: this.config.errorsWrapperClass,
            errorsWrapper: this.config.errorsWrapper,
            errorTemplate: this.config.errorTemplate,
            classHandler: (field) => {
                const isMultiple = field.__class__ === 'FieldMultiple';
                const $parent = isMultiple ? field.$element.closest(`.${this.config.groupCtrlClass}`) : field.$element.closest(`.${this.config.ctrlClass}`);
                if ($parent.length) return $parent;

                return field.$element;
            },
            errorsContainer: (field) => {
                const fieldEl = field.$element[0];
                const isMultiple = field.__class__ === 'FieldMultiple';
                const parentEl = isMultiple ? TeboUtility.getClosest(fieldEl, `.${this.config.groupCtrlClass}`) : TeboUtility.getClosest(fieldEl, `.${this.config.ctrlClass}`);
                const containerEl = $(parentEl).find(`.${this.config.groupErrorContainer}`);// (parentEl as HTMLElement).querySelector(`.${this.config.groupErrorContainer}`);

                if (isMultiple) {
                    return containerEl;
                } else {
                    return false;
                }


                // return field.$element.closest('.block, .control')
            }
        });
        
        this.parsleyObj.on('field:validated', (field) => {
            const fieldEl = field.$element[0]; //ctrlGroupMarkerClass
            this.showErrorMessage(!field.isValid(), fieldEl);
        }).on('form:submit', (e) => {
            return false;
        });

        this.submitEl.addEventListener('click', (e) => {
            e.preventDefault();

            if (!this.parsleyObj.validate()) return false;

            this.submitForm();
        });

    }

    private submitForm() {
        let formInputs = Array.from(this.formEl.querySelectorAll("input, textarea")) as HTMLInputElement[];
        let formData = new FormData();

        if (!this.formEl.dataset.url) return;

        // collect all the data
        formInputs.forEach((item, index) => {
            if (item.type === 'checkbox' && item.checked !== undefined && !item.checked)
                return;

            formData.append(item.name, item.value);
        });

        // disable submit button temporarily
        this.submitEl.disabled = true;

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
            const data = JSON.parse(result);

            if (!data.success)
                message = 'Unable to send contact form message';

            if (data.success) {
                this.clearForm();
                this.showOutcomeMessage();
            }

            console.log(message ? message : '');

            // enable the submit button
            this.submitEl.disabled = false;
        }).catch(error => {
            // enable the submit button
            this.submitEl.disabled = false;

            this.handleError(error);
        });
    }
    
    private handleError(error: any) {
        try {
            return error.json().then((result) => {
                const errors = result.data.errors;

                if (TeboUtility.isArray(errors)) {
                    errors.forEach((item, index) => {
                        console.log(item);
                    });
                    return;
                }

                if (!TeboUtility.isObject(errors)) return;

                this.showErrorMessages(false, Array.from(this.formEl.querySelectorAll("input, textarea")));

                // data.errors
                // iterate through the errors
                for (const fieldName in errors) {
                    const messages = this.getErrorsByField(fieldName, errors);
                    const inputEl = this.formEl.querySelector(`[name^=${fieldName}]`) as HTMLInputElement;
                    const isInGroup = inputEl.name.indexOf('[]') !== -1;
                    const parentEl: HTMLElement = isInGroup ? TeboUtility.getClosest(inputEl, `.${this.config.groupCtrlClass}`) : TeboUtility.getClosest(inputEl, `.${this.config.ctrlClass}`);
                    let errorListEl = parentEl.querySelector(`.${this.config.errorsWrapperClass}`);


                    // let errorListEl = TeboUtility.getClosest(inputEl, `.${this.config.errorsWrapperClass}`);

                    // parentEl.setAttribute('aria-describedby', 'parsley-id-5');
                    parentEl.classList.add(`${this.config.errorClass}`);


                    if (errorListEl === null)
                        errorListEl = this.createErrorListEl(inputEl as HTMLElement);
                    else
                        errorListEl.innerHTML = "";

                    messages.forEach((item, index) => {
                        this.appendToErrorListEl(errorListEl as HTMLElement, item);
                    });

                    if (isInGroup) {
                        parentEl.querySelector(`.${this.config.groupLabelCtrlClass}`)?.insertAdjacentElement('afterend', errorListEl);
                    } else {
                        inputEl?.insertAdjacentElement('afterend', errorListEl);
                    }

                    this.showErrorMessage(true, inputEl as HTMLElement);
                }
            });

        }
        catch (e) {
            return error.text().then(text => {
                console.log('Error sending contact form message');
                // console.log(text);
            });
        }
    }

    private createErrorListEl(inputEl: HTMLElement): HTMLElement {
        const parsleyDataId:string = inputEl.getAttribute('data-parsley-id')! || '';
        const ul = document.createElement('ul');
        
        ul.setAttribute('data-parsley-id', parsleyDataId);
        ul.setAttribute('aria-hidden', 'true');
        ul.setAttribute('style', 'display: none;');
        ul.classList.add(`${this.config.errorsWrapperClass}`, 'filled');
        return ul;
    }

    private appendToErrorListEl(ul: HTMLElement, message: string) {
        ul.setAttribute('aria-hidden', 'false');
        const li = document.createElement('li');

        li.innerHTML = message;
        
        ul.appendChild(li);
        ul.classList.add(`${this.config.errorsWrapperItemClass}`);
        // ul.setAttribute('style', 'display: block;');
    }

    private getErrorsByField(fieldName, errors): string[] {
        const errorMsgs: string[] = [];

        if (TeboUtility.isObject(errors[fieldName])) {
            for (const key in errors[fieldName]) {
                errorMsgs.push(errors[fieldName][key]);
            }
        }

        if (TeboUtility.isString(errors[fieldName]))
            errorMsgs.push(errors[fieldName]);

        return errorMsgs;
    }

    private showErrorMessage(status: boolean, inputEl: HTMLElement) {
        const isMultiple = TeboUtility.hasClass(inputEl, `${this.config.ctrlGroupMarkerClass}`);
        const parentEl = isMultiple ? TeboUtility.getClosest(inputEl, `.${this.config.groupCtrlClass}`) : TeboUtility.getClosest(inputEl, `.${this.config.ctrlClass}`);
        const errorWrapperEl = parentEl?.querySelector(`.${this.config.errorsWrapperClass}`);
        const feedbackEl = parentEl?.querySelector(`.${this.config.messageClass}`);

        if (status) {
            TeboUtility.show(errorWrapperEl);
            TeboUtility.hide(feedbackEl);
            return;
        }

        TeboUtility.hide(errorWrapperEl);
        TeboUtility.show(feedbackEl);
    }

    private showErrorMessages(status: boolean, inputEl: HTMLElement[]) {
        inputEl.forEach((item, index) => {
            this.showErrorMessage(status, item);
        });
    }

    private clearForm() {
        this.formEl.reset();
    }

    private showOutcomeMessage() {
        this.formEl.setAttribute('style', 'display: none');
        this.outcomeEl.classList.add(`${this.config.outcomeBlockSuccessClass}`);
    }
    

}
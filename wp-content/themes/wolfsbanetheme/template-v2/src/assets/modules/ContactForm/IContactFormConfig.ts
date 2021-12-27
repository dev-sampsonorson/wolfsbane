export default interface IContactFormConfig {
    formId: string;
    submitButtonId: string;
    endpoint: string;

    ctrlClass: string;
    ctrlGroupMarkerClass: string;
    groupCtrlClass: string;
    groupLabelCtrlClass: string;
    errorClass: string;
    successClass: string;
    feedbackClass: string;
    messageClass: string;

    groupErrorContainer: string;
    errorsWrapperClass: string;
    errorsWrapperItemClass: string;
    errorsWrapper: string;
    errorTemplate: string;
    formWrapperId: string;
    outcomeBlockClass: string;
    outcomeBlockSuccessClass: string;
}
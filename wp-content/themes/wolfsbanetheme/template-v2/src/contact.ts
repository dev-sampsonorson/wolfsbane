import NavPrimary from './assets/modules/NavPrimary/NavPrimary';
import HamburgerMenu from './assets/modules/HamburgerMenu/HamburgerMenu';
import ContactForm from './assets/modules/ContactForm/ContactForm';


let nav: NavPrimary;
let hamburgerMenu: HamburgerMenu;
let contactForm: ContactForm;


window.addEventListener('DOMContentLoaded', (event) => {
    nav = new NavPrimary();
    hamburgerMenu = new HamburgerMenu({
        targetId: "nav-primary-hamburger",
        navContainerTargetId: "nav-primary",
        toggleClass: "c-hamburger-toggler--clicked",
        overlayElClass: "c-hamburger-menu__overlay",
        overlayOpenClass: "c-hamburger-menu--open",
        itemElClass: "c-hamburger-menu__item",
        menuLevel2OpenClass: "c-hamburger-menu__level-2--open",
        menuLevel2ElClass: "c-hamburger-menu__level-2"
    });

    contactForm = new ContactForm({
        formId: "contact_form",
        submitButtonId: "submit",
        endpoint: "index.php",

        ctrlClass: "c-contact-form__control",
        ctrlGroupMarkerClass: "c-contact-form__input--in-group",
        groupCtrlClass: "c-contact-form__group",
        groupLabelCtrlClass: "c-contact-form__group-label",
        errorClass: "c-contact-form__control--error",
        successClass: "c-contact-form__control--success",
        feedbackClass: "c-contact-form__control--feedback",
        messageClass: "c-contact-form__feedback",
        groupErrorContainer: "c-contact-form__group-error-container",
        errorsWrapperClass: "c-contact-form__error-list",
        errorsWrapperItemClass: "c-contact-form__error",
        errorsWrapper: '<ul class="c-contact-form__error-list"></ul>',
        errorTemplate: '<li class="c-contact-form__error"></li>',

        formWrapperId: 'c-contact-form',
        outcomeBlockClass: 'c-contact-form__outcome',
        outcomeBlockSuccessClass: 'c-contact-form__outcome--success'
    });

    console.log('DOM fully loaded and parsed');
});
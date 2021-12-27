import NavPrimary from './assets/modules/NavPrimary/NavPrimary';
import HamburgerMenu from './assets/modules/HamburgerMenu/HamburgerMenu';


let nav: NavPrimary;
let hamburgerMenu: HamburgerMenu;


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

    console.log('DOM fully loaded and parsed');
});
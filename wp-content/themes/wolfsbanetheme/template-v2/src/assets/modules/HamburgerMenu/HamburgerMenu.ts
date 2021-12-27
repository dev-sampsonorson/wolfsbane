import IHamburgerMenuConfig from "./IHamburgerMenuConfig";

export default class HamburgerMenu {

    private hamburgerEl: HTMLElement;
    private navContainerEl: HTMLElement;
    private overlayEl: HTMLElement;
    private itemEls: HTMLElement[];

    constructor(private config: IHamburgerMenuConfig) {
        this.hamburgerEl = document.getElementById(this.config.targetId)!;
        this.navContainerEl = document.getElementById(this.config.navContainerTargetId)!;
        this.overlayEl = this.navContainerEl.querySelector(`:scope .${this.config.overlayElClass}`)! as HTMLElement;
        this.itemEls = Array.from(this.navContainerEl.querySelectorAll(`:scope .${this.config.itemElClass}`));

        for (let i = 0; i < this.itemEls.length; i++) {
            this.itemEls[i].addEventListener('click', (e) => {
                let element = this.itemEls[i].querySelector(`:scope .${this.config.menuLevel2ElClass}`);
                element?.classList.toggle(this.config.menuLevel2OpenClass);
            });
        }

        this.hamburgerEl.addEventListener('click', (e) => {
            this.navContainerEl.classList.toggle(this.config.toggleClass);

            if (this.navContainerEl.classList.contains(this.config.toggleClass)) {
                window.setTimeout(() => {
                    this.navContainerEl.classList.add(this.config.overlayOpenClass);
                }, 500);
            } else {
                let elements = Array.from(this.navContainerEl.querySelectorAll(`:scope .${this.config.menuLevel2ElClass}`));
                elements.forEach(el => {
                    el.classList.remove(this.config.menuLevel2OpenClass);
                });
                
                window.setTimeout(() => {
                    this.navContainerEl.classList.remove(this.config.overlayOpenClass);
                }, 500);
            }
        });

    }
}
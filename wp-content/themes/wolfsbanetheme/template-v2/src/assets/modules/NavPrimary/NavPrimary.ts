
import * as _ from 'lodash';
import MenuItemIndicatorEnum from './MenuItemIndicatorEnum';


export default class NavPrimary {
    private rootEl: HTMLElement | null;
    // private openIndicatorEl: HTMLElement | null;
    // private activeIndicatorEl: HTMLElement | null;
    private activeMenuItemEl: HTMLElement | null;
    private menuItemListEl;

    private activeMenuId: string | null;
    private openIndicatorHeight: number = 5;
    private activeIndicatorHeight: number = 20;

    private mouseEnterHandlerExecuting: boolean = false;
    private mouseLeaveHandlerExecuting: boolean = false;


    constructor(private itemClass: string = 'c-nav-primary__item',
        private linkClass: string = 'c-nav-primary__link',
        private level2Class: string = 'c-nav-primary__level-2',
        private hasChildrenClass: string = 'c-nav-primary__item--has-childen') {

        // delete
        let test: string = _.join(['Hello', 'webpack'], ' ');

        // dynamic elements
        // this.activeIndicatorEl = document.createElement('span');

        this.rootEl = document.getElementById('nav-primary');
        this.activeMenuId = document.querySelector('body')?.dataset.navPrimaryActiveMenuId || null;
        this.activeMenuItemEl = this.rootEl?.querySelector(`#${this.activeMenuId}`) || null;

        // find items with children
        this.menuItemListEl = this.rootEl?.querySelectorAll(`.${this.hasChildrenClass}`);

        this.menuItemListEl?.forEach((item, key) => {
            item?.addEventListener('mouseenter', this.mouseEnterHandler.bind(this), false);
            item?.addEventListener('mouseleave', this.mouseLeaveHandler.bind(this), false);
        });

        this.expandIndicator(MenuItemIndicatorEnum.Active, this.activeMenuItemEl);
        // this.applyDefaultStyle();
    }

    private createOpenIndicator(): HTMLElement | null {
        let openIndicatorEl: HTMLElement | null;

        openIndicatorEl = document.createElement('span');
        openIndicatorEl!.classList.add('c-nav-primary__open-indicator');

        return openIndicatorEl;
    }

    private createActiveIndicator(): HTMLElement | null {
        let activeIndicatorEl: HTMLElement | null;

        activeIndicatorEl = document.createElement('span');
        activeIndicatorEl!.classList.add('c-nav-primary__active-indicator');

        return activeIndicatorEl;
    }

    private getOpenIndicator(element): HTMLElement | null {
        return element.querySelector(`.c-nav-primary__open-indicator`);
    }

    private getActiveIndicator(element): HTMLElement | null {
        return element.querySelector(`.c-nav-primary__active-indicator`);
    }

    private mouseEnterHandler(e: Event): void {
        let mouseEnterEl = e.target as Element;

        e.stopPropagation();

        if (this.mouseEnterHandlerExecuting) return;
        if (!mouseEnterEl.classList.contains(`${this.hasChildrenClass}`)) return;
        this.mouseEnterHandlerExecuting = true;

        var isOpen = mouseEnterEl.getAttribute('data-open') === 'true';
        if (!isOpen) {
            this.expandIndicator(MenuItemIndicatorEnum.Open, mouseEnterEl, (element) => {
                mouseEnterEl.querySelector(`.${this.level2Class}`)?.classList.add(`${this.level2Class}--open`);
                element.setAttribute('data-open', 'true');
                this.mouseEnterHandlerExecuting = false;
            });
        }
    }

    private mouseLeaveHandler(e: Event): void {
        let mouseLeaveEl = e.target as Element;
        e.stopPropagation();

        if (this.mouseLeaveHandlerExecuting) return;
        if (!mouseLeaveEl.classList.contains(`${this.hasChildrenClass}`)) return;
        this.mouseLeaveHandlerExecuting = true;

        var isOpen = mouseLeaveEl.getAttribute('data-open') === 'true';
        if (isOpen) {
            this.collapseIndicator(MenuItemIndicatorEnum.Open, mouseLeaveEl, (element) => {
                element.querySelector(`.${this.level2Class}`)?.classList.remove(`${this.level2Class}--open`);
                element.setAttribute('data-open', 'false');
                this.mouseLeaveHandlerExecuting = false;
            });
        }
    }

    private expandIndicator(indicatorType: MenuItemIndicatorEnum, element, callback: Function | null = null) {
        let indicator: HTMLElement | null = null;
        let indicatorHeight: number | null = null;
        let isOpenIndicator: boolean = indicatorType === MenuItemIndicatorEnum.Open;
        let isActiveIndicator: boolean = indicatorType === MenuItemIndicatorEnum.Active;

        if (isOpenIndicator) {
            indicator = this.createOpenIndicator();
            indicatorHeight = this.openIndicatorHeight;
        }

        if (isActiveIndicator) {
            indicator = this.createActiveIndicator();
            indicatorHeight = this.activeIndicatorHeight;
        }

        if (indicator === null) return;
        if (indicatorHeight === null) return;

        indicator.style.height = '0px';
        element.querySelector(`.${this.linkClass}`).appendChild(indicator);

        var sectionHeight = indicator.clientHeight;
        indicator.style.height = `${indicatorHeight}px`;        

        if (callback) callback.call(this, element);
    }

    private collapseIndicator(indicatorType: MenuItemIndicatorEnum, element, callback: Function | null = null) {
        if (indicatorType === MenuItemIndicatorEnum.Active) return;

        let indicator: HTMLElement | null = this.getOpenIndicator(element);
        let indicatorHeight: number | null = this.openIndicatorHeight;

        if (indicator === null) return;
        if (indicatorHeight === null) return;

        // temporarily disable all css transitions
        var elementTransition = indicator.style.transition;
        indicator.style.transition = '';

        requestAnimationFrame(() => {
            indicator!.style.height = indicatorHeight + 'px';
            indicator!.style.transition = elementTransition;

            requestAnimationFrame(() => {
                indicator!.style.height = 0 + 'px';
            });
        });

        let transitionEndHandler = function (this: NavPrimary, e) {
            indicator!.removeEventListener('transitionend', transitionEndHandler.bind(this));
            indicator!.removeAttribute('style');
            indicator!.remove();
        };
        indicator!.addEventListener('transitionend', transitionEndHandler.bind(this));

        if (callback) callback.call(this, element, transitionEndHandler)
    }

}
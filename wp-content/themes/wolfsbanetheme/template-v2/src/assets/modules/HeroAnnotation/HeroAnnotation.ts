import MessagePosEnum from './MessagePosEnum';
import IPosStrategy from './IPosStrategy';
import TeboUtility from '../TeboUtility';
import IPosMapValue from './IPosMapValue';

export default class HeroAnnotation {
    private viewPortWidth: number;
    private viewPortHeight: number;
    // private positionClasses: string[];
    // private messagePositions: string[];

    private pointWidth: number = 20;
    private pointHeight: number = 20;

    // Vertical distance between point and message
    private headerHeight: number = 71;
    private pointVerticalOffset: number = 12;
    private pointHorizontalOffset: number = 10;


    private containerEl: HTMLElement;
    private itemEls: HTMLElement[];
    private messageEls: HTMLElement[];

    private posToClassMap: Map<MessagePosEnum, IPosMapValue> = new Map();

    /* private topLeftStrategy: PosTopLeftStrategy;
    private topRightStrategy: PosTopRightStrategy;
    private bottomLeftStrategy: PosBottomLeftStrategy;
    private bottomRightStrategy: PosBottomRightStrategy; */

    private posClassSearchExp: RegExp = /\bc-hero-annotation__message--(top|bottom)(-{1})(left|right)\b/;

    // top-left, bottom-left, top-right, bottom-right

    constructor(private containerId: string = "home-hero-annotation",
        private itemSelector: string = ".c-hero-annotation__item",
        private messageSelector: string = ".c-hero-annotation__message",
        private pointerSelector: string = ".c-hero-annotation__pointer") {
        
        /* this.topLeftStrategy = new PosTopLeftStrategy();
        this.topRightStrategy = new PosTopRightStrategy();
        this.bottomLeftStrategy = new PosBottomLeftStrategy();
        this.bottomRightStrategy = new PosBottomRightStrategy(); */

        this.posToClassMap.set(MessagePosEnum.TopLeft, { className: "c-hero-annotation__message--top-left", strategy: this.topLeftIsValid });
        this.posToClassMap.set(MessagePosEnum.TopRight, { className: "c-hero-annotation__message--top-right", strategy: this.topRightIsValid });
        this.posToClassMap.set(MessagePosEnum.BottomLeft, { className: "c-hero-annotation__message--bottom-left", strategy: this.bottomLeftIsValid });
        this.posToClassMap.set(MessagePosEnum.BottomRight, { className: "c-hero-annotation__message--bottom-right", strategy: this.bottomRightIsValid });

        
        

        /* this.messagePositions = ['top-left', 'bottom-left', 'top-right', 'bottom-right'];
        this.positionClasses = [
            'c-hero-annotation__message--top-left',
            'c-hero-annotation__message--top-right',
            'c-hero-annotation__message--bottom-left',
            'c-hero-annotation__message--bottom-right'
        ]; */
        this.viewPortWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        this.viewPortHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);


        this.containerEl = document.getElementById(this.containerId)!;
        this.itemEls = Array.from(this.containerEl?.querySelectorAll(itemSelector) || []);
        this.messageEls = Array.from(this.containerEl?.querySelectorAll(messageSelector) || []);

        // First
        this.positionAnnotations();
        window.addEventListener("resize", (e) => {

            this.viewPortWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
            this.viewPortHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
            
            this.positionAnnotations();
        });

    }

    positionAnnotations() {
        this.itemEls.forEach((item) => {
            let pointDistance = this.calcDistance(item, this.pointWidth, this.pointHeight, this.viewPortWidth, this.viewPortHeight);
            let msgEl = item.querySelector(this.messageSelector) as HTMLElement;

            for (let i = 0; i < this.posToClassMap.size; i++) {
                let entry: IPosMapValue = this.posToClassMap.get(i) as IPosMapValue;
                let isValid = entry.strategy.call(this, pointDistance, msgEl);

                if (isValid) {
                    this.replaceClasses(msgEl, this.posClassSearchExp, entry.className);
                    break;
                }
            }
        });
    }

    calcDistance(pointEl: Element, pointWidth: number, pointHeight: number, viewPortWidth: number, viewPortHeight: number) {
        const pointPos = TeboUtility.getOffset(pointEl);
        return {
            top: pointPos.top,
            bottom: viewPortHeight - (pointPos.top + pointHeight),
            left: pointPos.left,
            right: viewPortWidth - (pointPos.left + pointWidth)
        };
    }

    setViewPortDimension() {
        this.viewPortWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        this.viewPortHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    }

    replaceClasses(els, searchValue: RegExp, replaceValue: string = "") {
        if (els instanceof HTMLElement) els = [els];
        if (!(els instanceof Array) && !(els instanceof NodeList) && !(els instanceof HTMLAllCollection)) return;

        [].forEach.call(els, function (el: Element) {
            el.className = el.className.replace(searchValue, replaceValue);
        });
    }

    topLeftIsValid(distance, msgEl: HTMLElement): boolean {
        const offest = this.headerHeight + this.pointVerticalOffset;
        // if msgHeight < topDistance && msgWidth < leftDistance
        return msgEl.offsetHeight < (distance.top - offest) && msgEl.offsetWidth < distance.left;
    }

    topRightIsValid(distance, msgEl: HTMLElement): boolean {
        const offest = this.headerHeight + this.pointVerticalOffset;
        // if msgHeight < topDistance && msgWidth < rightDistance
        return msgEl.offsetHeight < (distance.top - offest) && msgEl.offsetWidth < (distance.right - this.pointHorizontalOffset);
    }

    bottomLeftIsValid(distance, msgEl: HTMLElement): boolean {
        // if msgHeight < bottomDistance && msgWidth < leftDistance
        return msgEl.offsetHeight < distance.bottom && msgEl.offsetWidth < distance.left;
    }

    bottomRightIsValid(distance, msgEl: HTMLElement): boolean {
        // if msgHeight < bottomDistance && msgWidth < rightDistance
        return msgEl.offsetHeight < distance.bottom && msgEl.offsetWidth < (distance.right - this.pointHorizontalOffset);
    }
}
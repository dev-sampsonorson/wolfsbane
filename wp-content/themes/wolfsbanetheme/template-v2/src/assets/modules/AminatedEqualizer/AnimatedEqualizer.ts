type TimerHandle = number | boolean;

interface Window {
    Image: {
        prototype: HTMLImageElement;
        new(): HTMLImageElement;
    };
}

export default class AnimatedEqualizer {
    private cSpeed: number = 14;
    private cWidth: number = 31;
    private cHeight: number = 11;
    private cTotalFrames: number = 11;
    private cFrameWidth: number = 31;
    // private cImageSrc: string = '../wwwroot/images/playing-equalizer.gif';

    private cImageTimeout: TimerHandle = 0;
    private cIndex: number = 0;
    private cXpos: number = 0;
    private cPreloaderTimeout: TimerHandle = 0;
    private SECONDS_BETWEEN_FRAMES: number = 0;

    constructor(private equalizerEl: HTMLElement, private cImageSrc: string = '../wwwroot/images/playing-equalizer.gif') {  
        clearTimeout(this.cImageTimeout as number);
        this.cImageTimeout = 0;
        let genImage: HTMLImageElement = new window.Image();
        genImage.onload = () => { this.cImageTimeout = window.setTimeout(this.startAnimation.bind(this), 0) };
        genImage.onerror = (e, source) => {
            console.log('Could not load the image');
        }

        genImage.src = this.cImageSrc;
    }

    startAnimation(): void {

        /* for (let i = 0; i < this.equalizerEl.length; i++) {
            this.equalizerEl[i]!.style.backgroundImage = 'url(' + this.cImageSrc + ')';
            this.equalizerEl[i]!.style.width = this.cWidth + 'px';
            this.equalizerEl[i]!.style.height = this.cHeight + 'px';

            console.log('equalizerEl[i]', this.equalizerEl[i]);
        } */

        //FPS = Math.round(100/(maxSpeed+2-speed));
        let FPS = Math.round(100 / this.cSpeed);
        this.SECONDS_BETWEEN_FRAMES = 1 / FPS;

        this.cPreloaderTimeout = window.setTimeout(this.continueAnimation.bind(this), this.SECONDS_BETWEEN_FRAMES / 1000);
    }

    continueAnimation(): void {
        this.cXpos += this.cFrameWidth;
        //increase the index so we know which frame of our animation we are currently on
        this.cIndex += 1;

        //if our cIndex is higher than our total number of frames, we're at the end and should restart
        if (this.cIndex >= this.cTotalFrames) {
            this.cXpos = 0;
            this.cIndex = 0;
        }

        if (this.equalizerEl)
            this.equalizerEl!.style.backgroundPosition = (-this.cXpos) + 'px 0';

        this.cPreloaderTimeout = window.setTimeout(this.continueAnimation.bind(this), this.SECONDS_BETWEEN_FRAMES * 1000);

    }

    stopAnimation(): void {
        //stops animation
        clearTimeout(this.cPreloaderTimeout as number);
        this.cPreloaderTimeout = false;
    }
}
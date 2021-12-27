import IMediaListConfig from "./IMediaListConfig";
import TeboUtility from "../TeboUtility";
import IPlaylistItem from "./IPlaylistItem";
import AnimatedEqualizer from "../AminatedEqualizer/AnimatedEqualizer";


enum MediaItemState {
    Idle = 'idle',
    Playing = 'playing',
    Paused = 'paused'
}


export default class MediaList {

    private targetEl: HTMLElement;
    private itemEls: HTMLElement[];

    private audioEls: HTMLMediaElement[];
    private durationEls: HTMLElement[];
    private lineNumberEls: HTMLElement[];
    private titleEls: HTMLElement[];
    private artistEls: HTMLElement[];
    private playEls: HTMLElement[];
    private pauseEls: HTMLElement[];

    private playlist: IPlaylistItem[];

    private equalizerEl: HTMLElement | null;
    private animatedEqualizer: AnimatedEqualizer | null;

    constructor(private config: IMediaListConfig) {
        this.audioEls = [];
        this.durationEls = [];
        this.lineNumberEls = [];
        this.artistEls = [];
        this.titleEls = [];
        this.playEls = [];
        this.pauseEls = [];

        this.playlist = this.config.playlist;

        this.equalizerEl = null;
        this.animatedEqualizer = null;

        this.targetEl = document.getElementById(this.config.targetId)!;
        this.itemEls = Array.from(this.targetEl?.querySelectorAll(`:scope > .${this.config.itemClass}`) || []);

        this.targetEl?.classList.add(this.config.loadingClass);

        // create a setup media file
        this.prepareMediaSources(this.itemEls);

        // set initial state of media items to idle
        this.changeStates(this.itemEls, MediaItemState.Idle);

        this.itemEls.forEach((item, key) => {
            item?.addEventListener('mouseenter', this.mouseEnterHandler.bind(this), false);
            item?.addEventListener('mouseleave', this.mouseLeaveHandler.bind(this), false);
        });

        this.targetEl?.classList.remove(this.config.loadingClass);

    }

    private prepareMediaSources(elements: HTMLElement[]) {
        console.log(elements);
        for (let i = 0; i < elements.length; i++) {
            let itemEl: HTMLElement = this.itemEls[i];
            let theAudio: HTMLMediaElement = document.createElement('audio');
            let mediaUrlMp3: string | null = this.playlist[i].mp3Url; // itemEl.getAttribute(this.config.dataAttrMediaUrlMp3Key)!;
            let mediaUrlOgg: string | null = this.playlist[i].oggUrl; // itemEl.getAttribute(this.config.dataAttrMediaUrlOggKey)!;
            let mediaUrlFallback: string | null = this.playlist[i].fallbackUrl; // itemEl.getAttribute(this.config.dataAttrMediaUrlFallbackKey)!;

            itemEl.setAttribute('data-index', i.toString());

            if (mediaUrlMp3 === null && mediaUrlOgg === null && mediaUrlFallback === null) break;

            this.audioEls[i] = theAudio;
            this.durationEls[i] = itemEl.querySelector(`:scope .${this.config.durationElClass}`)! as HTMLElement;
            this.lineNumberEls[i] = itemEl.querySelector(`:scope .${this.config.lineNumberElClass}`)! as HTMLElement;
            this.artistEls[i] = itemEl.querySelector(`:scope .${this.config.artistELClass}`)! as HTMLElement;
            this.titleEls[i] = itemEl.querySelector(`:scope .${this.config.titleElClass}`)! as HTMLElement;
            this.playEls[i] = itemEl.querySelector(`:scope .${this.config.playElClass}`)! as HTMLElement;
            this.pauseEls[i] = itemEl.querySelector(`:scope .${this.config.pauseElClass}`)! as HTMLElement;

            // console.log('this.lineNumberEls[i]', this.lineNumberEls[i]);

            this.lineNumberEls[i].innerHTML = this.playlist[i].linenumber;

            this.artistEls[i].innerHTML = this.playlist[i].artist;
            this.artistEls[i].setAttribute('title', this.playlist[i].artist);

            this.titleEls[i].innerHTML = this.playlist[i].title;
            this.titleEls[i].setAttribute('title', this.playlist[i].title);

            this.playEls[i].addEventListener('click', (e) => {
                this.toPlayState(theAudio, itemEl);
            });

            this.pauseEls[i].addEventListener('click', (e) => {
                this.toPausedState(theAudio, itemEl);
            });

            theAudio.addEventListener("ended", (e) => {
                this.changeState(itemEl, MediaItemState.Idle);
            });

            theAudio.volume = 1;
            theAudio.setAttribute('preload', 'metadata');

            this.registerEvents(theAudio, itemEl);

            if (theAudio.canPlayType('audio/mpeg')) {
                let sourceEl = document.createElement('source');
                sourceEl.setAttribute('src', mediaUrlMp3);
                sourceEl.setAttribute('type', 'audio/mpeg');
                theAudio.insertAdjacentElement("beforeend", sourceEl);
            }

            if (theAudio.canPlayType('audio/ogg')) {
                let sourceEl = document.createElement('source');
                sourceEl.setAttribute('src', mediaUrlOgg);
                sourceEl.setAttribute('type', 'audio/mpeg');
                theAudio.insertAdjacentElement("beforeend", sourceEl);
            }

            if (mediaUrlFallback !== null && mediaUrlFallback !== '') {
                let fallbackEl = document.createElement('a');
                let titleTextNode = document.createTextNode('download audio');
                fallbackEl.appendChild(titleTextNode);
                fallbackEl.setAttribute('href', mediaUrlFallback);
                theAudio.insertAdjacentElement("beforeend", fallbackEl);

            }

            let mediaContainer = itemEl.querySelector(`.${this.config.mediaContainerClass}`)!;

            if (mediaContainer === null) {
                mediaContainer = document.createElement('div');
                mediaContainer.classList.add(this.config.mediaContainerClass);
                itemEl.insertAdjacentElement("afterbegin", mediaContainer);
            }

            mediaContainer.appendChild(theAudio);
        }
    }

    private registerEvents(theAudio: HTMLMediaElement, itemEl: HTMLElement) {
        let index: string = itemEl.getAttribute('data-index')!;

        theAudio.addEventListener('loadedmetadata', (e) => {
            this.durationEls[index].innerHTML = this.toMinutesAndSeconds(theAudio.duration).minutesAndSeconds;
        });

        theAudio.addEventListener("timeupdate", (e) => {
            if (theAudio.readyState >= 2) {
                this.durationEls[index].innerHTML = this.toMinutesAndSeconds(theAudio.currentTime).minutesAndSeconds;
            }
        });
    }

    private toMinutesAndSeconds(duration: number): { minutes: string, seconds: string, minutesAndSeconds: string } {
        let minutes = Math.trunc(duration / 60).toString().toString().padStart(2, '0');
        let seconds = Math.floor(duration % 60).toString().padStart(2, '0');
        return {
            minutes: minutes,
            seconds: seconds,
            minutesAndSeconds: minutes + ':' + seconds
        };
    }

    private toPausedState(theAudio: HTMLMediaElement, itemEl: HTMLElement) {
        theAudio.pause();
        this.changeState(itemEl, MediaItemState.Paused);

        this.stopFallbackEqualizer();
    }

    private toPlayState(theAudio: HTMLMediaElement, itemEl: HTMLElement) {
        // Iterate through other media and pause them
        for (let i = 0; i < this.audioEls.length; i++) {
            if (this.isPlaying(this.audioEls[i])) {
                this.toPausedState(this.audioEls[i], this.itemEls[i]);
            }

        }

        theAudio.addEventListener('loadeddata', (e) => {
            if (theAudio.readyState >= 2) {
                theAudio.play();
                this.changeState(itemEl, MediaItemState.Playing);
            }
        });

        // console.log('theAudio.paused', theAudio.currentTime);
        // if (!theAudio.paused)


        if (theAudio.currentTime > 0 && theAudio.paused) {
            theAudio.play();
            this.changeState(itemEl, MediaItemState.Playing);
        } else {
            theAudio.load();
        }

        this.startFallbackEqualizer(itemEl);
    }

    private changeState(element: HTMLElement, state: MediaItemState): void {
        element.setAttribute(this.config.dataAttrItemStateKey, state);
    }

    private changeStates(elements: HTMLElement[], state: MediaItemState): void {
        for (let i = 0; i < elements.length; i++) {
            this.changeState(elements[i], state);
        }
    }

    private isPlaying(theAudio: HTMLMediaElement) {
        return theAudio.duration > 0 && theAudio.currentTime > 0 && !theAudio.paused && !theAudio.ended && theAudio.readyState > 2;
    }

    private mouseEnterHandler(e): void {
        let mouseEnterEl = e.target as HTMLElement;
        if (!mouseEnterEl.classList.contains(`${this.config.itemClass}`)) return;
        e.stopPropagation();


        let prevEl = TeboUtility.getPreviousSibling(mouseEnterEl, (el) => {
            return el.nodeType === 1 && (el as HTMLElement).classList.contains(`${this.config.itemClass}`);
        }) as HTMLElement;

        if (prevEl !== null) {
            prevEl.classList.add(`${this.config.itemClass}--remove-border-bottom`);
        }

        mouseEnterEl.classList.add(`${this.config.itemHoverClass}`);
    }

    private mouseLeaveHandler(e): void {
        let mouseLeaveEl = e.target as HTMLElement;
        if (!mouseLeaveEl.classList.contains(`${this.config.itemClass}`)) return;
        e.stopPropagation();

        let prevEl = TeboUtility.getPreviousSibling(mouseLeaveEl, (el) => {
            return el.nodeType === 1 && (el as HTMLElement).classList.contains(`${this.config.itemClass}`);
        }) as HTMLElement;

        if (prevEl !== null && TeboUtility.hasClass(prevEl, `${this.config.itemClass}--remove-border-bottom`)) {
            prevEl.classList.remove(`${this.config.itemClass}--remove-border-bottom`);
        }

        mouseLeaveEl.classList.remove(`${this.config.itemHoverClass}`);

    }

    private stopFallbackEqualizer() {
        if (this.equalizerEl !== null && this.animatedEqualizer !== null) {
            this.animatedEqualizer.stopAnimation();
            this.equalizerEl = this.animatedEqualizer = null;
        }
    }

    private startFallbackEqualizer(itemEl: HTMLElement) {
        if (document.querySelector('html')?.classList.contains('no-svg')) {
            this.equalizerEl = itemEl.querySelector(`:scope .${this.config.progressFallbackClass}`)! as HTMLElement;
            this.animatedEqualizer = new AnimatedEqualizer(this.equalizerEl);
        }
    }
}
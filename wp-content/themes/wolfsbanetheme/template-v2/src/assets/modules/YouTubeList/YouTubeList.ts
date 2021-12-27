import IYouTubeListConfig from "./IYouTubeListConfig";
import TeboUtility from "../TeboUtility";
import IYouTubeListItem from "./IYouTubeListItem";
import AnimatedEqualizer from "../AminatedEqualizer/AnimatedEqualizer";
import YouTubePlayer from 'youtube-player';
import moment, { Duration } from 'moment';
import 'moment-duration-format';


enum MediaItemState {
    Idle = 'idle',
    Playing = 'playing',
    Paused = 'paused',
    Buffering = 'buffering'
}

enum VideoState {
    Unstarted = -1,
    Ended = 0,
    Playing = 1,
    Paused = 2,
    Buffering = 3,
    VideoCued = 5
}

export default class YouTubeList {
    
    // private API_KEY: string = 'AIzaSyD0rKcNm3iUBIV4XS4OUSqFBxSmVtmicrc'; // wolfsbane
    private API_KEY: string = 'AIzaSyBXg4R4SWJZlypnzTa21v63QNkTAIu1GVg';


    private targetEl: HTMLElement;
    private itemEls: HTMLElement[] = [];

    private audioEls: HTMLMediaElement[] = [];
    private durationEls: HTMLElement[] = [];
    private lineNumberEls: HTMLElement[] = [];
    private titleEls: HTMLElement[] = [];
    private artistEls: HTMLElement[] = [];
    private playEls: HTMLElement[] = [];
    private pauseEls: HTMLElement[] = [];

    private playlist: IYouTubeListItem[] = [];

    private equalizerEl: HTMLElement | null = null;
    private animatedEqualizer: AnimatedEqualizer | null = null;

    // private iFrameEl: HTMLIFrameElement | null = null;

    private player;
    private currentVideoId: string | null = null;
    private theVideos: string[] = [];
    private videoDurations: string[] = [];
    private currentTimes: number[] = [];
    private liveTimeElapsedInterval: number | undefined;
    private videoData = new Map();

    constructor(private config: IYouTubeListConfig) {
        this.playlist = this.config.playlist;

        this.targetEl = document.getElementById(this.config.targetId)!;
        this.itemEls = Array.from(this.targetEl?.querySelectorAll(`:scope .${this.config.itemClass}`) || []);

        this.targetEl?.classList.add(this.config.loadingClass);

        // this.setupPlayer();

        // set initial state of media items to idle
        this.changeStates(this.itemEls, MediaItemState.Idle);

        // register El events
        this.eventRegistrationItemEls(this.itemEls);

        // create a setup media file
        this.prepareMediaSources(this.itemEls)
            .then(response => {
                this.theVideos = response as string[];
                this.targetEl?.classList.remove(this.config.loadingClass);
                this.setupPlayer(this.changeCurrentVideoId(this.theVideos[0]));
            })
            .catch(error => {
                console.log('error', error);
            });

    }

    private changeCurrentVideoId(videoId: string): string {
        this.currentVideoId = videoId;
        return this.currentVideoId;
    }

    private setupPlayer(videoId: string) {
        let index = this.theVideos.indexOf(videoId);

        this.player = YouTubePlayer(this.config.videoFramePlaceHolderTargetId, {
            videoId: videoId,
            height: '100%',
            width: '100%',
            playerVars: {
                'autoplay': 0,
                'rel': 0,
                'showinfo': 0,
                'egm': 0,
                'showsearch': 0,
                'controls': 1,
                'modestbranding': 1,
                'iv_load_policy': 3
            },
        });
        // this.player.loadVideoById('M7lc1UVf-VE');
        // this.player.playVideo();

        /* this.player.on('ready', (e) => {
            console.log('ready');
        }); */

        // default values
        // this.player.seekTo(this.currentTimes[index] + 100, true);
        this.player.setVolume(100);

        

        this.player.on('ready', (e) => {
            let videoIndex = this.theVideos.indexOf(e.target.getVideoData().video_id);
            this.changeState(this.itemEls[videoIndex], MediaItemState.Paused);
        });

        this.player.on('stateChange', (e) => {
            let videoIndex = this.theVideos.indexOf(e.target.getVideoData().video_id);

            // -1: unstarted, 0: ended, 1: playing, 2: paused, 3: buffering, 5: video cued
            if (e.data === VideoState.Buffering) {
                this.changeState(this.itemEls[videoIndex], MediaItemState.Buffering);
            } else if (e.data === VideoState.Playing) {
                this.changeState(this.itemEls[videoIndex], MediaItemState.Playing);
            } else if (e.data === VideoState.Paused) {
                this.changeState(this.itemEls[videoIndex], MediaItemState.Paused);
            } else if (e.data === VideoState.Ended) {
                this.changeState(this.itemEls[videoIndex], MediaItemState.Idle);
            } else if (e.data === VideoState.Unstarted) {
                // this.changeState(this.itemEls[videoIndex], MediaItemState.Idle);
            } else if (e.data === VideoState.VideoCued) {
                this.changeState(this.itemEls[videoIndex], MediaItemState.Paused);
            }
        });
    }

    private eventRegistrationItemEls(elements: HTMLElement[]) {
        for (let i = 0; i < elements.length; i++) {
            elements[i]?.addEventListener('mouseenter', this.mouseEnterHandler.bind(this), false);
            elements[i]?.addEventListener('mouseleave', this.mouseLeaveHandler.bind(this), false);
        }
    }

    private prepareMediaSources(elements: HTMLElement[]) {
        return new Promise((resolve, reject) => {
            let promises: Promise<string>[] = [];

            for (let i = 0; i < elements.length; i++) {
                promises[i] = new Promise((innerResolve, innerReject) => {
                    let itemEl: HTMLElement = this.itemEls[i];
                    let videoId: string = this.playlist[i].videoId;

                    itemEl.setAttribute('data-index', i.toString());

                    if (videoId === null || videoId.trim() === '') innerReject();

                    fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=${videoId}&key=${this.API_KEY}`, {
                        method: 'GET'
                    })
                        .then(function (response) {
                            if (response.ok) {
                                return response.json();
                            }
                            return Promise.reject(response);
                        })
                        .then(data => {
                            let contentDetails = data.items[0].contentDetails;

                            this.videoData.set(videoId, '');

                            this.durationEls[i] = itemEl.querySelector(`:scope .${this.config.durationElClass}`)! as HTMLElement;
                            this.lineNumberEls[i] = itemEl.querySelector(`:scope .${this.config.lineNumberElClass}`)! as HTMLElement;
                            this.artistEls[i] = itemEl.querySelector(`:scope .${this.config.artistELClass}`)! as HTMLElement;
                            this.titleEls[i] = itemEl.querySelector(`:scope .${this.config.titleElClass}`)! as HTMLElement;
                            this.playEls[i] = itemEl.querySelector(`:scope .${this.config.playElClass}`)! as HTMLElement;
                            this.pauseEls[i] = itemEl.querySelector(`:scope .${this.config.pauseElClass}`)! as HTMLElement;

                            this.lineNumberEls[i].innerHTML = this.playlist[i].linenumber;

                            this.artistEls[i].innerHTML = this.playlist[i].artist;
                            this.artistEls[i].setAttribute('title', this.playlist[i].artist);

                            this.titleEls[i].innerHTML = this.playlist[i].title;
                            this.titleEls[i].setAttribute('title', this.playlist[i].title);

                            this.currentTimes[i] = 0;
                            this.videoDurations[i] = this.durationEls[i].innerHTML = moment.duration(contentDetails.duration).format("hh:mm:ss");

                            this.playEls[i].addEventListener('click', (e) => {
                                if (this.player !== null)
                                    this.toPlayState(videoId, itemEl);
                            });

                            this.pauseEls[i].addEventListener('click', (e) => {
                                this.toPausedState(videoId, itemEl);
                            });

                            innerResolve(videoId);
                        })
                        .catch(function (error) {
                            innerReject(Error(`Couldn't initialize video: ${videoId}`));
                        });
                });
            }

            Promise.all(promises).then((videoIds) => {
                resolve(videoIds);
            }).catch(function (error) {
                reject(Error(`Couldn't initialize configured playlist`));
            });
        });        
    }

    private showLiveTimeElapsed() {
        let videoIndex = this.theVideos.indexOf(this.currentVideoId as string);
        this.durationEls[videoIndex].innerText = this.toMinutesAndSeconds(this.currentTimes[videoIndex]).minutesAndSeconds;
        this.liveTimeElapsedInterval = window.setInterval(() => {
            let vi = this.theVideos.indexOf(this.currentVideoId as string);
            this.player.getCurrentTime().then(currentTime => {
                if (currentTime === undefined) return;
                if (currentTime === 0 && this.currentTimes[vi] > 0) return;

                this.durationEls[vi].innerText = this.toMinutesAndSeconds(currentTime).minutesAndSeconds;
            })
        }, 100);
    }

    private toElapsedTimeInHoursMinutes(seconds): string {
        return moment(seconds, 'seconds').format("hh:mm:ss");
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

    private toPausedState(videoId: string, itemEl: HTMLElement) {
        this.player.pauseVideo().then((e) => {
            // this.changeState(itemEl, MediaItemState.Paused);
            window.clearInterval(this.liveTimeElapsedInterval);
            this.stopFallbackEqualizer();
        });
    }

    private toPlayState(videoId: string, itemEl: HTMLElement) {
        let videoIndex: number | null = null;

        // check if video is playing and pause it
        this.player.getPlayerState().then(state => {
            if (state === VideoState.Playing || state === VideoState.Buffering) {
                let index = this.theVideos.indexOf(this.currentVideoId as string);

                this.player.pauseVideo();
                this.changeState(this.itemEls[index], MediaItemState.Paused);
            }

            return state;
        }).then(state => {
            if (this.currentVideoId === videoId) {
                // if true just play
                videoIndex = this.theVideos.indexOf(videoId);
                this.player.seekTo(this.currentTimes[videoIndex], true);
                this.player.playVideo();
            } else {
                this.currentVideoId = videoId;
                videoIndex = Number(itemEl.getAttribute('data-index'));

                if (this.getState(itemEl) === MediaItemState.Paused) {
                    this.player.seekTo(this.currentTimes[videoIndex], true);
                    this.player.loadVideoById(videoId, this.currentTimes[videoIndex]);
                } else {
                    this.currentTimes[videoIndex] = 0;
                    this.player.loadVideoById(videoId, this.currentTimes[videoIndex]);
                }
            }

            window.clearInterval(this.liveTimeElapsedInterval);
            this.showLiveTimeElapsed();
        });

        // Iterate through other media and pause them
        /* 
        this.player.cueVideoById(videoId);
        this.player.playVideo().then(() => {
            this.changeState(itemEl, MediaItemState.Playing);
            this.startFallbackEqualizer(itemEl);
        }); */
    }

    private changeState(element: HTMLElement, state: MediaItemState): void {
        if (state === MediaItemState.Paused) {
            this.player.getCurrentTime().then(currentTime => {
                let itemIndex = +(element.getAttribute('data-index') as string);

                if (currentTime === undefined) return;
                if (currentTime === 0 && this.currentTimes[itemIndex] > 0) return;

                this.currentTimes[itemIndex] = currentTime;
                // window.clearInterval(this.liveTimeElapsedInterval);
            });
        }

        if (state === MediaItemState.Idle) {
            let itemIndex = +(element.getAttribute('data-index') as string);
            this.currentTimes[itemIndex] = 0;
            
            if (this.videoDurations[itemIndex] !== undefined) 
                this.durationEls[itemIndex].innerText = this.videoDurations[itemIndex];
            
            window.clearInterval(this.liveTimeElapsedInterval);
        }

        element.setAttribute(this.config.dataAttrItemStateKey, state);
    }

    private changeStates(elements: HTMLElement[], state: MediaItemState): void {
        for (let i = 0; i < elements.length; i++) {
            this.changeState(elements[i], state);
        }
    }

    private getState(element: HTMLElement): MediaItemState {
        return element.getAttribute(this.config.dataAttrItemStateKey) as MediaItemState;
    }

    private isPlaying(element: HTMLElement) {
        return element.getAttribute(this.config.dataAttrItemStateKey) === MediaItemState.Playing;
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
}
import NavPrimary from './assets/modules/NavPrimary/NavPrimary';
import HeroAnnotation from './assets/modules/HeroAnnotation/HeroAnnotation';
import MediaList from './assets/modules/MediaList/MediaList';
import AnimatedEqualizer from './assets/modules/AminatedEqualizer/AnimatedEqualizer';
import HamburgerMenu from './assets/modules/HamburgerMenu/HamburgerMenu';
import YouTubeList from './assets/modules/YouTubeList/YouTubeList';
import TeboUtility from './assets/modules/TeboUtility';


declare const wp_script_config: {
    audio_url: string
};
wp_script_config.audio_url = './audio';

// require('file-loader?name=audio/[name].[ext]!./assets/audio/paradise-ikson.mp3');
require('./assets/audio/paradise-ikson.mp3');
require('./assets/audio/undrunk-fletcher.mp3');
require('./assets/audio/blow-my-mind-davido-chris-brown.mp3');
require('./assets/audio/how-do-you-love-me-hardwell-snoop-dogg.mp3');
require('./assets/audio/you-shaggy-alexander-stewart.mp3');
require('./assets/audio/you-gotta-be-bombs-away-reigan.mp3');


require('./assets/audio/paradise-ikson.ogg');
require('./assets/audio/undrunk-fletcher.ogg');
require('./assets/audio/blow-my-mind-davido-chris-brown.ogg');
require('./assets/audio/how-do-you-love-me-hardwell-snoop-dogg.ogg');
require('./assets/audio/you-shaggy-alexander-stewart.ogg');
require('./assets/audio/you-gotta-be-bombs-away-reigan.ogg');

// import Data from './assets/audio/paradise-ikson';

let nav: NavPrimary;
let heroAnnotation: HeroAnnotation;
let homeBeatsMediaList: MediaList;
let homeSongsMediaList: MediaList;
let animatedEqualizer: AnimatedEqualizer;
let hamburgerMenu: HamburgerMenu;
let youTubePlayList: YouTubeList;

enum Action {
    GetMediaPlaylist = 'get_media_playlist_by_type'
    // GetYoutubePlaylist = 'get_youtube_playlist'
}

enum MediaType {
    Beats = 1,
    Songs = 2,
    YouTube = 3
}


window.addEventListener('DOMContentLoaded', (event) => {
    nav = new NavPrimary();
    heroAnnotation = new HeroAnnotation();
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
    
    createBeatsMediaList();
    createSongsMediaList();

    onYouTubeIframeAPIReady();
    
    console.log('DOM fully loaded and parsed');
});

/* function setupYouTubeIframeAPI() {
    // This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    let firstScriptTag: HTMLScriptElement = document.querySelectorAll('body > script')[0] as HTMLScriptElement;
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
} */

function onYouTubeIframeAPIReady() {
    let youTubePlaylist: any[] = [];
    let formEl = document.getElementById('youtube-works-form') as HTMLFormElement;
    let formData = new FormData();
    formData.append("mediaTypeId", MediaType.YouTube.toString());
    formData.append("action", Action.GetMediaPlaylist);
    formData.append("nonce", (document.getElementById(Action.GetMediaPlaylist + '_nonce')! as HTMLInputElement).value);

    if (formEl?.dataset?.url) {
        fetch(formEl?.dataset?.url || '', {
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

            const outcome = JSON.parse(result);
            for (let i = 0; i < outcome.data.result.length; i++) {
                const item = outcome.data.result[i];
                const number = i + 1;

                youTubePlaylist.push({
                    linenumber: number.toString().padStart(2, '0'),
                    title: item.title,
                    artist: item.artist,
                    url: item.videoUrl,
                    videoId: item.videoId

                });
            }

            youTubePlayList = new YouTubeList({
                targetId: "c-video-youtube-player",
                dataAttrItemStateKey: "data-medialist-state",
                dataAttrMediaUrlMp3Key: "data-medialist-url-mp3",
                dataAttrMediaUrlOggKey: "data-medialist-url-ogg",
                dataAttrMediaUrlFallbackKey: "data-medialist-url-fallback",
                itemClass: "c-medialist__media",
                itemHoverClass: "c-medialist__media--hover",
                itemRemoveClass: "c-medialist__media--remove-border-bottom",
                mediaContainerClass: "c-medialist__the-media",

                progressFallbackClass: "c-medialist__progress-fallback",

                lineNumberElClass: "c-medialist__linenumber-instance",
                titleElClass: "c-medialist__title",
                artistELClass: "c-medialist__artist",
                durationElClass: "c-medialist__length-instance",
                playElClass: "c-medialist__play",
                pauseElClass: "c-medialist__pause",

                videoFrameContainerElClass: "c-video__screen-aspect-ratio-box-inner",
                videoFrameElClass: "c-video__instance",
                videoFramePlaceHolderTargetId: "home-youtubelist-video-frame-placeholder",
                loadingClass: "c-medialist--loading",

                playlist: youTubePlaylist
            });
        }).catch(error => {
            //
        });
    }
}

function createBeatsMediaList() {
    /* console.clear();
    console.log('wp_script_config.audio_url', wp_script_config.audio_url); */

    let beatPlaylist: any[] = [];
    let formEl = document.getElementById('home-works-form') as HTMLFormElement;
    let formData = new FormData();
    formData.append("mediaTypeId", MediaType.Beats.toString());
    formData.append("action", Action.GetMediaPlaylist);
    formData.append("nonce", (document.getElementById(Action.GetMediaPlaylist + '_nonce')! as HTMLInputElement).value);

    if (formEl?.dataset?.url) {
        fetch(formEl?.dataset?.url || '', {
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

            const outcome = JSON.parse(result);
            for (let i = 0; i < outcome.data.result.length; i++) {
                const item = outcome.data.result[i];
                const number = i + 1;

                beatPlaylist.push({
                    linenumber: number.toString().padStart(2, '0'),
                    title: item.title,
                    artist: item.artist,
                    mp3Url: item.mp3Url,
                    oggUrl: item.oggUrl,
                    fallbackUrl: item.fallbackUrl

                });
            }

            homeBeatsMediaList = new MediaList({
                targetId: "home-beats-medialist",
                dataAttrItemStateKey: "data-medialist-state",
                dataAttrMediaUrlMp3Key: "data-medialist-url-mp3",
                dataAttrMediaUrlOggKey: "data-medialist-url-ogg",
                dataAttrMediaUrlFallbackKey: "data-medialist-url-fallback",
                itemClass: "c-medialist__media",
                itemHoverClass: "c-medialist__media--hover",
                itemRemoveClass: "c-medialist__media--remove-border-bottom",
                mediaContainerClass: "c-medialist__the-media",

                progressFallbackClass: "c-medialist__progress-fallback",

                lineNumberElClass: "c-medialist__linenumber-instance",
                titleElClass: "c-medialist__title",
                artistELClass: "c-medialist__artist",
                durationElClass: "c-medialist__length-instance",
                playElClass: "c-medialist__play",
                pauseElClass: "c-medialist__pause",

                loadingClass: "c-medialist--loading",

                playlist: beatPlaylist
            });
        }).catch(error => {
            //
        });
    }
}

function createSongsMediaList() {
    let songPlaylist: any[] = [];
    let formEl = document.getElementById('home-works-form') as HTMLFormElement;
    let formData = new FormData();
    formData.append("mediaTypeId", MediaType.Songs.toString());
    formData.append("action", Action.GetMediaPlaylist);
    formData.append("nonce", (document.getElementById(Action.GetMediaPlaylist + '_nonce')! as HTMLInputElement).value);

    if (formEl?.dataset?.url) {
        fetch(formEl?.dataset?.url || '', {
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

            const outcome = JSON.parse(result);
            for (let i = 0; i < outcome.data.result.length; i++) {
                const item = outcome.data.result[i];
                const number = i + 1;

                songPlaylist.push({
                    linenumber: number.toString().padStart(2, '0'),
                    title: item.title,
                    artist: item.artist,
                    mp3Url: item.mp3Url,
                    oggUrl: item.oggUrl,
                    fallbackUrl: item.fallbackUrl

                });
            }

            homeBeatsMediaList = new MediaList({
                targetId: "home-songs-medialist",
                dataAttrItemStateKey: "data-medialist-state",
                dataAttrMediaUrlMp3Key: "data-medialist-url-mp3",
                dataAttrMediaUrlOggKey: "data-medialist-url-ogg",
                dataAttrMediaUrlFallbackKey: "data-medialist-url-fallback",
                itemClass: "c-medialist__media",
                itemHoverClass: "c-medialist__media--hover",
                itemRemoveClass: "c-medialist__media--remove-border-bottom",
                mediaContainerClass: "c-medialist__the-media",

                progressFallbackClass: "c-medialist__progress-fallback",

                lineNumberElClass: "c-medialist__linenumber-instance",
                titleElClass: "c-medialist__title",
                artistELClass: "c-medialist__artist",
                durationElClass: "c-medialist__length-instance",
                playElClass: "c-medialist__play",
                pauseElClass: "c-medialist__pause",

                loadingClass: "c-medialist--loading",

                playlist: songPlaylist
            });
        }).catch(error => {
            //
        });
    }
}
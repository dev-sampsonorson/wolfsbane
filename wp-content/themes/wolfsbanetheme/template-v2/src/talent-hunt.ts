import NavPrimary from './assets/modules/NavPrimary/NavPrimary';
import AnimatedEqualizer from './assets/modules/AminatedEqualizer/AnimatedEqualizer';
import HamburgerMenu from './assets/modules/HamburgerMenu/HamburgerMenu';
import TeboUtility from './assets/modules/TeboUtility';
import { beats, beatsLocalhost } from './sandbox/data';
import DownloadableBeats from './assets/modules/DownloadableBeats/DownloadableBeats';

// require('file-loader?name=audio/[name].[ext]!./assets/audio/paradise-ikson.mp3');
/* require('./assets/audio/paradise-ikson.mp3');
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
require('./assets/audio/you-gotta-be-bombs-away-reigan.ogg'); */

// import Data from './assets/audio/paradise-ikson';

let nav: NavPrimary;
let downloadableBeats: DownloadableBeats;
let animatedEqualizer: AnimatedEqualizer;
let hamburgerMenu: HamburgerMenu;

enum Action {
    GetTalentHuntBeats = 'get_media_playlist_by_type_and_location'
}

enum MediaType {
    Beats = 1,
    Songs = 2,
    YouTube = 3
}

enum MediaLocation {
    BeatsPrimary = 1,
    SongsPrimary = 2,
    YouTubePrimary = 3,
    BeatTalentHunt = 6
}

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

    createBeatsMediaList();

    console.log('DOM fully loaded and parsed');
});

function createBeatsMediaList() {
    let beatPlaylist: any[] = [];
    let formEl = document.getElementById('downloadable-beats-form') as HTMLFormElement;
    let formData = new FormData();

    formData.append("mediaTypeId", MediaType.Beats.toString());
    formData.append("mediaLocationId", MediaLocation.BeatTalentHunt.toString());
    formData.append("action", Action.GetTalentHuntBeats);
    formData.append("nonce", (document.getElementById(Action.GetTalentHuntBeats + '_nonce')! as HTMLInputElement).value);

    // console.log(document.getElementById(Action.GetTalentHuntBeats + '_nonce'));
    // console.log(formEl?.dataset?.url);

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

            downloadableBeats = new DownloadableBeats({
                targetId: "talent-hunt-beats",
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
                downloadElClass: "c-medialist__download",

                loadingClass: "c-medialist--loading",

                mediaList: beatPlaylist,
                mediaItemTemplate: `<li class="c-medialist__media">
                                        <div class="c-medialist__the-media"></div>
                                        <div class="c-medialist__controls">
                                            <div class="c-medialist__linenumber">
                                                <span class="c-medialist__linenumber-instance"></span>
                                            </div>
                                            <div class="c-medialist__progress">
                                                <svg class="c-medialist__progress-instance"
                                                     xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg"
                                                     xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="32px"
                                                     height="11px" viewBox="0 0 128 44" xml:space="preserve">
                                                    <script type="text/ecmascript" xlink:href="js/smil.user.js" />
                                                    <g>
                                                        <path fill-opacity="1"
                                                              d="M-80.265.241h8.122A1.951,1.951,0,0,1-70.18,2.18V41.845a1.951,1.951,0,0,1-1.963,1.939h-8.122a1.951,1.951,0,0,1-1.963-1.939V2.18A1.951,1.951,0,0,1-80.265.241Zm16.468,0h8.122A1.951,1.951,0,0,1-53.712,2.18V41.845a1.951,1.951,0,0,1-1.963,1.939H-63.8a1.951,1.951,0,0,1-1.963-1.939V2.18A1.951,1.951,0,0,1-63.8.241Zm16.468,14.6h8.122a1.951,1.951,0,0,1,1.963,1.939V41.845a1.951,1.951,0,0,1-1.963,1.939h-8.122a1.951,1.951,0,0,1-1.963-1.939V16.784A1.951,1.951,0,0,1-47.329,14.845Zm16.468,15.728h8.122a1.951,1.951,0,0,1,1.963,1.939v9.333a1.951,1.951,0,0,1-1.963,1.939h-8.122a1.951,1.951,0,0,1-1.963-1.939V32.512A1.951,1.951,0,0,1-30.861,30.573Zm16.655-15.728h8.122a1.951,1.951,0,0,1,1.963,1.939V41.845a1.951,1.951,0,0,1-1.963,1.939h-8.122a1.951,1.951,0,0,1-1.963-1.939V16.784A1.951,1.951,0,0,1-14.206,14.845ZM2.074,0.241H10.2A1.951,1.951,0,0,1,12.159,2.18V41.845A1.951,1.951,0,0,1,10.2,43.784H2.074A1.951,1.951,0,0,1,.112,41.845V2.18A1.951,1.951,0,0,1,2.074.241Zm16.655,0h8.122A1.951,1.951,0,0,1,28.814,2.18V41.845a1.951,1.951,0,0,1-1.963,1.939H18.729a1.951,1.951,0,0,1-1.963-1.939V2.18A1.951,1.951,0,0,1,18.729.241Zm16.468,0h8.122A1.951,1.951,0,0,1,45.282,2.18V41.845a1.951,1.951,0,0,1-1.963,1.939H35.2a1.951,1.951,0,0,1-1.963-1.939V2.18A1.951,1.951,0,0,1,35.2.241Zm16.377,0H59.7A1.951,1.951,0,0,1,61.659,2.18V41.845A1.951,1.951,0,0,1,59.7,43.784H51.574a1.951,1.951,0,0,1-1.963-1.939V2.18A1.951,1.951,0,0,1,51.574.241Zm16.655,0h8.122A1.951,1.951,0,0,1,78.314,2.18V41.845a1.951,1.951,0,0,1-1.963,1.939H68.229a1.951,1.951,0,0,1-1.963-1.939V2.18A1.951,1.951,0,0,1,68.229.241Zm16.468,0h8.122A1.951,1.951,0,0,1,94.782,2.18V41.845a1.951,1.951,0,0,1-1.963,1.939H84.7a1.951,1.951,0,0,1-1.963-1.939V2.18A1.951,1.951,0,0,1,84.7.241Zm16.532,0h8.122a1.951,1.951,0,0,1,1.963,1.939V41.845a1.951,1.951,0,0,1-1.963,1.939h-8.122a1.951,1.951,0,0,1-1.963-1.939V2.18A1.951,1.951,0,0,1,101.229.241Zm16.468,0h8.122a1.951,1.951,0,0,1,1.963,1.939V41.845a1.951,1.951,0,0,1-1.963,1.939H117.7a1.951,1.951,0,0,1-1.963-1.939V2.18A1.951,1.951,0,0,1,117.7.241Zm-230.962,0h8.122A1.951,1.951,0,0,1-103.18,2.18V41.845a1.951,1.951,0,0,1-1.963,1.939h-8.122a1.951,1.951,0,0,1-1.963-1.939V2.18A1.951,1.951,0,0,1-113.265.241Zm16.468,0h8.122A1.951,1.951,0,0,1-86.712,2.18V41.845a1.951,1.951,0,0,1-1.963,1.939H-96.8a1.951,1.951,0,0,1-1.963-1.939V2.18A1.951,1.951,0,0,1-96.8.241Zm-49.468,0h8.122A1.951,1.951,0,0,1-136.18,2.18V41.845a1.951,1.951,0,0,1-1.963,1.939h-8.122a1.951,1.951,0,0,1-1.963-1.939V2.18A1.951,1.951,0,0,1-146.265.241Zm16.468,0h8.122a1.951,1.951,0,0,1,1.963,1.939V41.845a1.951,1.951,0,0,1-1.963,1.939H-129.8a1.951,1.951,0,0,1-1.963-1.939V2.18A1.951,1.951,0,0,1-129.8.241Zm-49.468,0h8.122A1.951,1.951,0,0,1-169.18,2.18V41.845a1.951,1.951,0,0,1-1.963,1.939h-8.122a1.951,1.951,0,0,1-1.963-1.939V2.18A1.951,1.951,0,0,1-179.265.241Zm16.468,0h8.122a1.951,1.951,0,0,1,1.963,1.939V41.845a1.951,1.951,0,0,1-1.963,1.939H-162.8a1.951,1.951,0,0,1-1.963-1.939V2.18A1.951,1.951,0,0,1-162.8.241Z" />
                                                        <animateTransform attributeName="transform" type="translate"
                                                                          values="16.5 0;33 0;49.5 0;66 0;82.5 0;99 0;115.5 0;132 0;148.5 0;165 0;181.5 0"
                                                                          calcMode="discrete" dur="1540ms"
                                                                          repeatCount="indefinite" />
                                                    </g>
                                                </svg>
                                                <span class="c-medialist__progress-fallback"></span>
                                            </div>
                                            <div class="c-medialist__play">
                                                <svg class="c-medialist__play-instance" xmlns="http://www.w3.org/2000/svg"
                                                     xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1"
                                                     x="0px" y="0px" viewBox="0 0 477.867 477.867"
                                                     style="enable-background:new 0 0 477.867 477.867;" xml:space="preserve">
                                                    <path d="M238.933,0C106.974,0,0,106.974,0,238.933s106.974,238.933,238.933,238.933s238.933-106.974,238.933-238.933    C477.726,107.033,370.834,0.141,238.933,0z M339.557,246.546c-1.654,3.318-4.343,6.008-7.662,7.662v0.085L195.362,322.56    c-8.432,4.213-18.682,0.794-22.896-7.638c-1.198-2.397-1.815-5.043-1.8-7.722V170.667c-0.004-9.426,7.633-17.07,17.059-17.075    c2.651-0.001,5.266,0.615,7.637,1.8l136.533,68.267C340.331,227.863,343.762,238.11,339.557,246.546z"
                                                          data-original="#ffffff" class="active-path" />
                                                </svg>
                                                <span class="c-medialist__play-fallback"></span>
                                            </div>
                                            <div class="c-medialist__pause">
                                                <svg class="c-medialist__pause-instance" xmlns="http://www.w3.org/2000/svg"
                                                     xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1"
                                                     x="0px" y="0px" viewBox="0 0 512 512"
                                                     style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                                    <path d="M256,0C114.833,0,0,114.844,0,256s114.833,256,256,256s256-114.844,256-256S397.167,0,256,0z M234.667,352    c0,5.896-4.771,10.667-10.667,10.667h-64c-5.896,0-10.667-4.771-10.667-10.667V160c0-5.896,4.771-10.667,10.667-10.667h64    c5.896,0,10.667,4.771,10.667,10.667V352z M362.667,352c0,5.896-4.771,10.667-10.667,10.667h-64    c-5.896,0-10.667-4.771-10.667-10.667V160c0-5.896,4.771-10.667,10.667-10.667h64c5.896,0,10.667,4.771,10.667,10.667V352z"
                                                          data-original="#ffffff" class="active-path" />
                                                </svg>
                                                <span class="c-medialist__pause-fallback"></span>
                                            </div>
                                        </div>
                                        <div class="c-medialist__info">
                                            <div class="c-medialist__title"></div>
                                            <div class="c-medialist__artist"></div>
                                        </div>
                                        <div class="c-medialist__length">
                                            <span class="c-medialist__length-instance">-:-</span>
                                        </div>
                                        <a class="c-medialist__download" href="#" target="_blank" download="wolfsbane-talent-hunt-beat">
                                            <svg class="c-medialist__download--icon" viewBox="0 0 4.4097 6.1736">
                                                <g transform="translate(-103.63 -145.08)">
                                                    <path d="m106.27 150.2h-0.88195v-5.1153h0.88195z" />
                                                    <path
                                                          d="m105.83 150.81-2.1167-2.1167 0.52916-0.61736 1.5875 1.4993 1.5875-1.4993 0.61736 0.61736z" />
                                                    <path d="m108.04 151.25h-4.4097v-0.88194h4.4097z" />
                                                </g>
                                            </svg>
                                        </a>
                                    </li>`
            });
        }).catch(error => {
            //
        });
    }
}
import MediaLocation from './modules/MediaLocation/MediaLocation'
import MediaData from './modules/MediaData/MediaData'
import $ from 'jquery';
import 'bootstrap';
import { MediaType } from './modules/MediaData/IMediaDataConfig';

let mediaLocation: MediaLocation;
let beatMediaData: MediaData;
let songMediaData: MediaData;
let videoMediaData: MediaData;

window.addEventListener('DOMContentLoaded', (event) => {
    mediaLocation = new MediaLocation({
        formId: 'wolfsbane-location-mgt-form',
        editButtonClass: 'location-mgt-form-edit-button',
        deleteButtonClass: 'location-mgt-form-delete-button',
        listElId: 'location-mgt-list',
    });

    beatMediaData = new MediaData({
        formId: 'wolfsbane-beats-mgt-form',
        editButtonClass: 'beat-form-edit-button',
        deleteButtonClass: 'beat-form-delete-button',
        listElId: 'media-beats-list',

        uploadWrapperElClass: 'c-media-upload',
        uploadDisplayElClass: 'c-media-upload__file',
        uploadDisplayEmptyElClass: 'c-media-upload--empty',
        mp3UploadElClass: 'c-media-upload__button--mp3',
        oggUploadElClass: 'c-media-upload__button--ogg',

        noMediaClass: 'c-media-upload--empty',
        attachedMediaClass: 'c-media-upload--attached',

        attachmentInfoElClass: 'c-media-upload__attachment-info',


        maxFileSize: 15728640, // 15M in binary
        supportFileExt: ['mp3', 'ogg'],
        mediaType: MediaType.Beats,

        mediaTitleElId: "mediaTitle",
        mediaArtistElId: "mediaArtist",
        mediaLocationElId: "mediaLocation",
        mediaOrderElId: "mediaOrder",
        mediaMp3ElId: "mediaMp3",
        mediaOggElId: "mediaOgg",
        saveButtonId: "saveMediaBeatForm",
        cancelButtonId: "clearMediaBeatForm"
    });

    songMediaData = new MediaData({
        formId: 'wolfsbane-songs-mgt-form',
        editButtonClass: 'song-form-edit-button',
        deleteButtonClass: 'song-form-delete-button',
        listElId: 'media-songs-list',

        uploadWrapperElClass: 'c-media-upload',
        uploadDisplayElClass: 'c-media-upload__file',
        uploadDisplayEmptyElClass: 'c-media-upload--empty',
        mp3UploadElClass: 'c-media-upload__button--mp3',
        oggUploadElClass: 'c-media-upload__button--ogg',

        noMediaClass: 'c-media-upload--empty',
        attachedMediaClass: 'c-media-upload--attached',

        attachmentInfoElClass: 'c-media-upload__attachment-info',


        maxFileSize: 15728640, // 15M in binary
        supportFileExt: ['mp3', 'ogg'],
        mediaType: MediaType.Songs,

        mediaTitleElId: "mediaTitle",
        mediaArtistElId: "mediaArtist",
        mediaLocationElId: "mediaLocation",
        mediaOrderElId: "mediaOrder",
        mediaMp3ElId: "mediaMp3",
        mediaOggElId: "mediaOgg",
        saveButtonId: "saveMediaSongForm",
        cancelButtonId: "clearMediaSongForm"
    });

    videoMediaData = new MediaData({
        formId: 'wolfsbane-video-mgt-form',
        editButtonClass: 'video-form-edit-button',
        deleteButtonClass: 'video-form-delete-button',
        listElId: 'media-videos-list',

        uploadWrapperElClass: 'c-media-upload',
        uploadDisplayElClass: 'c-media-upload__file',
        uploadDisplayEmptyElClass: 'c-media-upload--empty',
        mp3UploadElClass: 'c-media-upload__button--mp3',
        oggUploadElClass: 'c-media-upload__button--ogg',

        noMediaClass: 'c-media-upload--empty',
        attachedMediaClass: 'c-media-upload--attached',

        attachmentInfoElClass: 'c-media-upload__attachment-info',

        mediaType: MediaType.YouTubeVideo,

        mediaTitleElId: "mediaTitle",
        mediaArtistElId: "mediaArtist",
        mediaLocationElId: "mediaLocation",
        mediaOrderElId: "mediaOrder",
        mediaVideoUrlElId: "mediaVideoUrl",
        mediaVideoIdElId: "mediaVideoId",
        saveButtonId: "saveMediaVideoForm",
        cancelButtonId: "clearMediaVideoForm"
    });

    $('#wolfsbane-admin-tab a').on('click', function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    $('.alert').alert();

    /* $('a.nav-link').on('shown.bs.tab', function (e) {
        const linkTabEl = e.target as HTMLElement;
        const slug = linkTabEl.getAttribute('data-tab-slug');

        console.log('slug', slug);
    }) */
    
});
export enum MediaType {
    Beats = 1,
    Songs = 2,
    YouTubeVideo = 3
}

export default interface IMediaDataConfig {
    formId: string;
    editButtonClass: string;
    deleteButtonClass: string;
    listElId: string;
    mp3UploadElClass: string;
    oggUploadElClass: string;

    uploadWrapperElClass: string;
    uploadDisplayElClass: string;
    uploadDisplayEmptyElClass: string;
    noMediaClass: string;
    attachedMediaClass: string;
    attachmentInfoElClass: string;

    maxFileSize?: number;
    supportFileExt?: string[];

    mediaType: MediaType;

    mediaTitleElId: string;
    mediaArtistElId: string;
    mediaLocationElId: string;
    mediaOrderElId: string;
    mediaVideoUrlElId?: string;
    mediaVideoIdElId?: string;
    mediaMp3ElId?: string;
    mediaOggElId?: string;
    saveButtonId: string;
    cancelButtonId: string;
}
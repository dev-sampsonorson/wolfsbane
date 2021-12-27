import IPlaylistItem from "./IPlaylistItem";

export default interface IMediaListConfig {
    targetId: string;
    dataAttrItemStateKey: string;
    dataAttrMediaUrlMp3Key: string;
    dataAttrMediaUrlOggKey: string;
    dataAttrMediaUrlFallbackKey: string;
    itemClass: string;
    itemHoverClass: string;
    itemRemoveClass: string;
    mediaContainerClass: string;

    progressFallbackClass: string;

    lineNumberElClass: string;
    titleElClass: string;
    artistELClass: string;
    durationElClass: string;
    playElClass: string;
    pauseElClass: string;

    loadingClass: string;

    playlist: IPlaylistItem[];
}







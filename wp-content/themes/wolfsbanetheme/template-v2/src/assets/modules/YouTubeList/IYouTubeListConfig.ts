import IYouTubeListItem from "./IYouTubeListItem";

export default interface IYouTubeListConfig {
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



    videoFrameContainerElClass: string;
    videoFrameElClass: string;
    videoFramePlaceHolderTargetId: string;
    loadingClass: string;

    playlist: IYouTubeListItem[];
}
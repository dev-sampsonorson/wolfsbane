<?php 
    $locations = $controller->getMediaLocations();

?>
<div class="wolfsbane-admin-wapper">
    <h1>Management Center</h1>
    <div id="mgt-center-notification" class="alert alert-dismissible fade d-none" role="alert">
        <div class="alert-message"></div>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <nav class="nav nav-pills" id="wolfsbane-admin-tab" role="tablist">
        <a class="nav-link active" href="#pills-locations" data-tab-slug="location">
            <div>Media Locations</div>
            <p class="wolfsbane-admin-tab-sub-heading">Register locations for playlist</p>
        </a>
        <a class="nav-link" href="#pills-beats" data-tab-slug="beats">
            <div>Beats Playlist</div>
            <p class="wolfsbane-admin-tab-sub-heading">Upload playlist of beats</p>
        </a>
        <a class="nav-link" href="#pills-songs" data-tab-slug="songs">
            <div>Songs Playlist</div>
            <p class="wolfsbane-admin-tab-sub-heading">Upload playlist of songs</p>
        </a>
        <a class="nav-link" href="#pills-youtube" data-tab-slug="youtube">
            <div>YouTube Playlist</div>
            <p class="wolfsbane-admin-tab-sub-heading">Upload playlist of videos</p>
        </a>
    </nav>
    <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-locations" role="tabpanel" aria-labelledby="pills-beats-tab">
            <div class="wolfsbane-admin-tab-content">
                <form id="wolfsbane-location-mgt-form" action="#" method="post"
                    data-url="<?php echo admin_url('admin-ajax.php'); ?>">
                    <div class="form-row">
                        <div class="form-group col-md-6 col-lg-5 col-xl-4">
                            <label for="mediaLocationName">Name</label>
                            <input type="text" class="form-control" id="mediaLocationName"
                                aria-describedby="mediaLocationNameHelp">
                            <small id="mediaLocationNameHelp" class="form-text text-muted">Location name for
                                media</small>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6 col-lg-5 col-xl-4">
                            <label for="mediaLocationSlug">Slug</label>
                            <input type="text" class="form-control" id="mediaLocationSlug"
                                aria-describedby="mediaLocationSlugHelp">
                            <small id="mediaLocationSlugHelp" class="form-text text-muted">The location slug is
                                required</small>
                        </div>
                    </div>
                    <div class="btn-group mt-4" role="group" aria-label="Action">
                        <button id="saveLocationForm" name="saveLocationForm" type="button"
                            class="btn btn-link btn-sm">Save</button>
                        <button id="clearLocationForm" name="clearLocationForm" type="button"
                            class="btn btn-link btn-sm">Clear</button>
                    </div>

                    <!-- <input type="hidden" id="action" name="action" value="submit_contact_form"> -->
                    <input type="hidden" id="get_media_location_nonce" name="get_media_location_nonce"
                        value="<?php echo wp_create_nonce("get_media_location_nonce"); ?>">
                    <input type="hidden" id="delete_media_location_nonce" name="delete_media_location_nonce"
                        value="<?php echo wp_create_nonce("delete_media_location_nonce"); ?>">
                    <input type="hidden" id="save_media_location_nonce" name="save_media_location_nonce"
                        value="<?php echo wp_create_nonce("save_media_location_nonce"); ?>">
                </form>

                <?php
                    if (count($locations) > 0):
                ?>
                <ul id="location-mgt-list" class="data-list">
                    <?php
                        foreach($locations as $record): 
                    ?>
                    <li data-id="<?php echo $record->getId(); ?>" class="data-list__item">
                        <div class="data-list__title"><?php echo $record->getName(); ?></div>
                        <div class="data-list__subtitle"><?php echo $record->getSlug(); ?></div>
                        <div class="data-list__controls">
                            <div class="data-list__metadata"><?php echo Helper::timeAgo($record->getInsertDate()); ?></div>
                            <div class="btn-group float-right" role="group" aria-label="Action">
                                <button id="edit-<?php echo $record->getId(); ?>"
                                    data-id="<?php echo $record->getId(); ?>" type="button"
                                    class="location-mgt-form-edit-button btn btn-link btn-sm">Edit</button>
                                <button id="delete-<?php echo $record->getId(); ?>"
                                    data-id="<?php echo $record->getId(); ?>" type="button"
                                    class="location-mgt-form-delete-button  btn btn-link btn-sm">Delete</button>
                            </div>
                        </div>
                    </li>
                    <?php
                        endforeach;
                    ?>
                <?php endif; ?>
            </div>
        </div>
        <div class="tab-pane fade" id="pills-beats" role="tabpanel" aria-labelledby="pills-beats-tab">
            <div class="wolfsbane-admin-tab-content">
                <form id="wolfsbane-beats-mgt-form" action="#" method="post" enctype="multipart/form-data"
                    data-url="<?php echo admin_url('admin-ajax.php'); ?>">
                    <div class="form-row">
                        <div class="form-group col-md-6 col-lg-5 col-xl-4">
                            <label for="mediaTitle">Beat Title</label>
                            <input type="text" class="form-control" id="mediaTitle" name="mediaTitle"
                                aria-describedby="mediaTitleHelp">
                            <small id="mediaTitleHelp" class="form-text text-muted">The title of the beat</small>
                        </div>
                        <div class="form-group col-md-6 col-lg-5 col-xl-4">
                            <label for="mediaArtist">Beat Artist</label>
                            <input type="text" class="form-control" id="mediaArtist" name="mediaArtist"
                                aria-describedby="mediaArtistHelp">
                            <small id="mediaArtistHelp" class="form-text text-muted">The artist of the beat</small>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6 col-lg-5 col-xl-4">
                            <label for="mediaLocation">Location</label>
                            <select class="custom-select d-block" id="mediaLocation" name="mediaLocation" aria-describedby="mediaLocationHelp">
                                <option value="">Choose...</option>
                                <?php 
                                    if (count($locations) > 0): 
                                        foreach($locations as $record):                                
                                ?>
                                <option value="<?php echo $record->getId(); ?>" ><?php echo $record->getName(); ?></option>
                                <?php
                                        endforeach;
                                    endif;
                                ?>
                            </select>
                            <small id="mediaLocationHelp" class="form-text text-muted">The location of the playlist on the site</small>
                        </div>
                        <div class="form-group col-md-6 col-lg-5 col-xl-4">
                            <label for="mediaOrder">Order</label>
                            <input type="text" class="form-control" id="mediaOrder" name="mediaOrder"
                                aria-describedby="mediaOrderHelp">
                            <small id="mediaOrderHelp" class="form-text text-muted">The order of the media in playlist</small>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-sm-6 col-md-6 col-lg-5 col-xl-4">
                            <div class="c-media-upload">
                                <div class="c-media-upload__header">
                                    <div class="c-media-upload__title">Mp3 Version</div>
                                    <div class="c-media-upload__controls">
                                        <a href="#"
                                            class="title noselect c-media-upload__button c-media-upload__button--mp3">Upload</a>
                                        <input type="file" class="form-control-file" id="mediaMp3" name="mediaMp3"
                                            accept="audio/mpeg" aria-describedby="mediaMp3Help">
                                    </div>
                                </div>
                                <div class="c-media-upload__file">
                                    <div class="c-media-upload__message">No media file uploaded</div>
                                    <div class="c-media-upload__attachment">
                                        <svg class="c-media-upload__icon" viewBox="0 0 16 16" class="bi bi-paperclip"
                                            fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                                        </svg>
                                        <div class="c-media-upload__attachment-info">media-file.mp3</div>
                                    </div>
                                </div>
                            </div>
                            <small id="mediaMp3Help" class="form-text text-muted">The mp3 version of the beat
                                media</small>
                        </div>
                        <div class="form-group col-sm-6 col-md-6 col-lg-5 col-xl-4">
                            <div class="c-media-upload">
                                <div class="c-media-upload__header">
                                    <div class="c-media-upload__title">Ogg Version</div>
                                    <div class="c-media-upload__controls">
                                        <a href="#"
                                            class="title noselect c-media-upload__button c-media-upload__button--ogg">Upload</a>
                                        <input type="file" class="form-control-file" id="mediaOgg" name="mediaOgg"
                                            accept="audio/ogg" aria-describedby="mediaOggHelp">
                                    </div>
                                </div>
                                <div class="c-media-upload__file">
                                    <div class="c-media-upload__message">No media file uploaded</div>
                                    <div class="c-media-upload__attachment">
                                        <svg class="c-media-upload__icon" viewBox="0 0 16 16" class="bi bi-paperclip"
                                            fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                                        </svg>
                                        <div class="c-media-upload__attachment-info">media-file.ogg</div>
                                    </div>
                                </div>
                            </div>
                            <small id="mediaOggHelp" class="form-text text-muted">The ogg version of the beat
                                media</small>
                        </div>
                    </div>
                    <div class="btn-group mt-4" role="group" aria-label="Action">
                        <button id="saveMediaBeatForm" name="saveMediaBeatForm" type="button"
                            class="btn btn-link btn-sm">Save</button>
                        <button id="clearMediaBeatForm" name="clearMediaBeatForm" type="button"
                            class="btn btn-link btn-sm">Clear</button>
                    </div>
                    <input type="hidden" id="get_media_data_nonce" name="get_media_data_nonce"
                        value="<?php echo wp_create_nonce("get_media_data_nonce"); ?>">
                    <input type="hidden" id="delete_media_data_nonce" name="delete_media_data_nonce"
                        value="<?php echo wp_create_nonce("delete_media_data_nonce"); ?>">
                    <input type="hidden" id="save_media_data_nonce" name="save_media_data_nonce"
                        value="<?php echo wp_create_nonce("save_media_data_nonce"); ?>">
                </form>

                <?php
                    $beats = $controller->getMediaPlaylist(MediaType::BEATS);

                    if (count($beats) > 0):
                ?>
                <ul id="media-beats-list" class="data-list">
                    <?php
                        foreach($beats as $record): 
                            $location = $controller->getMediaLocation($record->getLocationId());

                            if ($record->useAudio() === null) continue;
                            if ($location === null) continue;

                            $mp3NewFilename = WB_UPLOAD_MEDIA_BASE_URL . $record->useAudio()->getMp3Filename();
                            $oggNewFilename = WB_UPLOAD_MEDIA_BASE_URL . $record->useAudio()->getOggFilename();
                    ?>
                    <li data-id="<?php echo $record->getId(); ?>" class="data-list__item">
                        <div class="row">
                            <div class="col-12 col-sm-6 col-md-6 col-xl-3 mb-3">
                                <h6 class="my-0"><?php echo $record->getTitle(); ?></h6>
                                <small class="text-muted">Title</small>
                            </div>
                            <div class="col-12 col-sm-6 col-md-6 col-xl-3 mb-3">
                                <h6 class="my-0"><?php echo $record->getArtist(); ?></h6>
                                <small class="text-muted">Artist</small>
                            </div>
                            <div class="col-12 col-sm-6 col-md-6 col-xl-3 mb-xl-3">
                                <h6 class="my-0"><?php echo $location->getName(); ?></h6>
                                <small class="text-muted">Location</small>
                            </div>
                            <div class="col-12 col-sm-6 col-md-6 col-xl-3 mb-xl-3">
                                <h6 class="my-0"><?php echo $record->getOrder(); ?></h6>
                                <small class="text-muted">Order</small>
                            </div>
                        </div>
                        <div class="data-list__controls">
                            <ul class="icon-list">
                                <li class="icon-list__item">
                                    <a class="icon-list__link icon-list__link--mp3"
                                        href="<?php echo $mp3NewFilename; ?>" target="_blank"></a>
                                </li>
                                <li class="icon-list__item">
                                    <a class="icon-list__link icon-list__link--ogg"
                                        href="<?php echo $oggNewFilename; ?>" target="_blank"></a>
                                </li>
                            </ul>
                            <div class="btn-group float-right" role="group" aria-label="Action">
                                <button id="edit-<?php echo $record->getId(); ?>"
                                    data-id="<?php echo $record->getId(); ?>" type="button"
                                    class="beat-form-edit-button btn btn-link btn-sm">Edit</button>
                                <button id="delete-<?php echo $record->getId(); ?>"
                                    data-id="<?php echo $record->getId(); ?>" type="button"
                                    class="beat-form-delete-button btn btn-link btn-sm">Delete</button>
                            </div>
                        </div>
                    </li>
                    <?php
                        endforeach;
                    ?>
                </ul>
                <?php endif; ?>
            </div>
        </div>
        <div class="tab-pane fade" id="pills-songs" role="tabpanel" aria-labelledby="pills-songs-tab">
            <div class="wolfsbane-admin-tab-content">
                <form id="wolfsbane-songs-mgt-form" action="#" method="post" enctype="multipart/form-data"
                    data-url="<?php echo admin_url('admin-ajax.php'); ?>">
                    <div class="form-row">
                        <div class="form-group col-md-6 col-lg-5 col-xl-4">
                            <label for="mediaTitle">Song Title</label>
                            <input type="text" class="form-control" id="mediaTitle" name="mediaTitle"
                                aria-describedby="mediaTitleHelp">
                            <small id="mediaTitleHelp" class="form-text text-muted">The title of the song</small>
                        </div>
                        <div class="form-group col-md-6 col-lg-5 col-xl-4">
                            <label for="mediaArtist">Song Artist</label>
                            <input type="text" class="form-control" id="mediaArtist" name="mediaArtist"
                                aria-describedby="mediaArtistHelp">
                            <small id="mediaArtistHelp" class="form-text text-muted">The artist of the song</small>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6 col-lg-5 col-xl-4">
                            <label for="mediaLocation">Location</label>
                            <select class="custom-select d-block" id="mediaLocation" name="mediaLocation" aria-describedby="mediaLocationHelp">
                                <option value="">Choose...</option>
                                <?php 
                                    if (count($locations) > 0): 
                                        foreach($locations as $record):                                
                                ?>
                                <option value="<?php echo $record->getId(); ?>" ><?php echo $record->getName(); ?></option>
                                <?php
                                        endforeach;
                                    endif;
                                ?>
                            </select>
                            <small id="mediaLocationHelp" class="form-text text-muted">The location of the playlist on the site</small>
                        </div>
                        <div class="form-group col-md-6 col-lg-5 col-xl-4">
                            <label for="mediaOrder">Order</label>
                            <input type="text" class="form-control" id="mediaOrder" name="mediaOrder"
                                aria-describedby="mediaOrderHelp">
                            <small id="mediaOrderHelp" class="form-text text-muted">The order of the media in playlist</small>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-sm-6 col-md-6 col-lg-5 col-xl-4">
                            <div class="c-media-upload">
                                <div class="c-media-upload__header">
                                    <div class="c-media-upload__title">Mp3 Version</div>
                                    <div class="c-media-upload__controls">
                                        <a href="#"
                                            class="title noselect c-media-upload__button c-media-upload__button--mp3">Upload</a>
                                        <input type="file" class="form-control-file" id="mediaMp3" name="mediaMp3"
                                            accept="audio/mpeg" aria-describedby="mediaMp3Help">
                                    </div>
                                </div>
                                <div class="c-media-upload__file">
                                    <div class="c-media-upload__message">No media file uploaded</div>
                                    <div class="c-media-upload__attachment">
                                        <svg class="c-media-upload__icon" viewBox="0 0 16 16" class="bi bi-paperclip"
                                            fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                                        </svg>
                                        <div class="c-media-upload__attachment-info">media-file.mp3</div>
                                    </div>
                                </div>
                            </div>
                            <small id="mediaMp3Help" class="form-text text-muted">The mp3 version of the song
                                media</small>
                        </div>
                        <div class="form-group col-sm-6 col-md-6 col-lg-5 col-xl-4">
                            <div class="c-media-upload">
                                <div class="c-media-upload__header">
                                    <div class="c-media-upload__title">Ogg Version</div>
                                    <div class="c-media-upload__controls">
                                        <a href="#"
                                            class="title noselect c-media-upload__button c-media-upload__button--ogg">Upload</a>
                                        <input type="file" class="form-control-file" id="mediaOgg" name="mediaOgg"
                                            accept="audio/ogg" aria-describedby="mediaOggHelp">
                                    </div>
                                </div>
                                <div class="c-media-upload__file">
                                    <div class="c-media-upload__message">No media file uploaded</div>
                                    <div class="c-media-upload__attachment">
                                        <svg class="c-media-upload__icon" viewBox="0 0 16 16" class="bi bi-paperclip"
                                            fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                                        </svg>
                                        <div class="c-media-upload__attachment-info">media-file.ogg</div>
                                    </div>
                                </div>
                            </div>
                            <small id="mediaOggHelp" class="form-text text-muted">The ogg version of the song
                                media</small>
                        </div>
                    </div>
                    <div class="btn-group mt-4" role="group" aria-label="Action">
                        <button id="saveMediaSongForm" name="saveMediaSongForm" type="button"
                            class="btn btn-link btn-sm">Save</button>
                        <button id="clearMediaSongForm" name="clearMediaSongForm" type="button"
                            class="btn btn-link btn-sm">Clear</button>
                    </div>
                    <input type="hidden" id="get_media_data_nonce" name="get_media_data_nonce"
                        value="<?php echo wp_create_nonce("get_media_data_nonce"); ?>">
                    <input type="hidden" id="delete_media_data_nonce" name="delete_media_data_nonce"
                        value="<?php echo wp_create_nonce("delete_media_data_nonce"); ?>">
                    <input type="hidden" id="save_media_data_nonce" name="save_media_data_nonce"
                        value="<?php echo wp_create_nonce("save_media_data_nonce"); ?>">
                </form>

                <?php
                    $songs = $controller->getMediaPlaylist(MediaType::SONGS);

                    if (count($songs) > 0):
                ?>
                <ul id="media-songs-list" class="data-list">
                    <?php
                        foreach($songs as $record): 
                            $location = $controller->getMediaLocation($record->getLocationId());

                            if ($record->useAudio() === null) continue;
                            if ($location === null) continue;

                            $mp3NewFilename = WB_UPLOAD_MEDIA_BASE_URL . $record->useAudio()->getMp3Filename();
                            $oggNewFilename = WB_UPLOAD_MEDIA_BASE_URL . $record->useAudio()->getOggFilename();
                    ?>
                    <li data-id="<?php echo $record->getId(); ?>" class="data-list__item">
                        <div class="row">
                            <div class="col-12 col-sm-6 col-md-6 col-xl-3 mb-3">
                                <h6 class="my-0"><?php echo $record->getTitle(); ?></h6>
                                <small class="text-muted">Title</small>
                            </div>
                            <div class="col-12 col-sm-6 col-md-6 col-xl-3 mb-3">
                                <h6 class="my-0"><?php echo $record->getArtist(); ?></h6>
                                <small class="text-muted">Artist</small>
                            </div>
                            <div class="col-12 col-sm-6 col-md-6 col-xl-3 mb-xl-3">
                                <h6 class="my-0"><?php echo $location->getName(); ?></h6>
                                <small class="text-muted">Location</small>
                            </div>
                            <div class="col-12 col-sm-6 col-md-6 col-xl-3 mb-xl-3">
                                <h6 class="my-0"><?php echo $record->getOrder(); ?></h6>
                                <small class="text-muted">Order</small>
                            </div>
                        </div>
                        <div class="data-list__controls">
                            <ul class="icon-list">
                                <li class="icon-list__item">
                                    <a class="icon-list__link icon-list__link--mp3"
                                        href="<?php echo $mp3NewFilename; ?>" target="_blank"></a>
                                </li>
                                <li class="icon-list__item">
                                    <a class="icon-list__link icon-list__link--ogg"
                                        href="<?php echo $oggNewFilename; ?>" target="_blank"></a>
                                </li>
                            </ul>
                            <div class="btn-group float-right" role="group" aria-label="Action">
                                <button id="edit-<?php echo $record->getId(); ?>"
                                    data-id="<?php echo $record->getId(); ?>" type="button"
                                    class="song-form-edit-button btn btn-link btn-sm">Edit</button>
                                <button id="delete-<?php echo $record->getId(); ?>"
                                    data-id="<?php echo $record->getId(); ?>" type="button"
                                    class="song-form-delete-button btn btn-link btn-sm">Delete</button>
                            </div>
                        </div>
                    </li>
                    <?php
                        endforeach;
                    ?>
                </ul>
                <?php endif; ?>
            </div>
        </div>
        <div class="tab-pane fade" id="pills-youtube" role="tabpanel" aria-labelledby="pills-youtube-tab">
            <div class="wolfsbane-admin-tab-content">
                <form id="wolfsbane-video-mgt-form" action="#" method="post" enctype="multipart/form-data"
                    data-url="<?php echo admin_url('admin-ajax.php'); ?>">
                    <div class="form-row">
                        <div class="form-group col-md-6 col-lg-5 col-xl-4">
                            <label for="mediaTitle">Video Title</label>
                            <input type="text" class="form-control" id="mediaTitle" name="mediaTitle"
                                aria-describedby="mediaTitleHelp">
                            <small id="mediaTitleHelp" class="form-text text-muted">The title of the video</small>
                        </div>
                        <div class="form-group col-md-6 col-lg-5 col-xl-4">
                            <label for="mediaArtist">Video Author</label>
                            <input type="text" class="form-control" id="mediaArtist" name="mediaArtist"
                                aria-describedby="mediaArtistHelp">
                            <small id="mediaArtistHelp" class="form-text text-muted">The artist of the video</small>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6 col-lg-5 col-xl-4">
                            <label for="mediaLocation">Location</label>
                            <select class="custom-select d-block" id="mediaLocation" name="mediaLocation" aria-describedby="mediaLocationHelp">
                                <option value="">Choose...</option>
                                <?php 
                                    if (count($locations) > 0): 
                                        foreach($locations as $record):                                
                                ?>
                                <option value="<?php echo $record->getId(); ?>" ><?php echo $record->getName(); ?></option>
                                <?php
                                        endforeach;
                                    endif;
                                ?>
                            </select>
                            <small id="mediaLocationHelp" class="form-text text-muted">The location of the playlist on the site</small>
                        </div>
                        <div class="form-group col-md-6 col-lg-5 col-xl-4">
                            <label for="mediaOrder">Order</label>
                            <input type="text" class="form-control" id="mediaOrder" name="mediaOrder"
                                aria-describedby="mediaOrderHelp">
                            <small id="mediaOrderHelp" class="form-text text-muted">The order of the media in playlist</small>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6 col-lg-5 col-xl-4">
                            <label for="mediaVideoUrl">Video URL</label>
                            <input type="text" class="form-control" id="mediaVideoUrl" name="mediaVideoUrl"
                                aria-describedby="mediaVideoUrlHelp">
                            <small id="mediaVideoUrlHelp" class="form-text text-muted">The video URL for the YouTube video</small>
                        </div>
                        <div class="form-group col-md-6 col-lg-5 col-xl-4">
                            <label for="mediaVideoId">Video ID</label>
                            <input type="text" class="form-control" id="mediaVideoId" name="mediaVideoId"
                                aria-describedby="mediaVideoIdHelp">
                            <small id="mediaVideoIdHelp" class="form-text text-muted">The video ID for the YouTube video</small>
                        </div>
                    </div>
                    <div class="btn-group mt-4" role="group" aria-label="Action">
                        <button id="saveMediaVideoForm" name="saveMediaVideoForm" type="button"
                            class="btn btn-link btn-sm">Save</button>
                        <button id="clearMediaVideoForm" name="clearMediaVideoForm" type="button"
                            class="btn btn-link btn-sm">Clear</button>
                    </div>
                    <input type="hidden" id="get_media_data_nonce" name="get_media_data_nonce"
                        value="<?php echo wp_create_nonce("get_media_data_nonce"); ?>">
                    <input type="hidden" id="delete_media_data_nonce" name="delete_media_data_nonce"
                        value="<?php echo wp_create_nonce("delete_media_data_nonce"); ?>">
                    <input type="hidden" id="save_media_data_nonce" name="save_media_data_nonce"
                        value="<?php echo wp_create_nonce("save_media_data_nonce"); ?>">
                </form>

                <?php
                    $videos = $controller->getMediaPlaylist(MediaType::YOUTUBE_VIDEO);

                    if (count($videos) > 0):
                ?>
                <ul id="media-videos-list" class="data-list">
                    <?php
                        foreach($videos as $record): 
                            $location = $controller->getMediaLocation($record->getLocationId());

                            if ($record->useVideo() === null) continue;
                            if ($location === null) continue;
                    ?>
                    <li data-id="<?php echo $record->getId(); ?>" class="data-list__item">
                        <div class="row">
                            <div class="col-12 col-sm-6 col-md-6 col-xl-3 mb-3">
                                <h6 class="my-0"><?php echo html_entity_decode($record->getTitle(), ENT_QUOTES); ?></h6>
                                <small class="text-muted">Title</small>
                            </div>
                            <div class="col-12 col-sm-6 col-md-6 col-xl-3 mb-3">
                                <h6 class="my-0"><?php echo html_entity_decode($record->getArtist(), ENT_QUOTES); ?></h6>
                                <small class="text-muted">Artist</small>
                            </div>
                            <div class="col-12 col-sm-6 col-md-6 col-xl-3 mb-xl-3">
                                <h6 class="my-0"><?php echo $location->getName(); ?></h6>
                                <small class="text-muted">Location</small>
                            </div>
                            <div class="col-12 col-sm-6 col-md-6 col-xl-3 mb-xl-3">
                                <h6 class="my-0"><?php echo $record->getOrder(); ?></h6>
                                <small class="text-muted">Order</small>
                            </div>
                            <div class="col-12 col-sm-6 col-md-6 col-xl-3 mb-xl-3">
                                <h6 class="my-0 overflow-hidden">
                                    <a href="<?php echo urldecode($record->useVideo()->getVideoUrl()); ?>" target="_blank" class="text-break">
                                    <?php echo urldecode($record->useVideo()->getVideoUrl()); ?>
                                    </a>
                                </h6>
                                <small class="text-muted">Video URL</small>
                            </div>
                            <div class="col-12 col-sm-6 col-md-6 col-xl-3 mb-xl-3">
                                <h6 class="my-0"><?php echo $record->useVideo()->getVideoId(); ?></h6>
                                <small class="text-muted">Video ID</small>
                            </div>
                        </div>
                        <div class="data-list__controls">
                            <div class="btn-group float-right" role="group" aria-label="Action">
                                <button id="edit-<?php echo $record->getId(); ?>"
                                    data-id="<?php echo $record->getId(); ?>" type="button"
                                    class="video-form-edit-button btn btn-link btn-sm">Edit</button>
                                <button id="delete-<?php echo $record->getId(); ?>"
                                    data-id="<?php echo $record->getId(); ?>" type="button"
                                    class="video-form-delete-button btn btn-link btn-sm">Delete</button>
                            </div>
                        </div>
                    </li>
                    <?php
                        endforeach;
                    ?>
                </ul>
                <?php endif; ?>
            </div>
        </div>
    </div>
</div>
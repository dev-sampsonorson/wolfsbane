(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["management-center-script"],{

/***/ "./src/management-center.ts":
/*!**********************************!*\
  !*** ./src/management-center.ts ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_MediaLocation_MediaLocation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/MediaLocation/MediaLocation */ "./src/modules/MediaLocation/MediaLocation.ts");
/* harmony import */ var _modules_MediaData_MediaData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/MediaData/MediaData */ "./src/modules/MediaData/MediaData.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_MediaData_IMediaDataConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/MediaData/IMediaDataConfig */ "./src/modules/MediaData/IMediaDataConfig.ts");





var mediaLocation;
var beatMediaData;
var songMediaData;
var videoMediaData;
window.addEventListener('DOMContentLoaded', function (event) {
    mediaLocation = new _modules_MediaLocation_MediaLocation__WEBPACK_IMPORTED_MODULE_0__["default"]({
        formId: 'wolfsbane-location-mgt-form',
        editButtonClass: 'location-mgt-form-edit-button',
        deleteButtonClass: 'location-mgt-form-delete-button',
        listElId: 'location-mgt-list',
    });
    beatMediaData = new _modules_MediaData_MediaData__WEBPACK_IMPORTED_MODULE_1__["default"]({
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
        maxFileSize: 15728640,
        supportFileExt: ['mp3', 'ogg'],
        mediaType: _modules_MediaData_IMediaDataConfig__WEBPACK_IMPORTED_MODULE_4__["MediaType"].Beats,
        mediaTitleElId: "mediaTitle",
        mediaArtistElId: "mediaArtist",
        mediaLocationElId: "mediaLocation",
        mediaOrderElId: "mediaOrder",
        mediaMp3ElId: "mediaMp3",
        mediaOggElId: "mediaOgg",
        saveButtonId: "saveMediaBeatForm",
        cancelButtonId: "clearMediaBeatForm"
    });
    songMediaData = new _modules_MediaData_MediaData__WEBPACK_IMPORTED_MODULE_1__["default"]({
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
        maxFileSize: 15728640,
        supportFileExt: ['mp3', 'ogg'],
        mediaType: _modules_MediaData_IMediaDataConfig__WEBPACK_IMPORTED_MODULE_4__["MediaType"].Songs,
        mediaTitleElId: "mediaTitle",
        mediaArtistElId: "mediaArtist",
        mediaLocationElId: "mediaLocation",
        mediaOrderElId: "mediaOrder",
        mediaMp3ElId: "mediaMp3",
        mediaOggElId: "mediaOgg",
        saveButtonId: "saveMediaSongForm",
        cancelButtonId: "clearMediaSongForm"
    });
    videoMediaData = new _modules_MediaData_MediaData__WEBPACK_IMPORTED_MODULE_1__["default"]({
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
        mediaType: _modules_MediaData_IMediaDataConfig__WEBPACK_IMPORTED_MODULE_4__["MediaType"].YouTubeVideo,
        mediaTitleElId: "mediaTitle",
        mediaArtistElId: "mediaArtist",
        mediaLocationElId: "mediaLocation",
        mediaOrderElId: "mediaOrder",
        mediaVideoUrlElId: "mediaVideoUrl",
        mediaVideoIdElId: "mediaVideoId",
        saveButtonId: "saveMediaVideoForm",
        cancelButtonId: "clearMediaVideoForm"
    });
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#wolfsbane-admin-tab a').on('click', function (e) {
        e.preventDefault();
        jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).tab('show');
    });
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.alert').alert();
    /* $('a.nav-link').on('shown.bs.tab', function (e) {
        const linkTabEl = e.target as HTMLElement;
        const slug = linkTabEl.getAttribute('data-tab-slug');

        console.log('slug', slug);
    }) */
});


/***/ }),

/***/ "./src/modules/FormNotification/FormNotification.ts":
/*!**********************************************************!*\
  !*** ./src/modules/FormNotification/FormNotification.ts ***!
  \**********************************************************/
/*! exports provided: NotificationStatus, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationStatus", function() { return NotificationStatus; });
var NotificationStatus;
(function (NotificationStatus) {
    NotificationStatus["Primary"] = "alert-primary";
    NotificationStatus["Secondary"] = "alert-secondary";
    NotificationStatus["Success"] = "alert-success";
    NotificationStatus["Danger"] = "alert-danger";
    NotificationStatus["Warning"] = "alert-warning";
    NotificationStatus["Info"] = "alert-info";
    NotificationStatus["Light"] = "alert-light";
    NotificationStatus["Dark"] = "alert-dark";
})(NotificationStatus || (NotificationStatus = {}));
var FormNotification = /** @class */ (function () {
    function FormNotification(config) {
        this.config = config;
        if (config === null)
            return;
        this.config = this.config;
        this.containerEl = document.getElementById(this.config.containerId);
        this.messageEl = this.containerEl.querySelector("." + this.config.messageElClass);
    }
    FormNotification.prototype.show = function (status, message) {
        var _this = this;
        Object.values(NotificationStatus).forEach(function (item, index) {
            _this.containerEl.classList.remove(item);
        });
        this.messageEl.innerHTML = message;
        this.containerEl.classList.remove('d-none');
        this.containerEl.classList.add('show', status);
    };
    FormNotification.prototype.hide = function () {
        this.containerEl.classList.remove('show');
        this.containerEl.classList.add('d-none');
    };
    return FormNotification;
}());
/* harmony default export */ __webpack_exports__["default"] = (FormNotification);


/***/ }),

/***/ "./src/modules/MediaData/IMediaDataConfig.ts":
/*!***************************************************!*\
  !*** ./src/modules/MediaData/IMediaDataConfig.ts ***!
  \***************************************************/
/*! exports provided: MediaType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaType", function() { return MediaType; });
var MediaType;
(function (MediaType) {
    MediaType[MediaType["Beats"] = 1] = "Beats";
    MediaType[MediaType["Songs"] = 2] = "Songs";
    MediaType[MediaType["YouTubeVideo"] = 3] = "YouTubeVideo";
})(MediaType || (MediaType = {}));


/***/ }),

/***/ "./src/modules/MediaData/MediaData.ts":
/*!********************************************!*\
  !*** ./src/modules/MediaData/MediaData.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TeboUtility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TeboUtility */ "./src/modules/TeboUtility.ts");
/* harmony import */ var _FormNotification_FormNotification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FormNotification/FormNotification */ "./src/modules/FormNotification/FormNotification.ts");
/* harmony import */ var _IMediaDataConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IMediaDataConfig */ "./src/modules/MediaData/IMediaDataConfig.ts");
/* harmony import */ var _Result__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Result */ "./src/modules/Result.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);






var Action;
(function (Action) {
    Action["GetMediaLocation"] = "get_media_location";
    Action["DeleteMediaLocation"] = "delete_media_location";
    Action["SaveMediaLocation"] = "save_media_location";
    Action["GetMediaData"] = "get_media_data";
    Action["DeleteMediaData"] = "delete_media_data";
    Action["SaveMediaData"] = "save_media_data";
})(Action || (Action = {}));
var SupportFileType;
(function (SupportFileType) {
    SupportFileType["Mp3"] = "mp3";
    SupportFileType["Ogg"] = "ogg";
})(SupportFileType || (SupportFileType = {}));
var MediaData = /** @class */ (function () {
    function MediaData(config) {
        var _a;
        this.config = config;
        this.notificationForm = null;
        this.formEl = document.getElementById(this.config.formId);
        this.mediaTitleEl = this.formEl.querySelector(":scope #" + this.config.mediaTitleElId);
        this.mediaArtistEl = this.formEl.querySelector(":scope #" + this.config.mediaArtistElId);
        this.mediaLocationEl = this.formEl.querySelector(":scope #" + this.config.mediaLocationElId);
        this.mediaOrderEl = this.formEl.querySelector(":scope #" + this.config.mediaOrderElId);
        this.mediaMp3El = this.config.mediaMp3ElId ? this.formEl.querySelector(":scope #" + this.config.mediaMp3ElId) : null;
        this.mediaOggEl = this.config.mediaOggElId ? this.formEl.querySelector(":scope #" + this.config.mediaOggElId) : null;
        this.mediaVideoUrlEl = this.config.mediaVideoUrlElId ? this.formEl.querySelector(":scope #" + this.config.mediaVideoUrlElId) : null;
        this.mediaVideoIdEl = this.config.mediaVideoIdElId ? this.formEl.querySelector(":scope #" + this.config.mediaVideoIdElId) : null;
        this.saveEl = this.formEl.querySelector(":scope #" + this.config.saveButtonId);
        this.clearEl = this.formEl.querySelector(":scope #" + this.config.cancelButtonId);
        this.uploadWrapperEls = Array.from(this.formEl.querySelectorAll(":scope ." + this.config.uploadWrapperElClass) || []);
        this.uploadDisplayEls = Array.from(this.formEl.querySelectorAll(":scope ." + this.config.uploadDisplayElClass) || []);
        this.mp3UploadEl = this.formEl.querySelector(":scope ." + this.config.mp3UploadElClass);
        this.oggUploadEl = this.formEl.querySelector(":scope ." + this.config.oggUploadElClass);
        this.listBlockEl = (_a = document.querySelector("#" + this.config.listElId)) !== null && _a !== void 0 ? _a : this.createListBlockEl();
        this.setup();
    }
    MediaData.prototype.editClickHandler = function (e) {
        var _this = this;
        e.preventDefault();
        if (!this.formEl.dataset.url)
            return;
        var el = (e.target || e.srcElement);
        var mediaDataId = +(el.getAttribute('data-id') || '0');
        var formData = new FormData();
        this.formEl.setAttribute('data-id', mediaDataId + '');
        formData.append("mediaDataId", mediaDataId + '');
        formData.append("action", Action.GetMediaData);
        formData.append("nonce", document.getElementById(Action.GetMediaData + '_nonce').value);
        fetch(this.formEl.dataset.url, {
            method: "POST",
            body: new URLSearchParams(formData)
        }).then(function (response) {
            if (response.ok) {
                if (_TeboUtility__WEBPACK_IMPORTED_MODULE_1__["default"].isJsonResponse(response))
                    return response.json();
                return response.text();
            }
            return Promise.reject(response);
        }).then(function (result) {
            if (!_TeboUtility__WEBPACK_IMPORTED_MODULE_1__["default"].tryParseToJson(result))
                return;
            var message = '';
            var outcome = JSON.parse(result);
            if (!outcome.success)
                message = 'Unable to retrieve media data';
            if (outcome.success) {
                _this.mediaTitleEl.value = outcome.data.result.title;
                _this.mediaArtistEl.value = outcome.data.result.artist;
                _this.mediaLocationEl.value = outcome.data.result.locationId;
                _this.mediaOrderEl.value = outcome.data.result.order;
                if (_this.mediaVideoUrlEl)
                    _this.mediaVideoUrlEl.value = outcome.data.result.videoUrl;
                if (_this.mediaVideoIdEl)
                    _this.mediaVideoIdEl.value = outcome.data.result.videoId;
                _this.uploadWrapperEls.forEach(function (item) {
                    var fileInputEl = item.querySelector('[type=file]');
                    var attachmentInfoEl = item.querySelector("." + _this.config.attachmentInfoElClass);
                    var isMp3FileInput = fileInputEl.id === 'mediaMp3';
                    var isOggFileInput = fileInputEl.id === 'mediaOgg';
                    var hasMp3File = Object(jquery__WEBPACK_IMPORTED_MODULE_5__["trim"])(outcome.data.result.mp3Filename) !== '';
                    var hasOggFile = Object(jquery__WEBPACK_IMPORTED_MODULE_5__["trim"])(outcome.data.result.oggFilename) !== '';
                    if (isMp3FileInput) {
                        if (hasMp3File) {
                            item.classList.add(_this.config.attachedMediaClass);
                            attachmentInfoEl.innerHTML = outcome.data.result.mp3Filename; //'media-file.mp3';
                        }
                        else {
                            item.classList.remove("" + _this.config.attachedMediaClass);
                        }
                    }
                    if (isOggFileInput) {
                        if (hasOggFile) {
                            item.classList.add(_this.config.attachedMediaClass);
                            attachmentInfoEl.innerHTML = outcome.data.result.oggFilename; //'media-file.ogg';
                        }
                        else {
                            item.classList.remove("" + _this.config.attachedMediaClass);
                        }
                    }
                });
            }
        }).catch(function (error) {
            // enable the submit button
            // this.submitEl.disabled = false;
            var _a;
            (_a = _this.notificationForm) === null || _a === void 0 ? void 0 : _a.show(_FormNotification_FormNotification__WEBPACK_IMPORTED_MODULE_2__["NotificationStatus"].Danger, "Problem retrieving media location information");
        });
    };
    MediaData.prototype.deleteClickHandler = function (e) {
        var _this = this;
        e.preventDefault();
        if (!this.formEl.dataset.url)
            return;
        if (!confirm("Are you sure you want to delete the media data?"))
            return;
        var el = (e.target || e.srcElement);
        var mediaDataId = +(el.getAttribute('data-id') || '0');
        var formData = new FormData();
        this.formEl.setAttribute('data-id', mediaDataId + '');
        formData.append("mediaDataId", mediaDataId + '');
        formData.append("action", Action.DeleteMediaData);
        formData.append("nonce", document.getElementById(Action.DeleteMediaData + '_nonce').value);
        fetch(this.formEl.dataset.url, {
            method: "POST",
            body: new URLSearchParams(formData)
        }).then(function (response) {
            _this.formEl.setAttribute('data-id', '');
            if (response.ok) {
                if (_TeboUtility__WEBPACK_IMPORTED_MODULE_1__["default"].isJsonResponse(response))
                    return response.json();
                return response.text();
            }
            return Promise.reject(response);
        }).then(function (result) {
            var _a, _b;
            if (!_TeboUtility__WEBPACK_IMPORTED_MODULE_1__["default"].tryParseToJson(result))
                return;
            var message = '';
            var outcome = JSON.parse(result);
            if (!outcome.success)
                (_a = _this.notificationForm) === null || _a === void 0 ? void 0 : _a.show(_FormNotification_FormNotification__WEBPACK_IMPORTED_MODULE_2__["NotificationStatus"].Danger, "Unable to send contact form message");
            if (outcome.success) {
                _this.removeRow(mediaDataId);
                (_b = _this.notificationForm) === null || _b === void 0 ? void 0 : _b.show(_FormNotification_FormNotification__WEBPACK_IMPORTED_MODULE_2__["NotificationStatus"].Success, "Media data was deleted successfully");
            }
        }).catch(function (error) {
            var _a;
            (_a = _this.notificationForm) === null || _a === void 0 ? void 0 : _a.show(_FormNotification_FormNotification__WEBPACK_IMPORTED_MODULE_2__["NotificationStatus"].Danger, "Problem deleting media data information");
        });
    };
    MediaData.prototype.saveClickHandler = function (e) {
        var _a, _b;
        e.preventDefault();
        var el = (e.target || e.srcElement);
        var result;
        (_a = this.notificationForm) === null || _a === void 0 ? void 0 : _a.hide();
        result = this.saveForm(el);
        if (!result.IsSuccessful())
            (_b = this.notificationForm) === null || _b === void 0 ? void 0 : _b.show(_FormNotification_FormNotification__WEBPACK_IMPORTED_MODULE_2__["NotificationStatus"].Danger, result.getMessage());
    };
    MediaData.prototype.saveForm = function (el) {
        var _this = this;
        var _a, _b, _c, _d;
        try {
            var result = void 0;
            if (!this.formEl.dataset.url)
                return _Result__WEBPACK_IMPORTED_MODULE_4__["default"].Error("Cannot save form", "Data url not specified");
            var formData = new FormData();
            var mediaDataId = +(this.formEl.getAttribute('data-id') || '0');
            var mediaTitle = Object(jquery__WEBPACK_IMPORTED_MODULE_5__["trim"])(this.mediaTitleEl.value);
            var mediaArtist = Object(jquery__WEBPACK_IMPORTED_MODULE_5__["trim"])(this.mediaArtistEl.value);
            var locationId = Object(jquery__WEBPACK_IMPORTED_MODULE_5__["trim"])(this.mediaLocationEl.value);
            var order = Object(jquery__WEBPACK_IMPORTED_MODULE_5__["trim"])(this.mediaOrderEl.value);
            if (!mediaTitle)
                return _Result__WEBPACK_IMPORTED_MODULE_4__["default"].Error("Media title is required");
            if (!mediaArtist)
                return _Result__WEBPACK_IMPORTED_MODULE_4__["default"].Error("Media artist is required");
            formData.append("mediaDataId", mediaDataId + '');
            formData.append("mediaTypeId", this.config.mediaType + '');
            formData.append("mediaTitle", mediaTitle);
            formData.append("mediaArtist", mediaArtist);
            formData.append("locationId", locationId);
            formData.append("order", order);
            formData.append("action", Action.SaveMediaData);
            formData.append("nonce_name", Action.SaveMediaData + '_nonce');
            formData.append("nonce", document.getElementById(Action.SaveMediaData + '_nonce').value);
            if (this.config.mediaType === _IMediaDataConfig__WEBPACK_IMPORTED_MODULE_3__["MediaType"].Beats || this.config.mediaType === _IMediaDataConfig__WEBPACK_IMPORTED_MODULE_3__["MediaType"].Songs) {
                result = this.appendUploadData(mediaDataId, formData, ((_a = this.mediaMp3El) === null || _a === void 0 ? void 0 : _a.files) || null, SupportFileType.Mp3);
                if (!result.IsSuccessful())
                    return result;
                result = this.appendUploadData(mediaDataId, formData, ((_b = this.mediaOggEl) === null || _b === void 0 ? void 0 : _b.files) || null, SupportFileType.Ogg);
                if (!result.IsSuccessful())
                    return result;
            }
            if (this.config.mediaType === _IMediaDataConfig__WEBPACK_IMPORTED_MODULE_3__["MediaType"].YouTubeVideo) {
                formData.append("videoUrl", Object(jquery__WEBPACK_IMPORTED_MODULE_5__["trim"])(((_c = this.mediaVideoUrlEl) === null || _c === void 0 ? void 0 : _c.value) || ''));
                formData.append("videoId", Object(jquery__WEBPACK_IMPORTED_MODULE_5__["trim"])(((_d = this.mediaVideoIdEl) === null || _d === void 0 ? void 0 : _d.value) || ''));
            }
            fetch(this.formEl.dataset.url, {
                method: "POST",
                body: formData
            }).then(function (response) {
                if (response.ok) {
                    if (_TeboUtility__WEBPACK_IMPORTED_MODULE_1__["default"].isJsonResponse(response)) {
                        return response.json();
                    }
                    return response.text();
                }
                return Promise.reject(response);
            }).then(function (result) {
                var _a;
                if (!_TeboUtility__WEBPACK_IMPORTED_MODULE_1__["default"].tryParseToJson(result))
                    return;
                var message = '';
                var outcome = JSON.parse(result);
                if (!outcome.success)
                    message = 'Unable to save media data';
                if (outcome.success) {
                    console.log('outcome.data.result', outcome.data.result);
                    _this.addNewRow(outcome.data.result);
                    _this.clearForm();
                    (_a = _this.notificationForm) === null || _a === void 0 ? void 0 : _a.show(_FormNotification_FormNotification__WEBPACK_IMPORTED_MODULE_2__["NotificationStatus"].Success, "Media data was saved successfully");
                }
            }).catch(function (response) {
                if (_TeboUtility__WEBPACK_IMPORTED_MODULE_1__["default"].isString(response))
                    console.log(response);
                // if (!TeboUtility.isObject(response)) return;
                if (!_TeboUtility__WEBPACK_IMPORTED_MODULE_1__["default"].isFunction(response.text))
                    return;
                return response.text().then(function (text) {
                    var _a;
                    if (_TeboUtility__WEBPACK_IMPORTED_MODULE_1__["default"].tryParseToJson(text))
                        return _this.handleError(text);
                    (_a = _this.notificationForm) === null || _a === void 0 ? void 0 : _a.show(_FormNotification_FormNotification__WEBPACK_IMPORTED_MODULE_2__["NotificationStatus"].Danger, "Unable to upload file; combined file size could be larger than limit");
                    console.error(text);
                });
            });
            return _Result__WEBPACK_IMPORTED_MODULE_4__["default"].Success();
        }
        catch (err) {
            return _Result__WEBPACK_IMPORTED_MODULE_4__["default"].Error(_TeboUtility__WEBPACK_IMPORTED_MODULE_1__["default"].isObject(err) ? err === null || err === void 0 ? void 0 : err.message : err);
        }
    };
    MediaData.prototype.formAttrMutationHandler = function (value, index, array) {
        var _this = this;
        if (value.type == "attributes") {
            var mediaDataId_1 = +(this.formEl.getAttribute('data-id') || '0');
            this.uploadWrapperEls.forEach(function (item) {
                if (mediaDataId_1 <= 0) {
                    item.classList.remove(_this.config.attachedMediaClass);
                    item.classList.add("" + _this.config.noMediaClass);
                }
                else {
                    item.classList.remove("" + _this.config.noMediaClass);
                    // item.classList.add(`${this.config.attachedMediaClass}`);
                }
            });
        }
    };
    MediaData.prototype.mediaFileChangeHandler = function (e) {
        var _a;
        e.preventDefault();
        var el = (e.target || e.srcElement);
        var isMp3El = el.id === ((_a = this.mediaMp3El) === null || _a === void 0 ? void 0 : _a.id) || '';
        var mediaDataId = +(this.formEl.getAttribute('data-id') || '0');
        var wrapperEl = _TeboUtility__WEBPACK_IMPORTED_MODULE_1__["default"].getClosest(el, "." + this.config.uploadWrapperElClass);
        var attachmentInfoEl = wrapperEl.querySelector("." + this.config.attachmentInfoElClass);
        if (!el.files || el.files.length <= 0)
            return;
        var fileName = el === null || el === void 0 ? void 0 : el.files[0].name;
        var fileSize = el === null || el === void 0 ? void 0 : el.files[0].size;
        var fileAttached = fileSize > 0;
        if (fileAttached) {
            wrapperEl === null || wrapperEl === void 0 ? void 0 : wrapperEl.classList.remove(this.config.noMediaClass);
            wrapperEl === null || wrapperEl === void 0 ? void 0 : wrapperEl.classList.add(this.config.attachedMediaClass);
            attachmentInfoEl.innerHTML = fileName;
        }
        else {
            wrapperEl === null || wrapperEl === void 0 ? void 0 : wrapperEl.classList.remove(this.config.attachedMediaClass);
            wrapperEl === null || wrapperEl === void 0 ? void 0 : wrapperEl.classList.add(this.config.noMediaClass);
            attachmentInfoEl.innerHTML = isMp3El ? 'media-file.mp3' : 'media-file.ogg';
        }
    };
    MediaData.prototype.appendUploadData = function (mediaDataId, formData, files, fileType) {
        var _a;
        if (files === null || typeof files === 'undefined')
            throw "Cannot retrieve files to be uploaded";
        if (mediaDataId <= 0 && (!(files === null || files === void 0 ? void 0 : files.length) || (files === null || files === void 0 ? void 0 : files.length) <= 0))
            throw "No " + fileType + " file to upload";
        if (mediaDataId <= 0 && (files === null || files === void 0 ? void 0 : files.length) > 1)
            throw "You cannot not upload more than one " + fileType + " file";
        for (var i = 0; i < (files === null || files === void 0 ? void 0 : files.length); i++) {
            var fileName = files[i].name;
            var fileSize = files[i].size;
            if (!_TeboUtility__WEBPACK_IMPORTED_MODULE_1__["default"].hasExtension(fileName, [fileType]))
                return _Result__WEBPACK_IMPORTED_MODULE_4__["default"].Error("File type for " + fileType + " version must be an " + fileType);
            if (fileSize > (((_a = this.config) === null || _a === void 0 ? void 0 : _a.maxFileSize) || 15728640))
                return _Result__WEBPACK_IMPORTED_MODULE_4__["default"].Error("Max file size for " + fileType + " version exceed");
            formData.append(fileType + 'Filename', files[i]);
        }
        return _Result__WEBPACK_IMPORTED_MODULE_4__["default"].Success();
    };
    MediaData.prototype.handleError = function (error) {
        var _a, _b, _c, _d, _e;
        try {
            var result = JSON.parse(error);
            var errors = result.data.errors;
            if (_TeboUtility__WEBPACK_IMPORTED_MODULE_1__["default"].isArray(errors)) {
                var message_1 = '<ul>';
                errors.forEach(function (item, index) {
                    message_1 += "<li>" + item + "</li>";
                });
                message_1 += "</ul>";
                (_a = this.notificationForm) === null || _a === void 0 ? void 0 : _a.show(_FormNotification_FormNotification__WEBPACK_IMPORTED_MODULE_2__["NotificationStatus"].Danger, message_1);
                return;
            }
            if (!_TeboUtility__WEBPACK_IMPORTED_MODULE_1__["default"].isObject(errors))
                return;
            var message = '<ul>';
            for (var x in (_b = result === null || result === void 0 ? void 0 : result.data) === null || _b === void 0 ? void 0 : _b.errors) {
                for (var y in (_c = result === null || result === void 0 ? void 0 : result.data) === null || _c === void 0 ? void 0 : _c.errors[x]) {
                    message += "<li>" + ((_d = result === null || result === void 0 ? void 0 : result.data) === null || _d === void 0 ? void 0 : _d.errors[x][y]) + "</li>";
                }
            }
            message += "</ul>";
            (_e = this.notificationForm) === null || _e === void 0 ? void 0 : _e.show(_FormNotification_FormNotification__WEBPACK_IMPORTED_MODULE_2__["NotificationStatus"].Danger, message);
        }
        catch (e) {
            console.error(error);
            /* return error.text().then(text => {
                console.error('Error saving media data');
            }); */
        }
    };
    MediaData.prototype.addNewRow = function (mediaData) {
        var _a, _b;
        if (!mediaData)
            return;
        this.removeRow(mediaData.id);
        console.log('decodeURIComponent(mediaData.videoUrl)', decodeURIComponent(mediaData.videoUrl));
        console.log('mediaData.videoId', mediaData.videoId);
        if (+mediaData.typeId === _IMediaDataConfig__WEBPACK_IMPORTED_MODULE_3__["MediaType"].YouTubeVideo) {
            (_a = this.listBlockEl) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML('beforeend', "\n                <li data-id=\"" + mediaData.id + "\" class=\"data-list__item\">\n                    <div class=\"row\">\n                        <div class=\"col-12 col-sm-6 col-md-6 col-xl-3 mb-3\">\n                            <h6 class=\"my-0\">" + lodash__WEBPACK_IMPORTED_MODULE_0___default.a.unescape(mediaData.title) + "</h6>\n                            <small class=\"text-muted\">Title</small>\n                        </div>\n                        <div class=\"col-12 col-sm-6 col-md-6 col-xl-3 mb-3\">\n                            <h6 class=\"my-0\">" + lodash__WEBPACK_IMPORTED_MODULE_0___default.a.unescape(mediaData.artist) + "</h6>\n                            <small class=\"text-muted\">Artist</small>\n                        </div>\n                        <div class=\"col-12 col-sm-6 col-md-6 col-xl-3 mb-xl-3\">\n                            <h6 class=\"my-0\">" + mediaData.locationName + "</h6>\n                            <small class=\"text-muted\">Location</small>\n                        </div>\n                        <div class=\"col-12 col-sm-6 col-md-6 col-xl-3 mb-xl-3\">\n                            <h6 class=\"my-0\">" + mediaData.order + "</h6>\n                            <small class=\"text-muted\">Order</small>\n                        </div>\n                        <div class=\"col-12 col-sm-6 col-md-6 col-xl-3 mb-xl-3\">\n                            <h6 class=\"my-0 overflow-hidden\">\n                                <a href=\"" + decodeURIComponent(mediaData.videoUrl) + "\" target=\"_blank\" class=\"text-break\">\n                                " + decodeURIComponent(mediaData.videoUrl) + "\n                                </a>\n                            </h6>\n                            <small class=\"text-muted\">Video URL</small>\n                        </div>\n                        <div class=\"col-12 col-sm-6 col-md-6 col-xl-3 mb-xl-3\">\n                            <h6 class=\"my-0\">" + mediaData.videoId + "</h6>\n                            <small class=\"text-muted\">Video ID</small>\n                        </div>\n                    </div>\n                    <div class=\"data-list__controls\">\n                        <div class=\"btn-group float-right\" role=\"group\" aria-label=\"Action\">\n                            <button id=\"edit-" + mediaData.id + "\"\n                                data-id=\"" + mediaData.id + "\" type=\"button\"\n                                class=\"video-form-edit-button btn btn-link btn-sm\">Edit</button>\n                            <button id=\"delete-" + mediaData.id + "\"\n                                data-id=\"" + mediaData.id + "\" type=\"button\"\n                                class=\"video-form-delete-button btn btn-link btn-sm\">Delete</button>\n                        </div>\n                    </div>\n                </li>\n            ");
        }
        else {
            (_b = this.listBlockEl) === null || _b === void 0 ? void 0 : _b.insertAdjacentHTML('beforeend', "\n                <li data-id=\"" + mediaData.id + "\" class=\"data-list__item\">\n                    <div class=\"row\">\n                        <div class=\"col-12 col-sm-6 col-md-6 col-xl-3 mb-3\">\n                            <h6 class=\"my-0\">" + mediaData.title + "</h6>\n                            <small class=\"text-muted\">Title</small>\n                        </div>\n                        <div class=\"col-12 col-sm-6 col-md-6 col-xl-3 mb-3\">\n                            <h6 class=\"my-0\">" + mediaData.artist + "</h6>\n                            <small class=\"text-muted\">Artist</small>\n                        </div>\n                        <div class=\"col-12 col-sm-6 col-md-6 col-xl-3 mb-xl-3\">\n                            <h6 class=\"my-0\">" + mediaData.locationName + "</h6>\n                            <small class=\"text-muted\">Location</small>\n                        </div>\n                        <div class=\"col-12 col-sm-6 col-md-6 col-xl-3 mb-xl-3\">\n                            <h6 class=\"my-0\">" + mediaData.order + "</h6>\n                            <small class=\"text-muted\">Order</small>\n                        </div>\n                    </div>\n                    <div class=\"data-list__controls\">\n                        <ul class=\"icon-list\">\n                            <li class=\"icon-list__item\">\n                                <a class=\"icon-list__link icon-list__link--mp3\" href=\"" + mediaData.mp3Url + "\" target=\"_blank\"></a>\n                            </li>\n                            <li class=\"icon-list__item\">\n                                <a class=\"icon-list__link icon-list__link--ogg\" href=\"" + mediaData.oggUrl + "\" target=\"_blank\"></a>\n                            </li>\n                        </ul>\n                        <div class=\"btn-group float-right\" role=\"group\" aria-label=\"Action\">\n                            <button id=\"edit-" + mediaData.id + "\"\n                                data-id=\"" + mediaData.id + "\" type=\"button\"\n                                class=\"" + this.config.editButtonClass + " btn btn-link btn-sm\">Edit</button>\n                            <button id=\"delete-" + mediaData.id + "\"\n                                data-id=\"" + mediaData.id + "\" type=\"button\"\n                                class=\"" + this.config.deleteButtonClass + " btn btn-link btn-sm\">Delete</button>\n                        </div>\n                    </div>\n                </li>\n            ");
        }
    };
    MediaData.prototype.removeRow = function (mediaDataId) {
        var _a;
        if (!mediaDataId)
            return;
        (_a = this.listBlockEl.querySelector("[data-id=\"" + mediaDataId + "\"]")) === null || _a === void 0 ? void 0 : _a.remove();
    };
    MediaData.prototype.clearClickHandler = function (e) {
        e.preventDefault();
        var el = (e.target || e.srcElement);
        var mediaLocationId = +(this.formEl.getAttribute('data-id') || '0');
        this.clearForm();
    };
    MediaData.prototype.clearForm = function () {
        var _this = this;
        this.formEl.setAttribute('data-id', '');
        this.formEl.reset();
        this.uploadWrapperEls.forEach(function (item) {
            item === null || item === void 0 ? void 0 : item.classList.remove(_this.config.attachedMediaClass);
            item === null || item === void 0 ? void 0 : item.classList.add(_this.config.noMediaClass);
        });
    };
    MediaData.prototype.createListBlockEl = function () {
        var el = document.createElement("ul");
        el.setAttribute('id', this.config.listElId);
        el.classList.add('data-list');
        this.formEl.insertAdjacentElement('afterend', el);
        return el;
    };
    MediaData.prototype.setup = function () {
        var _this = this;
        var _a, _b, _c, _d;
        var mediaDataId = +(this.formEl.getAttribute('data-id') || '0');
        this.mutationObserver = new MutationObserver(function (mutations) {
            mutations.forEach(_this.formAttrMutationHandler.bind(_this));
        });
        this.mutationObserver.observe(this.formEl, {
            attributes: true //configure it to listen to attribute changes
        });
        this.formEl.setAttribute('data-id', mediaDataId + '');
        this.notificationForm = new _FormNotification_FormNotification__WEBPACK_IMPORTED_MODULE_2__["default"]({
            containerId: 'mgt-center-notification',
            messageElClass: 'alert-message'
        });
        _TeboUtility__WEBPACK_IMPORTED_MODULE_1__["default"].live("." + this.config.editButtonClass, 'click', this.editClickHandler.bind(this), this.listBlockEl);
        _TeboUtility__WEBPACK_IMPORTED_MODULE_1__["default"].live("." + this.config.deleteButtonClass, 'click', this.deleteClickHandler.bind(this), this.listBlockEl);
        this.saveEl.addEventListener('click', this.saveClickHandler.bind(this), false);
        this.clearEl.addEventListener('click', this.clearClickHandler.bind(this), false);
        (_a = this.mediaMp3El) === null || _a === void 0 ? void 0 : _a.addEventListener('change', this.mediaFileChangeHandler.bind(this), false);
        (_b = this.mediaOggEl) === null || _b === void 0 ? void 0 : _b.addEventListener('change', this.mediaFileChangeHandler.bind(this), false);
        (_c = this.mp3UploadEl) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function (e) {
            e.preventDefault();
            _TeboUtility__WEBPACK_IMPORTED_MODULE_1__["default"].simulateClick(_this.mediaMp3El);
            return false;
        }, false);
        (_d = this.oggUploadEl) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function (e) {
            e.preventDefault();
            _TeboUtility__WEBPACK_IMPORTED_MODULE_1__["default"].simulateClick(_this.mediaOggEl);
            return false;
        }, false);
    };
    return MediaData;
}());
/* harmony default export */ __webpack_exports__["default"] = (MediaData);


/***/ }),

/***/ "./src/modules/MediaLocation/MediaLocation.ts":
/*!****************************************************!*\
  !*** ./src/modules/MediaLocation/MediaLocation.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TeboUtility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../TeboUtility */ "./src/modules/TeboUtility.ts");
/* harmony import */ var _FormNotification_FormNotification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FormNotification/FormNotification */ "./src/modules/FormNotification/FormNotification.ts");


var Action;
(function (Action) {
    Action["GetMediaLocation"] = "get_media_location";
    Action["DeleteMediaLocation"] = "delete_media_location";
    Action["SaveMediaLocation"] = "save_media_location";
})(Action || (Action = {}));
var MediaLocation = /** @class */ (function () {
    function MediaLocation(config) {
        var _a;
        this.config = config;
        this.notificationForm = null;
        this.formEl = document.getElementById(this.config.formId);
        this.locationNameEl = this.formEl.querySelector('#mediaLocationName');
        this.locationSlugEl = this.formEl.querySelector('#mediaLocationSlug');
        this.saveEl = this.formEl.querySelector('#saveLocationForm');
        this.clearEl = this.formEl.querySelector('#clearLocationForm');
        // this.tableEl = document.querySelector(`#${this.config.listElId}`) as HTMLElement;
        this.listBlockEl = (_a = document.querySelector("#" + this.config.listElId)) !== null && _a !== void 0 ? _a : this.createListBlockEl();
        this.setup();
    }
    MediaLocation.prototype.editClickHandler = function (e) {
        var _this = this;
        e.preventDefault();
        if (!this.formEl.dataset.url)
            return;
        var el = (e.target || e.srcElement);
        var mediaLocationId = +(el.getAttribute('data-id') || '0');
        var formData = new FormData();
        this.formEl.setAttribute('data-id', mediaLocationId + '');
        formData.append("mediaLocationId", mediaLocationId + '');
        formData.append("action", Action.GetMediaLocation);
        formData.append("nonce", document.getElementById(Action.GetMediaLocation + '_nonce').value);
        fetch(this.formEl.dataset.url, {
            method: "POST",
            body: new URLSearchParams(formData)
        }).then(function (response) {
            if (response.ok) {
                if (_TeboUtility__WEBPACK_IMPORTED_MODULE_0__["default"].isJsonResponse(response))
                    return response.json();
                return response.text();
            }
            return Promise.reject(response);
        }).then(function (result) {
            if (!_TeboUtility__WEBPACK_IMPORTED_MODULE_0__["default"].tryParseToJson(result))
                return;
            var message = '';
            var outcome = JSON.parse(result);
            if (!outcome.success)
                message = 'Unable to send contact form message';
            if (outcome.success) {
                _this.locationNameEl.value = outcome.data.result.name;
                _this.locationSlugEl.value = outcome.data.result.slug;
            }
        }).catch(function (error) {
            // enable the submit button
            // this.submitEl.disabled = false;
            var _a;
            (_a = _this.notificationForm) === null || _a === void 0 ? void 0 : _a.show(_FormNotification_FormNotification__WEBPACK_IMPORTED_MODULE_1__["NotificationStatus"].Danger, "Problem retrieving media location information");
        });
    };
    MediaLocation.prototype.deleteClickHandler = function (e) {
        var _this = this;
        e.preventDefault();
        if (!this.formEl.dataset.url)
            return;
        if (!confirm("Are you sure you want to delete the media location?"))
            return;
        var el = (e.target || e.srcElement);
        var mediaLocationId = +(el.getAttribute('data-id') || '0');
        var formData = new FormData();
        this.formEl.setAttribute('data-id', mediaLocationId + '');
        formData.append("mediaLocationId", mediaLocationId + '');
        formData.append("action", Action.DeleteMediaLocation);
        formData.append("nonce", document.getElementById(Action.DeleteMediaLocation + '_nonce').value);
        fetch(this.formEl.dataset.url, {
            method: "POST",
            body: new URLSearchParams(formData)
        }).then(function (response) {
            if (response.ok) {
                if (_TeboUtility__WEBPACK_IMPORTED_MODULE_0__["default"].isJsonResponse(response))
                    return response.json();
                return response.text();
            }
            return Promise.reject(response);
        }).then(function (result) {
            var _a;
            if (!_TeboUtility__WEBPACK_IMPORTED_MODULE_0__["default"].tryParseToJson(result))
                return;
            var message = '';
            var outcome = JSON.parse(result);
            if (!outcome.success)
                message = 'Unable to send contact form message';
            if (outcome.success) {
                _this.removeRow(mediaLocationId);
                (_a = _this.notificationForm) === null || _a === void 0 ? void 0 : _a.show(_FormNotification_FormNotification__WEBPACK_IMPORTED_MODULE_1__["NotificationStatus"].Success, "Media location was deleted successfully");
            }
        }).catch(function (response) {
            if (_TeboUtility__WEBPACK_IMPORTED_MODULE_0__["default"].isString(response))
                console.log(response);
            if (!_TeboUtility__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(response.text))
                return;
            return response.text().then(function (text) {
                var _a;
                if (_TeboUtility__WEBPACK_IMPORTED_MODULE_0__["default"].tryParseToJson(text))
                    return _this.handleError(text);
                (_a = _this.notificationForm) === null || _a === void 0 ? void 0 : _a.show(_FormNotification_FormNotification__WEBPACK_IMPORTED_MODULE_1__["NotificationStatus"].Danger, text);
                console.error(text);
            });
            // this.notificationForm?.show(NotificationStatus.Danger, "Problem deleting media location information");
        });
    };
    MediaLocation.prototype.saveClickHandler = function (e) {
        var _this = this;
        e.preventDefault();
        if (!this.formEl.dataset.url)
            return;
        var el = (e.target || e.srcElement);
        var mediaLocationId = +(this.formEl.getAttribute('data-id') || '0');
        var mediaLocationName = this.locationNameEl.value;
        var mediaLocationSlug = this.locationSlugEl.value;
        var formData = new FormData();
        this.formEl.setAttribute('data-id', mediaLocationId + '');
        formData.append("mediaLocationId", mediaLocationId + '');
        formData.append("mediaLocationName", mediaLocationName);
        formData.append("mediaLocationSlug", mediaLocationSlug);
        formData.append("action", Action.SaveMediaLocation);
        formData.append("nonce", document.getElementById(Action.SaveMediaLocation + '_nonce').value);
        fetch(this.formEl.dataset.url, {
            method: "POST",
            body: new URLSearchParams(formData)
        }).then(function (response) {
            if (response.ok) {
                if (_TeboUtility__WEBPACK_IMPORTED_MODULE_0__["default"].isJsonResponse(response))
                    return response.json();
                return response.text();
            }
            return Promise.reject(response);
        }).then(function (result) {
            var _a;
            if (!_TeboUtility__WEBPACK_IMPORTED_MODULE_0__["default"].tryParseToJson(result))
                return;
            var message = '';
            var outcome = JSON.parse(result);
            if (!outcome.success)
                message = 'Unable to send contact form message';
            if (outcome.success) {
                _this.addNewRow(outcome.data.result.id, mediaLocationName, mediaLocationSlug);
                _this.clearForm();
                (_a = _this.notificationForm) === null || _a === void 0 ? void 0 : _a.show(_FormNotification_FormNotification__WEBPACK_IMPORTED_MODULE_1__["NotificationStatus"].Success, "Media location was saved successfully");
            }
        }).catch(function (error) {
            var _a;
            (_a = _this.notificationForm) === null || _a === void 0 ? void 0 : _a.show(_FormNotification_FormNotification__WEBPACK_IMPORTED_MODULE_1__["NotificationStatus"].Danger, "Problem saving media location information");
        });
    };
    MediaLocation.prototype.addNewRow = function (mediaLocationId, mediaLocationName, mediaLocationSlug) {
        var _a;
        if (!mediaLocationId)
            return;
        this.removeRow(mediaLocationId);
        (_a = this.listBlockEl) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML('beforeend', "\n            <li data-id=\"" + mediaLocationId + "\" class=\"data-list__item\">\n                <div class=\"data-list__title\">" + mediaLocationName + "</div>\n                <div class=\"data-list__subtitle\">" + mediaLocationSlug + "</div>\n                <div class=\"data-list__controls\">\n                    <div></div>\n                    <div class=\"btn-group float-right\" role=\"group\" aria-label=\"Action\">\n                        <button id=\"edit-" + mediaLocationId + "\"\n                            data-id=\"" + mediaLocationId + "\" type=\"button\"\n                            class=\"" + this.config.editButtonClass + " btn btn-link btn-sm\">Edit</button>\n                        <button id=\"delete-" + mediaLocationId + "\"\n                            data-id=\"" + mediaLocationId + "\" type=\"button\"\n                            class=\"" + this.config.deleteButtonClass + " btn btn-link btn-sm\">Delete</button>\n                    </div>\n                </div>\n            </li>\n        ");
    };
    MediaLocation.prototype.removeRow = function (mediaLocationId) {
        var _a;
        if (!mediaLocationId)
            return;
        (_a = this.listBlockEl.querySelector("[data-id=\"" + mediaLocationId + "\"]")) === null || _a === void 0 ? void 0 : _a.remove();
    };
    MediaLocation.prototype.handleError = function (error) {
        var _a, _b, _c, _d, _e;
        try {
            var result = JSON.parse(error);
            var errors = result.data.errors;
            if (_TeboUtility__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(errors)) {
                var message_1 = '<ul>';
                errors.forEach(function (item, index) {
                    message_1 += "<li>" + item + "</li>";
                });
                message_1 += "</ul>";
                (_a = this.notificationForm) === null || _a === void 0 ? void 0 : _a.show(_FormNotification_FormNotification__WEBPACK_IMPORTED_MODULE_1__["NotificationStatus"].Danger, message_1);
                return;
            }
            if (!_TeboUtility__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(errors))
                return;
            var message = '<ul>';
            for (var x in (_b = result === null || result === void 0 ? void 0 : result.data) === null || _b === void 0 ? void 0 : _b.errors) {
                for (var y in (_c = result === null || result === void 0 ? void 0 : result.data) === null || _c === void 0 ? void 0 : _c.errors[x]) {
                    message += "<li>" + ((_d = result === null || result === void 0 ? void 0 : result.data) === null || _d === void 0 ? void 0 : _d.errors[x][y]) + "</li>";
                }
            }
            message += "</ul>";
            (_e = this.notificationForm) === null || _e === void 0 ? void 0 : _e.show(_FormNotification_FormNotification__WEBPACK_IMPORTED_MODULE_1__["NotificationStatus"].Danger, message);
        }
        catch (e) {
            console.error(error);
        }
    };
    MediaLocation.prototype.clearClickHandler = function (e) {
        e.preventDefault();
        var el = (e.target || e.srcElement);
        var mediaLocationId = +(this.formEl.getAttribute('data-id') || '0');
        this.clearForm();
    };
    MediaLocation.prototype.clearForm = function () {
        this.formEl.setAttribute('data-id', '');
        this.locationNameEl.value = '';
        this.locationSlugEl.value = '';
        this.formEl.reset();
    };
    MediaLocation.prototype.createListBlockEl = function () {
        var el = document.createElement("ul");
        el.setAttribute('id', this.config.listElId);
        el.classList.add('data-list');
        this.formEl.insertAdjacentElement('afterend', el);
        return el;
    };
    MediaLocation.prototype.setup = function () {
        this.notificationForm = new _FormNotification_FormNotification__WEBPACK_IMPORTED_MODULE_1__["default"]({
            containerId: 'mgt-center-notification',
            messageElClass: 'alert-message'
        });
        _TeboUtility__WEBPACK_IMPORTED_MODULE_0__["default"].live("." + this.config.editButtonClass, 'click', this.editClickHandler.bind(this), this.listBlockEl);
        _TeboUtility__WEBPACK_IMPORTED_MODULE_0__["default"].live("." + this.config.deleteButtonClass, 'click', this.deleteClickHandler.bind(this), this.listBlockEl);
        /* document.querySelectorAll(`.${this.config.editButtonClass}`).forEach(item => {
            item.addEventListener('click', this.editClickHandler.bind(this), false);
        });

        document.querySelectorAll(`.${this.config.deleteButtonClass}`).forEach(item => {
            item.addEventListener('click', this.deleteClickHandler.bind(this), false);
        }); */
        this.saveEl.addEventListener('click', this.saveClickHandler.bind(this), false);
        this.clearEl.addEventListener('click', this.clearClickHandler.bind(this), false);
    };
    return MediaLocation;
}());
/* harmony default export */ __webpack_exports__["default"] = (MediaLocation);


/***/ }),

/***/ "./src/modules/Result.ts":
/*!*******************************!*\
  !*** ./src/modules/Result.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Result = /** @class */ (function () {
    function Result(message, success) {
        this.message = message;
        this.success = success;
        this.cause = '';
    }
    Result.Error = function (message, cause) {
        if (message === void 0) { message = ''; }
        if (cause === void 0) { cause = ''; }
        var result = new Result(message, false);
        result.cause = cause;
        return result;
    };
    Result.Success = function (message) {
        if (message === void 0) { message = ''; }
        return new Result(message, true);
    };
    Result.prototype.IsSuccessful = function () {
        return this.success;
    };
    Result.prototype.getMessage = function () {
        return this.message;
    };
    return Result;
}());
/* harmony default export */ __webpack_exports__["default"] = (Result);


/***/ }),

/***/ "./src/modules/TeboUtility.ts":
/*!************************************!*\
  !*** ./src/modules/TeboUtility.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _element_matches_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element-matches-polyfill */ "./src/modules/element-matches-polyfill.ts");
/* harmony import */ var _element_matches_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_element_matches_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_1__);


var TeboUtility = /** @class */ (function () {
    function TeboUtility() {
    }
    TeboUtility.isArray = function (variable) {
        return Object.prototype.toString.call(variable) === '[object Array]';
    };
    TeboUtility.isObject = function (variable) {
        return Object.prototype.toString.call(variable) === '[object Object]';
    };
    TeboUtility.isFunction = function (variable) {
        return typeof variable === 'function';
    };
    TeboUtility.isString = function (variable) {
        return typeof variable === 'string' || variable instanceof String;
    };
    TeboUtility.isChrome = function () {
        return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    };
    TeboUtility.isSafari = function () {
        return /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
    };
    TeboUtility.getOffset = function (el) {
        var _x = 0;
        var _y = 0;
        while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
            _x += el.offsetLeft - el.scrollLeft;
            _y += el.offsetTop - el.scrollTop;
            // el = el.offsetParent;
            // chrome/safari
            // if ($.browser.webkit) {
            if (TeboUtility.isChrome() || TeboUtility.isSafari()) {
                el = el.parentNode;
            }
            else {
                // firefox/IE
                el = el.offsetParent;
            }
        }
        return { top: _y, left: _x };
    };
    TeboUtility.simulateClick = function (el) {
        // Create our event (with options)
        var evt = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        });
        // If cancelled, don't dispatch our event
        var canceled = !el.dispatchEvent(evt);
    };
    TeboUtility.getClosest = function (el, selector) {
        for (; el && el !== document; el = el.parentNode) {
            if (el.matches(selector))
                return el;
        }
        return null;
    };
    TeboUtility.containsElement = function (el) {
        return (el === document.body) ? false : document.body.contains(el);
    };
    TeboUtility.containsElementById = function (id) {
        return document.getElementById(id);
    };
    TeboUtility.hasClass = function (el, className) {
        return (' ' + el.className + ' ').indexOf(' ' + className + ' ') > -1;
    };
    TeboUtility.getSiblings = function (el, filter) {
        var siblings = [];
        var sibling = el.parentNode.firstChild;
        do {
            if (!filter || filter(sibling)) {
                if (sibling.nodeType !== 1 || sibling === el)
                    continue;
                siblings.push(sibling);
            }
        } while (sibling = sibling.nextSibling);
        return siblings;
    };
    TeboUtility.getNextSiblings = function (el, filter) {
        var siblings = [];
        while (el = el.nextSibling) {
            if (!filter || filter(el)) {
                if (el.nodeType !== 1)
                    continue;
                siblings.push(el);
            }
        }
        return siblings;
    };
    TeboUtility.getNextSibling = function (el, filter) {
        while (el = el.nextSibling) {
            if (!filter || filter(el)) {
                if (el.nodeType !== 1)
                    continue;
                return el;
            }
        }
        return null;
    };
    TeboUtility.getPreviousSiblings = function (el, filter) {
        var siblings = [];
        while (el = el.previousSibling) {
            if (!filter || filter(el)) {
                if (el.nodeType !== 1)
                    continue;
                siblings.push(el);
            }
        }
        return siblings;
    };
    TeboUtility.getPreviousSibling = function (el, filter) {
        var element = el;
        while (element = element.previousSibling) {
            if (!filter || filter(element)) {
                if (element.nodeType !== 1)
                    continue;
                return element;
            }
        }
        return null;
    };
    TeboUtility.getViewportSize = function () {
        var w, h;
        var element = (document.compatMode === "CSS1Compat") ?
            document.documentElement :
            document.body;
        if (typeof (element.clientWidth) != 'undefined') {
            w = Math.max(element.clientWidth, (!('innerWidth' in window) ? 0 : window.innerWidth) || 0);
            h = Math.max(element.clientHeight, (!('innerHeight' in window) ? 0 : window.innerHeight) || 0);
        }
        return { width: w, height: h };
    };
    TeboUtility.show = function (el) {
        if (!el)
            return;
        el.style.display = 'block';
    };
    TeboUtility.hide = function (el) {
        if (!el)
            return;
        el.style.display = 'none';
    };
    TeboUtility.toggle = function (el) {
        if (!el)
            return;
        // If the element is visible, hide it
        if (window.getComputedStyle(el).display === 'block') {
            TeboUtility.hide(el);
            return;
        }
        // Otherwise, show it
        TeboUtility.show(el);
    };
    TeboUtility.isJsonResponse = function (response) {
        var contentType = response.headers.get("content-type");
        return contentType && contentType.indexOf("application/json") !== -1 && TeboUtility.tryParseToJson(response);
    };
    TeboUtility.tryParseToJson = function (text) {
        try {
            JSON.parse(text);
            return true;
        }
        catch (err) {
            return false;
        }
    };
    TeboUtility.addEvent = function (el, type, handler) {
        if (el.attachEvent)
            el.attachEvent('on' + type, handler);
        else
            el.addEventListener(type, handler);
    };
    TeboUtility.live = function (selector, event, callback, context) {
        TeboUtility.addEvent(context || document, event, function (e) {
            var found, el = e.target || e.srcElement;
            while (el && el.matches && el !== context && !(found = el.matches(selector)))
                el = el.parentElement;
            if (found)
                callback.call(el, e);
        });
    };
    TeboUtility.hasExtension = function (fileName, extensions) {
        return (new RegExp('(' + extensions.join('|').replace(/\./g, '\\.') + ')$', 'i')).test(fileName);
    };
    TeboUtility.generateUniqueNumber = function (seed) {
        return Date.now() + seed;
    };
    TeboUtility.generateUniqueString = function (seed) {
        if (seed === void 0) { seed = 0; }
        return uuid_v4__WEBPACK_IMPORTED_MODULE_1___default()() + (seed ? (':' + seed) : '');
    };
    return TeboUtility;
}());
/* harmony default export */ __webpack_exports__["default"] = (TeboUtility);


/***/ }),

/***/ "./src/modules/element-matches-polyfill.ts":
/*!*************************************************!*\
  !*** ./src/modules/element-matches-polyfill.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

if (!Element.prototype.matches) {
    Element.prototype.matches =
        Element.prototype.matches ||
            // @ts-ignore
            Element.prototype.matchesSelector ||
            // @ts-ignore
            Element.prototype.mozMatchesSelector ||
            // @ts-ignore
            Element.prototype.msMatchesSelector ||
            // @ts-ignore
            Element.prototype.oMatchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            function (s) {
                var matches = (this.document || this.ownerDocument).querySelectorAll(s), i = matches.length;
                while (--i >= 0 && matches.item(i) !== this) { }
                return i > -1;
            };
}


/***/ })

},[["./src/management-center.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFuYWdlbWVudC1jZW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvRm9ybU5vdGlmaWNhdGlvbi9Gb3JtTm90aWZpY2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL01lZGlhRGF0YS9JTWVkaWFEYXRhQ29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL01lZGlhRGF0YS9NZWRpYURhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvTWVkaWFMb2NhdGlvbi9NZWRpYUxvY2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1Jlc3VsdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9UZWJvVXRpbGl0eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9lbGVtZW50LW1hdGNoZXMtcG9seWZpbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUU7QUFDWjtBQUM5QjtBQUNKO0FBQzhDO0FBRWpFLElBQUksYUFBNEIsQ0FBQztBQUNqQyxJQUFJLGFBQXdCLENBQUM7QUFDN0IsSUFBSSxhQUF3QixDQUFDO0FBQzdCLElBQUksY0FBeUIsQ0FBQztBQUU5QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsVUFBQyxLQUFLO0lBQzlDLGFBQWEsR0FBRyxJQUFJLDRFQUFhLENBQUM7UUFDOUIsTUFBTSxFQUFFLDZCQUE2QjtRQUNyQyxlQUFlLEVBQUUsK0JBQStCO1FBQ2hELGlCQUFpQixFQUFFLGlDQUFpQztRQUNwRCxRQUFRLEVBQUUsbUJBQW1CO0tBQ2hDLENBQUMsQ0FBQztJQUVILGFBQWEsR0FBRyxJQUFJLG9FQUFTLENBQUM7UUFDMUIsTUFBTSxFQUFFLDBCQUEwQjtRQUNsQyxlQUFlLEVBQUUsdUJBQXVCO1FBQ3hDLGlCQUFpQixF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Q0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDbE5ELElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRTtJQUM1QixPQUFPLENBQUMsU0FBUyxDQUFDLE9BQU87UUFDckIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPO1lBQ3pCLGFBQWE7WUFDakIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxlQUFlO1lBQzdCLGFBQWE7WUFDakIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxrQkFBa0I7WUFDaEMsYUFBYTtZQUNqQixPQUFPLENBQUMsU0FBUyxDQUFDLGlCQUFpQjtZQUMvQixhQUFhO1lBQ2IsT0FBTyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0I7WUFDbEMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxxQkFBcUI7WUFDdkMsVUFBVSxDQUFDO2dCQUNQLElBQUksT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQ25FLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO2dCQUN2QixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRSxHQUFHO2dCQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNsQixDQUFDLENBQUM7Q0FDVCIsImZpbGUiOiJqcy9tYW5hZ2VtZW50LWNlbnRlci1zY3JpcHQucGx1Z2luLWJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZWRpYUxvY2F0aW9uIGZyb20gJy4vbW9kdWxlcy9NZWRpYUxvY2F0aW9uL01lZGlhTG9jYXRpb24nXHJcbmltcG9ydCBNZWRpYURhdGEgZnJvbSAnLi9tb2R1bGVzL01lZGlhRGF0YS9NZWRpYURhdGEnXHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCAnYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgTWVkaWFUeXBlIH0gZnJvbSAnLi9tb2R1bGVzL01lZGlhRGF0YS9JTWVkaWFEYXRhQ29uZmlnJztcclxuXHJcbmxldCBtZWRpYUxvY2F0aW9uOiBNZWRpYUxvY2F0aW9uO1xyXG5sZXQgYmVhdE1lZGlhRGF0YTogTWVkaWFEYXRhO1xyXG5sZXQgc29uZ01lZGlhRGF0YTogTWVkaWFEYXRhO1xyXG5sZXQgdmlkZW9NZWRpYURhdGE6IE1lZGlhRGF0YTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKGV2ZW50KSA9PiB7XHJcbiAgICBtZWRpYUxvY2F0aW9uID0gbmV3IE1lZGlhTG9jYXRpb24oe1xyXG4gICAgICAgIGZvcm1JZDogJ3dvbGZzYmFuZS1sb2NhdGlvbi1tZ3QtZm9ybScsXHJcbiAgICAgICAgZWRpdEJ1dHRvbkNsYXNzOiAnbG9jYXRpb24tbWd0LWZvcm0tZWRpdC1idXR0b24nLFxyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbkNsYXNzOiAnbG9jYXRpb24tbWd0LWZvcm0tZGVsZXRlLWJ1dHRvbicsXHJcbiAgICAgICAgbGlzdEVsSWQ6ICdsb2NhdGlvbi1tZ3QtbGlzdCcsXHJcbiAgICB9KTtcclxuXHJcbiAgICBiZWF0TWVkaWFEYXRhID0gbmV3IE1lZGlhRGF0YSh7XHJcbiAgICAgICAgZm9ybUlkOiAnd29sZnNiYW5lLWJlYXRzLW1ndC1mb3JtJyxcclxuICAgICAgICBlZGl0QnV0dG9uQ2xhc3M6ICdiZWF0LWZvcm0tZWRpdC1idXR0b24nLFxyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbkNsYXNzOiAnYmVhdC1mb3JtLWRlbGV0ZS1idXR0b24nLFxyXG4gICAgICAgIGxpc3RFbElkOiAnbWVkaWEtYmVhdHMtbGlzdCcsXHJcblxyXG4gICAgICAgIHVwbG9hZFdyYXBwZXJFbENsYXNzOiAnYy1tZWRpYS11cGxvYWQnLFxyXG4gICAgICAgIHVwbG9hZERpc3BsYXlFbENsYXNzOiAnYy1tZWRpYS11cGxvYWRfX2ZpbGUnLFxyXG4gICAgICAgIHVwbG9hZERpc3BsYXlFbXB0eUVsQ2xhc3M6ICdjLW1lZGlhLXVwbG9hZC0tZW1wdHknLFxyXG4gICAgICAgIG1wM1VwbG9hZEVsQ2xhc3M6ICdjLW1lZGlhLXVwbG9hZF9fYnV0dG9uLS1tcDMnLFxyXG4gICAgICAgIG9nZ1VwbG9hZEVsQ2xhc3M6ICdjLW1lZGlhLXVwbG9hZF9fYnV0dG9uLS1vZ2cnLFxyXG5cclxuICAgICAgICBub01lZGlhQ2xhc3M6ICdjLW1lZGlhLXVwbG9hZC0tZW1wdHknLFxyXG4gICAgICAgIGF0dGFjaGVkTWVkaWFDbGFzczogJ2MtbWVkaWEtdXBsb2FkLS1hdHRhY2hlZCcsXHJcblxyXG4gICAgICAgIGF0dGFjaG1lbnRJbmZvRWxDbGFzczogJ2MtbWVkaWEtdXBsb2FkX19hdHRhY2htZW50LWluZm8nLFxyXG5cclxuXHJcbiAgICAgICAgbWF4RmlsZVNpemU6IDE1NzI4NjQwLCAvLyAxNU0gaW4gYmluYXJ5XHJcbiAgICAgICAgc3VwcG9ydEZpbGVFeHQ6IFsnbXAzJywgJ29nZyddLFxyXG4gICAgICAgIG1lZGlhVHlwZTogTWVkaWFUeXBlLkJlYXRzLFxyXG5cclxuICAgICAgICBtZWRpYVRpdGxlRWxJZDogXCJtZWRpYVRpdGxlXCIsXHJcbiAgICAgICAgbWVkaWFBcnRpc3RFbElkOiBcIm1lZGlhQXJ0aXN0XCIsXHJcbiAgICAgICAgbWVkaWFMb2NhdGlvbkVsSWQ6IFwibWVkaWFMb2NhdGlvblwiLFxyXG4gICAgICAgIG1lZGlhT3JkZXJFbElkOiBcIm1lZGlhT3JkZXJcIixcclxuICAgICAgICBtZWRpYU1wM0VsSWQ6IFwibWVkaWFNcDNcIixcclxuICAgICAgICBtZWRpYU9nZ0VsSWQ6IFwibWVkaWFPZ2dcIixcclxuICAgICAgICBzYXZlQnV0dG9uSWQ6IFwic2F2ZU1lZGlhQmVhdEZvcm1cIixcclxuICAgICAgICBjYW5jZWxCdXR0b25JZDogXCJjbGVhck1lZGlhQmVhdEZvcm1cIlxyXG4gICAgfSk7XHJcblxyXG4gICAgc29uZ01lZGlhRGF0YSA9IG5ldyBNZWRpYURhdGEoe1xyXG4gICAgICAgIGZvcm1JZDogJ3dvbGZzYmFuZS1zb25ncy1tZ3QtZm9ybScsXHJcbiAgICAgICAgZWRpdEJ1dHRvbkNsYXNzOiAnc29uZy1mb3JtLWVkaXQtYnV0dG9uJyxcclxuICAgICAgICBkZWxldGVCdXR0b25DbGFzczogJ3NvbmctZm9ybS1kZWxldGUtYnV0dG9uJyxcclxuICAgICAgICBsaXN0RWxJZDogJ21lZGlhLXNvbmdzLWxpc3QnLFxyXG5cclxuICAgICAgICB1cGxvYWRXcmFwcGVyRWxDbGFzczogJ2MtbWVkaWEtdXBsb2FkJyxcclxuICAgICAgICB1cGxvYWREaXNwbGF5RWxDbGFzczogJ2MtbWVkaWEtdXBsb2FkX19maWxlJyxcclxuICAgICAgICB1cGxvYWREaXNwbGF5RW1wdHlFbENsYXNzOiAnYy1tZWRpYS11cGxvYWQtLWVtcHR5JyxcclxuICAgICAgICBtcDNVcGxvYWRFbENsYXNzOiAnYy1tZWRpYS11cGxvYWRfX2J1dHRvbi0tbXAzJyxcclxuICAgICAgICBvZ2dVcGxvYWRFbENsYXNzOiAnYy1tZWRpYS11cGxvYWRfX2J1dHRvbi0tb2dnJyxcclxuXHJcbiAgICAgICAgbm9NZWRpYUNsYXNzOiAnYy1tZWRpYS11cGxvYWQtLWVtcHR5JyxcclxuICAgICAgICBhdHRhY2hlZE1lZGlhQ2xhc3M6ICdjLW1lZGlhLXVwbG9hZC0tYXR0YWNoZWQnLFxyXG5cclxuICAgICAgICBhdHRhY2htZW50SW5mb0VsQ2xhc3M6ICdjLW1lZGlhLXVwbG9hZF9fYXR0YWNobWVudC1pbmZvJyxcclxuXHJcblxyXG4gICAgICAgIG1heEZpbGVTaXplOiAxNTcyODY0MCwgLy8gMTVNIGluIGJpbmFyeVxyXG4gICAgICAgIHN1cHBvcnRGaWxlRXh0OiBbJ21wMycsICdvZ2cnXSxcclxuICAgICAgICBtZWRpYVR5cGU6IE1lZGlhVHlwZS5Tb25ncyxcclxuXHJcbiAgICAgICAgbWVkaWFUaXRsZUVsSWQ6IFwibWVkaWFUaXRsZVwiLFxyXG4gICAgICAgIG1lZGlhQXJ0aXN0RWxJZDogXCJtZWRpYUFydGlzdFwiLFxyXG4gICAgICAgIG1lZGlhTG9jYXRpb25FbElkOiBcIm1lZGlhTG9jYXRpb25cIixcclxuICAgICAgICBtZWRpYU9yZGVyRWxJZDogXCJtZWRpYU9yZGVyXCIsXHJcbiAgICAgICAgbWVkaWFNcDNFbElkOiBcIm1lZGlhTXAzXCIsXHJcbiAgICAgICAgbWVkaWFPZ2dFbElkOiBcIm1lZGlhT2dnXCIsXHJcbiAgICAgICAgc2F2ZUJ1dHRvbklkOiBcInNhdmVNZWRpYVNvbmdGb3JtXCIsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uSWQ6IFwiY2xlYXJNZWRpYVNvbmdGb3JtXCJcclxuICAgIH0pO1xyXG5cclxuICAgIHZpZGVvTWVkaWFEYXRhID0gbmV3IE1lZGlhRGF0YSh7XHJcbiAgICAgICAgZm9ybUlkOiAnd29sZnNiYW5lLXZpZGVvLW1ndC1mb3JtJyxcclxuICAgICAgICBlZGl0QnV0dG9uQ2xhc3M6ICd2aWRlby1mb3JtLWVkaXQtYnV0dG9uJyxcclxuICAgICAgICBkZWxldGVCdXR0b25DbGFzczogJ3ZpZGVvLWZvcm0tZGVsZXRlLWJ1dHRvbicsXHJcbiAgICAgICAgbGlzdEVsSWQ6ICdtZWRpYS12aWRlb3MtbGlzdCcsXHJcblxyXG4gICAgICAgIHVwbG9hZFdyYXBwZXJFbENsYXNzOiAnYy1tZWRpYS11cGxvYWQnLFxyXG4gICAgICAgIHVwbG9hZERpc3BsYXlFbENsYXNzOiAnYy1tZWRpYS11cGxvYWRfX2ZpbGUnLFxyXG4gICAgICAgIHVwbG9hZERpc3BsYXlFbXB0eUVsQ2xhc3M6ICdjLW1lZGlhLXVwbG9hZC0tZW1wdHknLFxyXG4gICAgICAgIG1wM1VwbG9hZEVsQ2xhc3M6ICdjLW1lZGlhLXVwbG9hZF9fYnV0dG9uLS1tcDMnLFxyXG4gICAgICAgIG9nZ1VwbG9hZEVsQ2xhc3M6ICdjLW1lZGlhLXVwbG9hZF9fYnV0dG9uLS1vZ2cnLFxyXG5cclxuICAgICAgICBub01lZGlhQ2xhc3M6ICdjLW1lZGlhLXVwbG9hZC0tZW1wdHknLFxyXG4gICAgICAgIGF0dGFjaGVkTWVkaWFDbGFzczogJ2MtbWVkaWEtdXBsb2FkLS1hdHRhY2hlZCcsXHJcblxyXG4gICAgICAgIGF0dGFjaG1lbnRJbmZvRWxDbGFzczogJ2MtbWVkaWEtdXBsb2FkX19hdHRhY2htZW50LWluZm8nLFxyXG5cclxuICAgICAgICBtZWRpYVR5cGU6IE1lZGlhVHlwZS5Zb3VUdWJlVmlkZW8sXHJcblxyXG4gICAgICAgIG1lZGlhVGl0bGVFbElkOiBcIm1lZGlhVGl0bGVcIixcclxuICAgICAgICBtZWRpYUFydGlzdEVsSWQ6IFwibWVkaWFBcnRpc3RcIixcclxuICAgICAgICBtZWRpYUxvY2F0aW9uRWxJZDogXCJtZWRpYUxvY2F0aW9uXCIsXHJcbiAgICAgICAgbWVkaWFPcmRlckVsSWQ6IFwibWVkaWFPcmRlclwiLFxyXG4gICAgICAgIG1lZGlhVmlkZW9VcmxFbElkOiBcIm1lZGlhVmlkZW9VcmxcIixcclxuICAgICAgICBtZWRpYVZpZGVvSWRFbElkOiBcIm1lZGlhVmlkZW9JZFwiLFxyXG4gICAgICAgIHNhdmVCdXR0b25JZDogXCJzYXZlTWVkaWFWaWRlb0Zvcm1cIixcclxuICAgICAgICBjYW5jZWxCdXR0b25JZDogXCJjbGVhck1lZGlhVmlkZW9Gb3JtXCJcclxuICAgIH0pO1xyXG5cclxuICAgICQoJyN3b2xmc2JhbmUtYWRtaW4tdGFiIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKHRoaXMpLnRhYignc2hvdycpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLmFsZXJ0JykuYWxlcnQoKTtcclxuXHJcbiAgICAvKiAkKCdhLm5hdi1saW5rJykub24oJ3Nob3duLmJzLnRhYicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgY29uc3QgbGlua1RhYkVsID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3Qgc2x1ZyA9IGxpbmtUYWJFbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFiLXNsdWcnKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NsdWcnLCBzbHVnKTtcclxuICAgIH0pICovXHJcbiAgICBcclxufSk7IiwiaW1wb3J0IElGb3JtTm90aWZpY2F0aW9uQ29uZmlnIGZyb20gXCIuL0lGb3JtTm90aWZpY2F0aW9uQ29uZmlnXCI7XHJcblxyXG5leHBvcnQgZW51bSBOb3RpZmljYXRpb25TdGF0dXMge1xyXG4gICAgUHJpbWFyeSA9ICdhbGVydC1wcmltYXJ5JyxcclxuICAgIFNlY29uZGFyeSA9ICdhbGVydC1zZWNvbmRhcnknLFxyXG4gICAgU3VjY2VzcyA9ICdhbGVydC1zdWNjZXNzJyxcclxuICAgIERhbmdlciA9ICdhbGVydC1kYW5nZXInLFxyXG4gICAgV2FybmluZyA9ICdhbGVydC13YXJuaW5nJyxcclxuICAgIEluZm8gPSAnYWxlcnQtaW5mbycsXHJcbiAgICBMaWdodCA9ICdhbGVydC1saWdodCcsXHJcbiAgICBEYXJrID0gJ2FsZXJ0LWRhcmsnLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtTm90aWZpY2F0aW9uIHtcclxuICAgIHByaXZhdGUgY29udGFpbmVyRWwhOiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgbWVzc2FnZUVsITogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWc6IElGb3JtTm90aWZpY2F0aW9uQ29uZmlnIHwgbnVsbCkge1xyXG4gICAgICAgIGlmIChjb25maWcgPT09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbmZpZyBhcyBJRm9ybU5vdGlmaWNhdGlvbkNvbmZpZztcclxuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXJFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuY29uZmlnLmNvbnRhaW5lcklkKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VFbCA9IHRoaXMuY29udGFpbmVyRWwucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5jb25maWcubWVzc2FnZUVsQ2xhc3N9YCkgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdyhzdGF0dXM6IE5vdGlmaWNhdGlvblN0YXR1cywgbWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhOb3RpZmljYXRpb25TdGF0dXMpLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyRWwuY2xhc3NMaXN0LnJlbW92ZShpdGVtKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5tZXNzYWdlRWwuaW5uZXJIVE1MID0gbWVzc2FnZTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lckVsLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyRWwuY2xhc3NMaXN0LmFkZCgnc2hvdycsIHN0YXR1cyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lckVsLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lckVsLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG4gICAgfVxyXG5cclxufSIsImV4cG9ydCBlbnVtIE1lZGlhVHlwZSB7XHJcbiAgICBCZWF0cyA9IDEsXHJcbiAgICBTb25ncyA9IDIsXHJcbiAgICBZb3VUdWJlVmlkZW8gPSAzXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGludGVyZmFjZSBJTWVkaWFEYXRhQ29uZmlnIHtcclxuICAgIGZvcm1JZDogc3RyaW5nO1xyXG4gICAgZWRpdEJ1dHRvbkNsYXNzOiBzdHJpbmc7XHJcbiAgICBkZWxldGVCdXR0b25DbGFzczogc3RyaW5nO1xyXG4gICAgbGlzdEVsSWQ6IHN0cmluZztcclxuICAgIG1wM1VwbG9hZEVsQ2xhc3M6IHN0cmluZztcclxuICAgIG9nZ1VwbG9hZEVsQ2xhc3M6IHN0cmluZztcclxuXHJcbiAgICB1cGxvYWRXcmFwcGVyRWxDbGFzczogc3RyaW5nO1xyXG4gICAgdXBsb2FkRGlzcGxheUVsQ2xhc3M6IHN0cmluZztcclxuICAgIHVwbG9hZERpc3BsYXlFbXB0eUVsQ2xhc3M6IHN0cmluZztcclxuICAgIG5vTWVkaWFDbGFzczogc3RyaW5nO1xyXG4gICAgYXR0YWNoZWRNZWRpYUNsYXNzOiBzdHJpbmc7XHJcbiAgICBhdHRhY2htZW50SW5mb0VsQ2xhc3M6IHN0cmluZztcclxuXHJcbiAgICBtYXhGaWxlU2l6ZT86IG51bWJlcjtcclxuICAgIHN1cHBvcnRGaWxlRXh0Pzogc3RyaW5nW107XHJcblxyXG4gICAgbWVkaWFUeXBlOiBNZWRpYVR5cGU7XHJcblxyXG4gICAgbWVkaWFUaXRsZUVsSWQ6IHN0cmluZztcclxuICAgIG1lZGlhQXJ0aXN0RWxJZDogc3RyaW5nO1xyXG4gICAgbWVkaWFMb2NhdGlvbkVsSWQ6IHN0cmluZztcclxuICAgIG1lZGlhT3JkZXJFbElkOiBzdHJpbmc7XHJcbiAgICBtZWRpYVZpZGVvVXJsRWxJZD86IHN0cmluZztcclxuICAgIG1lZGlhVmlkZW9JZEVsSWQ/OiBzdHJpbmc7XHJcbiAgICBtZWRpYU1wM0VsSWQ/OiBzdHJpbmc7XHJcbiAgICBtZWRpYU9nZ0VsSWQ/OiBzdHJpbmc7XHJcbiAgICBzYXZlQnV0dG9uSWQ6IHN0cmluZztcclxuICAgIGNhbmNlbEJ1dHRvbklkOiBzdHJpbmc7XHJcbn0iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBUZWJvVXRpbGl0eSBmcm9tIFwiLi4vVGVib1V0aWxpdHlcIjtcclxuaW1wb3J0IEZvcm1Ob3RpZmljYXRpb24sIHsgTm90aWZpY2F0aW9uU3RhdHVzIH0gZnJvbSBcIi4uL0Zvcm1Ob3RpZmljYXRpb24vRm9ybU5vdGlmaWNhdGlvblwiO1xyXG5pbXBvcnQgSU1lZGlhRGF0YUNvbmZpZywgeyBNZWRpYVR5cGUgfSBmcm9tIFwiLi9JTWVkaWFEYXRhQ29uZmlnXCI7XHJcbmltcG9ydCBSZXN1bHQgZnJvbSBcIi4uL1Jlc3VsdFwiO1xyXG5pbXBvcnQgeyB0cmltIH0gZnJvbSBcImpxdWVyeVwiO1xyXG5cclxuZW51bSBBY3Rpb24ge1xyXG4gICAgR2V0TWVkaWFMb2NhdGlvbiA9ICdnZXRfbWVkaWFfbG9jYXRpb24nLFxyXG4gICAgRGVsZXRlTWVkaWFMb2NhdGlvbiA9ICdkZWxldGVfbWVkaWFfbG9jYXRpb24nLFxyXG4gICAgU2F2ZU1lZGlhTG9jYXRpb24gPSAnc2F2ZV9tZWRpYV9sb2NhdGlvbicsXHJcbiAgICBHZXRNZWRpYURhdGEgPSAnZ2V0X21lZGlhX2RhdGEnLFxyXG4gICAgRGVsZXRlTWVkaWFEYXRhID0gJ2RlbGV0ZV9tZWRpYV9kYXRhJyxcclxuICAgIFNhdmVNZWRpYURhdGEgPSAnc2F2ZV9tZWRpYV9kYXRhJyxcclxufVxyXG5cclxuZW51bSBTdXBwb3J0RmlsZVR5cGUge1xyXG4gICAgTXAzID0gJ21wMycsXHJcbiAgICBPZ2cgPSAnb2dnJ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYURhdGEge1xyXG5cclxuICAgIHByaXZhdGUgZm9ybUVsOiBIVE1MRm9ybUVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIG1lZGlhVGl0bGVFbDogSFRNTElucHV0RWxlbWVudDtcclxuICAgIHByaXZhdGUgbWVkaWFBcnRpc3RFbDogSFRNTElucHV0RWxlbWVudDtcclxuICAgIHByaXZhdGUgbWVkaWFMb2NhdGlvbkVsOiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBtZWRpYU9yZGVyRWw6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIG1lZGlhTXAzRWw6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsO1xyXG4gICAgcHJpdmF0ZSBtZWRpYU9nZ0VsOiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbDtcclxuICAgIHByaXZhdGUgbWVkaWFWaWRlb1VybEVsOiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbDtcclxuICAgIHByaXZhdGUgbWVkaWFWaWRlb0lkRWw6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsO1xyXG4gICAgcHJpdmF0ZSBzYXZlRWw6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGNsZWFyRWw6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGxpc3RCbG9ja0VsOiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgbXAzVXBsb2FkRWw6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBvZ2dVcGxvYWRFbDogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHVwbG9hZERpc3BsYXlFbHM6IEhUTUxFbGVtZW50W107XHJcbiAgICBwcml2YXRlIHVwbG9hZFdyYXBwZXJFbHM6IEhUTUxFbGVtZW50W107XHJcbiAgICBwcml2YXRlIG11dGF0aW9uT2JzZXJ2ZXIhOiBNdXRhdGlvbk9ic2VydmVyO1xyXG5cclxuICAgIHByaXZhdGUgbm90aWZpY2F0aW9uRm9ybTogRm9ybU5vdGlmaWNhdGlvbiB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnOiBJTWVkaWFEYXRhQ29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmNvbmZpZy5mb3JtSWQpISBhcyBIVE1MRm9ybUVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5tZWRpYVRpdGxlRWwgPSB0aGlzLmZvcm1FbC5xdWVyeVNlbGVjdG9yKGA6c2NvcGUgIyR7dGhpcy5jb25maWcubWVkaWFUaXRsZUVsSWR9YCkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICB0aGlzLm1lZGlhQXJ0aXN0RWwgPSB0aGlzLmZvcm1FbC5xdWVyeVNlbGVjdG9yKGA6c2NvcGUgIyR7dGhpcy5jb25maWcubWVkaWFBcnRpc3RFbElkfWApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5tZWRpYUxvY2F0aW9uRWwgPSB0aGlzLmZvcm1FbC5xdWVyeVNlbGVjdG9yKGA6c2NvcGUgIyR7dGhpcy5jb25maWcubWVkaWFMb2NhdGlvbkVsSWR9YCkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICB0aGlzLm1lZGlhT3JkZXJFbCA9IHRoaXMuZm9ybUVsLnF1ZXJ5U2VsZWN0b3IoYDpzY29wZSAjJHt0aGlzLmNvbmZpZy5tZWRpYU9yZGVyRWxJZH1gKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIHRoaXMubWVkaWFNcDNFbCA9IHRoaXMuY29uZmlnLm1lZGlhTXAzRWxJZCA/IHRoaXMuZm9ybUVsLnF1ZXJ5U2VsZWN0b3IoYDpzY29wZSAjJHt0aGlzLmNvbmZpZy5tZWRpYU1wM0VsSWR9YCkgYXMgSFRNTElucHV0RWxlbWVudCA6IG51bGw7XHJcbiAgICAgICAgdGhpcy5tZWRpYU9nZ0VsID0gdGhpcy5jb25maWcubWVkaWFPZ2dFbElkID8gdGhpcy5mb3JtRWwucXVlcnlTZWxlY3RvcihgOnNjb3BlICMke3RoaXMuY29uZmlnLm1lZGlhT2dnRWxJZH1gKSBhcyBIVE1MSW5wdXRFbGVtZW50IDogbnVsbDtcclxuICAgICAgICB0aGlzLm1lZGlhVmlkZW9VcmxFbCA9IHRoaXMuY29uZmlnLm1lZGlhVmlkZW9VcmxFbElkID8gdGhpcy5mb3JtRWwucXVlcnlTZWxlY3RvcihgOnNjb3BlICMke3RoaXMuY29uZmlnLm1lZGlhVmlkZW9VcmxFbElkfWApIGFzIEhUTUxJbnB1dEVsZW1lbnQgOiBudWxsO1xyXG4gICAgICAgIHRoaXMubWVkaWFWaWRlb0lkRWwgPSB0aGlzLmNvbmZpZy5tZWRpYVZpZGVvSWRFbElkID8gdGhpcy5mb3JtRWwucXVlcnlTZWxlY3RvcihgOnNjb3BlICMke3RoaXMuY29uZmlnLm1lZGlhVmlkZW9JZEVsSWR9YCkgYXMgSFRNTElucHV0RWxlbWVudCA6IG51bGw7XHJcbiAgICAgICAgdGhpcy5zYXZlRWwgPSB0aGlzLmZvcm1FbC5xdWVyeVNlbGVjdG9yKGA6c2NvcGUgIyR7dGhpcy5jb25maWcuc2F2ZUJ1dHRvbklkfWApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5jbGVhckVsID0gdGhpcy5mb3JtRWwucXVlcnlTZWxlY3RvcihgOnNjb3BlICMke3RoaXMuY29uZmlnLmNhbmNlbEJ1dHRvbklkfWApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnVwbG9hZFdyYXBwZXJFbHMgPSBBcnJheS5mcm9tKHRoaXMuZm9ybUVsLnF1ZXJ5U2VsZWN0b3JBbGwoYDpzY29wZSAuJHt0aGlzLmNvbmZpZy51cGxvYWRXcmFwcGVyRWxDbGFzc31gKSB8fCBbXSk7XHJcbiAgICAgICAgdGhpcy51cGxvYWREaXNwbGF5RWxzID0gQXJyYXkuZnJvbSh0aGlzLmZvcm1FbC5xdWVyeVNlbGVjdG9yQWxsKGA6c2NvcGUgLiR7dGhpcy5jb25maWcudXBsb2FkRGlzcGxheUVsQ2xhc3N9YCkgfHwgW10pO1xyXG5cclxuICAgICAgICB0aGlzLm1wM1VwbG9hZEVsID0gdGhpcy5mb3JtRWwucXVlcnlTZWxlY3RvcihgOnNjb3BlIC4ke3RoaXMuY29uZmlnLm1wM1VwbG9hZEVsQ2xhc3N9YCkgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5vZ2dVcGxvYWRFbCA9IHRoaXMuZm9ybUVsLnF1ZXJ5U2VsZWN0b3IoYDpzY29wZSAuJHt0aGlzLmNvbmZpZy5vZ2dVcGxvYWRFbENsYXNzfWApIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIHRoaXMubGlzdEJsb2NrRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmNvbmZpZy5saXN0RWxJZH1gKSBhcyBIVE1MRWxlbWVudCA/PyB0aGlzLmNyZWF0ZUxpc3RCbG9ja0VsKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0dXAoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGVkaXRDbGlja0hhbmRsZXIoZTogRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5mb3JtRWwuZGF0YXNldC51cmwpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgZWwgPSAoZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50KSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICBjb25zdCBtZWRpYURhdGFJZCA9ICsoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykgfHwgJzAnKTtcclxuXHJcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZm9ybUVsLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIG1lZGlhRGF0YUlkICsgJycpO1xyXG5cclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJtZWRpYURhdGFJZFwiLCBtZWRpYURhdGFJZCArICcnKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJhY3Rpb25cIiwgQWN0aW9uLkdldE1lZGlhRGF0YSk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwibm9uY2VcIiwgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKEFjdGlvbi5HZXRNZWRpYURhdGEgKyAnX25vbmNlJykhIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKTtcclxuXHJcbiAgICAgICAgZmV0Y2godGhpcy5mb3JtRWwuZGF0YXNldC51cmwsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgYm9keTogbmV3IFVSTFNlYXJjaFBhcmFtcyhmb3JtRGF0YSBhcyBVUkxTZWFyY2hQYXJhbXMpXHJcbiAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgaWYgKFRlYm9VdGlsaXR5LmlzSnNvblJlc3BvbnNlKHJlc3BvbnNlKSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZXNwb25zZSk7XHJcbiAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIVRlYm9VdGlsaXR5LnRyeVBhcnNlVG9Kc29uKHJlc3VsdCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGxldCBtZXNzYWdlID0gJyc7XHJcbiAgICAgICAgICAgIGNvbnN0IG91dGNvbWUgPSBKU09OLnBhcnNlKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIW91dGNvbWUuc3VjY2VzcylcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSAnVW5hYmxlIHRvIHJldHJpZXZlIG1lZGlhIGRhdGEnO1xyXG5cclxuICAgICAgICAgICAgaWYgKG91dGNvbWUuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZWRpYVRpdGxlRWwudmFsdWUgPSBvdXRjb21lLmRhdGEucmVzdWx0LnRpdGxlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZWRpYUFydGlzdEVsLnZhbHVlID0gb3V0Y29tZS5kYXRhLnJlc3VsdC5hcnRpc3Q7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lZGlhTG9jYXRpb25FbC52YWx1ZSA9IG91dGNvbWUuZGF0YS5yZXN1bHQubG9jYXRpb25JZDtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVkaWFPcmRlckVsLnZhbHVlID0gb3V0Y29tZS5kYXRhLnJlc3VsdC5vcmRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tZWRpYVZpZGVvVXJsRWwpIHRoaXMubWVkaWFWaWRlb1VybEVsIS52YWx1ZSA9IG91dGNvbWUuZGF0YS5yZXN1bHQudmlkZW9Vcmw7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tZWRpYVZpZGVvSWRFbCkgdGhpcy5tZWRpYVZpZGVvSWRFbCEudmFsdWUgPSBvdXRjb21lLmRhdGEucmVzdWx0LnZpZGVvSWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGxvYWRXcmFwcGVyRWxzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZpbGVJbnB1dEVsID0gaXRlbS5xdWVyeVNlbGVjdG9yKCdbdHlwZT1maWxlXScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGF0dGFjaG1lbnRJbmZvRWwgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuY29uZmlnLmF0dGFjaG1lbnRJbmZvRWxDbGFzc31gKSEgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlzTXAzRmlsZUlucHV0ID0gZmlsZUlucHV0RWwuaWQgPT09ICdtZWRpYU1wMyc7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlzT2dnRmlsZUlucHV0ID0gZmlsZUlucHV0RWwuaWQgPT09ICdtZWRpYU9nZyc7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhhc01wM0ZpbGUgPSB0cmltKG91dGNvbWUuZGF0YS5yZXN1bHQubXAzRmlsZW5hbWUpICE9PSAnJztcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaGFzT2dnRmlsZSA9IHRyaW0ob3V0Y29tZS5kYXRhLnJlc3VsdC5vZ2dGaWxlbmFtZSkgIT09ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNNcDNGaWxlSW5wdXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc01wM0ZpbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCh0aGlzLmNvbmZpZy5hdHRhY2hlZE1lZGlhQ2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNobWVudEluZm9FbC5pbm5lckhUTUwgPSBvdXRjb21lLmRhdGEucmVzdWx0Lm1wM0ZpbGVuYW1lOyAvLydtZWRpYS1maWxlLm1wMyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoYCR7dGhpcy5jb25maWcuYXR0YWNoZWRNZWRpYUNsYXNzfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNPZ2dGaWxlSW5wdXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc09nZ0ZpbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCh0aGlzLmNvbmZpZy5hdHRhY2hlZE1lZGlhQ2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNobWVudEluZm9FbC5pbm5lckhUTUwgPSBvdXRjb21lLmRhdGEucmVzdWx0Lm9nZ0ZpbGVuYW1lOyAvLydtZWRpYS1maWxlLm9nZyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoYCR7dGhpcy5jb25maWcuYXR0YWNoZWRNZWRpYUNsYXNzfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIC8vIGVuYWJsZSB0aGUgc3VibWl0IGJ1dHRvblxyXG4gICAgICAgICAgICAvLyB0aGlzLnN1Ym1pdEVsLmRpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbkZvcm0/LnNob3coTm90aWZpY2F0aW9uU3RhdHVzLkRhbmdlciwgXCJQcm9ibGVtIHJldHJpZXZpbmcgbWVkaWEgbG9jYXRpb24gaW5mb3JtYXRpb25cIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkZWxldGVDbGlja0hhbmRsZXIoZTogRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5mb3JtRWwuZGF0YXNldC51cmwpIHJldHVybjtcclxuICAgICAgICBpZiAoIWNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoZSBtZWRpYSBkYXRhP1wiKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBlbCA9IChlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IG1lZGlhRGF0YUlkID0gKyhlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSB8fCAnMCcpO1xyXG5cclxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuXHJcbiAgICAgICAgdGhpcy5mb3JtRWwuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgbWVkaWFEYXRhSWQgKyAnJyk7XHJcblxyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcIm1lZGlhRGF0YUlkXCIsIG1lZGlhRGF0YUlkICsgJycpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImFjdGlvblwiLCBBY3Rpb24uRGVsZXRlTWVkaWFEYXRhKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJub25jZVwiLCAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoQWN0aW9uLkRlbGV0ZU1lZGlhRGF0YSArICdfbm9uY2UnKSEgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpO1xyXG5cclxuICAgICAgICBmZXRjaCh0aGlzLmZvcm1FbC5kYXRhc2V0LnVybCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBib2R5OiBuZXcgVVJMU2VhcmNoUGFyYW1zKGZvcm1EYXRhIGFzIFVSTFNlYXJjaFBhcmFtcylcclxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5mb3JtRWwuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgJycpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoVGVib1V0aWxpdHkuaXNKc29uUmVzcG9uc2UocmVzcG9uc2UpKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlc3BvbnNlKTtcclxuICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIGlmICghVGVib1V0aWxpdHkudHJ5UGFyc2VUb0pzb24ocmVzdWx0KSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSAnJztcclxuICAgICAgICAgICAgY29uc3Qgb3V0Y29tZSA9IEpTT04ucGFyc2UocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghb3V0Y29tZS5zdWNjZXNzKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25Gb3JtPy5zaG93KE5vdGlmaWNhdGlvblN0YXR1cy5EYW5nZXIsIFwiVW5hYmxlIHRvIHNlbmQgY29udGFjdCBmb3JtIG1lc3NhZ2VcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAob3V0Y29tZS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVJvdyhtZWRpYURhdGFJZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbkZvcm0/LnNob3coTm90aWZpY2F0aW9uU3RhdHVzLlN1Y2Nlc3MsIFwiTWVkaWEgZGF0YSB3YXMgZGVsZXRlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uRm9ybT8uc2hvdyhOb3RpZmljYXRpb25TdGF0dXMuRGFuZ2VyLCBcIlByb2JsZW0gZGVsZXRpbmcgbWVkaWEgZGF0YSBpbmZvcm1hdGlvblwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNhdmVDbGlja0hhbmRsZXIoZTogRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgZWwgPSAoZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50KSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICBsZXQgcmVzdWx0OiBSZXN1bHQ7XHJcblxyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uRm9ybT8uaGlkZSgpO1xyXG5cclxuICAgICAgICByZXN1bHQgPSB0aGlzLnNhdmVGb3JtKGVsKTtcclxuXHJcbiAgICAgICAgaWYgKCFyZXN1bHQuSXNTdWNjZXNzZnVsKCkpXHJcbiAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uRm9ybT8uc2hvdyhOb3RpZmljYXRpb25TdGF0dXMuRGFuZ2VyLCByZXN1bHQuZ2V0TWVzc2FnZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNhdmVGb3JtKGVsKTogUmVzdWx0IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0OiBSZXN1bHQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZm9ybUVsLmRhdGFzZXQudXJsKSByZXR1cm4gUmVzdWx0LkVycm9yKFwiQ2Fubm90IHNhdmUgZm9ybVwiLCBcIkRhdGEgdXJsIG5vdCBzcGVjaWZpZWRcIik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICBjb25zdCBtZWRpYURhdGFJZCA9ICsodGhpcy5mb3JtRWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykgfHwgJzAnKTtcclxuICAgICAgICAgICAgY29uc3QgbWVkaWFUaXRsZSA9IHRyaW0odGhpcy5tZWRpYVRpdGxlRWwudmFsdWUpO1xyXG4gICAgICAgICAgICBjb25zdCBtZWRpYUFydGlzdCA9IHRyaW0odGhpcy5tZWRpYUFydGlzdEVsLnZhbHVlKTtcclxuICAgICAgICAgICAgY29uc3QgbG9jYXRpb25JZCA9IHRyaW0odGhpcy5tZWRpYUxvY2F0aW9uRWwudmFsdWUpO1xyXG4gICAgICAgICAgICBjb25zdCBvcmRlciA9IHRyaW0odGhpcy5tZWRpYU9yZGVyRWwudmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFtZWRpYVRpdGxlKSByZXR1cm4gUmVzdWx0LkVycm9yKFwiTWVkaWEgdGl0bGUgaXMgcmVxdWlyZWRcIik7XHJcbiAgICAgICAgICAgIGlmICghbWVkaWFBcnRpc3QpIHJldHVybiBSZXN1bHQuRXJyb3IoXCJNZWRpYSBhcnRpc3QgaXMgcmVxdWlyZWRcIik7XHJcblxyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJtZWRpYURhdGFJZFwiLCBtZWRpYURhdGFJZCArICcnKTtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwibWVkaWFUeXBlSWRcIiwgdGhpcy5jb25maWcubWVkaWFUeXBlICsgJycpO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJtZWRpYVRpdGxlXCIsIG1lZGlhVGl0bGUpO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJtZWRpYUFydGlzdFwiLCBtZWRpYUFydGlzdCk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImxvY2F0aW9uSWRcIiwgbG9jYXRpb25JZCk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcIm9yZGVyXCIsIG9yZGVyKTtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiYWN0aW9uXCIsIEFjdGlvbi5TYXZlTWVkaWFEYXRhKTtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwibm9uY2VfbmFtZVwiLCBBY3Rpb24uU2F2ZU1lZGlhRGF0YSArICdfbm9uY2UnKTtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwibm9uY2VcIiwgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKEFjdGlvbi5TYXZlTWVkaWFEYXRhICsgJ19ub25jZScpISBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5jb25maWcubWVkaWFUeXBlID09PSBNZWRpYVR5cGUuQmVhdHMgfHwgdGhpcy5jb25maWcubWVkaWFUeXBlID09PSBNZWRpYVR5cGUuU29uZ3MpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYXBwZW5kVXBsb2FkRGF0YShtZWRpYURhdGFJZCwgZm9ybURhdGEsIHRoaXMubWVkaWFNcDNFbD8uZmlsZXMgfHwgbnVsbCwgU3VwcG9ydEZpbGVUeXBlLk1wMyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdC5Jc1N1Y2Nlc3NmdWwoKSkgcmV0dXJuIHJlc3VsdDtcclxuXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmFwcGVuZFVwbG9hZERhdGEobWVkaWFEYXRhSWQsIGZvcm1EYXRhLCB0aGlzLm1lZGlhT2dnRWw/LmZpbGVzIHx8IG51bGwsIFN1cHBvcnRGaWxlVHlwZS5PZ2cpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQuSXNTdWNjZXNzZnVsKCkpIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5tZWRpYVR5cGUgPT09IE1lZGlhVHlwZS5Zb3VUdWJlVmlkZW8pIHtcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInZpZGVvVXJsXCIsIHRyaW0odGhpcy5tZWRpYVZpZGVvVXJsRWw/LnZhbHVlIHx8ICcnKSk7XHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ2aWRlb0lkXCIsIHRyaW0odGhpcy5tZWRpYVZpZGVvSWRFbD8udmFsdWUgfHwgJycpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZmV0Y2godGhpcy5mb3JtRWwuZGF0YXNldC51cmwsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBib2R5OiBmb3JtRGF0YVxyXG4gICAgICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChUZWJvVXRpbGl0eS5pc0pzb25SZXNwb25zZShyZXNwb25zZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFUZWJvVXRpbGl0eS50cnlQYXJzZVRvSnNvbihyZXN1bHQpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSAnJztcclxuICAgICAgICAgICAgICAgIGNvbnN0IG91dGNvbWUgPSBKU09OLnBhcnNlKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFvdXRjb21lLnN1Y2Nlc3MpXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9ICdVbmFibGUgdG8gc2F2ZSBtZWRpYSBkYXRhJztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAob3V0Y29tZS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ291dGNvbWUuZGF0YS5yZXN1bHQnLCBvdXRjb21lLmRhdGEucmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZE5ld1JvdyhvdXRjb21lLmRhdGEucmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyRm9ybSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uRm9ybT8uc2hvdyhOb3RpZmljYXRpb25TdGF0dXMuU3VjY2VzcywgXCJNZWRpYSBkYXRhIHdhcyBzYXZlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChUZWJvVXRpbGl0eS5pc1N0cmluZyhyZXNwb25zZSkpIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIC8vIGlmICghVGVib1V0aWxpdHkuaXNPYmplY3QocmVzcG9uc2UpKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBpZiAoIVRlYm9VdGlsaXR5LmlzRnVuY3Rpb24ocmVzcG9uc2UudGV4dCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpLnRoZW4odGV4dCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFRlYm9VdGlsaXR5LnRyeVBhcnNlVG9Kc29uKHRleHQpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVFcnJvcih0ZXh0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25Gb3JtPy5zaG93KE5vdGlmaWNhdGlvblN0YXR1cy5EYW5nZXIsIFwiVW5hYmxlIHRvIHVwbG9hZCBmaWxlOyBjb21iaW5lZCBmaWxlIHNpemUgY291bGQgYmUgbGFyZ2VyIHRoYW4gbGltaXRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcih0ZXh0KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBSZXN1bHQuU3VjY2VzcygpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gUmVzdWx0LkVycm9yKFRlYm9VdGlsaXR5LmlzT2JqZWN0KGVycikgPyBlcnI/Lm1lc3NhZ2UgOiBlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZvcm1BdHRyTXV0YXRpb25IYW5kbGVyKHZhbHVlOiBNdXRhdGlvblJlY29yZCwgaW5kZXg6IG51bWJlciwgYXJyYXk6IE11dGF0aW9uUmVjb3JkW10pOiB2b2lkIHtcclxuICAgICAgICBpZiAodmFsdWUudHlwZSA9PSBcImF0dHJpYnV0ZXNcIikge1xyXG4gICAgICAgICAgICBjb25zdCBtZWRpYURhdGFJZDogbnVtYmVyID0gKyh0aGlzLmZvcm1FbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSB8fCAnMCcpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy51cGxvYWRXcmFwcGVyRWxzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVkaWFEYXRhSWQgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5hdHRhY2hlZE1lZGlhQ2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChgJHt0aGlzLmNvbmZpZy5ub01lZGlhQ2xhc3N9YCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShgJHt0aGlzLmNvbmZpZy5ub01lZGlhQ2xhc3N9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaXRlbS5jbGFzc0xpc3QuYWRkKGAke3RoaXMuY29uZmlnLmF0dGFjaGVkTWVkaWFDbGFzc31gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbWVkaWFGaWxlQ2hhbmdlSGFuZGxlcihlOiBFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBlbCA9IChlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3QgaXNNcDNFbCA9IGVsLmlkID09PSB0aGlzLm1lZGlhTXAzRWw/LmlkIHx8ICcnO1xyXG4gICAgICAgIGNvbnN0IG1lZGlhRGF0YUlkOiBudW1iZXIgPSArKHRoaXMuZm9ybUVsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpIHx8ICcwJyk7XHJcbiAgICAgICAgY29uc3Qgd3JhcHBlckVsID0gVGVib1V0aWxpdHkuZ2V0Q2xvc2VzdChlbCwgYC4ke3RoaXMuY29uZmlnLnVwbG9hZFdyYXBwZXJFbENsYXNzfWApIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIGxldCBhdHRhY2htZW50SW5mb0VsID0gd3JhcHBlckVsLnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuY29uZmlnLmF0dGFjaG1lbnRJbmZvRWxDbGFzc31gKSEgYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGlmICghZWwuZmlsZXMgfHwgZWwuZmlsZXMubGVuZ3RoIDw9IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgZmlsZU5hbWUgPSBlbD8uZmlsZXMhWzBdLm5hbWU7XHJcbiAgICAgICAgY29uc3QgZmlsZVNpemUgPSBlbD8uZmlsZXMhWzBdLnNpemU7XHJcbiAgICAgICAgY29uc3QgZmlsZUF0dGFjaGVkID0gZmlsZVNpemUgPiAwO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKGZpbGVBdHRhY2hlZCkge1xyXG4gICAgICAgICAgICB3cmFwcGVyRWw/LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcubm9NZWRpYUNsYXNzKTtcclxuICAgICAgICAgICAgd3JhcHBlckVsPy5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLmF0dGFjaGVkTWVkaWFDbGFzcyk7XHJcblxyXG4gICAgICAgICAgICBhdHRhY2htZW50SW5mb0VsLmlubmVySFRNTCA9IGZpbGVOYW1lO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXJFbD8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5hdHRhY2hlZE1lZGlhQ2xhc3MpO1xyXG4gICAgICAgICAgICB3cmFwcGVyRWw/LmNsYXNzTGlzdC5hZGQodGhpcy5jb25maWcubm9NZWRpYUNsYXNzKTtcclxuXHJcbiAgICAgICAgICAgIGF0dGFjaG1lbnRJbmZvRWwuaW5uZXJIVE1MID0gaXNNcDNFbCA/ICdtZWRpYS1maWxlLm1wMycgOiAnbWVkaWEtZmlsZS5vZ2cnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFwcGVuZFVwbG9hZERhdGEobWVkaWFEYXRhSWQ6IG51bWJlciwgZm9ybURhdGE6IEZvcm1EYXRhLCBmaWxlczogRmlsZUxpc3QgfCBudWxsLCBmaWxlVHlwZTogU3VwcG9ydEZpbGVUeXBlKSB7XHJcblxyXG4gICAgICAgIGlmIChmaWxlcyA9PT0gbnVsbCB8fCB0eXBlb2YgZmlsZXMgPT09ICd1bmRlZmluZWQnKSB0aHJvdyBgQ2Fubm90IHJldHJpZXZlIGZpbGVzIHRvIGJlIHVwbG9hZGVkYDtcclxuICAgICAgICBpZiAobWVkaWFEYXRhSWQgPD0gMCAmJiAoIWZpbGVzPy5sZW5ndGggfHwgZmlsZXM/Lmxlbmd0aCA8PSAwKSkgdGhyb3cgYE5vICR7ZmlsZVR5cGV9IGZpbGUgdG8gdXBsb2FkYDtcclxuICAgICAgICBpZiAobWVkaWFEYXRhSWQgPD0gMCAmJiBmaWxlcz8ubGVuZ3RoID4gMSkgdGhyb3cgYFlvdSBjYW5ub3Qgbm90IHVwbG9hZCBtb3JlIHRoYW4gb25lICR7ZmlsZVR5cGV9IGZpbGVgO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVzPy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBmaWxlTmFtZSA9IGZpbGVzW2ldLm5hbWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbGVTaXplID0gZmlsZXNbaV0uc2l6ZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICghVGVib1V0aWxpdHkuaGFzRXh0ZW5zaW9uKGZpbGVOYW1lLCBbZmlsZVR5cGVdKSkgcmV0dXJuIFJlc3VsdC5FcnJvcihgRmlsZSB0eXBlIGZvciAke2ZpbGVUeXBlfSB2ZXJzaW9uIG11c3QgYmUgYW4gJHtmaWxlVHlwZX1gKTtcclxuICAgICAgICAgICAgaWYgKGZpbGVTaXplID4gKHRoaXMuY29uZmlnPy5tYXhGaWxlU2l6ZSB8fCAxNTcyODY0MCkpIHJldHVybiBSZXN1bHQuRXJyb3IoYE1heCBmaWxlIHNpemUgZm9yICR7ZmlsZVR5cGV9IHZlcnNpb24gZXhjZWVkYCk7XHJcblxyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoZmlsZVR5cGUgKyAnRmlsZW5hbWUnLCBmaWxlc1tpXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUmVzdWx0LlN1Y2Nlc3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBzdHJpbmcpIHtcclxuICAgICAgICB0cnkgeyAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBKU09OLnBhcnNlKGVycm9yKTtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3JzID0gcmVzdWx0LmRhdGEuZXJyb3JzO1xyXG5cclxuICAgICAgICAgICAgaWYgKFRlYm9VdGlsaXR5LmlzQXJyYXkoZXJyb3JzKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSAnPHVsPic7XHJcbiAgICAgICAgICAgICAgICBlcnJvcnMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlICs9IGA8bGk+JHtpdGVtfTwvbGk+YDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSArPSBgPC91bD5gO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25Gb3JtPy5zaG93KE5vdGlmaWNhdGlvblN0YXR1cy5EYW5nZXIsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIVRlYm9VdGlsaXR5LmlzT2JqZWN0KGVycm9ycykpIHJldHVybjtcclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9ICc8dWw+JztcclxuICAgICAgICAgICAgZm9yIChjb25zdCB4IGluIHJlc3VsdD8uZGF0YT8uZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHkgaW4gcmVzdWx0Py5kYXRhPy5lcnJvcnNbeF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlICs9IGA8bGk+JHtyZXN1bHQ/LmRhdGE/LmVycm9yc1t4XVt5XX08L2xpPmA7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1lc3NhZ2UgKz0gYDwvdWw+YDtcclxuICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25Gb3JtPy5zaG93KE5vdGlmaWNhdGlvblN0YXR1cy5EYW5nZXIsIG1lc3NhZ2UpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblxyXG4gICAgICAgICAgICAvKiByZXR1cm4gZXJyb3IudGV4dCgpLnRoZW4odGV4dCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzYXZpbmcgbWVkaWEgZGF0YScpO1xyXG4gICAgICAgICAgICB9KTsgKi9cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGROZXdSb3cobWVkaWFEYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIW1lZGlhRGF0YSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLnJlbW92ZVJvdyhtZWRpYURhdGEuaWQpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnZGVjb2RlVVJJQ29tcG9uZW50KG1lZGlhRGF0YS52aWRlb1VybCknLCBkZWNvZGVVUklDb21wb25lbnQobWVkaWFEYXRhLnZpZGVvVXJsKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ21lZGlhRGF0YS52aWRlb0lkJywgbWVkaWFEYXRhLnZpZGVvSWQpO1xyXG5cclxuICAgICAgICBpZiAoK21lZGlhRGF0YS50eXBlSWQgPT09IE1lZGlhVHlwZS5Zb3VUdWJlVmlkZW8pIHtcclxuICAgICAgICAgICAgdGhpcy5saXN0QmxvY2tFbD8uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgXHJcbiAgICAgICAgICAgICAgICA8bGkgZGF0YS1pZD1cIiR7bWVkaWFEYXRhLmlkfVwiIGNsYXNzPVwiZGF0YS1saXN0X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1zbS02IGNvbC1tZC02IGNvbC14bC0zIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzcz1cIm15LTBcIj4ke18udW5lc2NhcGUobWVkaWFEYXRhLnRpdGxlKX08L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPlRpdGxlPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLXNtLTYgY29sLW1kLTYgY29sLXhsLTMgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzPVwibXktMFwiPiR7Xy51bmVzY2FwZShtZWRpYURhdGEuYXJ0aXN0KX08L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPkFydGlzdDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1zbS02IGNvbC1tZC02IGNvbC14bC0zIG1iLXhsLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzcz1cIm15LTBcIj4ke21lZGlhRGF0YS5sb2NhdGlvbk5hbWV9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj5Mb2NhdGlvbjwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1zbS02IGNvbC1tZC02IGNvbC14bC0zIG1iLXhsLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzcz1cIm15LTBcIj4ke21lZGlhRGF0YS5vcmRlcn08L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPk9yZGVyPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLXNtLTYgY29sLW1kLTYgY29sLXhsLTMgbWIteGwtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzPVwibXktMCBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtkZWNvZGVVUklDb21wb25lbnQobWVkaWFEYXRhLnZpZGVvVXJsKX1cIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cInRleHQtYnJlYWtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2RlY29kZVVSSUNvbXBvbmVudChtZWRpYURhdGEudmlkZW9VcmwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+VmlkZW8gVVJMPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLXNtLTYgY29sLW1kLTYgY29sLXhsLTMgbWIteGwtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzPVwibXktMFwiPiR7bWVkaWFEYXRhLnZpZGVvSWR9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj5WaWRlbyBJRDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhLWxpc3RfX2NvbnRyb2xzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgZmxvYXQtcmlnaHRcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiQWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiZWRpdC0ke21lZGlhRGF0YS5pZH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaWQ9XCIke21lZGlhRGF0YS5pZH1cIiB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInZpZGVvLWZvcm0tZWRpdC1idXR0b24gYnRuIGJ0bi1saW5rIGJ0bi1zbVwiPkVkaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJkZWxldGUtJHttZWRpYURhdGEuaWR9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWlkPVwiJHttZWRpYURhdGEuaWR9XCIgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ2aWRlby1mb3JtLWRlbGV0ZS1idXR0b24gYnRuIGJ0bi1saW5rIGJ0bi1zbVwiPkRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIGApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEJsb2NrRWw/Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYFxyXG4gICAgICAgICAgICAgICAgPGxpIGRhdGEtaWQ9XCIke21lZGlhRGF0YS5pZH1cIiBjbGFzcz1cImRhdGEtbGlzdF9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtc20tNiBjb2wtbWQtNiBjb2wteGwtMyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3M9XCJteS0wXCI+JHttZWRpYURhdGEudGl0bGV9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj5UaXRsZTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1zbS02IGNvbC1tZC02IGNvbC14bC0zIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzcz1cIm15LTBcIj4ke21lZGlhRGF0YS5hcnRpc3R9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj5BcnRpc3Q8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtc20tNiBjb2wtbWQtNiBjb2wteGwtMyBtYi14bC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3M9XCJteS0wXCI+JHttZWRpYURhdGEubG9jYXRpb25OYW1lfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+TG9jYXRpb248L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtc20tNiBjb2wtbWQtNiBjb2wteGwtMyBtYi14bC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3M9XCJteS0wXCI+JHttZWRpYURhdGEub3JkZXJ9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj5PcmRlcjwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhLWxpc3RfX2NvbnRyb2xzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImljb24tbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiaWNvbi1saXN0X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJpY29uLWxpc3RfX2xpbmsgaWNvbi1saXN0X19saW5rLS1tcDNcIiBocmVmPVwiJHttZWRpYURhdGEubXAzVXJsfVwiIHRhcmdldD1cIl9ibGFua1wiPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJpY29uLWxpc3RfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImljb24tbGlzdF9fbGluayBpY29uLWxpc3RfX2xpbmstLW9nZ1wiIGhyZWY9XCIke21lZGlhRGF0YS5vZ2dVcmx9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBmbG9hdC1yaWdodFwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJBY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJlZGl0LSR7bWVkaWFEYXRhLmlkfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pZD1cIiR7bWVkaWFEYXRhLmlkfVwiIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiJHt0aGlzLmNvbmZpZy5lZGl0QnV0dG9uQ2xhc3N9IGJ0biBidG4tbGluayBidG4tc21cIj5FZGl0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiZGVsZXRlLSR7bWVkaWFEYXRhLmlkfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pZD1cIiR7bWVkaWFEYXRhLmlkfVwiIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiJHt0aGlzLmNvbmZpZy5kZWxldGVCdXR0b25DbGFzc30gYnRuIGJ0bi1saW5rIGJ0bi1zbVwiPkRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIGApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbW92ZVJvdyhtZWRpYURhdGFJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCFtZWRpYURhdGFJZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmxpc3RCbG9ja0VsLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHttZWRpYURhdGFJZH1cIl1gKT8ucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjbGVhckNsaWNrSGFuZGxlcihlOiBFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgZWwgPSAoZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50KSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICBjb25zdCBtZWRpYUxvY2F0aW9uSWQgPSArKHRoaXMuZm9ybUVsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpIHx8ICcwJyk7XHJcblxyXG4gICAgICAgIHRoaXMuY2xlYXJGb3JtKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjbGVhckZvcm0oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5mb3JtRWwuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgJycpO1xyXG4gICAgICAgIHRoaXMuZm9ybUVsLnJlc2V0KCk7XHJcblxyXG4gICAgICAgIHRoaXMudXBsb2FkV3JhcHBlckVscy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpdGVtPy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLmF0dGFjaGVkTWVkaWFDbGFzcyk7XHJcbiAgICAgICAgICAgIGl0ZW0/LmNsYXNzTGlzdC5hZGQodGhpcy5jb25maWcubm9NZWRpYUNsYXNzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZUxpc3RCbG9ja0VsKCk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcblxyXG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnaWQnLCB0aGlzLmNvbmZpZy5saXN0RWxJZCk7XHJcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnZGF0YS1saXN0Jyk7XHJcblxyXG4gICAgICAgIHRoaXMuZm9ybUVsLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCBlbCk7XHJcblxyXG4gICAgICAgIHJldHVybiBlbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldHVwKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG1lZGlhRGF0YUlkID0gKyh0aGlzLmZvcm1FbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSB8fCAnMCcpO1xyXG5cclxuICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihtdXRhdGlvbnMgPT4ge1xyXG4gICAgICAgICAgICBtdXRhdGlvbnMuZm9yRWFjaCh0aGlzLmZvcm1BdHRyTXV0YXRpb25IYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmZvcm1FbCwge1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlIC8vY29uZmlndXJlIGl0IHRvIGxpc3RlbiB0byBhdHRyaWJ1dGUgY2hhbmdlc1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmZvcm1FbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBtZWRpYURhdGFJZCArICcnKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25Gb3JtID0gbmV3IEZvcm1Ob3RpZmljYXRpb24oe1xyXG4gICAgICAgICAgICBjb250YWluZXJJZDogJ21ndC1jZW50ZXItbm90aWZpY2F0aW9uJyxcclxuICAgICAgICAgICAgbWVzc2FnZUVsQ2xhc3M6ICdhbGVydC1tZXNzYWdlJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBUZWJvVXRpbGl0eS5saXZlKGAuJHt0aGlzLmNvbmZpZy5lZGl0QnV0dG9uQ2xhc3N9YCwgJ2NsaWNrJywgdGhpcy5lZGl0Q2xpY2tIYW5kbGVyLmJpbmQodGhpcyksIHRoaXMubGlzdEJsb2NrRWwpO1xyXG4gICAgICAgIFRlYm9VdGlsaXR5LmxpdmUoYC4ke3RoaXMuY29uZmlnLmRlbGV0ZUJ1dHRvbkNsYXNzfWAsICdjbGljaycsIHRoaXMuZGVsZXRlQ2xpY2tIYW5kbGVyLmJpbmQodGhpcyksIHRoaXMubGlzdEJsb2NrRWwpO1xyXG5cclxuICAgICAgICB0aGlzLnNhdmVFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2F2ZUNsaWNrSGFuZGxlci5iaW5kKHRoaXMpLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5jbGVhckVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGVhckNsaWNrSGFuZGxlci5iaW5kKHRoaXMpLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIHRoaXMubWVkaWFNcDNFbD8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5tZWRpYUZpbGVDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyksIGZhbHNlKTtcclxuICAgICAgICB0aGlzLm1lZGlhT2dnRWw/LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMubWVkaWFGaWxlQ2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIHRoaXMubXAzVXBsb2FkRWw/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBUZWJvVXRpbGl0eS5zaW11bGF0ZUNsaWNrKHRoaXMubWVkaWFNcDNFbCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgICAgIHRoaXMub2dnVXBsb2FkRWw/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBUZWJvVXRpbGl0eS5zaW11bGF0ZUNsaWNrKHRoaXMubWVkaWFPZ2dFbCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IElNZWRpYUxvY2F0aW9uQ29uZmlnIGZyb20gXCIuL0lNZWRpYUxvY2F0aW9uQ29uZmlnXCI7XHJcbmltcG9ydCBUZWJvVXRpbGl0eSBmcm9tIFwiLi4vVGVib1V0aWxpdHlcIjtcclxuaW1wb3J0IEZvcm1Ob3RpZmljYXRpb24sIHsgTm90aWZpY2F0aW9uU3RhdHVzIH0gZnJvbSBcIi4uL0Zvcm1Ob3RpZmljYXRpb24vRm9ybU5vdGlmaWNhdGlvblwiO1xyXG5cclxuZW51bSBBY3Rpb24ge1xyXG4gICAgR2V0TWVkaWFMb2NhdGlvbiA9ICdnZXRfbWVkaWFfbG9jYXRpb24nLFxyXG4gICAgRGVsZXRlTWVkaWFMb2NhdGlvbiA9ICdkZWxldGVfbWVkaWFfbG9jYXRpb24nLFxyXG4gICAgU2F2ZU1lZGlhTG9jYXRpb24gPSAnc2F2ZV9tZWRpYV9sb2NhdGlvbidcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVkaWFMb2NhdGlvbiB7XHJcblxyXG4gICAgcHJpdmF0ZSBmb3JtRWw6IEhUTUxGb3JtRWxlbWVudDtcclxuICAgIHByaXZhdGUgbG9jYXRpb25OYW1lRWw6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGxvY2F0aW9uU2x1Z0VsOiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBzYXZlRWw6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGNsZWFyRWw6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGxpc3RCbG9ja0VsOiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBwcml2YXRlIG5vdGlmaWNhdGlvbkZvcm06IEZvcm1Ob3RpZmljYXRpb24gfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZzogSU1lZGlhTG9jYXRpb25Db25maWcpIHtcclxuICAgICAgICB0aGlzLmZvcm1FbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuY29uZmlnLmZvcm1JZCkhIGFzIEhUTUxGb3JtRWxlbWVudDtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uTmFtZUVsID0gdGhpcy5mb3JtRWwucXVlcnlTZWxlY3RvcignI21lZGlhTG9jYXRpb25OYW1lJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uU2x1Z0VsID0gdGhpcy5mb3JtRWwucXVlcnlTZWxlY3RvcignI21lZGlhTG9jYXRpb25TbHVnJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICB0aGlzLnNhdmVFbCA9IHRoaXMuZm9ybUVsLnF1ZXJ5U2VsZWN0b3IoJyNzYXZlTG9jYXRpb25Gb3JtJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICB0aGlzLmNsZWFyRWwgPSB0aGlzLmZvcm1FbC5xdWVyeVNlbGVjdG9yKCcjY2xlYXJMb2NhdGlvbkZvcm0nKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICAgICAgICAvLyB0aGlzLnRhYmxlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmNvbmZpZy5saXN0RWxJZH1gKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICB0aGlzLmxpc3RCbG9ja0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5jb25maWcubGlzdEVsSWR9YCkgYXMgSFRNTEVsZW1lbnQgPz8gdGhpcy5jcmVhdGVMaXN0QmxvY2tFbCgpO1xyXG5cclxuICAgICAgICB0aGlzLnNldHVwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlZGl0Q2xpY2tIYW5kbGVyKGU6IEV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuZm9ybUVsLmRhdGFzZXQudXJsKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGVsID0gKGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudCkgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3QgbWVkaWFMb2NhdGlvbklkID0gKyhlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSB8fCAnMCcpO1xyXG5cclxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuXHJcbiAgICAgICAgdGhpcy5mb3JtRWwuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgbWVkaWFMb2NhdGlvbklkICsgJycpO1xyXG5cclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJtZWRpYUxvY2F0aW9uSWRcIiwgbWVkaWFMb2NhdGlvbklkICsgJycpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImFjdGlvblwiLCBBY3Rpb24uR2V0TWVkaWFMb2NhdGlvbik7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwibm9uY2VcIiwgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKEFjdGlvbi5HZXRNZWRpYUxvY2F0aW9uICsgJ19ub25jZScpISBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSk7XHJcblxyXG4gICAgICAgIGZldGNoKHRoaXMuZm9ybUVsLmRhdGFzZXQudXJsLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGJvZHk6IG5ldyBVUkxTZWFyY2hQYXJhbXMoZm9ybURhdGEgYXMgVVJMU2VhcmNoUGFyYW1zKVxyXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIGlmIChUZWJvVXRpbGl0eS5pc0pzb25SZXNwb25zZShyZXNwb25zZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVzcG9uc2UpO1xyXG4gICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgaWYgKCFUZWJvVXRpbGl0eS50cnlQYXJzZVRvSnNvbihyZXN1bHQpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9ICcnO1xyXG4gICAgICAgICAgICBjb25zdCBvdXRjb21lID0gSlNPTi5wYXJzZShyZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFvdXRjb21lLnN1Y2Nlc3MpXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gJ1VuYWJsZSB0byBzZW5kIGNvbnRhY3QgZm9ybSBtZXNzYWdlJztcclxuXHJcbiAgICAgICAgICAgIGlmIChvdXRjb21lLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9jYXRpb25OYW1lRWwudmFsdWUgPSBvdXRjb21lLmRhdGEucmVzdWx0Lm5hbWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2F0aW9uU2x1Z0VsLnZhbHVlID0gb3V0Y29tZS5kYXRhLnJlc3VsdC5zbHVnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAvLyBlbmFibGUgdGhlIHN1Ym1pdCBidXR0b25cclxuICAgICAgICAgICAgLy8gdGhpcy5zdWJtaXRFbC5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25Gb3JtPy5zaG93KE5vdGlmaWNhdGlvblN0YXR1cy5EYW5nZXIsIFwiUHJvYmxlbSByZXRyaWV2aW5nIG1lZGlhIGxvY2F0aW9uIGluZm9ybWF0aW9uXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGVsZXRlQ2xpY2tIYW5kbGVyKGU6IEV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuZm9ybUVsLmRhdGFzZXQudXJsKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCFjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGUgbWVkaWEgbG9jYXRpb24/XCIpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGVsID0gKGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudCkgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3QgbWVkaWFMb2NhdGlvbklkID0gKyhlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSB8fCAnMCcpO1xyXG5cclxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuXHJcbiAgICAgICAgdGhpcy5mb3JtRWwuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgbWVkaWFMb2NhdGlvbklkICsgJycpO1xyXG5cclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJtZWRpYUxvY2F0aW9uSWRcIiwgbWVkaWFMb2NhdGlvbklkICsgJycpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImFjdGlvblwiLCBBY3Rpb24uRGVsZXRlTWVkaWFMb2NhdGlvbik7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwibm9uY2VcIiwgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKEFjdGlvbi5EZWxldGVNZWRpYUxvY2F0aW9uICsgJ19ub25jZScpISBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSk7XHJcblxyXG4gICAgICAgIGZldGNoKHRoaXMuZm9ybUVsLmRhdGFzZXQudXJsLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGJvZHk6IG5ldyBVUkxTZWFyY2hQYXJhbXMoZm9ybURhdGEgYXMgVVJMU2VhcmNoUGFyYW1zKVxyXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIGlmIChUZWJvVXRpbGl0eS5pc0pzb25SZXNwb25zZShyZXNwb25zZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVzcG9uc2UpO1xyXG4gICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgaWYgKCFUZWJvVXRpbGl0eS50cnlQYXJzZVRvSnNvbihyZXN1bHQpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9ICcnO1xyXG4gICAgICAgICAgICBjb25zdCBvdXRjb21lID0gSlNPTi5wYXJzZShyZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFvdXRjb21lLnN1Y2Nlc3MpXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gJ1VuYWJsZSB0byBzZW5kIGNvbnRhY3QgZm9ybSBtZXNzYWdlJztcclxuXHJcbiAgICAgICAgICAgIGlmIChvdXRjb21lLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlUm93KG1lZGlhTG9jYXRpb25JZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbkZvcm0/LnNob3coTm90aWZpY2F0aW9uU3RhdHVzLlN1Y2Nlc3MsIFwiTWVkaWEgbG9jYXRpb24gd2FzIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2gocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBpZiAoVGVib1V0aWxpdHkuaXNTdHJpbmcocmVzcG9uc2UpKSBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGlmICghVGVib1V0aWxpdHkuaXNGdW5jdGlvbihyZXNwb25zZS50ZXh0KSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKS50aGVuKHRleHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKFRlYm9VdGlsaXR5LnRyeVBhcnNlVG9Kc29uKHRleHQpKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUVycm9yKHRleHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uRm9ybT8uc2hvdyhOb3RpZmljYXRpb25TdGF0dXMuRGFuZ2VyLCB0ZXh0KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IodGV4dCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm5vdGlmaWNhdGlvbkZvcm0/LnNob3coTm90aWZpY2F0aW9uU3RhdHVzLkRhbmdlciwgXCJQcm9ibGVtIGRlbGV0aW5nIG1lZGlhIGxvY2F0aW9uIGluZm9ybWF0aW9uXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2F2ZUNsaWNrSGFuZGxlcihlOiBFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmZvcm1FbC5kYXRhc2V0LnVybCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBlbCA9IChlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IG1lZGlhTG9jYXRpb25JZCA9ICsodGhpcy5mb3JtRWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykgfHwgJzAnKTtcclxuICAgICAgICBjb25zdCBtZWRpYUxvY2F0aW9uTmFtZSA9IHRoaXMubG9jYXRpb25OYW1lRWwudmFsdWU7XHJcbiAgICAgICAgY29uc3QgbWVkaWFMb2NhdGlvblNsdWcgPSB0aGlzLmxvY2F0aW9uU2x1Z0VsLnZhbHVlO1xyXG5cclxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuXHJcbiAgICAgICAgdGhpcy5mb3JtRWwuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgbWVkaWFMb2NhdGlvbklkICsgJycpO1xyXG5cclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJtZWRpYUxvY2F0aW9uSWRcIiwgbWVkaWFMb2NhdGlvbklkICsgJycpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcIm1lZGlhTG9jYXRpb25OYW1lXCIsIG1lZGlhTG9jYXRpb25OYW1lKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJtZWRpYUxvY2F0aW9uU2x1Z1wiLCBtZWRpYUxvY2F0aW9uU2x1Zyk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiYWN0aW9uXCIsIEFjdGlvbi5TYXZlTWVkaWFMb2NhdGlvbik7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwibm9uY2VcIiwgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKEFjdGlvbi5TYXZlTWVkaWFMb2NhdGlvbiArICdfbm9uY2UnKSEgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpO1xyXG5cclxuICAgICAgICBmZXRjaCh0aGlzLmZvcm1FbC5kYXRhc2V0LnVybCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBib2R5OiBuZXcgVVJMU2VhcmNoUGFyYW1zKGZvcm1EYXRhIGFzIFVSTFNlYXJjaFBhcmFtcylcclxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoVGVib1V0aWxpdHkuaXNKc29uUmVzcG9uc2UocmVzcG9uc2UpKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlc3BvbnNlKTtcclxuICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIGlmICghVGVib1V0aWxpdHkudHJ5UGFyc2VUb0pzb24ocmVzdWx0KSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSAnJztcclxuICAgICAgICAgICAgY29uc3Qgb3V0Y29tZSA9IEpTT04ucGFyc2UocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghb3V0Y29tZS5zdWNjZXNzKVxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9ICdVbmFibGUgdG8gc2VuZCBjb250YWN0IGZvcm0gbWVzc2FnZSc7XHJcblxyXG4gICAgICAgICAgICBpZiAob3V0Y29tZS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZE5ld1JvdyhvdXRjb21lLmRhdGEucmVzdWx0LmlkLCBtZWRpYUxvY2F0aW9uTmFtZSwgbWVkaWFMb2NhdGlvblNsdWcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhckZvcm0oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uRm9ybT8uc2hvdyhOb3RpZmljYXRpb25TdGF0dXMuU3VjY2VzcywgXCJNZWRpYSBsb2NhdGlvbiB3YXMgc2F2ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbkZvcm0/LnNob3coTm90aWZpY2F0aW9uU3RhdHVzLkRhbmdlciwgXCJQcm9ibGVtIHNhdmluZyBtZWRpYSBsb2NhdGlvbiBpbmZvcm1hdGlvblwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZE5ld1JvdyhtZWRpYUxvY2F0aW9uSWQ6IG51bWJlciwgbWVkaWFMb2NhdGlvbk5hbWU6IHN0cmluZywgbWVkaWFMb2NhdGlvblNsdWc6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmICghbWVkaWFMb2NhdGlvbklkKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMucmVtb3ZlUm93KG1lZGlhTG9jYXRpb25JZCk7XHJcbiAgICAgICAgdGhpcy5saXN0QmxvY2tFbD8uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgXHJcbiAgICAgICAgICAgIDxsaSBkYXRhLWlkPVwiJHttZWRpYUxvY2F0aW9uSWR9XCIgY2xhc3M9XCJkYXRhLWxpc3RfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhLWxpc3RfX3RpdGxlXCI+JHttZWRpYUxvY2F0aW9uTmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhLWxpc3RfX3N1YnRpdGxlXCI+JHttZWRpYUxvY2F0aW9uU2x1Z308L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhLWxpc3RfX2NvbnRyb2xzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIGZsb2F0LXJpZ2h0XCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIkFjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiZWRpdC0ke21lZGlhTG9jYXRpb25JZH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pZD1cIiR7bWVkaWFMb2NhdGlvbklkfVwiIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCIke3RoaXMuY29uZmlnLmVkaXRCdXR0b25DbGFzc30gYnRuIGJ0bi1saW5rIGJ0bi1zbVwiPkVkaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImRlbGV0ZS0ke21lZGlhTG9jYXRpb25JZH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pZD1cIiR7bWVkaWFMb2NhdGlvbklkfVwiIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCIke3RoaXMuY29uZmlnLmRlbGV0ZUJ1dHRvbkNsYXNzfSBidG4gYnRuLWxpbmsgYnRuLXNtXCI+RGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICBgKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbW92ZVJvdyhtZWRpYUxvY2F0aW9uSWQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmICghbWVkaWFMb2NhdGlvbklkKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMubGlzdEJsb2NrRWwucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke21lZGlhTG9jYXRpb25JZH1cIl1gKT8ucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogc3RyaW5nKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IEpTT04ucGFyc2UoZXJyb3IpO1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvcnMgPSByZXN1bHQuZGF0YS5lcnJvcnM7XHJcblxyXG4gICAgICAgICAgICBpZiAoVGVib1V0aWxpdHkuaXNBcnJheShlcnJvcnMpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9ICc8dWw+JztcclxuICAgICAgICAgICAgICAgIGVycm9ycy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgKz0gYDxsaT4ke2l0ZW19PC9saT5gO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlICs9IGA8L3VsPmA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbkZvcm0/LnNob3coTm90aWZpY2F0aW9uU3RhdHVzLkRhbmdlciwgbWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghVGVib1V0aWxpdHkuaXNPYmplY3QoZXJyb3JzKSkgcmV0dXJuO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCBtZXNzYWdlID0gJzx1bD4nO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHggaW4gcmVzdWx0Py5kYXRhPy5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgeSBpbiByZXN1bHQ/LmRhdGE/LmVycm9yc1t4XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgKz0gYDxsaT4ke3Jlc3VsdD8uZGF0YT8uZXJyb3JzW3hdW3ldfTwvbGk+YDtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWVzc2FnZSArPSBgPC91bD5gO1xyXG4gICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbkZvcm0/LnNob3coTm90aWZpY2F0aW9uU3RhdHVzLkRhbmdlciwgbWVzc2FnZSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjbGVhckNsaWNrSGFuZGxlcihlOiBFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgZWwgPSAoZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50KSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICBjb25zdCBtZWRpYUxvY2F0aW9uSWQgPSArKHRoaXMuZm9ybUVsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpIHx8ICcwJyk7XHJcblxyXG4gICAgICAgIHRoaXMuY2xlYXJGb3JtKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjbGVhckZvcm0oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5mb3JtRWwuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgJycpO1xyXG4gICAgICAgIHRoaXMubG9jYXRpb25OYW1lRWwudmFsdWUgPSAnJztcclxuICAgICAgICB0aGlzLmxvY2F0aW9uU2x1Z0VsLnZhbHVlID0gJyc7XHJcbiAgICAgICAgdGhpcy5mb3JtRWwucmVzZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZUxpc3RCbG9ja0VsKCk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcblxyXG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnaWQnLCB0aGlzLmNvbmZpZy5saXN0RWxJZCk7XHJcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnZGF0YS1saXN0Jyk7XHJcblxyXG4gICAgICAgIHRoaXMuZm9ybUVsLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCBlbCk7XHJcblxyXG4gICAgICAgIHJldHVybiBlbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldHVwKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uRm9ybSA9IG5ldyBGb3JtTm90aWZpY2F0aW9uKHtcclxuICAgICAgICAgICAgY29udGFpbmVySWQ6ICdtZ3QtY2VudGVyLW5vdGlmaWNhdGlvbicsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VFbENsYXNzOiAnYWxlcnQtbWVzc2FnZSdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgVGVib1V0aWxpdHkubGl2ZShgLiR7dGhpcy5jb25maWcuZWRpdEJ1dHRvbkNsYXNzfWAsICdjbGljaycsIHRoaXMuZWRpdENsaWNrSGFuZGxlci5iaW5kKHRoaXMpLCB0aGlzLmxpc3RCbG9ja0VsKTtcclxuICAgICAgICBUZWJvVXRpbGl0eS5saXZlKGAuJHt0aGlzLmNvbmZpZy5kZWxldGVCdXR0b25DbGFzc31gLCAnY2xpY2snLCB0aGlzLmRlbGV0ZUNsaWNrSGFuZGxlci5iaW5kKHRoaXMpLCB0aGlzLmxpc3RCbG9ja0VsKTtcclxuXHJcbiAgICAgICAgLyogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7dGhpcy5jb25maWcuZWRpdEJ1dHRvbkNsYXNzfWApLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmVkaXRDbGlja0hhbmRsZXIuYmluZCh0aGlzKSwgZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHt0aGlzLmNvbmZpZy5kZWxldGVCdXR0b25DbGFzc31gKS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kZWxldGVDbGlja0hhbmRsZXIuYmluZCh0aGlzKSwgZmFsc2UpO1xyXG4gICAgICAgIH0pOyAqL1xyXG5cclxuICAgICAgICB0aGlzLnNhdmVFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2F2ZUNsaWNrSGFuZGxlci5iaW5kKHRoaXMpLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5jbGVhckVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGVhckNsaWNrSGFuZGxlci5iaW5kKHRoaXMpLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBcclxufSIsIlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN1bHQge1xyXG5cclxuICAgIHByaXZhdGUgY2F1c2U6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IocHJpdmF0ZSBtZXNzYWdlOiBzdHJpbmcsIHByaXZhdGUgc3VjY2VzczogYm9vbGVhbikge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEVycm9yKG1lc3NhZ2U6IHN0cmluZyA9ICcnLCBjYXVzZTogc3RyaW5nID0gJycpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gbmV3IFJlc3VsdChtZXNzYWdlLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIHJlc3VsdC5jYXVzZSA9IGNhdXNlO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgU3VjY2VzcyhtZXNzYWdlOiBzdHJpbmcgPSAnJykge1xyXG4gICAgICAgIHJldHVybiBuZXcgUmVzdWx0KG1lc3NhZ2UsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBJc1N1Y2Nlc3NmdWwoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VjY2VzcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TWVzc2FnZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2U7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0ICcuL2VsZW1lbnQtbWF0Y2hlcy1wb2x5ZmlsbCc7XHJcbmltcG9ydCB1dWlkdjQgZnJvbSAndXVpZC92NCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZWJvVXRpbGl0eSB7XHJcblxyXG4gICAgc3RhdGljIGlzQXJyYXkodmFyaWFibGUpIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhcmlhYmxlKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaXNPYmplY3QodmFyaWFibGUpIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhcmlhYmxlKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSdcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaXNGdW5jdGlvbih2YXJpYWJsZSkge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFyaWFibGUgPT09ICdmdW5jdGlvbidcclxuICAgIH1cclxuICAgIHN0YXRpYyBpc1N0cmluZyh2YXJpYWJsZSkge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFyaWFibGUgPT09ICdzdHJpbmcnIHx8IHZhcmlhYmxlIGluc3RhbmNlb2YgU3RyaW5nO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGlzQ2hyb21lKCkge1xyXG4gICAgICAgIHJldHVybiAvQ2hyb21lLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmIC9Hb29nbGUgSW5jLy50ZXN0KG5hdmlnYXRvci52ZW5kb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpc1NhZmFyaSgpIHtcclxuICAgICAgICByZXR1cm4gL1NhZmFyaS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAvQXBwbGUgQ29tcHV0ZXIvLnRlc3QobmF2aWdhdG9yLnZlbmRvcik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldE9mZnNldChlbCkge1xyXG4gICAgICAgIHZhciBfeCA9IDA7XHJcbiAgICAgICAgdmFyIF95ID0gMDtcclxuICAgICAgICB3aGlsZSAoZWwgJiYgIWlzTmFOKGVsLm9mZnNldExlZnQpICYmICFpc05hTihlbC5vZmZzZXRUb3ApKSB7XHJcbiAgICAgICAgICAgIF94ICs9IGVsLm9mZnNldExlZnQgLSBlbC5zY3JvbGxMZWZ0O1xyXG4gICAgICAgICAgICBfeSArPSBlbC5vZmZzZXRUb3AgLSBlbC5zY3JvbGxUb3A7XHJcbiAgICAgICAgICAgIC8vIGVsID0gZWwub2Zmc2V0UGFyZW50O1xyXG4gICAgICAgICAgICAvLyBjaHJvbWUvc2FmYXJpXHJcbiAgICAgICAgICAgIC8vIGlmICgkLmJyb3dzZXIud2Via2l0KSB7XHJcbiAgICAgICAgICAgIGlmIChUZWJvVXRpbGl0eS5pc0Nocm9tZSgpIHx8IFRlYm9VdGlsaXR5LmlzU2FmYXJpKCkpIHtcclxuICAgICAgICAgICAgICAgIGVsID0gZWwucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIGZpcmVmb3gvSUVcclxuICAgICAgICAgICAgICAgIGVsID0gZWwub2Zmc2V0UGFyZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHRvcDogX3ksIGxlZnQ6IF94IH07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNpbXVsYXRlQ2xpY2soZWwpIHtcclxuICAgICAgICAvLyBDcmVhdGUgb3VyIGV2ZW50ICh3aXRoIG9wdGlvbnMpXHJcbiAgICAgICAgdmFyIGV2dCA9IG5ldyBNb3VzZUV2ZW50KCdjbGljaycsIHtcclxuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcclxuICAgICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgdmlldzogd2luZG93XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gSWYgY2FuY2VsbGVkLCBkb24ndCBkaXNwYXRjaCBvdXIgZXZlbnRcclxuICAgICAgICB2YXIgY2FuY2VsZWQgPSAhZWwuZGlzcGF0Y2hFdmVudChldnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRDbG9zZXN0KGVsLCBzZWxlY3Rvcikge1xyXG4gICAgICAgIGZvciAoOyBlbCAmJiBlbCAhPT0gZG9jdW1lbnQ7IGVsID0gZWwucGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICBpZiAoZWwubWF0Y2hlcyhzZWxlY3RvcikpIHJldHVybiBlbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNvbnRhaW5zRWxlbWVudChlbCkge1xyXG4gICAgICAgIHJldHVybiAoZWwgPT09IGRvY3VtZW50LmJvZHkpID8gZmFsc2UgOiBkb2N1bWVudC5ib2R5LmNvbnRhaW5zKGVsKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY29udGFpbnNFbGVtZW50QnlJZChpZCkge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGhhc0NsYXNzKGVsLCBjbGFzc05hbWUpIHtcclxuICAgICAgICByZXR1cm4gKCcgJyArIGVsLmNsYXNzTmFtZSArICcgJykuaW5kZXhPZignICcgKyBjbGFzc05hbWUgKyAnICcpID4gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFNpYmxpbmdzKGVsLCBmaWx0ZXIpIHtcclxuICAgICAgICB2YXIgc2libGluZ3M6IGFueVtdID0gW107XHJcbiAgICAgICAgdmFyIHNpYmxpbmcgPSBlbC5wYXJlbnROb2RlLmZpcnN0Q2hpbGQ7XHJcblxyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgaWYgKCFmaWx0ZXIgfHwgZmlsdGVyKHNpYmxpbmcpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2libGluZy5ub2RlVHlwZSAhPT0gMSB8fCBzaWJsaW5nID09PSBlbCkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBzaWJsaW5ncy5wdXNoKHNpYmxpbmcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gd2hpbGUgKHNpYmxpbmcgPSBzaWJsaW5nLm5leHRTaWJsaW5nKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHNpYmxpbmdzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXROZXh0U2libGluZ3MoZWwsIGZpbHRlcikge1xyXG4gICAgICAgIHZhciBzaWJsaW5nczogYW55W10gPSBbXTtcclxuICAgICAgICB3aGlsZSAoZWwgPSBlbC5uZXh0U2libGluZykge1xyXG4gICAgICAgICAgICBpZiAoIWZpbHRlciB8fCBmaWx0ZXIoZWwpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWwubm9kZVR5cGUgIT09IDEpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgc2libGluZ3MucHVzaChlbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNpYmxpbmdzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXROZXh0U2libGluZyhlbCwgZmlsdGVyKSB7XHJcbiAgICAgICAgd2hpbGUgKGVsID0gZWwubmV4dFNpYmxpbmcpIHtcclxuICAgICAgICAgICAgaWYgKCFmaWx0ZXIgfHwgZmlsdGVyKGVsKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsLm5vZGVUeXBlICE9PSAxKSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0UHJldmlvdXNTaWJsaW5ncyhlbCwgZmlsdGVyKSB7XHJcbiAgICAgICAgdmFyIHNpYmxpbmdzOiBhbnlbXSA9IFtdO1xyXG4gICAgICAgIHdoaWxlIChlbCA9IGVsLnByZXZpb3VzU2libGluZykge1xyXG4gICAgICAgICAgICBpZiAoIWZpbHRlciB8fCBmaWx0ZXIoZWwpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWwubm9kZVR5cGUgIT09IDEpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgc2libGluZ3MucHVzaChlbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNpYmxpbmdzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRQcmV2aW91c1NpYmxpbmcoZWw6IE5vZGUsIGZpbHRlcjogKGVsOiBOb2RlKSA9PiBib29sZWFuKSB7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQ6IE5vZGUgfCBudWxsID0gZWw7XHJcbiAgICAgICAgd2hpbGUgKGVsZW1lbnQgPSBlbGVtZW50LnByZXZpb3VzU2libGluZykge1xyXG4gICAgICAgICAgICBpZiAoIWZpbHRlciB8fCBmaWx0ZXIoZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lm5vZGVUeXBlICE9PSAxKSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0Vmlld3BvcnRTaXplKCkge1xyXG4gICAgICAgIHZhciB3LCBoO1xyXG4gICAgICAgIHZhciBlbGVtZW50ID0gKGRvY3VtZW50LmNvbXBhdE1vZGUgPT09IFwiQ1NTMUNvbXBhdFwiKSA/XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA6XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHk7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgKGVsZW1lbnQuY2xpZW50V2lkdGgpICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHcgPSBNYXRoLm1heChlbGVtZW50LmNsaWVudFdpZHRoLCAoISgnaW5uZXJXaWR0aCcgaW4gd2luZG93KSA/IDAgOiB3aW5kb3cuaW5uZXJXaWR0aCkgfHwgMCk7XHJcbiAgICAgICAgICAgIGggPSBNYXRoLm1heChlbGVtZW50LmNsaWVudEhlaWdodCwgKCEoJ2lubmVySGVpZ2h0JyBpbiB3aW5kb3cpID8gMCA6IHdpbmRvdy5pbm5lckhlaWdodCkgfHwgMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4geyB3aWR0aDogdywgaGVpZ2h0OiBoIH07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNob3coZWwpIHtcclxuICAgICAgICBpZiAoIWVsKSByZXR1cm47XHJcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGhpZGUoZWwpIHtcclxuICAgICAgICBpZiAoIWVsKSByZXR1cm47XHJcbiAgICAgICAgKGVsIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB0b2dnbGUoZWwpIHtcclxuICAgICAgICBpZiAoIWVsKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIElmIHRoZSBlbGVtZW50IGlzIHZpc2libGUsIGhpZGUgaXRcclxuICAgICAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpLmRpc3BsYXkgPT09ICdibG9jaycpIHtcclxuICAgICAgICAgICAgVGVib1V0aWxpdHkuaGlkZShlbCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE90aGVyd2lzZSwgc2hvdyBpdFxyXG4gICAgICAgIFRlYm9VdGlsaXR5LnNob3coZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpc0pzb25SZXNwb25zZShyZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoXCJjb250ZW50LXR5cGVcIik7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRlbnRUeXBlICYmIGNvbnRlbnRUeXBlLmluZGV4T2YoXCJhcHBsaWNhdGlvbi9qc29uXCIpICE9PSAtMSAmJiBUZWJvVXRpbGl0eS50cnlQYXJzZVRvSnNvbihyZXNwb25zZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHRyeVBhcnNlVG9Kc29uKHRleHQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBKU09OLnBhcnNlKHRleHQpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBhZGRFdmVudChlbCwgdHlwZSwgaGFuZGxlcikge1xyXG4gICAgICAgIGlmIChlbC5hdHRhY2hFdmVudCkgZWwuYXR0YWNoRXZlbnQoJ29uJyArIHR5cGUsIGhhbmRsZXIpOyBlbHNlIGVsLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBsaXZlKHNlbGVjdG9yLCBldmVudCwgY2FsbGJhY2ssIGNvbnRleHQpIHtcclxuICAgICAgICBcclxuICAgICAgICBUZWJvVXRpbGl0eS5hZGRFdmVudChjb250ZXh0IHx8IGRvY3VtZW50LCBldmVudCwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIGZvdW5kLCBlbCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcclxuICAgICAgICAgICAgd2hpbGUgKGVsICYmIGVsLm1hdGNoZXMgJiYgZWwgIT09IGNvbnRleHQgJiYgIShmb3VuZCA9IGVsLm1hdGNoZXMoc2VsZWN0b3IpKSkgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAoZm91bmQpIGNhbGxiYWNrLmNhbGwoZWwsIGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaGFzRXh0ZW5zaW9uKGZpbGVOYW1lLCBleHRlbnNpb25zOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIHJldHVybiAobmV3IFJlZ0V4cCgnKCcgKyBleHRlbnNpb25zLmpvaW4oJ3wnKS5yZXBsYWNlKC9cXC4vZywgJ1xcXFwuJykgKyAnKSQnLCAnaScpKS50ZXN0KGZpbGVOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlVW5pcXVlTnVtYmVyKHNlZWQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIERhdGUubm93KCkgKyBzZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2VuZXJhdGVVbmlxdWVTdHJpbmcoc2VlZDogbnVtYmVyID0gMCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHV1aWR2NCgpICsgKHNlZWQgPyAoJzonICsgc2VlZCkgOiAnJyk7XHJcbiAgICB9XHJcbn0iLCJpZiAoIUVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMpIHtcclxuICAgIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgPVxyXG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgfHxcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzU2VsZWN0b3IgfHxcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBFbGVtZW50LnByb3RvdHlwZS5tb3pNYXRjaGVzU2VsZWN0b3IgfHxcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvciB8fFxyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5vTWF0Y2hlc1NlbGVjdG9yIHx8XHJcbiAgICAgICAgRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKHMpIHtcclxuICAgICAgICAgICAgdmFyIG1hdGNoZXMgPSAodGhpcy5kb2N1bWVudCB8fCB0aGlzLm93bmVyRG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwocyksXHJcbiAgICAgICAgICAgICAgICBpID0gbWF0Y2hlcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIHdoaWxlICgtLWkgPj0gMCAmJiBtYXRjaGVzLml0ZW0oaSkgIT09IHRoaXMpIHsgfVxyXG4gICAgICAgICAgICByZXR1cm4gaSA+IC0xO1xyXG4gICAgICAgIH07XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9
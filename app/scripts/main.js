/* jshint devel:true */
(function () {
    'use strict';

    window.LOAD = {};

    LOAD.init = function () {
        this.$ = {};

    };

    window.GameDetails = function () {
        console.log('GameDetails', arguments);
    };

    window.DownloadingFile = function () {
        console.log('DownloadingFile', arguments);
    };

    window.SetStatusChanged = function () {
        console.log('SetStatusChanged', arguments);
    };

    window.SetFilesTotal = function () {
        console.log('SetFilesTotal', arguments);
    };

    window.SetFilesNeeded = function () {
        console.log('SetFilesNeeded', arguments);
    };
}());

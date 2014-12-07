/* jshint devel:true */
(function () {
    'use strict';

    window.LOAD = {};

    LOAD.init = function () {
        this.progress = 0.0;
        this.filesNeeded = 0;
        this.filesTotal = 1;

        this.$ = {};

    };

    LOAD.onFileDownloaded = function () {
        this.filesNeeded = Math.max(0, this.filesNeeded - 1);
    };

    /**
     * Called when the loading screen finishes loading all assets.
     *
     * @param {String} serverName Server name.
     * @param {String} serverUrl  Server loading screen URL.
     * @param {String} mapName    Map name.
     * @param {Number} maxPlayers Maximum players.
     * @param {String} steamid    64-bit Steam ID.
     * @param {String} gamemode   Gamemode folder name.
     */
    window.GameDetails = function (serverName, serverUrl, mapName, maxPlayers, steamid, gamemode) {
        console.log('GameDetails', arguments);
    };

    /**
     * Called when a file starts downloading. The filename includes the entire
     * path of the file; for example "materials/models/bobsModels/car.mdl".
     *
     * @param {String} filePath Full file path.
     */
    window.DownloadingFile = function (filePath) {
        console.log('DownloadingFile', arguments);
    };

    /**
     * Called when something happens. This might be "Initialising Game Data",
     * "Sending Client Info", etc.
     *
     * @param {String} status Loading status.
     */
    window.SetStatusChanged = function (status) {
        console.log('SetStatusChanged', arguments);
    };

    /**
     * Called at the start, tells us how many files need to be downloaded in
     * total.
     *
     * @param {String} total Total files to be downloaded.
     */
    window.SetFilesTotal = function (total) {
        console.log('SetFilesTotal', arguments);
    };

    /**
     * Called when the number of files to download changes.
     *
     * @param {String} needed Number of files needed to download.
     */
    window.SetFilesNeeded = function (needed) {
        console.log('SetFilesNeeded', arguments);
    };
}());

/* jshint devel:true */
(function () {
    'use strict';

    var LOAD = {};

    LOAD.init = function () {
        this.progress = 0.0;
        this.filesNeeded = 1;
        this.filesTotal = 1;

        this.$ = {};

        // loading bar
        this.$.progressBar = document.getElementById('progressbar');
        this.$.status = document.getElementById('status');
        this.$.percentage = document.getElementById('percentage');

        // server info
        this.$.mapPreview = document.getElementById('mappreview');
        this.$.serverName = document.getElementById('servername');
        this.$.mapName = document.getElementById('mapname');
        this.$.playerSlots = document.getElementById('playerslots');

        this.updateProgress();
    };

    LOAD.setFilesTotal = function (numFiles) {
        this.filesTotal = Math.max(0, numFiles);
    };

    LOAD.setFilesNeeded = function (numFiles) {
        this.filesNeeded = Math.max(0, numFiles);
    };

    LOAD.setServerInfo = function (serverName, mapName, maxPlayers, gamemode) {
        // set map preview image
        // this.$.mapPreview.src = 'asset://mapimage/' + mapName;

        // gametracker.com map previews can also be used
        this.$.mapPreview.src = 'http://image.www.gametracker.com/images/maps/160x120/garrysmod/' + mapName + '.jpg';

        this.$.mapName.innerText = mapName;
        this.$.serverName.innerText = serverName;
        this.$.playerSlots.innerText = maxPlayers + ' player slots';
    };

    LOAD.updateProgress = function () {
        var filesRemaining = Math.max(0, this.filesTotal - this.filesNeeded),
            progress = (this.filesTotal > 0) ?
                (filesRemaining / this.filesTotal) : 1;

        progress = Math.round(progress * 100);

        this.$.percentage.innerText = progress + '%';
        this.$.progressBar.style.right = (100 - progress) + '%';
    };

    LOAD.onFileDownloading = function (filePath) {
        this.filesNeeded = Math.max(0, this.filesNeeded - 1);
        this.updateProgress();

        var status = 'Downloading ' + filePath + '...';
        this.onStatusChanged(status);
    };

    LOAD.onStatusChanged = function (status) {
        // final status
        if (status === 'Sending client info...') {
            this.filesNeeded = 0;
            this.updateProgress();
        }

        this.$.status.innerText = status;
    };

    LOAD.init();
    window.LOAD = LOAD;

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
        LOAD.setServerInfo(serverName, mapName, maxPlayers, gamemode);
    };

    /**
     * Called when a file starts downloading. The filename includes the entire
     * path of the file; for example "materials/models/bobsModels/car.mdl".
     *
     * @param {String} filePath Full file path.
     */
    window.DownloadingFile = function (filePath) {
        LOAD.onFileDownloading(filePath);
    };

    /**
     * Called when something happens. This might be "Initialising Game Data",
     * "Sending Client Info", etc.
     *
     * @param {String} status Loading status.
     */
    window.SetStatusChanged = function (status) {
        LOAD.onStatusChanged(status);
    };

    /**
     * Called at the start, tells us how many files need to be downloaded in
     * total.
     *
     * @param {String} total Total files to be downloaded.
     */
    window.SetFilesTotal = function (total) {
        LOAD.setFilesTotal(total);
    };

    /**
     * Called when the number of files to download changes.
     *
     * @param {String} needed Number of files needed to download.
     */
    window.SetFilesNeeded = function (needed) {
        LOAD.setFilesNeeded(needed);
    };
}());

/* jshint devel:true */

/**
 * This script is used to log loading screen events to the GMod console. They
 * can later be used by the demo.js file for emulating connecting to a server
 * while testing in the browser.
 */
(function () {
    var start = (new Date()).getTime(),
        events = [];

    function logEvent(args) {
        var now = (new Date()).getTime();

        var loadEvent = {
            func: arguments.callee.caller.name,
            args: Array.prototype.slice.call(args, 0),
            time: now - start
        };

        events.push(loadEvent);

        var elem = document.createElement('div');
        elem.innerText = JSON.stringify(loadEvent);
        document.body.insertBefore(elem, document.body.firstChild);
    }

    function GameDetails() { logEvent(arguments); }
    window.GameDetails = GameDetails;

    function DownloadingFile() { logEvent(arguments); }
    window.DownloadingFile = DownloadingFile;

    function SetFilesTotal() { logEvent(arguments); }
    window.SetFilesTotal = SetFilesTotal;

    function SetFilesNeeded() { logEvent(arguments); }
    window.SetFilesNeeded = SetFilesNeeded;

    function SetStatusChanged(status) {
        logEvent(arguments);

        if (status === 'Sending client info...') {
            [].forEach.call(events, function(evt){
                console.log(JSON.stringify(evt));
            });
        }
    }
    window.SetStatusChanged = SetStatusChanged;
}());

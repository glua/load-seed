/* jshint devel:true */
/* global contentLoaded */

contentLoaded(window, function () {
    'use strict';

    if (typeof GameDetails !== 'undefined') {
        GameDetails(
            'Community Server Name',
            '127.0.0.1',
            'gm_flatgrass',
            32,
            '123456789',
            'sandbox'
        );
    }

    var delay = 200;
    function Status(text) {
        if (typeof SetStatusChanged !== 'function') {
            return;
        }

        setTimeout(function() {
            SetStatusChanged(text);
        }, delay);

        delay += (delay * 1.1);
    }

    [].forEach.call([
        'Getting Addon #118824086...',
        'Getting Addon #119060917...',
        'Downloading &lt;filename&gt;...',
        'Sending client info...',
        'Retreiving game data...'
    ], Status);
});

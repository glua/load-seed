/* jshint devel:true */
/* global contentLoaded */

/**
 * Start calling loading screen functions when all assets have finished loading.
 */
contentLoaded(window, function () {
    'use strict';

    /**
     * Loading screen event fixture. This contains an array of actual functions
     * called while connecting to a server with the associated time.
     *
     * @type {Array}
     */
    var fixture = [
        {"func":"GameDetails","args":["[cG] 24/7 TTT Minecraft/Dolls | SpecDM | LowGrav | PointShop","st.compactgamers.com/loading/garrysmod/ttt/bg-pointshop.php?steamid=76561197991989781","ttt_minecraftcity_v4_dark",40,"76561197991989781","terrortown"],"time":854},
        {"func":"DownloadingFile","args":["maps/ttt_minecraftcity_v4_dark.bsp"],"time":1972},
        {"func":"SetFilesNeeded","args":[21],"time":2435},
        {"func":"SetFilesTotal","args":[73],"time":2436},
        {"func":"DownloadingFile","args":["maps/graphs/ttt_minecraftcity_v4_dark.ain"],"time":9380},
        {"func":"DownloadingFile","args":["materials/vgui/cg/cg_ps_logo.png"],"time":9621},
        {"func":"DownloadingFile","args":["materials/nook/heart_hud/horizontal_heart/flash.png"],"time":9853},
        {"func":"DownloadingFile","args":["materials/nook/heart_hud/horizontal_heart/full.png"],"time":9980},
        {"func":"DownloadingFile","args":["materials/nook/heart_hud/horizontal_heart/hurt_ten.png"],"time":10107},
        {"func":"DownloadingFile","args":["materials/nook/heart_hud/horizontal_heart/hurt_nine.png"],"time":10235},
        {"func":"DownloadingFile","args":["materials/nook/heart_hud/horizontal_heart/hurt_eight.png"],"time":10356},
        {"func":"DownloadingFile","args":["materials/nook/heart_hud/horizontal_heart/hurt_seven.png"],"time":10484},
        {"func":"DownloadingFile","args":["materials/nook/heart_hud/horizontal_heart/hurt_six.png"],"time":10611},
        {"func":"DownloadingFile","args":["materials/nook/heart_hud/horizontal_heart/hurt_five.png"],"time":10737},
        {"func":"DownloadingFile","args":["materials/nook/heart_hud/horizontal_heart/hurt_four.png"],"time":10864},
        {"func":"DownloadingFile","args":["materials/nook/heart_hud/horizontal_heart/hurt_thrice.png"],"time":10987},
        {"func":"DownloadingFile","args":["materials/nook/heart_hud/horizontal_heart/hurt_twice.png"],"time":11115},
        {"func":"DownloadingFile","args":["materials/nook/heart_hud/horizontal_heart/hurt_once.png"],"time":11240},
        {"func":"DownloadingFile","args":["materials/vgui/ttt/icon_melon_laun.png"],"time":11366},
        {"func":"DownloadingFile","args":["materials/vgui/ttt/icon_poison_dart.png"],"time":11496},
        {"func":"DownloadingFile","args":["materials/vgui/ttt/icon_cloak.png"],"time":11617},
        {"func":"DownloadingFile","args":["materials/vgui/ttt/icon_crabpod.png"],"time":11747},
        {"func":"DownloadingFile","args":["sound/siege/leeroy.mp3"],"time":11871},
        {"func":"DownloadingFile","args":["materials/tripmine/icon_tripwire.png"],"time":12000},
        {"func":"SetStatusChanged","args":["Sending client info..."],"time":17669}
    ];

    // Emit all loading screen events over time
    [].forEach.call(fixture, function (loadEvent) {
        var func = window[loadEvent.func];
        if (func !== undefined) {
            setTimeout(function () {
                func.apply(window, loadEvent.args);
            }, loadEvent.time);
        }
    });
});

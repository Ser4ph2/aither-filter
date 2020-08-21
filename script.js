// ==UserScript==
// @name         Aither.cc Torrent Filter Viewer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  this just autoclicks the filter button on torrents page
// @author       Seraph2
// @match        https://aither.cc/torrents
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var filterButton = document.getElementById("facetedFiltersToggle");
    filterButton.click();
})();

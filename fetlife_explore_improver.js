// ==UserScript==
// @name         FetLife Explore improver
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Make FetLife Explore tab more usable on screens wider than mobile phones in portrait orientation
// @author       dskowronski
// @match        https://fetlife.com/explore/following/pictures
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $('.pa4-l').css('width', '1000px');
    $('masonry-layout').attr('maxcols', '1');
})();

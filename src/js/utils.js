// Copyright (c) 2018-2019 Claudio Guarnieri.
//
// This file is part of PhishDetect.
//
// PhishDetect is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// PhishDetect is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with PhishDetect.  If not, see <https://www.gnu.org/licenses/>.

// This is a helper function to check hashes against the list of
// malicious indicators.
function checkForIndicators(items, indicators) {
    for (var i=0; i<indicators.length; i++) {
        var indicator = indicators[i].toLowerCase();
        for (var j=0; j<items.length; j++) {
            if (items[j] == indicator) {
                return indicator;
            }
        }
    }

    return null;
}

// This returns the current UTC ISO Date.
function getCurrentISODate() {
    this.pad = function(i) {
        return (i < 10) ? "0" + i : "" + i;
    }

    var now = new Date();
    var nowStr = this.pad(now.getUTCFullYear()) + "-" +
                 this.pad(now.getUTCMonth()) + "-" +
                 this.pad(now.getUTCDate()) + "T" +
                 this.pad(now.getUTCHours()) + ":" +
                 this.pad(now.getUTCMinutes()) + ":" +
                 this.pad(now.getUTCSeconds()) + "Z";

    return nowStr;
}

function base64encode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode('0x' + p1);
    }));
}

function i18nHtmlSafe(key) {
    // Returns html-safe content for `key`
    // Use this when embedding translation strings in html markup
    let translation = chrome.i18n.getMessage(key);
    let textNode = $('<div>').text(translation);
    return textNode.html(); // return html content
}

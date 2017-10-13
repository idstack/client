/**
 * Created by chamin on 6/11/17.
 */


function getParameterByName(name, url) {
    "use strict";
    if (!url) {
        url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results){ return null;}
    if (!results[2]){ return '';}
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var getUrlParameter = function getUrlParameter(sParam) {
    "use strict";
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};
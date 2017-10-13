/**
 * Created by chamin on 10/12/17.
 */

function stringBeautify(string) {
    "use strict";
    string = string.charAt(0).toUpperCase() + string.slice(1);
    string = string.replace(/_/g, " ");
    return string;
}
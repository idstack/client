/**
 * Created by chamin on 10/12/17.
 */

function stringBeautify(string) {
    "use strict";
    string = string.toUpperCase();
    string = string.replace(/_/g, " ");
    return string;
}
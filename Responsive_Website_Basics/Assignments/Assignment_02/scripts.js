function change_color() {
    "use strict";
    document.getElementById('heading').style.color = 'blue';
}

function output(url) {
    "use strict";
    document.getElementById('content').style.backgroundImage = 'url(' + url + ')';
    document.getElementById('content').style.overflow = "scroll";
    document.getElementById('content').style.backgroundImageRepeat = 'repeat-n';
}

function clearDiv() {
    "use strict";
    document.getElementById('content').style.backgroundImage = null;
}
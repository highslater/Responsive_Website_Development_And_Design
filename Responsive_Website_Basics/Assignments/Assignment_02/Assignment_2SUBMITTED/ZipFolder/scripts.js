/* scripts.js */

/*jslint browser: true */
/*jslint browser: true, devel: true */

var heading = document.getElementById('heading'),
    content = document.getElementById('content'),
    instructions = document.getElementById('instructions'),
    output = document.getElementById('output'),
    headerImage = document.getElementById('headerImage'),
    caption = document.getElementById('caption');

function change_color() {
    "use strict";
    heading.style.color = 'lightblue';
    heading.innerHTML = 'A <span>Subject</span> I am interested in.';
    headerImage.style.display = "inline-block";
}

function showOutput(url) {
    "use strict";
    instructions.style.display = 'none';
    output.style.display = 'block';
    content.style.display = 'inline-block';
    content.src = url;
    caption.style.display = 'block';
}

function getInstructions() {
    "use strict";
    output.style.display = 'inline-block';
    content.style.display = 'none';
    instructions.style.display = 'inline-block';
    caption.style.display = 'none';
}

function doubleUp() {
    "use strict";
    document.getElementById('css').style.display = 'none';
    document.getElementById('cssButton1').style.display = 'inline-block';
    document.getElementById('cssButton2').style.display = 'inline-block';
}

function doubleDown() {
    "use strict";
    document.getElementById('css').style.display = 'inline-block';
    document.getElementById('cssButton1').style.display = 'none';
    document.getElementById('cssButton2').style.display = 'none';
}

function FileHelper(file) {
    var text = FileHelper.readStringFromFileAtPath(file);
    //    document.getElementById('h4contents').innerHTML = "Name of file: " + file;
    document.getElementById('fileContent').innerText = text;
}

{
    FileHelper.readStringFromFileAtPath = function (pathOfFileToReadFrom) {
        var request = new XMLHttpRequest();
        request.open("GET", pathOfFileToReadFrom, false);
        request.send(null);
        var returnValue = request.responseText;
        return returnValue;
    }
}

function fileName(file) {
    document.getElementById('h4contents').innerHTML = "Name of file: " + file;
}
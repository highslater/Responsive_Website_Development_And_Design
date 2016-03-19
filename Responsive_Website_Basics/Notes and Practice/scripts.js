var heading = document.getElementById('heading'),
    content = document.getElementById('content'),
    instructions = document.getElementById('instructions'),
    output = document.getElementById('output'),
    headerImage = document.getElementById('headerImage'),
    caption = document.getElementById('caption');

function change_color() {
    "use strict";
    heading.style.color = 'lightblue';
    heading.innerHTML = 'A subject I am interested in.';
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


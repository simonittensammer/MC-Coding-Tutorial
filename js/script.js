document.getElementById("run").addEventListener("click", writeCodeToFile);
document.getElementById("tutorial").addEventListener("click", toggleTutorial);
document.getElementById("help").addEventListener("click", toggleHelp);

ownConsole = document.getElementById("consoleOutput");

function writeCodeToFile() {
    log("Aktualisieren...", "n");

    // Requiring fs module in which
    // writeFile function is defined.
    const fs = require('fs')

    // Data which will write in a file.
    let data = editor.getValue();

    // Write data in 'Output.txt' .
    fs.writeFile('output.txt', data, (err) => {

        // In case of a error throw err.
        if (err) {
            log("Update NICHT erfolgreich!", "e");
            throw err;
        } else {
            log("Update erfolgreich!", "s");
        }
    })
}

function log(text, type) {
    if (type == "e") {
        ownConsole.innerHTML += "<span class='msgError'>[ERR]</span> ";
    } else if (type == "s") {
        ownConsole.innerHTML += "<span class='msgSuccess'>[SUC]</span> ";
    } else if (type == "n") {
        ownConsole.innerHTML += "<span class='msgNormal'>[MSG]</span> ";
    }
    ownConsole.innerHTML += text;
    ownConsole.innerHTML += "<br>";

    ownConsole.scrollTop = ownConsole.scrollHeight;
}

function toggleTutorial() {
    var element = document.getElementById("tutoDiv");
    var lElement = document.getElementById("blurHelp");
    var rElement = document.getElementById("rightWrapper");
    var elementStyle = window.getComputedStyle(element);

    if (elementStyle.getPropertyValue('display') === 'none') {
        element.style.display = 'block';
        lElement.setAttribute('class', 'blur');
        rElement.setAttribute('class', 'blur');
    } else {
        element.style.display = 'none';
        lElement.setAttribute('class', null);
        rElement.setAttribute('class', null);
    }
}

function toggleHelp() {
    var element = document.getElementById("helpDiv");
    var lElement = document.getElementById("blurHelp");
    var rElement = document.getElementById("rightWrapper");

    if (element.style.visibility == 'visible') {
        element.style.visibility = 'hidden';
        lElement.setAttribute('class', null);
        rElement.setAttribute('class', null);
    } else {
        element.style.visibility = 'visible';
        lElement.setAttribute('class', 'blur');
        rElement.setAttribute('class', 'blur');
    }
}

var tutoNo = 1;

function reset(h1) {
    document.getElementById(h1).style.visibility = 'hidden';
    for(let lesson of document.getElementsByClassName("lesson")){
      lesson.style.visibility = 'hidden';
    }
}

function increment() {
    tutoNo++;
    if (tutoNo >= 3) {
        tutoNo = 3;
    }

    h1 = "l" + tutoNo;
    reset("l" + (tutoNo - 1));
    // var h2 = "l" + (i-1);
    document.getElementById(h1).style.visibility = 'visible';
}

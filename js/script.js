document.getElementById("run").addEventListener("click", writeCodeToFile);
document.getElementById("download").addEventListener("click", downloadFile);

ownConsole = document.getElementById("consoleOutput");

function writeCodeToFile(){
    log("Aktualisieren...", "n");

    // Requiring fs module in which 
    // writeFile function is defined. 
    const fs = require('fs')
      
    // Data which will write in a file. 
    let data = editor.getValue();
      
    // Write data in 'Output.txt' . 
    fs.writeFile('output.txt', data, (err) => { 
          
        // In case of a error throw err. 
        if (err){
            log("Update NICHT erfolgreich!", "e");
            throw err; 
        } else {
            log("Update erfolgreich!", "s");
        }
    })
}

function log(text, type){
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

function downloadFile(){
    
}
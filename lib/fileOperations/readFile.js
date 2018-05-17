
const fs = require("fs");

function readFile() {
    fs.readFile('Johnson.txt', 'utf8', function(err, data) {
        if(err) {
            console.log("----------------- Error in file read. ----------------------")
        }
        console.log("----------------- File read successfully. ----------------------", data);
    });
}

module.exports = readFile;














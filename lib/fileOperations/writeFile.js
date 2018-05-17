const fs = require("fs");

function writeFile() {
    var writeStream = fs.createWriteStream("Johnson.txt");
    writeStream.write("Hi, Johnson Controls Users. ");
    writeStream.write("Thank You.");
    writeStream.end();
    console.log("----------------- File written successfully. ----------------------");
}

module.exports = writeFile;

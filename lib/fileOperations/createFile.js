///

const fs = require('fs');


function createFile() {
    var createStream = fs.createWriteStream("Johnson.txt");
    createStream.end();
    console.log("----------------- File created successfully. ----------------------");
}

module.exports = {
    abc:createFile
};


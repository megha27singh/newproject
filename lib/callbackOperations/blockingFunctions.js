const fs = require('fs');
 
function blockingFunctions() {
    var data = fs.readFileSync('Johnson.txt');
    console.log("Reading file completed : " + new Date().toISOString());
    console.log("After readFileSync statement : " + new Date().toISOString());  
}

module.exports = blockingFunctions;
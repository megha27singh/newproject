
const fs = require('fs');
 
function deleteFile() {
    fs.unlink('Johnson.txt', function (err) {
        if (err){
            console.log('-------------- Error to delete file.----------------------');
        }
        console.log('----------------------File deleted successfully ------------------------');
    });
}
 
module.exports = deleteFile;

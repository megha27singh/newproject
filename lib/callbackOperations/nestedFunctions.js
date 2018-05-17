const fs = require('fs');
 
function nestedFunctions() {
    var createStream = fs.createWriteStream("Sample.txt");
    createStream.end();
    fs.rename('Sample.txt', 'Controls.txt',
        // 1st call back function
        function (err) {
            if (err) throw err;
            console.log('File Renamed.');
            fs.unlink('Controls.txt',
                // 2nd call back function
                function (err) {
                    if (err) throw err;
                    console.log('File Deleted.');
                }
            ); 
        }
    );
}

module.exports = nestedFunctions;
const fs = require("fs");
const file = 'SampleTest.txt';

function readFilePromisified(filename) {
    return new Promise(
        function (resolve, reject) {
            fs.readFile(filename, { encoding: 'utf8' },
                (error, data) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
        });
}

function writeFilePromisified(content) {
    console.log("Content received ----->", content);
    return new Promise(
        function (resolve, reject) {
            fs.writeFile(file, "Content written successfully", { encoding: 'utf8' },
                (error, data) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve("Content written successfuly");
                    }
                });
        });
}

readFilePromisified(file)
.then(text => {
    console.log("-------------------File reading successfully using Promise --------------------", text);
    writeFilePromisified(text)
    .then((response) => {
        console.log("-------------------Content written successfully using Promise --------------------", response);
    });
})
.catch(error => {
    console.log("-------------------File reading successfully using Promise --------------------",error);
});

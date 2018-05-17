const createFile = require('./fileOperations/createFile.js');
const writeFile = require('./fileOperations/writeFile.js');
const readFile = require('./fileOperations/readFile.js');
const deleteFile = require('./fileOperations/deleteFile.js');

const blockingFunctions = require('./callbackOperations/blockingFunctions.js');
const callbackFunctions = require('./callbackOperations/callbackFunctions.js');
const nestedFunctions = require('./callbackOperations/nestedFunctions.js');


createFile.abc();
//writeFile();
//readFile();
//deleteFile();

//blockingFunctions();
//callbackFunctions();
//nestedFunctions();

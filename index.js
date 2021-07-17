/**
 * Common functions 
 *  */ 

function validateTestResult (testNum, condition) {
    let result;
    if (condition) {
        result = "OK"
    } else {
        result = "NG"
    }
    console.log(`Test${testNum}: ${result}`);
}

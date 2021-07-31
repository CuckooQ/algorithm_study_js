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

function arraysEqual (a1, a2) {
    let i = a1.length;
    if (i != a2.length) return false;
 
    while (i--) {
      if (a1[i] !== a2[i]) return false;
    }

    return true;
};

function getMin (arr) {
    // return Math.min.apply(null, arr);
    return Math.min(...arr);
}

function changeArrToStrForPrinting (arr) {
    return arr.toString().split(",").join(" ");
}

function removeSameValIn (arr) {
    const uniqueValArr = [];
    arr.forEach((val) => {
        if (uniqueValArr.indexOf(val) === -1) {
            uniqueValArr.push(val);
        }
    });

    return uniqueValArr;
}

function sumToSelectedNum(selectedNum, sum = 0) {
    if (selectedNum > 0) {
        sum += selectedNum;
        sum = sumToSelectedNum(selectedNum -1, sum);
    } 

    return sum;
}


    
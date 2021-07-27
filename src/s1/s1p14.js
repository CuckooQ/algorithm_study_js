/**
 * Title: 가장 긴 문자열
 * Content: N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력.
 * Input Condition: 첫 줄에 자연수 N이 주어진다. (3<=N<=30)
 *                  두 번째 줄부터 N개의 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.
 * Output Condition: 첫 줄에 가장 긴 문자열을 출력한다. 
 * Input Example: 5
 *                teacher
 *                time
 *                student
 *                beautiful
 *                good
 * Output Example:  beautiful
 */

function getMoreLongTextFrom(text1, text2) {
    if (text1.length >= text2.length) {
        return text1;
    } else {
        return text2;
    }
}

function getMostLongTextFrom(textArr) {
    let mostLongText = "";
    textArr.forEach((text) => {
        mostLongText = getMoreLongTextFrom(text, mostLongText); 
    }) 

    return mostLongText;
}

function solution (textArr) {
    let answer = getMostLongTextFrom(textArr);
    return answer;
}

function testToMaxCount () {
    const testNum = 1; 
    const inputArr = [ 
        "a", "bb", "ccc", "dddd", "eeeee", "ffffff", "ggggggg", "hhhhhhhh", "iiiiiiiii", "jjjjjjjjjj",
        "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk", "tt", "zzz", "xxxxx", "vvvvvvv", "mmmmmm", "nnnn", "lllll", "jjjjjjjjj", "wwwwwwwwwwwwwwwwwwwwwwwwwwwww",
        "yyyyyyyyyyyyyyyyyyyyyyyyy", "uuuuuuuuuuuuuuuuuuuu", "rrrrrrrrrr", "jjjjjjj", "12edee", "fr4hy5h", "nuyjm8", "p9;..p", ";.p.'", "1=f[p",
    ];
    const expectResult = "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk";
    const testFunction = solution;
    const condition = (testFunction(inputArr) === expectResult);    
    validateTestResult(testNum, condition);
}

function testToMinCount () {
    const testNum = 2; 
    const inputArr = ["test", "character", "frontend"];   
    const expectResult = "character";
    const testFunction = solution;
    const condition = (testFunction(inputArr) === expectResult);    
    validateTestResult(testNum, condition);
}

function testToMaxLenStr () {
    const testNum = 3;
    const inputArr = ["abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij", "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghij", "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij"];   
    const expectResult = "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij";
    const testFunction = solution;
    const condition = (testFunction(inputArr) === expectResult);    
    validateTestResult(testNum, condition);
}

function testToMinLenStr () {
    const testNum = 4;
    const inputArr = ["", "a", "zzzz"];  
    const expectResult = "zzzz";
    const testFunction = solution;
    const condition = (testFunction(inputArr) === expectResult);    
    validateTestResult(testNum, condition);
}

function testToSameStr () {
    const testNum = 5;
    const inputArr = ["aaaaaa", "aaaaaa", "bbbbb", "ccccc"];  
    const expectResult = "aaaaaa";
    const testFunction = solution;
    const condition = (testFunction(inputArr) === expectResult);    
    validateTestResult(testNum, condition);
}


function main () {
    const inputCount = 5;
    const inputArr = ["teacher", "time", "student", "beautiful", "good"];
    const output = this.solution(inputArr);
    
    console.log("S1P14\n");
    // test();
    console.log(`Input: ${inputCount}\n ${inputArr[0]}\n ${inputArr[1]}\n ${inputArr[2]}\n ${inputArr[3]}\n ${inputArr[4]}\n `);
    console.log(`Output: ${output}\n`);
}

function test() {
    testToMaxCount();
    testToMinCount();
    testToMaxLenStr();
    testToMinLenStr();
    testToSameStr();
}

main();

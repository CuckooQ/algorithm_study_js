/**
 * Problem file template 
 *  */ 
/**
 * Title: 10부제
 * Content: 서울시는 자동차 10부제 시행. 
 *          자동차 10부제는 자동차 번호의 일의 자리 숫자와 날짜의 일의 자리 숫자가 일치하면, 해당 자동차의 운행을 금지하는 것이다.
 *          예를 들어, 자동차 번호의 일의 자리 숫자가 7이면 7일, 17일, 27일에 운행하지 못한다.
 *          또한, 자동차 번호의 일의 자리 숫자가 0이면 10일, 20일, 30일에 운행하지 못한다.
 *          여러분은 일일 경찰관이 되어 10부제를 위반하는 자동차의 대수를 세는 봉사활동을 하려고 한다.
 *          날짜의 일의 자리 숫자가 주어지고 7대의 자동차 번호의 끝 두자리 수가 주어졌을 때, 위반하는 자동차의 대수 출력.
 * Input Condition: 첫 줄에는 날짜의 일의 자리 숫자가 주어지고 두 번째 줄에는 7대의 자동차 번호의 끝 두 자리 숫자가 주어진다.
 * Output Condition: 주어진 날짜와 자동차의 일의 자리 숫자를 보고 10부제를 위반하는 차량의 대수 출력
 * Input Example: 3
 *                25 23 11 47 53 17 33
 * Output Example: 3
 */

// 숫자 일치 여부
function isNumEqual(num1, num2) {
    return num1 === num2;
}

function TestisNumEqual() {
    const testNum = 1;
    const testFunction = isNumEqual;
    let input1 = 0;
    let input2 = 0;
    let expectResult = true;
    let condition = (testFunction(input1, input2) === expectResult);    
    validateTestResult(testNum, condition);

    input1 = 0;
    input2 = 1;
    expectResult = false;
    condition = (testFunction(input1, input2) === expectResult);    
    validateTestResult(testNum, condition);
}

// 두 자리 숫자의 한 자리 숫자 출력
function getOneplaceFrom(twoPlaces) {
    return twoPlaces % (10*1);
}

function TestGetOneplaceFrom() {
    const testNum = 2;
    const input = 89;   
    const expectResult = 9;
    const testFunction = getOneplaceFrom;
    const condition = (testFunction(input) === expectResult);    
    validateTestResult(testNum, condition);
}

function isViolateTo10thDayNoDrivingSystem(twoPlacesOfCarNum, OnePlaceOfDay) {
    const onePlaceOfCarNum = getOneplaceFrom(twoPlacesOfCarNum);
    return isNumEqual(OnePlaceOfDay, onePlaceOfCarNum);
}

function TestIsViolateTo10thDayNoDrivingSystem() {
    const testNum = 3;
    const testFunction = isViolateTo10thDayNoDrivingSystem;
    let input1 = 90;
    let input2 = 0;
    let expectResult = true;
    let condition = (testFunction(input1, input2) === expectResult);    
    validateTestResult(testNum, condition);

    input1 = 98;
    input2 = 9;
    expectResult = false;
    condition = (testFunction(input1, input2) === expectResult);    
    validateTestResult(testNum, condition);
}

function getCarCountToViolateTo10thDayNoDrivingSystem(twoPlacesOfCarNumArr, OnePlaceOfDay) {
    violatedCars = [];
    twoPlacesOfCarNumArr.forEach((carNum)=> {
        if (isViolateTo10thDayNoDrivingSystem(carNum, OnePlaceOfDay)) {
            violatedCars.push(carNum);
        }
    })
    return violatedCars.length;
}

function TestGetCarCountToViolateTo10thDayNoDrivingSystem() {
    const testNum = 4;
    const testFunction = getCarCountToViolateTo10thDayNoDrivingSystem;
    let input1 = [20, 42, 64, 86, 99];
    let input2 = 0;
    let expectResult = 1;
    let condition = (testFunction(input1, input2) === expectResult);    
    validateTestResult(testNum, condition);

    input1 = [20, 42, 64, 86, 98];
    input2 = 9;
    expectResult = 0;
    condition = (testFunction(input1, input2) === expectResult);    
    validateTestResult(testNum, condition);

    input1 = [22, 42, 62, 82, 92];
    input2 = 2;
    expectResult = 5;
    condition = (testFunction(input1, input2) === expectResult);    
    validateTestResult(testNum, condition);
}

function solution (onePlace, twoPlaces1, twoPlaces2, twoPlaces3, twoPlaces4, twoPlaces5, twoPlaces6, twoPlaces7) {
    let answer;
    const carNumArr = [twoPlaces1, twoPlaces2, twoPlaces3, twoPlaces4, twoPlaces5, twoPlaces6, twoPlaces7];
    answer = getCarCountToViolateTo10thDayNoDrivingSystem(carNumArr, onePlace);
    return answer;
}

function testNormal () {
    const testNum = 5;
    const input1 = 0;   
    const input2 = 11;   
    const input3 = 22;   
    const input4 = 33;   
    const input5 = 44;   
    const input6 = 55;   
    const input7 = 66;
    const input8 = 70;      
    const expectResult = 1;
    const testFunction = solution;
    const condition = (testFunction(input1, input2, input3, input4, input5, input6, input7, input8) === expectResult);    
    validateTestResult(testNum, condition);
}

function main () {
    const input1 = 3;
    const input2 = 25;
    const input3 = 23;
    const input4 = 11;
    const input5 = 47;
    const input6 = 53;
    const input7 = 17;
    const input8 = 33;
    const output = this.solution(input1, input2, input3, input4, input5, input6, input7, input8);
    
    console.log("S1P7\n");
    // test();
    console.log(`Input1: ${input1} `);
    console.log(`Input2: ${input2} ${input3} ${input4} ${input5} ${input6} ${input7} ${input8}`);
    console.log(`Output: ${output}\n`);
}

function test() {
    TestisNumEqual();
    TestGetOneplaceFrom();
    TestIsViolateTo10thDayNoDrivingSystem();
    TestGetCarCountToViolateTo10thDayNoDrivingSystem();
    testNormal();
}

main();

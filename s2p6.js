/**
 * Title: 격자판 최대합
 * Content: N*N의 격자판이 주어지면, 각 행의 합, 각 열의 합, 두 대각선의 합 중 가장 큰 합 출력하기.
 * Input Condition: 첫 줄에 자연수 N이 주어진다. (1<=N<=50)
 *                  두 번째 줄부터 N줄에 거렻 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는다.
 * Output Condition: 최대합을 출력한다.
 * Input Example: [[10, 13, 10, 12, 15],
 *                 [12, 39, 30, 23, 11],
 *                 [11, 25, 50, 53, 15],
 *                 [19, 27, 29, 37, 27],
 *                 [19, 13, 30, 13, 19]];
 * Output Example: 155
 */

function getSum (arr) {
    let sum = 0;
    sum = arr.reduce((sum, val) => sum + val);
    
    return sum;
}

function getTopSumToCompare (arr, topSum) {
    const sum = getSum(arr);
    topSum = Math.max(sum, topSum);

    return topSum;
}

function getTopSumFromRowsOfGrid(grid) {
    let topSum =0;
    grid.forEach((row) => {
        topSum = getTopSumToCompare(row, topSum);
    });
    
    return topSum;
}

function getTopSumFromColumnsOfGrid(grid) {
    let topSum = 0;
    for (let i=0; i< grid.length; i++) {
        const arr = [];
        for (let j=0; j<grid.length; j++) {
            arr.push(grid[j][i]);
        }
        topSum = getTopSumToCompare(arr, topSum);
    }
    
    return topSum;
}

function getTopSumFromCrossOfGrid(grid) {
    let topSum = 0;
    const firstCrossArr = [];
    const secondCrossArr = [];
    for (let i=0; i< grid.length; i++) {
        firstCrossArr.push(grid[i][i]);
        secondCrossArr.push(grid[i][(grid.length-1)-i]);
    }
    topSum = getTopSumToCompare(firstCrossArr, topSum);
    topSum = getTopSumToCompare(secondCrossArr, topSum);

    return topSum;
}

function getTopSumFromGrid(grid) {
    const rowTopSum = getTopSumFromRowsOfGrid(grid);
    const columnTopSum = getTopSumFromColumnsOfGrid(grid);
    const crossTopSum = getTopSumFromCrossOfGrid(grid);

    return Math.max(rowTopSum, columnTopSum, crossTopSum);
}

function solution (grid) {
    const answer = getTopSumFromGrid(grid);
    return answer;
}

function testToMaxRowColumn () {
    const testNum = 1;
    const MAXLENGTH = 50;
    const input = [];
    const row = Array.from({length:MAXLENGTH}, (_, i) => i+1);   
    for(let i=0; i<MAXLENGTH; i++) {
        input.push(row);
    }
    const expectResult = 2500;
    const testFunction = solution;
    const condition = (testFunction(input) === expectResult);    
    validateTestResult(testNum, condition);
}

function testToMinRowColumn () {
    const testNum = 2;
    const MINLENGTH = 1;
    const input = Array.from({length:MINLENGTH}, ()=>[100]);   
    const expectResult = 100;
    const testFunction = solution;
    const condition = (testFunction(input) === expectResult);    
    validateTestResult(testNum, condition);
}

function testToMaxValue () {
    const testNum = 3;
    const MAXLENGTH = 50;
    const MAXVALUE = 100;
    const input = [];
    const row = Array.from({length:MAXLENGTH}, () => MAXVALUE);   
    for(let i=0; i<MAXLENGTH; i++) {
        input.push(row);
    }
    const expectResult = 5000;
    const testFunction = solution;
    const condition = (testFunction(input) === expectResult);    
    validateTestResult(testNum, condition);
}

function testToMinValue () {
    const testNum = 4;
    const MINLENGTH = 1;
    const MINVALUE = 1;
    const input = Array.from({length:MINLENGTH}, () => [MINVALUE]);   
    const expectResult = 1;
    const testFunction = solution;
    const condition = (testFunction(input) === expectResult);    
    validateTestResult(testNum, condition);
}

function main () {
    const input = [[10, 13, 10, 12, 15],
                    [12, 39, 30, 23, 11],
                    [11, 25, 50, 53, 15],
                    [19, 27, 29, 37, 27],
                    [19, 13, 30, 13, 19]];
    const output = this.solution(input);
    console.log("S2P6\n");
    // test();
    console.log(`Input: ${input.toString()} `);
    console.log(`Output: ${output}\n`);
}

function test() {
    testToMaxRowColumn();
    testToMinRowColumn();
    testToMaxValue();
    testToMinValue();
}

main();

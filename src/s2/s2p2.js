/**
 * Title: 보이는 학생
 * Content: 선생님이 N(1<=N<=1000)명의 학생을 일렬로 세웠습니다.
 *          일렬로 서 있는 학생의 키가 앞에서부터 순서대로 주어질 때, 맨 앞에 서 있는 선생님이 볼 수 있는 학생의 수를 구하기.
 * Input Condition: 첫 줄에 정수 N이 입력된다. 
 *                  그 다음줄에 N명의 학생의 키가 앞에서부터 순서대로 주어진다.
 * Output Condition: 선생님이 볼 수 있는 최대 학생 수를 출력한다.
 * Input Example: 8
 *                130 135 148 140 145 150 150 153
 * Output Example: 5 
 */

function filterToViewableHeights(heightArr) {
    let topHeight = Number.MIN_SAFE_INTEGER;
    const viewableHeightArr = [];
    heightArr.forEach((height)=> {
        if(height > topHeight) {
            topHeight = height;
            viewableHeightArr.push(height);
        }
    });

    return viewableHeightArr;
}

function solution (heightArr) {
    const viewableHeightArr = filterToViewableHeights(heightArr);
    const answer = viewableHeightArr.length;
    return answer;
}

function testToMaxCount () {
    const testNum = 1;
    const input = [];
    for (let i=0; i<1000; i++) {
        input.push(130 + (i*0.005));
    }   
    const expectResult = 1000;
    const testFunction = solution;
    const condition = (testFunction(input) === expectResult);    
    validateTestResult(testNum, condition);
}

function testToMinCount () {
    const testNum = 2;
    const input = [130];   
    const expectResult = 1;
    const testFunction = solution;
    const condition = (testFunction(input) === expectResult);    
    validateTestResult(testNum, condition);
}

function testToSerialHeights () {
    const testNum = 3;
    const input = [];   
    for (let i=0; i<10; i++) {
        input.push(130 + i);
    }   
    const expectResult = 10;
    const testFunction = solution;
    const condition = (testFunction(input) === expectResult);    
    validateTestResult(testNum, condition);
}

function testToReverseSerialHeights () {
    const testNum = 4;
    const input = [];   
    for (let i=10; i>0; i--) {
        input.push(130 + i);
    }   
    const expectResult = 1;
    const testFunction = solution;
    const condition = (testFunction(input) === expectResult);    
    validateTestResult(testNum, condition);
}

function testToAllSameHeights () {
    const testNum = 5;
    const input = [];
    for (let i=10; i>0; i--) {
        input.push(130);
    }      
    const expectResult = 1;
    const testFunction = solution;
    const condition = (testFunction(input) === expectResult);    
    validateTestResult(testNum, condition);
}

function main () {
    const input = [130, 135, 148, 140, 145, 150, 150, 153];
    const output = this.solution(input);
    
    console.log("S2P2\n");
    // test();
    console.log(`Input: ${input.length}\n ${input.join(' ')} `);
    console.log(`Output: ${output}\n`);
}

function test() {
    testToMaxCount();
    testToMinCount();
    testToSerialHeights();
    testToReverseSerialHeights();
    testToAllSameHeights();
}

main();

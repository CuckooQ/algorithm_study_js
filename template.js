/**
 * Problem file template 
 *  */ 
/**
 * Title: 
 * Content: 
 * Input Condition: 
 * Output Condition: 
 * Input Example: 
 * Output Example:  
 */

function solutionTemplate (param) {
    let answer;
    return answer;
}

function testTemplate () {
    const testNum = 1;
    const input = 0;   
    const expectResult = 1;
    const testFunction = solutionTemplate;
    const condition = (testFunction(input) === expectResult);    
    validateTestResult(testNum, condition);
}

function mainTemplate () {
    const input = 0;
    const output = this.solutionTemplate(input);
    
    console.log("SnPn\n");
    testTemplate();
    // console.log(`Input: ${input} `);
    // console.log(`Output: ${output}\n`);
}

function testTemplate() {
}

mainTemplate();

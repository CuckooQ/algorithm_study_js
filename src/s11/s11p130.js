/**
 * Title: 괄호 회전하기
 * Content: 다음 규칙을 지키는 문자열을 올바른 괄호 문자열이라고 정의합니다.
 *           * (), [], {} 는 모두 올바른 괄호 문자열입니다.
 *           * 만약 A가 올바른 괄호 문자열이라면, (A), [A], {A} 도 올바른 괄호 문자열입니다.
 *             예를 들어, [] 가 올바른 괄호 문자열이므로, ([]) 도 올바른 괄호 문자열입니다.
 *           * 만약 A, B가 올바른 괄호 문자열이라면, AB 도 올바른 괄호 문자열입니다.
 *             예를 들어, {} 와 ([]) 가 올바른 괄호 문자열이므로, {}([]) 도 올바른 괄호 문자열입니다.
 *           대괄호, 중괄호, 그리고 소괄호로 이루어진 문자열 s가 매개변수로 주어집니다.
 *           이 s를 왼쪽으로 x (0 ≤ x < (s의 길이)) 칸만큼 회전시켰을 때 s가 올바른 괄호 문자열이 되게 하는 x의 개수를 return 하도록 solution 함수를 완성해주세요.
 * Input Condition: s의 길이는 1 이상 1,000 이하입니다.
 * Output Condition: None
 * Input Example: "[](){}"
 * Output Example: 3
 */
// Expected: 17:00 - 17:40
// Actual: 17:00 - 18:15

{
  const DIRECTION = {
    LEFT: "left",
    RIGHT: "right",
  };
  const BRACKETS = {
    LEFT: "[",
    RIGHT: "]",
  };
  const BRACES = {
    LEFT: "{",
    RIGHT: "}",
  };
  const PARENTHESIS = {
    LEFT: "(",
    RIGHT: ")",
  };

  function push(weight, stack) {
    stack.push(weight);
    weight++;
    return weight;
  }

  function pop(stack, otherStacks) {
    let isRight = true;

    if (stack.length === 0) {
      isRight = false;
      return isRight;
    }

    const popedWeight = stack.pop();
    for (let i = 0; i < otherStacks.length; i++) {
      if (
        otherStacks[i].filter((weight) => weight > popedWeight).length !== 0
      ) {
        isRight = false;
        break;
      }
    }
    return isRight;
  }

  function solution(s) {
    let answer = 0;

    let cArr = [...s];
    for (let i = 0; i < s.length; i++) {
      // 회전
      cArr.push(cArr.shift());

      // 판별
      let weight = 1;
      let isRight = true;
      const bracketsStack = [];
      const bracesStack = [];
      const parenthesisStack = [];
      for (let j = 0; j < cArr.length; j++) {
        let direction;
        let stack;
        let otherStacks;
        switch (cArr[j]) {
          case BRACKETS.LEFT:
          case BRACKETS.RIGHT: {
            direction =
              cArr[j] === BRACKETS.LEFT ? DIRECTION.LEFT : DIRECTION.RIGHT;
            stack = bracketsStack;
            otherStacks = [bracesStack, parenthesisStack];
            break;
          }
          case BRACES.LEFT:
          case BRACES.RIGHT: {
            direction =
              cArr[j] === BRACES.LEFT ? DIRECTION.LEFT : DIRECTION.RIGHT;
            stack = bracesStack;
            otherStacks = [bracketsStack, parenthesisStack];
            break;
          }
          case PARENTHESIS.LEFT:
          case PARENTHESIS.RIGHT: {
            direction =
              cArr[j] === PARENTHESIS.LEFT ? DIRECTION.LEFT : DIRECTION.RIGHT;
            stack = parenthesisStack;
            otherStacks = [bracesStack, bracketsStack];
            break;
          }
          default:
        }

        if (direction === DIRECTION.LEFT) {
          weight = push(weight, stack);
        }
        if (direction === DIRECTION.RIGHT) {
          const result = pop(stack, otherStacks);
          if (!result) {
            isRight = false;
            break;
          }
        }
      }

      if (
        bracketsStack.length !== 0 ||
        bracesStack.length !== 0 ||
        parenthesisStack.length !== 0
      ) {
        isRight = false;
      }

      isRight && answer++;
    }

    return answer;
  }

  function testToExample1() {
    const testNum = 1;
    const input = "}]()[{";
    const expectResult = 2;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const input = "[)(]";
    const expectResult = 0;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample3() {
    const testNum = 3;
    const input = "}}}";
    const expectResult = 0;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample4() {
    const testNum = 4;
    const input = "({[}])";
    const expectResult = 0;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample5() {
    const testNum = 5;
    const input = "{{{";
    const expectResult = 0;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P130\n");

    const input = "[](){}";
    const output = this.solution(input);

    // test();
    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample1();
    testToExample2();
    testToExample3();
    testToExample4();
    testToExample5();
  }

  main();
}

/**
 * Title: 이진트리 순회(깊이 우선 탐색)
 * Content: 아래 그림과 같은 이진트리의 전위순회와 후위순회를 연습하기.
 *                   1
 *               2       3
 *             4   5    6  7
 * Input Condition: NONE.
 * Output Condition: NONE.
 * Input Example: NONE.
 * Output Example: 전위 순회 출력 1 2 4 5 3 6 7
 *                 중위 순회 출력 4 2 5 1 6 3 7
 *                 후위 순회 출력 4 5 2 6 7 3 1
 */
// *이진트리 복습을 위해 다시 풀기
// *암기 아닌가...

{
  const INIT_VALUE = 1;
  const LAST_VALUE = 7;

  const TRAVERSE = {
    PREORDER: "PREORDER",
    INORDER: "INORDER",
    POSTORDER: "POSTORDER",
  };

  function getValuesInOrderOfPreorder() {
    return dfsForPreorder();
  }

  function getValuesInOrderOfInorder() {
    return dfsForInorder();
  }

  function getValuesInOrderOfPostorder() {
    return dfsForPostorder();
  }

  function dfsForPreorder(val = INIT_VALUE, vals = []) {
    if (val > LAST_VALUE) {
      return vals;
    } else {
      vals.push(val);
      dfsForPreorder(val * 2, vals);
      dfsForPreorder(val * 2 + 1, vals);
    }

    return vals;
  }

  function dfsForInorder(val = INIT_VALUE, vals = []) {
    if (val > LAST_VALUE) {
      return vals;
    } else {
      dfsForInorder(val * 2, vals);
      vals.push(val);
      dfsForInorder(val * 2 + 1, vals);
    }

    return vals;
  }

  function dfsForPostorder(val = INIT_VALUE, vals = []) {
    if (val > LAST_VALUE) {
      return vals;
    } else {
      dfsForPostorder(val * 2, vals);
      dfsForPostorder(val * 2 + 1, vals);
      vals.push(val);
    }

    return vals;
  }

  function getValuesInOrderOfTraverse(traverse) {
    switch (traverse) {
      case TRAVERSE.PREORDER:
        return getValuesInOrderOfPreorder();
      case TRAVERSE.INORDER:
        return getValuesInOrderOfInorder();
      case TRAVERSE.POSTORDER:
        return getValuesInOrderOfPostorder();
      default:
        return [];
    }
  }

  function solution(traverse) {
    const values = getValuesInOrderOfTraverse(traverse);
    const answer = values.join(" ");
    return answer;
  }

  function testToPreorder() {
    const testNum = 1;
    const input = TRAVERSE.PREORDER;
    const expectResult = "1 2 4 5 3 6 7";
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToInorder() {
    const testNum = 2;
    const input = TRAVERSE.INORDER;
    const expectResult = "4 2 5 1 6 3 7";
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToPostorder() {
    const testNum = 3;
    const input = TRAVERSE.POSTORDER;
    const expectResult = "4 5 2 6 7 3 1";
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    const input = TRAVERSE.PREORDER;
    const output = this.solution(input);

    console.log("S8P3\n");
    // test();
    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToPreorder();
    testToInorder();
    testToPostorder();
  }

  main();
}

/**
 * Title: 993. Cousins in Binary Tree
 * Content: Given the root of a binary tree with unique values and the values of two different nodes of the tree x and y,
 *          return true if the nodes corresponding to the values x and y in the tree are cousins, or false otherwise.
 *          Two nodes of a binary tree are cousins if they have the same depth with different parents.
 *          Note that in a binary tree, the root node is at the depth 0, and children of each depth k node are at the depth k + 1.
 * Input Condition: The number of nodes in the tree is in the range [2, 100].
 *                  1 <= Node.val <= 100
 *                  Each node has a unique value.
 *                  x != y
 *                  x and y are exist in the tree.
 * Output Condition: None
 * Input Example: root = [1,2,3,4], x = 4, y = 3
 * Output Example: false
 */
// *다시 풀기
// *문제를 제대로 읽지 않아서 문제가 발생했다.
// *배열을 이진트리로 만드는 처리는 문제에서 요구하지 않지만, 문제를 풀기 위해 사전에 필요한 처리이다.
// *배열을 이진트리로 구현하는 방법도 숙지하자.

{
  class TreeNode {
    constructor(val, left, right) {
      this.val = val === undefined ? 0 : val;
      this.left = left === undefined ? null : left;
      this.right = right === undefined ? null : right;
    }

    // 이진 트리 생성을 위한 처리
    setChild = (idx, root) => {
      const leftIdx = idx * 2 + 1;
      const rightIdx = idx * 2 + 2;

      if (leftIdx > root.length && rightIdx > root.length) {
        return;
      }

      const leftVal = root[leftIdx];
      if (leftVal) {
        this.left = new TreeNode(leftVal);
        this.left.setChild(leftIdx, root);
      }

      const rightVal = root[rightIdx];
      if (rightVal) {
        this.right = new TreeNode(rightVal);
        this.right.setChild(rightIdx, root);
      }
    };
  }

  // 이진 트리 생성을 위한 처리
  function createBinaryTree(root) {
    // root node idx = 0
    // left child node idx = parent node idx * 2 + 1
    // right child node idx = parent node idx * 2 + 2

    const INIT_IDX = 0;
    const rootNode = new TreeNode(root[INIT_IDX]);
    rootNode.setChild(INIT_IDX, root);

    return rootNode;
  }

  function solution(root, x, y) {
    let answer;
    let xDepth = 0;
    let yDepth = 0;
    let xParentVal = -1;
    let yParentVal = -1;

    dfs();

    const isSameDepth = xDepth === yDepth;
    const isDiffParent = xParentVal !== yParentVal;
    answer = isSameDepth && isDiffParent;

    return answer;

    function dfs(node = root, parentNode = null, depth = 1) {
      if ((xParentVal !== -1 && yParentVal !== -1) || !node) {
        return;
      }

      if (node.val === x) {
        xParentVal = parentNode ? parentNode.val : null;
        xDepth = depth;
      }

      if (node.val === y) {
        yParentVal = parentNode ? parentNode.val : null;
        yDepth = depth;
      }

      dfs(node.left, node, depth + 1);
      dfs(node.right, node, depth + 1);
    }
  }

  /* 
  // 문제를 제대로 읽지 않고 root를 배열로 착각하고 작성한 처리
  function solution(root, x, y) {
    let answer;

    const depthArr = [[]];
    let depth = 0;
    let nextKey = 1;
    root.forEach((val, idx) => {
      if (idx + 1 >= nextKey) {
        nextKey *= 2;
        depth++;
        depthArr[depth] = [val];
      } else {
        depthArr[depth].push(val);
      }
    });

    let xIdx = -1;
    let yIdx = -1;
    let xDepth = 0;
    let yDepth = 0;
    for (const [idx, arr] of depthArr.entries()) {
      xIdx = arr.findIndex((val) => val === x);
      if (xIdx !== -1) {
        xDepth = idx;
      }
      yIdx = arr.findIndex((val) => val === y);
      if (yIdx !== -1) {
        yDepth = idx;
      }

      if (xIdx !== -1 && yIdx !== -1) {
        break;
      }
    }

    const isSameLevel = xDepth === yDepth;
    const hasDiffParent = yIdx + 1 !== xIdx && yIdx - 1 !== xIdx;
    answer = isSameLevel && hasDiffParent;
    return answer;
  }
  */

  function testToExample1() {
    const testNum = 1;
    const inputRoot = createBinaryTree([1, 2, 3, null, 4, null, 5]);
    const inputX = 5;
    const inputY = 4;
    const expectResult = true;
    const testFunction = solution;
    const condition = testFunction(inputRoot, inputX, inputY) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const inputRoot = createBinaryTree([1, 2, 3, null, 4]);
    const inputX = 2;
    const inputY = 3;
    const expectResult = false;
    const testFunction = solution;
    const condition = testFunction(inputRoot, inputX, inputY) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S12P8\n");

    const root = [1, 2, 3, 4];
    const inputRoot = createBinaryTree(root);
    const inputX = 4;
    const inputY = 3;
    const output = this.solution(inputRoot, inputX, inputY);

    // test();
    console.log(`Input: ${root.join(" ")}\n${inputX}\n${inputY} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample1();
    testToExample2();
  }

  main();
}

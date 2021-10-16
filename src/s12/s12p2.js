/**
 * Title: Add Two Numbers
 * Content: You are given two non-empty linked lists representing two non-negative integers.
 *          The digits are stored in reverse order, and each of their nodes contains a single digit.
 *          Add the two numbers and return the sum as a linked list.
 *          You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * Input Condition: The number of nodes in each linked list is in the range [1, 100].
 *                  0 <= Node.val <= 9
 *                  It is guaranteed that the list represents a number that does not have leading zeros.
 * Output Condition:
 * Input Example: l1 = [2,4,3], l2 = [5,6,4]
 * Output Example: [7,0,8] (342 + 465 = 807)
 */
// Expected: 18:36 - 19:16
// Actual: 18:36 - 20:06
// Cause: 문제를 제대로 안 읽은 결과, Linked List로 구현하지 않고 Array로 구현했다.

{
  class ListNode {
    constructor(val, next) {
      this.val = val === undefined ? null : val;
      this.next = next === undefined ? null : next;
    }

    set = (val) => {
      if (this.val === null) {
        this.setValue(val);
      } else {
        this.setNext(val);
      }
    };

    setValue = (val) => {
      this.val = val;
    };

    setNext = (val) => {
      let beforeNode = null;
      let nextNode = this.next;
      while (nextNode) {
        beforeNode = nextNode;
        if (!beforeNode.next) {
          break;
        } else {
          nextNode = nextNode.next;
        }
      }

      if (!beforeNode) {
        this.next = new ListNode(val);
      } else {
        beforeNode.next = new ListNode(val);
      }
    };

    toArray = () => {
      const arr = [];
      let val = this.val;
      let next = this.next;
      while (val !== null) {
        arr.push(val);
        val = next ? next.val : null;
        next = next ? next.next : null;
      }

      return arr;
    };
  }

  function solution(l1, l2) {
    const answer = new ListNode();

    let addOne = false;

    let l1Next = l1;
    let l2Next = l2;
    while (l1Next !== null || l2Next !== null || addOne !== false) {
      const l1Num = l1Next ? l1Next.val : 0;
      const l2Num = l2Next ? l2Next.val : 0;
      let sum = l1Num + l2Num;

      if (addOne) {
        sum += 1;
        addOne = false;
      }

      let num;
      if (sum >= 10) {
        num = sum - 10;
        addOne = true;
      } else {
        num = sum;
      }

      answer.set(num);

      l1Next = l1Next && l1Next.next;
      l2Next = l2Next && l2Next.next;
    }

    return answer;
  }

  function main() {
    console.log("S12P2\n");

    const l1 = [2, 4, 3];
    const l2 = [5, 6, 4];
    const inputL1 = new ListNode();
    l1.forEach((num) => {
      inputL1.set(num);
    });
    const inputL2 = new ListNode();
    l2.forEach((num) => {
      inputL2.set(num);
    });

    const output = this.solution(inputL1, inputL2);

    console.log(`Input: ${l1.join(" ")}\n${l2.join(" ")} `);
    console.log(`Output: ${output.toArray().join(" ")}\n`);
  }

  main();
}

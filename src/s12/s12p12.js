/**
 * Title: Insert Delete GetRandom O(1)
 * Content: Implement the RandomizedSet class:
 *          1. RandomizedSet() Initializes the RandomizedSet object.
 *          2. bool insert(int val) Inserts an item val into the set if not present.
 *             Returns true if the item was not present, false otherwise.
 *          3. bool remove(int val) Removes an item val from the set if present.
 *             Returns true if the item was present, false otherwise.
 *          4. int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called).
 *             Each element must have the same probability of being returned.
 *          You must implement the functions of the class such that each function works in average O(1) time complexity.
 * Input Condition: -231 <= val <= 231 - 1
 *                  At most 2 * 105 calls will be made to insert, remove, and getRandom.
 *                  There will be at least one element in the data structure when getRandom is called.
 * Output Condition: None
 * Input Example: ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
 *                [[], [1], [2], [2], [], [1], [2], []]
 * Output Example: [null, true, false, true, 2, true, false, 2]
 */
// Expected: 11:21 - 12:01
// Actual: 11:21 - 11:42

{
  class RandomizedSet {
    constructor() {
      this.set = new Set();
    }

    insert = (val) => {
      if (this.set.has(val)) {
        return false;
      }

      this.set.add(val);

      return true;
    };

    remove = (val) => {
      if (!this.set.has(val)) {
        return false;
      }

      this.set.delete(val);

      return true;
    };

    getRandom = () => {
      const arr = Array.from(this.set.values());
      const selIdx = Math.floor(Math.random() * arr.length);
      return arr[selIdx];
    };
  }

  function solution() {
    let answer = "";

    const results = [];

    const randomizedSet = new RandomizedSet();
    results.push(randomizedSet.insert(1));
    results.push(randomizedSet.remove(2));
    results.push(randomizedSet.insert(2));
    results.push(randomizedSet.getRandom());
    results.push(randomizedSet.remove(1));
    results.push(randomizedSet.insert(2));
    results.push(randomizedSet.getRandom());
    answer = results.join(" ");

    return answer;
  }

  function main() {
    console.log("S12P12\n");

    const output = this.solution();

    console.log(`Input: None `);
    console.log(`Output: ${output}\n`);
  }

  main();
}

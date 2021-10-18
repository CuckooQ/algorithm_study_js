/**
 * Title: 다리를 지나는 트럭
 * Content: 트럭 여러 대가 강을 가로지르는 일차선 다리를 정해진 순으로 건너려 합니다.
 *          모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다.
 *          다리에는 트럭이 최대 bridge_length대 올라갈 수 있으며, 다리는 weight 이하까지의 무게를 견딜 수 있습니다.
 *          단, 다리에 완전히 오르지 않은 트럭의 무게는 무시합니다.
 *          예를 들어, 트럭 2대가 올라갈 수 있고 무게를 10kg까지 견디는 다리가 있습니다.
 *          무게가 [7, 4, 5, 6]kg인 트럭이 순서대로 최단 시간 안에 다리를 건너려면 다음과 같이 건너야 합니다.
 *          경과 시간	   다리를 지난 트럭	   다리를 건너는 트럭	 대기 트럭
 *          0	           []	                []	               [7,4,5,6]
 *          1~2	         []	                [7]	               [4,5,6]
 *          3	           [7]              	[4]	               [5,6]
 *          4	           [7]	              [4,5]	             [6]
 *          5	           [7,4]	            [5]	               [6]
 *          6~7	         [7,4,5]	          [6]	               []
 *          8	           [7,4,5,6]	        []	               []
 *          따라서, 모든 트럭이 다리를 지나려면 최소 8초가 걸립니다.
 *          solution 함수의 매개변수로 다리에 올라갈 수 있는 트럭 수 bridge_length, 다리가 견딜 수 있는 무게 weight, 트럭 별 무게 truck_weights가 주어집니다.
 *          이때 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return 하도록 solution 함수를 완성하세요.
 * Input Condition: bridge_length는 1 이상 10,000 이하입니다.
 *                  weight는 1 이상 10,000 이하입니다.
 *                  truck_weights의 길이는 1 이상 10,000 이하입니다.
 *                  모든 트럭의 무게는 1 이상 weight 이하입니다.
 * Output Condition:
 * Input Example: 2
 *                10
 *                [7,4,5,6]
 * Output Example: 8
 */
// Expected: 15:22 - 16:02
// Actual: 15:22 - 16:30
// *다시 풀기
// *기대 시간보다 30분 초과했다.

{
  class Truck {
    constructor(id, weight) {
      this.id = id;
      this.weight = weight;
      this.distance = 0;
    }

    run = () => {
      this.distance++;
    };
  }

  function solution(bridgeLen, weight, truckWeights) {
    let answer;

    const completeTrucks = [];
    const trucksInBridge = [];
    const trucks = [];
    truckWeights.forEach((weight, idx) => {
      const truck = new Truck(idx, weight);
      trucks.push(truck);
    });

    let time = 0;
    while (completeTrucks.length !== truckWeights.length) {
      time++;

      runOnBridge();
      goToBridge();
    }

    answer = time;

    return answer;

    function goToBridge() {
      const truck = trucks.shift();

      if (!truck) {
        return;
      }

      const weightSum =
        trucksInBridge.length !== 0
          ? trucksInBridge.reduce((acc, truck) => {
              return acc + truck.weight;
            }, 0)
          : 0;

      if (weightSum + truck.weight <= weight) {
        trucksInBridge.push(truck);
      } else {
        trucks.unshift(truck);
      }
    }

    function runOnBridge() {
      let completeCnt = 0;
      trucksInBridge.forEach((truck) => {
        truck.run();

        if (truck.distance === bridgeLen) {
          completeTrucks.push(truck);
          completeCnt++;
        }
      });

      trucksInBridge.splice(0, completeCnt);
    }
  }

  function testToExample1() {
    const testNum = 1;
    const inputLen = 100;
    const inputWeight = 100;
    const inputTruckWeights = [10];
    const expectResult = 101;
    const testFunction = solution;
    const condition =
      testFunction(inputLen, inputWeight, inputTruckWeights) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const inputLen = 100;
    const inputWeight = 100;
    const inputTruckWeights = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
    const expectResult = 110;
    const testFunction = solution;
    const condition =
      testFunction(inputLen, inputWeight, inputTruckWeights) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P5\n");

    const inputLen = 2;
    const inputWeight = 10;
    const inputTruckWeights = [7, 4, 5, 6];
    const output = this.solution(inputLen, inputWeight, inputTruckWeights);

    // test();
    console.log(
      `Input: ${inputLen}\n${inputWeight}\n${inputTruckWeights.join(" ")} `
    );
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample1();
    testToExample2();
  }

  main();
}

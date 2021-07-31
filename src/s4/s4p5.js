/**
 * Title: K번째 큰 수
 * Content: 현수는 1부터 100사이의 자연수가 적힌 N장의 카드를 가지고 있다. 같은 숫자의 카드가 여러 장 있을 수 있다.
 *          현수는 이 중 3장을 뽑아 각 카드에 적힌 수를 합한 값을 기록하려 한다.
 *          3장을 뽑을 수 있는 모든 경우를 기록해서, 기록한 값 중 K번째로 큰 수를 출력하기.
 *          만약 큰 수부터 만들어진 수가 25 25 23 23 22 20 19, ...이고 K값이 3이라면 K번째 큰 값은 22이다.
 * Input Condition: 첫 줄에 자연수 N(3<=N<=100)과 K(1<=K<=50)이 입력되고, 그 다음 줄에 N개의 카드 값이 입력된다.
 * Output Condition: 첫 줄에 K번째 수를 출력한다. K번째 수가 존재하지 않으면 -1을 출력한다.
 * Input Example: 10 3
 *                13 15 34 23 45 65 33 11 26 42
 * Output Example: 143
 */
// *다시 풀기
// *카드 수가 고정 3장이 아닌 가변 값일 경우의 처리 방법도 알고 싶다.

{
    const MAX_CARD_COUNT = 100;
    const MAX_RANK = 50;
    const MIN_CARD_COUNT = 3;
    const MIN_RANK = 1;

    function sortSums (sums) {
        return sums.sort((befSum, aftSum) => aftSum - befSum);
    }

    function getAllSums (cards) {
        const sums = new Set();
        for (let i=0; i<cards.length; i++) {
            for (let j=i+1; j<cards.length;j++) {
                for (let k=j+1; k<cards.length;k++) {
                    let sum = 0;
                    sum += cards[i];
                    sum += cards[j];
                    sum += cards[k];
                    sums.add(sum);
                }
            }
        }

        return Array.from(sums);
    }
    
    function getSelectedRankSum (rank, cards) {
        const sums = getAllSums(cards);
        const sortedSums = sortSums(sums);
        const selectedSums = sortedSums[rank-1] ?? -1;

        return selectedSums;
    }

    function solution (rank, cards) {
        const answer = getSelectedRankSum(rank, cards);
        return answer;
    }

    function testToMaxCardsMaxRank () {
        const testNum = 1;
        const inputRank = MAX_RANK;
        const inputCards = [];
        const cardCount = MAX_CARD_COUNT;
        for (let i=1; i<=cardCount; i++) {
            inputCards.push(i);
        }   
        const expectResult = cardCount + (cardCount-1) + (cardCount-1-inputRank);
        const testFunction = solution;
        const condition = (testFunction(inputRank, inputCards) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToMaxCardsMinRank () {
        const testNum = 2;
        const inputRank = MIN_RANK;
        const inputCards = [];
        const cardCount = MAX_CARD_COUNT;
        for (let i=1; i<=cardCount; i++) {
            inputCards.push(i);
        }   
        const expectResult = cardCount + (cardCount-1) + (cardCount-1-inputRank);
        const testFunction = solution;
        const condition = (testFunction(inputRank, inputCards) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToMinCardsMaxRank () {
        const testNum = 3;
        const inputRank = MAX_RANK;
        const inputCards = [];
        const cardCount = MIN_CARD_COUNT;
        for (let i=1; i<=cardCount; i++) {
            inputCards.push(i);
        }    
        const expectResult = -1;
        const testFunction = solution;
        const condition = (testFunction(inputRank, inputCards) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToMinCardsMinRank () {
        const testNum = 4;
        const inputRank = MIN_RANK;
        const inputCards = [];
        const cardCount = MIN_CARD_COUNT;
        for (let i=1; i<=cardCount; i++) {
            inputCards.push(i);
        }   
        const expectResult = cardCount + (cardCount-1) + (cardCount-1-inputRank);
        const testFunction = solution;
        const condition = (testFunction(inputRank, inputCards) === expectResult);     
        validateTestResult(testNum, condition);
    }

    function testToNotExistRank () {
        const testNum = 5;
        const inputRank = 10;
        const inputCards = [1, 2, 3];
        const expectResult = -1;
        const testFunction = solution;
        const condition = (testFunction(inputRank, inputCards) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToOnlySameCards () {
        const testNum = 6;
        const inputRank = 1;
        const inputCards = [2, 2, 2, 2, 2, 2];
        const expectResult = 6;
        const testFunction = solution;
        const condition = (testFunction(inputRank, inputCards) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function main () {
        const inputRank = 3;
        const inputCards = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
        const output = this.solution(inputRank, inputCards);
        
        console.log("S4P5\n");
        // test();
        console.log(`Input: ${inputRank}\n ${inputCards.join(' ')}`);
        console.log(`Output: ${output}\n`);
    }
    
    function test() {
        testToMaxCardsMaxRank();
        testToMaxCardsMinRank();
        testToMinCardsMaxRank();
        testToMinCardsMinRank();
        testToNotExistRank();
        testToOnlySameCards();
    }
    
    main();
}

/**
 * Title: 아나그램
 * Content: Anagram이란, 두 문자열이 알파벳의 나열 순서는 다르지만 그 구성이 일치하면 두 단어는 아나그램이라 한다.
 *          예를 들면, AbaAeCe와 baeeACA는 알파벳의 나열 순서는 다르지만, 그 구성을 살펴보면 A(2), a(1), b(1), C(1), e(2)로 알파벳의 그 개수가 모두 일치한다.
 *          즉, 어느 한 단어를 재배열하면 상대편 단어가 될 수 있는 것을 아나그램이라 한다.
 *          길이가 같은 두 개의 단어가 주어지면, 두 단어가 아나그램인지 판별하기.
 *          아나그램 판별 시 대소문자는 구분한다.
 * Input Condition: 첫 번째 줄에 첫 번째 단어가 입력된다.
 *                  두 번째 줄에 두 번째 단어가 입력된다.
 *                  단어의 길이는 100을 넘지 않는다.
 * Output Condition: 두 단어가 아나그램이면 "YES"를 출력하고, 아나그램이 아니면 "NO"를 출력한다.
 * Input Example: AbaAeCe
 *                baeeACA
 * Output Example: YES
 */

 {
    const YES = "YES";
    const NO = "NO";

    function getCharCountMap(text) {
        const charMap = new Map();
        text.split("").forEach((char)=> {
            if (charMap.has(char)) {
                charMap.set(char, charMap.get(char) + 1);
            } else {
                charMap.set(char, 1);
            }
        });

        return charMap;
    }

    function isAnagramToMap(firstWordMap, secondWordMap) {
        let isAnagram = true;
        Array.from(firstWordMap).forEach((keyValPair) => {
            if (!secondWordMap.has(keyValPair[0])){
                isAnagram = false;
                return;
            } 

            if(keyValPair[1] !== secondWordMap.get(keyValPair[0])){
                isAnagram = false;
                return;
            }
        })

        return isAnagram;
    }

    function isAnagram(firstWord, secondWord) {
        const firstWordMap = getCharCountMap(firstWord);
        const secondWordMap = getCharCountMap(secondWord);

        return isAnagramToMap(firstWordMap, secondWordMap);
    }

    function solution(firstWord, secondWord) {
        const answer = isAnagram(firstWord, secondWord) ? YES : NO;
        return answer;
    }

    function testToMaxLen() {
        const testNum = 1;
        const inputFirstWord = "abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij";
        const inputSecondWord = "jihgfedcbajihgfedcbajihgfedcbajihgfedcbajihgfedcbajihgfedcbajihgfedcbajihgfedcbajihgfedcbajihgfedcba";   
        const expectResult = YES;
        const testFunction = solution;
        const condition = (testFunction(inputFirstWord, inputSecondWord) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToMinLen() {
        const testNum = 2;
        const inputFirstWord = "a";
        const inputSecondWord = "b";   
        const expectResult = NO;
        const testFunction = solution;
        const condition = (testFunction(inputFirstWord, inputSecondWord) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToUpperAndLowerCase() {
        const testNum = 3;
        const inputFirstWord = "abcdefghij";
        const inputSecondWord = "ABCDEFGHIJ";   
        const expectResult = NO;
        const testFunction = solution;
        const condition = (testFunction(inputFirstWord, inputSecondWord) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function main() {
        const inputFirstWord = "AbaAeCe";
        const inputSecondWord = "baeeACA";   
        const output = this.solution(inputFirstWord, inputSecondWord);
        
        console.log("S5P7\n");
        // test();
        console.log(`Input: ${inputFirstWord}\n ${inputSecondWord} `);
        console.log(`Output: ${output}\n`);
    }
    
    function test() {
        testToMaxLen();
        testToMinLen();
        testToUpperAndLowerCase();
    }
    
    main();
}

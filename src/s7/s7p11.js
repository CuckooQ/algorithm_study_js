/**
 * Title: 뮤직 비디오
 * Content: 지니 레코드에서는 불세출의 가수 조영필의 라이브 동영상을 DVD로 만들어 판매하려 한다.
 *          DVD에는 총 N개의 곡이 들어가는데, DVD에 녹화할 때에는 라이브에서의 순서가 그대로 유지되어야 한다.
 *          즉, 1번 노래와 5번 노래를 같은 DVD에 녹화하기 위해서는 1번과 5번 사이의 모든 노래도 같은 DVD에 녹화해야 한다.
 *          또한, 한 노래를 쪼개서 두 개의 DVD에 녹화하면 안 된다.
 *          지니 레코드 입장에서는 이 DVD가 팔릴 것인지 확실할 수 없기 때문에, 이 사업에 낭비되는 DVD를 가급적 줄이려고 한다.
 *          고민 끝에 지니 레코드는 M개의 DVD에 모든 동영상을 녹화하기로 하였다. 이 때 DVD의 크기(녹화 가능한 길이)를 최소로 하려고 한다.
 *          그리고 M개의 DVD는 모두 같은 크기여야 제조원가가 적게 들기 때문에 꼭 같은 크기로 해야 한다.
 * Input Condition: 첫 번째 줄에 자연수 N(1<=N<=1,000), M(1<=M<=N)이 주어진다. 
 *                  다음 줄에는 조영필이 라이브에서 부른 순서대로 부른 곡의 길이가 분 단위(자연수)로 주어진다.
 *                  부른 곡의 길이는 10,000분을 넘지 않는다.
 * Output Condition: 첫 번재 줄부터 DVD의 최소 용량 크기를 출력한다.
 * Input Example: 9 3
 *                1 2 3 4 5 6 7 8 9
 * Output Example: 17
 */
// *다시 풀기
// *풀이에서는 이분 검색으로 해결했다.
// *내가 구현한 풀이에서는 '순서가 그대로 유지되어야 한다'의 조건을 생각하지 않았다. 정렬하면 안 됐다.
// *어려웠다.

{   
    const MAX_SING_CNT = 1000;
    const MIN_SING_CNT = 1;
    const MAX_DVD_TIMES = 10_000;

    function getDVDCntWithinTotalSize(totalSize, singTimes) {
        let dvdCount = 0;
        let sum = 0;
        singTimes.forEach((singTime, idx) => {
            sum += singTime;
            if (sum > totalSize) {
                dvdCount++;
                sum = singTime;

                if (idx === singTimes.length - 1) {
                    dvdCount++;
                }
            } else if (sum === totalSize) {
                dvdCount++;
                sum = 0;
            } else {
                if (idx === singTimes.length - 1) {
                    dvdCount++;
                }
            }
        });
        
        return dvdCount;
    }

    function getMinDVDSizeFromDvDCount(dvdCount, singTimes) {
        let singSizes = [];
        const minDvdSize = Math.max(...singTimes);
        let leftVal = minDvdSize;
        let rightVal = singTimes.reduce((calc, curVal) => calc + curVal);
        let midVal;
        let acceptableDvdCnt; 
        while(leftVal <= rightVal) {
            midVal = Math.floor((leftVal + rightVal) / 2);
            acceptableDvdCnt = getDVDCntWithinTotalSize(midVal, singTimes);
            if (acceptableDvdCnt <= dvdCount) {
                singSizes.push(midVal);
                rightVal = midVal - 1;
            } else {
                leftVal = midVal + 1;
            }
        }
        
        return Math.min(...singSizes);
    }

    function solution(dvdCount, singTimes) {
        const answer = getMinDVDSizeFromDvDCount(dvdCount, singTimes);
        return answer;
    }

    function testToMaxSingCntAndMaxDVDCnt() {
        const testNum = 1;
        const inputDVDCount = MAX_SING_CNT;
        const inputSingTimes = Array.from({length: MAX_SING_CNT}, (_, idx) => idx + 1);
        const expectResult = MAX_SING_CNT;
        const testFunction = solution;
        const condition = (testFunction(inputDVDCount, inputSingTimes) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToMaxSingCntAndMaxDVDCntAndMaxDVDTimes() {
        const testNum = 2;
        const inputDVDCount = MAX_SING_CNT;
        const inputSingTimes = Array.from({length: MAX_SING_CNT}, () => MAX_DVD_TIMES);
        const expectResult = MAX_DVD_TIMES;
        const testFunction = solution;
        const condition = (testFunction(inputDVDCount, inputSingTimes) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToMaxSingCntAndMinDVDCnt() {
        const testNum = 3;
        const inputDVDCount = MIN_SING_CNT;
        const inputSingTimes = Array.from({length: MAX_SING_CNT}, (_, idx) => idx + 1);
        const expectResult = sumToSelectedNum(MAX_SING_CNT);
        const testFunction = solution;
        const condition = (testFunction(inputDVDCount, inputSingTimes) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToMaxSingCntAndMinDVDCntAndMaxDVDTimes() {
        const testNum = 4;
        const inputDVDCount = MIN_SING_CNT;
        const inputSingTimes = Array.from({length: MAX_SING_CNT}, () => MAX_DVD_TIMES);
        const expectResult = Math.ceil(MAX_DVD_TIMES * MAX_SING_CNT / MIN_SING_CNT);
        const testFunction = solution;
        const condition = (testFunction(inputDVDCount, inputSingTimes) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToMinSingCnt() {
        const testNum = 5;
        const inputDVDCount = MIN_SING_CNT;
        const inputSingTimes = Array.from({length: MIN_SING_CNT}, (_, idx) => idx + 1);
        const expectResult = sumToSelectedNum(MIN_SING_CNT);
        const testFunction = solution;
        const condition = (testFunction(inputDVDCount, inputSingTimes) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToMinSingCntAndMaxDVDTimes() {
        const testNum = 6;
        const inputDVDCount = MIN_SING_CNT;
        const inputSingTimes = Array.from({length: MIN_SING_CNT}, () => MAX_DVD_TIMES);
        const expectResult = MAX_DVD_TIMES*MIN_SING_CNT;
        const testFunction = solution;
        const condition = (testFunction(inputDVDCount, inputSingTimes) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function main() {
        const inputDVDCount = 3;
        const inputSingTimes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const output = this.solution(inputDVDCount, inputSingTimes);
        
        console.log("S7P11\n");
        // test();
        console.log(`Input: ${inputDVDCount}\n ${inputSingTimes.join(" ")}`);
        console.log(`Output: ${output}\n`);
    }
    
    function test() {
        testToMaxSingCntAndMaxDVDCnt();
        testToMaxSingCntAndMaxDVDCntAndMaxDVDTimes();
        testToMaxSingCntAndMinDVDCnt();
        testToMaxSingCntAndMinDVDCntAndMaxDVDTimes();
        testToMinSingCnt();
        testToMinSingCntAndMaxDVDTimes();
    }
    
    main();
}

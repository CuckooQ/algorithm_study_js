/**
 * Title: Last Recently Used (카카오 캐시 문제 변형) 
 * Content: 캐시 메모리는 CPU와 RAM사이의 고속 임시 메모리로서, CPU가 처리할 작업을 저장해 놓았다가 필요할 때 바로 사용해서 처리 속도를 높이는 장치이다.
 *          캐시 메모리는 워낙 비싸고 용량이 작아 효율적으로 사용해야 한다. 철수의 컴퓨터는 캐시 메모리 사용 규칙이 LRU알고리즘을 따른다.
 *          LRU 알고리즘은 Least Recently Used의 약자로서, 직역하면 가장 최근에 사용되지 않은 것 정도의 의미를 가지고 있다.
 *          캐시에서 작업을 제거할 때, 가장 오랫동안 사용하지 않은 것을 제거하는 알고리즘이다.
 *          만약 캐시의 사이즈가 5이고 작업이 [2, 3, 1, 6, 7]순으로 저장되어 있다면, (맨 앞이 가장 최근에 쓰인 작업이고 맨 뒤는 가장 오래 사용하지 않은 작업이다.)
 *          1) Cache Miss: 해야 할 작업이 캐시에 없는 상태로 위 상태에서 만약 새로운 작업인 5번 작업을 CPU가 사용한다면, 
 *                         Cache Miss가 되고 모든 작업이 뒤로 밀리고 5번 작업은 캐시의 맨 앞에 위치한다. 
 *                         [5, 2, 3, 1, 6] (7번 작업은 캐시에서 삭제 된다.)  
 *          2) Cache Hit: 해야 할 작업이 캐시에 있는 상태로 위 상태에서 만약 3번 작업을 CPU가 사용한다면,
 *                        Cache Hit가 되고 3번 앞에 있는 5번, 2번 작업은 한 칸 뒤로 밀리고, 3번이 맨 앞으로 위치하게 된다.
 *                        [3, 5, 2, 1, 6]
 *          캐시의 크기가 주어지고, 캐시가 비어있는 상태에서 N개의 작업을 CPU가 차례대로 처리한다면, 
 *          N개의 작업을 처리한 후 캐시 메모리의 상태를 가장 최근 사용된 작업부터 차례대로 출력하기.
 * Input Condition: 첫 번째 줄에 캐시의 크기인 S(3<=S<=10)와 작업의 개수 N(5<=N<=1,000)이 입력된다.
 *                  두 번째 줄에 N개의 작업 번호가 처리순으로 주어진다. 
 *                  작업 번호는 1~100이다.
 * Output Condition: 마지막 작업 후 캐시 메모리의 상태를 가장 최근 사용된 작업부터 차례로 출력한다.
 * Input Example: 5 9 
 *                1 2 3 2 6 2 3 5 7
 * Output Example: 7 5 3 2 6
 */

{
    const MAX_CACHE_SIZE = 10;
    const MIN_CACHE_SIZE = 3;
    const MAX_WORK_COUNT = 1000;
    const MIN_WORK_COUNT = 5;
    const MAX_WORK_ID = 100;

    const STATUS = {
        CACHE_HIT: "CACHE_HIT",
        CACHE_MISS: "CACHE_MISS"
    }

    class CacheMemory {
        #stack;
        #size;

        constructor(size) {
            this.stack = new Array();
            this.size = size;
        }

        isExist(work) {
            const stackIdx = this.getIdx(work);
            return stackIdx !== -1;
        }

        getIdx(work) {
            return this.stack.indexOf(work);
        }

        isCacheHit(work) {
            return this.isExist(work);
        }

        getStatus(work) {
            const isCacheHit = this.isCacheHit(work);
            return isCacheHit ? STATUS.CACHE_HIT : STATUS.CACHE_MISS;
        }

        insert(work) {
            const status = this.getStatus(work);
            switch(status) {
                case STATUS.CACHE_HIT: 
                    this.stack.splice(this.getIdx(work));
                    this.stack.unshift(work);
                    break;
                case STATUS.CACHE_MISS:
                    if(this.stack.length + 1 > this.size) {
                        this.stack.pop();
                    }
                    this.stack.unshift(work);
                    break;
                default:
            }
        }
    }

    function getRecentCacheMemory(cacheSize, works) {
        const cacheMemory = new CacheMemory(cacheSize);
        works.forEach((work) => {
            cacheMemory.insert(work);
        });

        return cacheMemory.stack;
    }

    function solution(cacheSize, works){
        const recentCacheMemory = getRecentCacheMemory(cacheSize, works);
        const answer = recentCacheMemory.join(" ");
        return answer;
    }

    function testToMaxCacheSizeAndMaxWorkCount() {
        const testNum = 1;
        const inputCacheSize = MAX_CACHE_SIZE;
        const inputWorks = [];
        for(let i=1; i<=MAX_WORK_COUNT; i++) {
            const workId = i % MAX_WORK_ID === 0 ? MAX_WORK_ID : i % MAX_WORK_ID;
            inputWorks.push(workId);
        }
        const expectResult = Array.from(inputWorks).reverse().slice(0, MAX_CACHE_SIZE).join(" ");
        const testFunction = solution;
        const condition = (testFunction(inputCacheSize, inputWorks) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToMaxCacheSizeAndMinWorkCount() {
        const testNum = 2;
        const inputCacheSize = MAX_CACHE_SIZE;
        const inputWorks = [];
        for(let i=1; i<=MIN_WORK_COUNT; i++) {
            const workId = i % MAX_WORK_ID === 0 ? MAX_WORK_ID : i % MAX_WORK_ID;
            inputWorks.push(workId);
        }
        const expectResult = Array.from(inputWorks).reverse().join(" ");
        const testFunction = solution;
        const condition = (testFunction(inputCacheSize, inputWorks) === expectResult);    
        validateTestResult(testNum, condition);
    }
    /*
    function testToMinCacheSizeAndMaxWorkCount() {
        const testNum = 3;
        const inputCacheSize = MIN_CACHE_SIZE;
        const inputWorks = [];
        for(let i=1; i<=MAX_WORK_COUNT; i++) {
            const workId = i % MAX_WORK_ID === 0 ? MAX_WORK_ID : i % MAX_WORK_ID;
            inputWorks.push(workId);
        }
        const expectResult = ?;
        const testFunction = solution;
        const condition = (testFunction(inputCacheSize, inputWorks) === expectResult);    
        validateTestResult(testNum, condition);
    }
    */
    function testToMinCacheSizeAndMinWorkCount() {
        const testNum = 4;
        const inputCacheSize = MIN_CACHE_SIZE;
        const inputWorks = [1, 2, 3, 4, 5];
        const expectResult = [5, 4, 3].join(" ");
        const testFunction = solution;
        const condition = (testFunction(inputCacheSize, inputWorks) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function testToAllSameWork() {
        const testNum = 5;
        const inputCacheSize = MIN_CACHE_SIZE;
        const inputWorks = Array.from({length: 10}, () => 1);
        const expectResult = "1";
        const testFunction = solution;
        const condition = (testFunction(inputCacheSize, inputWorks) === expectResult);    
        validateTestResult(testNum, condition);
    }

    function main() {
        const inputCacheSize = 5;
        const inputWorks = [1, 2, 3, 2, 6, 2, 3, 5, 7];
        const output = this.solution(inputCacheSize, inputWorks);
        
        console.log("S7P5\n");
        // test();
        console.log(`Input: ${inputCacheSize}\n ${inputWorks.join(" ")}`);
        console.log(`Output: ${output}\n`);
    }
    
    function test() {
        testToMaxCacheSizeAndMaxWorkCount();
        testToMaxCacheSizeAndMinWorkCount();
        // testToMinCacheSizeAndMaxWorkCount();
        testToMinCacheSizeAndMinWorkCount();
        testToAllSameWork();
    }
    
    main();
}

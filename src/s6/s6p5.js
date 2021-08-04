/**
 * Title: 쇠막대기
 * Content: 여러 개의 쇠막대기를 레이저로 절단하려고 한다. 
 *          효율적인 작업을 위해서, 쇠막대기를 아래에서 위로 겹쳐 놓고 레이저를 위에서 수직으로 발사하여 쇠막대기를 자른다.
 *          쇠막대기와 레이저의 배치는 다음 조건을 만족한다.
 *          쇠막대기는 자신보다 긴 쇠막대기 위에만 놓일 수 있다. 
 *          쇠막대기를 다른 쇠막대기 위에 놓는 경우, 완전히 포함되도록 놓되, 끝점은 겹치지 않도록 놓는다.
 *          각 쇠막대기를 자르는 레이저는 적어도 하나 존재한다.
 *          레이저는 어떤 쇠막대기의 양 끝점과도 겹치지 않는다.
 *          이러한 레이저와 쇠막대기의 배치는 다음과 같이 괄호를 이용하여 왼쪽부터 순서대로 표현할 수 있다.
 *          1. 레이저는 여는 괄호와 닫는 괄호의 인접한 쌍 '() '으로 표현된다. 또한, 모든 '() '는 반드시 레이저를 표현한다.
 *          2. 쇠막대기의 왼쪽 끝은 여는 괄호 '('로, 오른쪽 끝은 닫힌 괄호 ') '로 표현된다.
 *          쇠 막대기와 레이저의 배치를 나타내는 괄호 표현이 주어졌을 때, 잘려진 쇠막대기 조각의 총 개수를 구하기.
 * Input Condition: 한 줄에 쇠막대기와 레이저의 배치를 나타내는 괄호 표현이 공백없이 주어진다. 
 *                  괄호 문자의 개수는 최대 100,000이다. 
 * Output Condition: 잘려진 조각의 총 개수를 나타내는 정수를 한 줄에 출력한다.
 * Input Example: ()(((()())(())()))(())
 * Output Example:  17
 */
// *다시 풀기
// *풀이와는 매우 다르게 풀었다. 풀이가 훨씬 간단하기는 한대... 내가 푼 방법이 더 선호된다.
// *풀이 방법도 알아두자.

 {
    const LEFT_PARENTHESIS = "(";
    const RIGHT_PARENTHESIS = ")";
    const RAZOR = "|";

    class Bar {
        razorCount;
        slicedBarCount;
        children;

        constructor() {
            this.initBar();
        }

        addRazorCount(razorCount) {
            this.razorCount+=razorCount;
        }

        calcSlicedBarCount() {
            this.slicedBarCount = this.razorCount + 1;
            this.children.forEach((child) => {
                this.slicedBarCount += child.calcSlicedBarCount(); 
            })

            return this.slicedBarCount;
        }

        addChild(child) {
            this.razorCount += child.razorCount;
            this.children.push(child);
        }

        initBar() {
            this.razorCount = 0;
            this.slicedBarCount = 0;
            this.children = new Array();
        }
    }

    function isRazor(info, prevInfo) {
        return info === RIGHT_PARENTHESIS && 
                prevInfo === LEFT_PARENTHESIS;
    }

    function isBarStart(info, prevInfo) {
        return info === LEFT_PARENTHESIS && 
                prevInfo === LEFT_PARENTHESIS;
    }

    function isBarEnd(info, prevInfo) {
        return info === RIGHT_PARENTHESIS && 
                prevInfo === RIGHT_PARENTHESIS;
    }

    function getSlicedBarCount(barInfo) {
        let slicedBarCount = 0;
        const tempStack = new Array();
        const resultStack = new Array();
        let prevInfo = "";
        barInfo.split("").forEach((info) => {
            if(info === LEFT_PARENTHESIS) {
                if (isBarStart(info, prevInfo)) {
                    const bar = new Bar();
                    tempStack.push(bar);
                }
                prevInfo = LEFT_PARENTHESIS;
            } else {
                if (isRazor(info, prevInfo)) {
                    tempStack.push(RAZOR);
                } else if (isBarEnd(info, prevInfo)) {
                    let razorCount = 0;
                    while(tempStack.length > 0) {
                        let popped = tempStack.pop();
                        if (popped === RAZOR) {
                            razorCount++;
                            continue;
                        }

                        const bar = popped;
                        bar.addRazorCount(razorCount);
                        
                        popped = tempStack.pop();
                        if (popped instanceof Bar) {
                            popped.addChild(bar);
                            tempStack.push(popped);
                        } else {
                            resultStack.push(bar);
                        }  
                        
                        break;
                    }
                }

                prevInfo = RIGHT_PARENTHESIS;
            }
        });
        
        resultStack.forEach((bar) => {
            slicedBarCount += bar.calcSlicedBarCount();
        });
        
        return slicedBarCount;
    }

    function solution(barInfo) {
        const answer = getSlicedBarCount(barInfo);
        return answer;
    }

    function main() {
        const input = "()(((()())(())()))(())";
        const output = this.solution(input);
        
        console.log("S6P5\n");
        console.log(`Input: ${input} `);
        console.log(`Output: ${output}\n`);
    }
    
    main();
}

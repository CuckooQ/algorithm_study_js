/**
 * Title: [3차] 압축
 * Content: 신입사원 어피치는 카카오톡으로 전송되는 메시지를 압축하여 전송 효율을 높이는 업무를 맡게 되었다.
 *          메시지를 압축하더라도 전달되는 정보가 바뀌어서는 안 되므로, 압축 전의 정보를 완벽하게 복원 가능한 무손실 압축 알고리즘을 구현하기로 했다.
 *          어피치는 여러 압축 알고리즘 중에서 성능이 좋고 구현이 간단한 LZW(Lempel–Ziv–Welch) 압축을 구현하기로 했다.
 *          LZW 압축은 1983년 발표된 알고리즘으로, 이미지 파일 포맷인 GIF 등 다양한 응용에서 사용되었다.
 *          LZW 압축은 다음 과정을 거친다.
 *          1. 길이가 1인 모든 단어를 포함하도록 사전을 초기화한다.
 *          2. 사전에서 현재 입력과 일치하는 가장 긴 문자열 w를 찾는다.
 *          3. w에 해당하는 사전의 색인 번호를 출력하고, 입력에서 w를 제거한다.
 *          4. 입력에서 처리되지 않은 다음 글자가 남아있다면(c), w+c에 해당하는 단어를 사전에 등록한다.
 *          5. 단계 2로 돌아간다.
 *          압축 알고리즘이 영문 대문자만 처리한다고 할 때, 사전은 다음과 같이 초기화된다.
 *          사전의 색인 번호는 정수값으로 주어지며, 1부터 시작한다고 하자.
 *          색인 번호	1	2	3	...	24	25	26
 *          단어	    A	B	C	...	X	  Y	  Z
 *          예를 들어 입력으로 KAKAO가 들어온다고 하자.
 *          1. 현재 사전에는 KAKAO의 첫 글자 K는 등록되어 있으나, 두 번째 글자까지인 KA는 없으므로, 첫 글자 K에 해당하는 색인 번호 11을 출력하고,
 *             다음 글자인 A를 포함한 KA를 사전에 27 번째로 등록한다.
 *          2. 두 번째 글자 A는 사전에 있으나, 세 번째 글자까지인 AK는 사전에 없으므로, A의 색인 번호 1을 출력하고, AK를 사전에 28 번째로 등록한다.
 *          3. 세 번째 글자에서 시작하는 KA가 사전에 있으므로, KA에 해당하는 색인 번호 27을 출력하고, 다음 글자 O를 포함한 KAO를 29 번째로 등록한다.
 *          4. 마지막으로 처리되지 않은 글자 O에 해당하는 색인 번호 15를 출력한다.
 *          현재 입력(w)	다음 글자(c)	출력	사전 추가(w+c)
 *          K	            A	           11	   27: KA
 *          A	            K	           1	   28: AK
 *          KA            	           O	   27	29: KAO
 *          O	            	           15
 *          이 과정을 거쳐 다섯 글자의 문장 KAKAO가 4개의 색인 번호 [11, 1, 27, 15]로 압축된다.
 *          입력으로 TOBEORNOTTOBEORTOBEORNOT가 들어오면 다음과 같이 압축이 진행된다.
 *          현재 입력(w)	다음 글자(c)	출력	사전 추가(w+c)
 *          T	            O	           20	   27: TO
 *          O	            B	           15	   28: OB
 *          B	            E	           2	   29: BE
 *          E	            O	           5	   30: EO
 *          O	            R	           15	   31: OR
 *          R	            N	           18	   32: RN
 *          N	            O	           14	   33: NO
 *          O	            T	           15	   34: OT
 *          T	            T	           20	   35: TT
 *          TO	          B	           27	   36: TOB
 *          BE	          O	           29	   37: BEO
 *          OR	          T	           31	   38: ORT
 *          TOB	          E	           36	   39: TOBE
 *          EO	          R	           30	   40: EOR
 *          RN	          O	           32	   41: RNO
 *          OT	          	           34
 * Input Condition: 입력으로 영문 대문자로만 이뤄진 문자열 msg가 주어진다. msg의 길이는 1 글자 이상, 1000 글자 이하이다.
 * Output Condition: 주어진 문자열을 압축한 후의 사전 색인 번호를 배열로 출력하라.
 * Input Example: KAKAO
 * Output Example: [11, 1, 27, 15]
 */
// Expected: 08:53 - 09:33
// Actual: 08:53 - 09:41

{
  function solution(msg) {
    const answer = [];

    const dict = Array.from({ length: 26 }, (_, idx) =>
      String.fromCharCode(65 + idx)
    );

    while (msg.length) {
      let len = msg.length;
      let befWord = "";
      let word = "";
      let idx = -1;
      do {
        befWord = word;
        word = msg.substr(0, len);
        idx = dict.indexOf(word);
        idx !== -1 && answer.push(idx + 1);
        len--;
      } while (word && idx === -1);

      befWord && dict.push(befWord);
      msg = msg.slice(len + 1);
    }

    return answer;
  }

  function testToExample1() {
    const testNum = 1;
    const input = "TOBEORNOTTOBEORTOBEORNOT";
    const expectResult = [
      20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34,
    ];
    const testFunction = solution;
    const condition = arraysEqual(testFunction(input), expectResult);
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const input = "ABABABABABABABAB";
    const expectResult = [1, 2, 27, 29, 28, 31, 30];
    const testFunction = solution;
    const condition = arraysEqual(testFunction(input), expectResult);
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P118\n");

    const input = "KAKAO";
    const output = this.solution(input);

    // test();
    console.log(`Input: ${input} `);
    console.log(`Output: ${output.join(" ")}\n`);
  }

  function test() {
    testToExample1();
    testToExample2();
  }

  main();
}

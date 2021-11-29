/**
 * Title: [3차] 방금그곡
 * Content: 라디오를 자주 듣는 네오는 라디오에서 방금 나왔던 음악이 무슨 음악인지 궁금해질 때가 많다.
 *          그럴 때 네오는 다음 포털의 '방금그곡' 서비스를 이용하곤 한다. 방금그곡에서는 TV, 라디오 등에서 나온 음악에 관해 제목 등의 정보를 제공하는 서비스이다.
 *          네오는 자신이 기억한 멜로디를 가지고 방금그곡을 이용해 음악을 찾는다.
 *          그런데 라디오 방송에서는 한 음악을 반복해서 재생할 때도 있어서 네오가 기억하고 있는 멜로디는 음악 끝부분과 처음 부분이 이어서 재생된 멜로디일 수도 있다.
 *          반대로, 한 음악을 중간에 끊을 경우 원본 음악에는 네오가 기억한 멜로디가 들어있다 해도 그 곡이 네오가 들은 곡이 아닐 수도 있다.
 *          그렇기 때문에 네오는 기억한 멜로디를 재생 시간과 제공된 악보를 직접 보면서 비교하려고 한다.
 *          다음과 같은 가정을 할 때 네오가 찾으려는 음악의 제목을 구하여라.
 *           * 방금그곡 서비스에서는 음악 제목, 재생이 시작되고 끝난 시각, 악보를 제공한다.
 *           * 네오가 기억한 멜로디와 악보에 사용되는 음은 C, C#, D, D#, E, F, F#, G, G#, A, A#, B 12개이다.
 *           * 각 음은 1분에 1개씩 재생된다. 음악은 반드시 처음부터 재생되며 음악 길이보다 재생된 시간이 길 때는 음악이 끊김 없이 처음부터 반복해서 재생된다.
 *             음악 길이보다 재생된 시간이 짧을 때는 처음부터 재생 시간만큼만 재생된다.
 *           * 음악이 00:00를 넘겨서까지 재생되는 일은 없다.
 *           * 조건이 일치하는 음악이 여러 개일 때에는 라디오에서 재생된 시간이 제일 긴 음악 제목을 반환한다.
 *             재생된 시간도 같을 경우 먼저 입력된 음악 제목을 반환한다.
 *           * 조건이 일치하는 음악이 없을 때에는 “(None)”을 반환한다.
 * Input Condition: 입력으로 네오가 기억한 멜로디를 담은 문자열 m과 방송된 곡의 정보를 담고 있는 배열 musicinfos가 주어진다.
 *                   * m은 음 1개 이상 1439개 이하로 구성되어 있다.
 *                   * musicinfos는 100개 이하의 곡 정보를 담고 있는 배열로,
 *                     각각의 곡 정보는 음악이 시작한 시각, 끝난 시각, 음악 제목, 악보 정보가 ','로 구분된 문자열이다.
 *                   * 음악의 시작 시각과 끝난 시각은 24시간 HH:MM 형식이다.
 *                   * 음악 제목은 ',' 이외의 출력 가능한 문자로 표현된 길이 1 이상 64 이하의 문자열이다.
 *                   * 악보 정보는 음 1개 이상 1439개 이하로 구성되어 있다.
 * Output Condition: 조건과 일치하는 음악 제목을 출력한다.
 * Input Example: m = "ABCDEFG"
 *                musicinfos = ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"]
 * Output Example: "HELLO"
 */
// Expected: 08:56 - 09:36
// Actual: 08:56 - 10:43

{
  const NONE = "(None)";
  const SHARP = "#";
  const MUSIC_IDX = {
    TITLE: 0,
    LEN: 1,
  };

  // 분 단위의 플레이타임 반환
  function getPlayTime(startTime, endTime) {
    const [startHour, startMin] = startTime.split(":");
    const [endHour, endMin] = endTime.split(":");
    const start = new Date();
    const end = new Date();
    start.setHours(startHour);
    start.setMinutes(startMin);
    end.setHours(endHour);
    end.setMinutes(endMin);
    const diff = end.getTime() - start.getTime();
    return diff / (60 * 1000);
  }

  /*
   * 음들로 구성된 문자열에서 음의 배열 반환
   * #이 붙은 음은 소문자로 변환
   */
  function getNotes(notesStr) {
    const noteArr = [];
    const splitted = notesStr.split(SHARP);
    splitted.forEach((splittedNotes, idx) => {
      const notes = splittedNotes.split("");
      if (idx !== splitted.length - 1) {
        notes[notes.length - 1] = notes[notes.length - 1].toLowerCase();
      }
      noteArr.push(...notes);
    });
    return noteArr;
  }

  function solution(m, musicInfos) {
    let answer;

    // m으로 음으로 구성된 배열을 추출
    const mNotes = getNotes(m);

    // musicInfos에서 m을 포함하는 음악의 타이틀과 길이로 구성된 배열 추출
    const matchedMusics = [];
    musicInfos.forEach((info) => {
      const [startTime, endTime, title, sounds] = info.split(",");
      const playMin = getPlayTime(startTime, endTime);

      let allNotes = getNotes(sounds).slice(0, playMin);
      const notesLen = allNotes.length;
      if (notesLen < playMin) {
        let i = 0;
        while (allNotes.length !== playMin) {
          allNotes.push(allNotes[i]);
          i++;
        }
      }
      allNotes.join("").includes(mNotes.join("")) &&
        matchedMusics.push([title, playMin]);
    });

    // 음악의 길이의 내림차순으로 정렬하고 가장 첫 번째 요소 추출
    matchedMusics.sort((a, b) => b[MUSIC_IDX.LEN] - a[MUSIC_IDX.LEN]);
    answer =
      matchedMusics.length !== 0 ? matchedMusics[0][MUSIC_IDX.TITLE] : NONE;

    return answer;
  }

  function testToExample1() {
    const testNum = 1;
    const inputM = "CC#BCC#BCC#BCC#B";
    const inputMusicInfos = [
      "03:00,03:30,FOO,CC#B",
      "04:00,04:08,BAR,CC#BCC#BCC#B",
    ];
    const expectResult = "FOO";
    const testFunction = solution;
    const condition = testFunction(inputM, inputMusicInfos) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const inputM = "ABC";
    const inputMusicInfos = [
      "12:00,12:14,HELLO,C#DEFGAB",
      "13:00,13:05,WORLD,ABCDEF",
    ];
    const expectResult = "WORLD";
    const testFunction = solution;
    const condition = testFunction(inputM, inputMusicInfos) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample3() {
    const testNum = 3;
    const inputM = "ABC";
    const inputMusicInfos = [
      "13:00,13:05,WORLD3,ABCDEF",
      "13:00,13:05,WORLD2,ABCDEF",
      "13:00,13:05,WORLD1,ABCDEF",
    ];
    const expectResult = "WORLD3";
    const testFunction = solution;
    const condition = testFunction(inputM, inputMusicInfos) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample4() {
    const testNum = 4;
    const inputM = "ABC";
    const inputMusicInfos = [
      "13:00,13:05,WORLD3,ABCDEF",
      "13:00,13:12,WORLD2,ABCDEF",
      "13:00,13:05,WORLD1,ABCDEF",
    ];
    const expectResult = "WORLD2";
    const testFunction = solution;
    const condition = testFunction(inputM, inputMusicInfos) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample5() {
    const testNum = 5;
    const inputM = "ZZZ";
    const inputMusicInfos = [
      "13:00,13:05,WORLD3,ABCDEF",
      "13:00,13:05,WORLD2,ABCDEF",
      "13:00,13:05,WORLD1,ABCDEF",
    ];
    const expectResult = "(None)";
    const testFunction = solution;
    const condition = testFunction(inputM, inputMusicInfos) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample6() {
    const testNum = 6;
    const inputM = "ABC";
    const inputMusicInfos = ["00:00,00:05,HI,ABC#ABC"];
    const expectResult = "(None)";
    const testFunction = solution;
    const condition = testFunction(inputM, inputMusicInfos) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample7() {
    const testNum = 7;
    const inputM = "ABC";
    const inputMusicInfos = ["00:00,00:06,HI,ABC#ABC"];
    const expectResult = "HI";
    const testFunction = solution;
    const condition = testFunction(inputM, inputMusicInfos) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P116\n");

    const inputM = "ABCDEFG";
    const inputMusicInfos = [
      "12:00,12:14,HELLO,CDEFGAB",
      "13:00,13:05,WORLD,ABCDEF",
    ];
    const output = this.solution(inputM, inputMusicInfos);

    // test();
    console.log(`Input: ${inputM}\n${inputMusicInfos.join("\n")} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample1();
    testToExample2();
    testToExample3();
    testToExample4();
    testToExample5();
    testToExample6();
    testToExample7();
  }

  main();
}

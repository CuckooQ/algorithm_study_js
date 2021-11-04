/**
 * Title: [1차] 셔틀버스
 * Content: 카카오에서는 무료 셔틀버스를 운행하기 때문에 판교역에서 편하게 사무실로 올 수 있다.
 *          카카오의 직원은 서로를 '크루'라고 부르는데, 아침마다 많은 크루들이 이 셔틀을 이용하여 출근한다.
 *          이 문제에서는 편의를 위해 셔틀은 다음과 같은 규칙으로 운행한다고 가정하자.
 *          셔틀은 09:00부터 총 n회 t분 간격으로 역에 도착하며, 하나의 셔틀에는 최대 m명의 승객이 탈 수 있다.
 *          셔틀은 도착했을 때 도착한 순간에 대기열에 선 크루까지 포함해서 대기 순서대로 태우고 바로 출발한다.
 *          예를 들어 09:00에 도착한 셔틀은 자리가 있다면 09:00에 줄을 선 크루도 탈 수 있다.
 *          일찍 나와서 셔틀을 기다리는 것이 귀찮았던 콘은, 일주일간의 집요한 관찰 끝에 어떤 크루가 몇 시에 셔틀 대기열에 도착하는지 알아냈다.
 *          콘이 셔틀을 타고 사무실로 갈 수 있는 도착 시각 중 제일 늦은 시각을 구하여라.
 *          단, 콘은 게으르기 때문에 같은 시각에 도착한 크루 중 대기열에서 제일 뒤에 선다.
 *          또한, 모든 크루는 잠을 자야 하므로 23:59에 집에 돌아간다.
 *          따라서 어떤 크루도 다음날 셔틀을 타는 일은 없다.
 * Input Condition: 셔틀 운행 횟수 n,
 *                  셔틀 운행 간격 t,
 *                  한 셔틀에 탈 수 있는 최대 크루 수 m,
 *                  크루가 대기열에 도착하는 시각을 모은 배열 timetable이 입력으로 주어진다.
 *                  0 ＜ n ≦ 10
 *                  0 ＜ t ≦ 60
 *                  0 ＜ m ≦ 45
 *                  timetable은 최소 길이 1이고 최대 길이 2000인 배열로, 하루 동안 크루가 대기열에 도착하는 시각이 HH:MM 형식으로 이루어져 있다.
 *                  크루의 도착 시각 HH:MM은 00:01에서 23:59 사이이다.
 * Output Condition: 콘이 무사히 셔틀을 타고 사무실로 갈 수 있는 제일 늦은 도착 시각을 출력한다.
 *                   도착 시각은 HH:MM 형식이며, 00:00에서 23:59 사이의 값이 될 수 있다.
 * Input Example: n = 1
 *                t = 1
 *                m = 5
 *                titmetable = 	["08:00", "08:01", "08:02", "08:03"]
 * Output Example: "09:00"
 */
// Expected: 12:20 - 13:00
// Actual: 12:20 - 14:12
// *다시 풀기
// *오래 걸렸다.
// *Simulation

{
  const FIRST_ARRIVAL_TIME = "09:00";

  class Time {
    constructor(timeStr = FIRST_ARRIVAL_TIME) {
      this.hour = Number(timeStr.split(":")[0]);
      this.min = Number(timeStr.split(":")[1]);
    }

    isComebackTime() {
      return this.hour === 23 && this.min === 59;
    }

    getTimeStr(time = this) {
      const hourStr = time.hour.toString().padStart(2, "0");
      const minStr = time.min.toString().padStart(2, "0");
      return `${hourStr}:${minStr}`;
    }

    getBeforeOneMin(time = this) {
      if (time.min === 0) {
        time.hour = time.hour - 1;
        time.min = 59;
      } else {
        time.min -= 1;
      }

      return time;
    }

    getAfterMin(min) {
      const afterTime = new Time();
      afterTime.hour = this.hour;
      afterTime.min = this.min + min;
      if (afterTime.min >= 60) {
        afterTime.min -= 60;
        afterTime.hour++;
      }
      if (afterTime.hour === 24) {
        afterTime.hour = 0;
      }

      return afterTime;
    }

    getBeforeTimeStr() {
      let time = { ...this };
      time = this.getBeforeOneMin(time);
      return this.getTimeStr(time);
    }

    isFaterOrEqualThan(time) {
      if (this.hour > time.hour) {
        return false;
      } else if (this.hour === time.hour) {
        return this.min <= time.min;
      } else {
        return true;
      }
    }
  }

  function getTimes(timetable, lastArrivalTime) {
    const times = [];

    timetable.forEach((timeStr) => {
      const time = new Time(timeStr);
      !time.isComebackTime() &&
        time.isFaterOrEqualThan(lastArrivalTime) &&
        times.push(time);
    });
    times.sort((a, b) => {
      if (a.hour > b.hour) {
        return 1;
      } else if (a.hour === b.hour) {
        return Number(a.min) - Number(b.min);
      } else {
        return -1;
      }
    });

    return times;
  }

  function getArrivalTimes(n, t) {
    const arrivalTimes = [];
    let arrivalTime;
    for (let i = 0; i < n; i++) {
      if (!arrivalTime) {
        arrivalTime = new Time(FIRST_ARRIVAL_TIME);
      } else {
        arrivalTime = arrivalTime.getAfterMin(t);
      }
      arrivalTimes.push(arrivalTime);
    }

    return arrivalTimes;
  }

  function solution(n, t, m, timetable) {
    let answer;

    const arrivalTimes = getArrivalTimes(n, t);
    const times = getTimes(timetable, arrivalTimes[arrivalTimes.length - 1]);

    if (times.length === 0) {
      // 버스에 탈 크루가 없는 경우 가장 늦은 시간의 버스를 탄다.
      answer = arrivalTimes[arrivalTimes.length - 1].getTimeStr();
    } else {
      // 버스에 탈 크루가 있는 경우 버스 도착 시간마다 크루들을 태운다.
      for (let i = 0; i < arrivalTimes.length; i++) {
        let emptyCnt = m;
        let cnt = times.length;
        while (cnt !== 0) {
          cnt--;
          const time = times.shift();
          if (time.isFaterOrEqualThan(arrivalTimes[i])) {
            // 도착한 버스에 탈 수 있는 크루인 경우 일단 탄다고 가정한다.
            emptyCnt--;
            // 도착한 버스가 만원이 된 경우
            if (emptyCnt === 0) {
              // 다음 도착 버스가 더이상 없다면
              if (!arrivalTimes[i + 1]) {
                // 내가 그 버스에 탄다.
                answer = time.getBeforeTimeStr();
              }
              break;
            }
          } else {
            // 도착한 버스에 탈 수 없는 크루인 경우 다음 버스 도착 시간을 생각한다. (오름차순 정렬했기 때문에 이후의 크루도 탈 수 없다)
            times.unshift(time);
            break;
          }
        }
      }

      if (!answer) {
        // 모든 크루가 타도 내가 탈 버스가 남는 경우 가장 늦은 시간의 버스를 탄다.
        answer = arrivalTimes[arrivalTimes.length - 1].getTimeStr();
      }
    }

    return answer;
  }

  function testToExample1() {
    const testNum = 1;
    const inputN = 2;
    const inputT = 10;
    const inputM = 2;
    const inputTimetable = ["09:10", "09:09", "08:00"];
    const expectResult = "09:09";
    const testFunction = solution;
    const condition =
      testFunction(inputN, inputT, inputM, inputTimetable) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const inputN = 2;
    const inputT = 1;
    const inputM = 2;
    const inputTimetable = ["09:00", "09:00", "09:00", "09:00"];
    const expectResult = "08:59";
    const testFunction = solution;
    const condition =
      testFunction(inputN, inputT, inputM, inputTimetable) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample3() {
    const testNum = 3;
    const inputN = 1;
    const inputT = 1;
    const inputM = 5;
    const inputTimetable = ["00:01", "00:01", "00:01", "00:01", "00:01"];
    const expectResult = "00:00";
    const testFunction = solution;
    const condition =
      testFunction(inputN, inputT, inputM, inputTimetable) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample4() {
    const testNum = 4;
    const inputN = 1;
    const inputT = 1;
    const inputM = 1;
    const inputTimetable = ["23:59"];
    const expectResult = "09:00";
    const testFunction = solution;
    const condition =
      testFunction(inputN, inputT, inputM, inputTimetable) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample5() {
    const testNum = 5;
    const inputN = 10;
    const inputT = 60;
    const inputM = 45;
    const inputTimetable = [
      "23:59",
      "23:59",
      "23:59",
      "23:59",
      "23:59",
      "23:59",
      "23:59",
      "23:59",
      "23:59",
      "23:59",
      "23:59",
      "23:59",
      "23:59",
      "23:59",
      "23:59",
      "23:59",
    ];
    const expectResult = "18:00";
    const testFunction = solution;
    const condition =
      testFunction(inputN, inputT, inputM, inputTimetable) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P52\n");

    const inputN = 1;
    const inputT = 1;
    const inputM = 5;
    const inputTimetable = ["08:00", "08:01", "08:02", "08:03"];
    const output = this.solution(inputN, inputT, inputM, inputTimetable);

    // test();
    console.log(`Input: ${inputN} ${inputT} ${inputM}\n${inputTimetable}`);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample1();
    testToExample2();
    testToExample3();
    testToExample4();
    testToExample5();
  }

  main();
}

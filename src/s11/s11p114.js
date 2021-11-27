/**
 * Title: 스킬트리
 * Content: 선행 스킬이란 어떤 스킬을 배우기 전에 먼저 배워야 하는 스킬을 뜻합니다.
 *          예를 들어 선행 스킬 순서가 스파크 → 라이트닝 볼트 → 썬더일때, 썬더를 배우려면 먼저 라이트닝 볼트를 배워야 하고,
 *          라이트닝 볼트를 배우려면 먼저 스파크를 배워야 합니다.
 *          위 순서에 없는 다른 스킬(힐링 등)은 순서에 상관없이 배울 수 있습니다.
 *          따라서 스파크 → 힐링 → 라이트닝 볼트 → 썬더와 같은 스킬트리는 가능하지만,
 *          썬더 → 스파크나 라이트닝 볼트 → 스파크 → 힐링 → 썬더와 같은 스킬트리는 불가능합니다.
 *          선행 스킬 순서 skill과 유저들이 만든 스킬트리1를 담은 배열 skill_trees가 매개변수로 주어질 때,
 *          가능한 스킬트리 개수를 return 하는 solution 함수를 작성해주세요.
 * Input Condition: * 스킬은 알파벳 대문자로 표기하며, 모든 문자열은 알파벳 대문자로만 이루어져 있습니다.
 *                  * 스킬 순서와 스킬트리는 문자열로 표기합니다.
 *                    예를 들어, C → B → D 라면 "CBD"로 표기합니다
 *                  * 선행 스킬 순서 skill의 길이는 1 이상 26 이하이며, 스킬은 중복해 주어지지 않습니다.
 *                  * skill_trees는 길이 1 이상 20 이하인 배열입니다.
 *                  * skill_trees의 원소는 스킬을 나타내는 문자열입니다.
 *                    skill_trees의 원소는 길이가 2 이상 26 이하인 문자열이며, 스킬이 중복해 주어지지 않습니다.
 * Output Condition: None
 * Input Example: skill = "CBD"
 *                skill_trees = ["BACDE", "CBADF", "AECB", "BDA"]
 * Output Example: 2
 */
// Expected: 09:30 - 10:10
// Actual: 09:30 - 10:00
// 정규식 복습을 위해 다시 풀기
// 변수를 정규식으로 사용할 경우에는 정규식 객체로 생성하면 된다.

{
  // 정규식을 이용한 다른 사람 풀이
  function solution(skill, skillTrees) {
    // 스킬의 문자가 아닌 문자들과 일치하는 정규식
    const regex = new RegExp(`[^${skill}]`, "g");

    // 스킬의 문자가 아닌 문자들을 모두 지우기
    const onlyReqSkillTrees = skillTrees.map((skillTree) =>
      skillTree.replace(regex, "")
    );

    // 스킬의 문자만 남은 스킬트리에서 남은 문자가 없거나 스킬의 문자와 똑같이 시작하는 스킬트리 찾기
    const rightSkillTrees = onlyReqSkillTrees.filter(
      (onlyReqSkills) => skill.startsWith(onlyReqSkills) || onlyReqSkills === ""
    );

    return rightSkillTrees.length;
  }

  /*
  function solution(skill, skillTrees) {
    let answer = skillTrees.length;

    const skillArr = [...skill].reverse();
    skillTrees.forEach((skillTree) => {
      const initBefIdx = skillTree.length;
      let befIdx = initBefIdx;
      for (let i = 0; i < skillArr.length; i++) {
        const idx = skillTree.indexOf(skillArr[i]);
        if (befIdx === initBefIdx && idx === -1) {
          continue;
        }

        if ((befIdx !== initBefIdx && idx === -1) || idx > befIdx) {
          answer--;
          break;
        }

        befIdx = idx;
      }
    });

    return answer;
  }
  */

  function main() {
    console.log("S11P114\n");

    const inputSkill = "CBD";
    const inputSkillTrees = ["BACDE", "CBADF", "AECB", "BDA"];
    const output = this.solution(inputSkill, inputSkillTrees);

    console.log(`Input: ${inputSkill}\n${inputSkillTrees.join("\n")} `);
    console.log(`Output: ${output}\n`);
  }

  main();
}

/**
 * Title: 오픈채팅방
 * Content: 카카오톡 오픈채팅방에서는 친구가 아닌 사람들과 대화를 할 수 있는데, 본래 닉네임이 아닌 가상의 닉네임을 사용하여 채팅방에 들어갈 수 있다.
 *          신입사원인 김크루는 카카오톡 오픈 채팅방을 개설한 사람을 위해, 다양한 사람들이 들어오고, 나가는 것을 지켜볼 수 있는 관리자창을 만들기로 했다.
 *          채팅방에 누군가 들어오면 다음 메시지가 출력된다.
 *          "[닉네임]님이 들어왔습니다."
 *          채팅방에서 누군가 나가면 다음 메시지가 출력된다.
 *          "[닉네임]님이 나갔습니다."
 *          채팅방에서 닉네임을 변경하는 방법은 다음과 같이 두 가지이다.
 *          1. 채팅방을 나간 후, 새로운 닉네임으로 다시 들어간다.
 *          2. 채팅방에서 닉네임을 변경한다.
 *          닉네임을 변경할 때는 기존에 채팅방에 출력되어 있던 메시지의 닉네임도 전부 변경된다.
 *          예를 들어, 채팅방에 "Muzi"와 "Prodo"라는 닉네임을 사용하는 사람이 순서대로 들어오면 채팅방에는 다음과 같이 메시지가 출력된다.
 *          "Muzi님이 들어왔습니다."
 *          "Prodo님이 들어왔습니다."
 *          채팅방에 있던 사람이 나가면 채팅방에는 다음과 같이 메시지가 남는다.
 *          "Muzi님이 들어왔습니다."
 *          "Prodo님이 들어왔습니다."
 *          "Muzi님이 나갔습니다."
 *          Muzi가 나간후 다시 들어올 때, Prodo 라는 닉네임으로 들어올 경우 기존에 채팅방에 남아있던 Muzi도 Prodo로 다음과 같이 변경된다.
 *          "Prodo님이 들어왔습니다."
 *          "Prodo님이 들어왔습니다."
 *          "Prodo님이 나갔습니다."
 *          "Prodo님이 들어왔습니다."
 *          채팅방은 중복 닉네임을 허용하기 때문에, 현재 채팅방에는 Prodo라는 닉네임을 사용하는 사람이 두 명이 있다.
 *          이제, 채팅방에 두 번째로 들어왔던 Prodo가 Ryan으로 닉네임을 변경하면 채팅방 메시지는 다음과 같이 변경된다.
 *          "Prodo님이 들어왔습니다."
 *          "Ryan님이 들어왔습니다."
 *          "Prodo님이 나갔습니다."
 *          "Prodo님이 들어왔습니다."
 *          채팅방에 들어오고 나가거나, 닉네임을 변경한 기록이 담긴 문자열 배열 record가 매개변수로 주어질 때, 모든 기록이 처리된 후, 최종적으로 방을 개설한 사람이 보게 되는 메시지를 문자열 배열 형태로 return 하도록 solution 함수를 완성하라.
 * Input Condition: record는 다음과 같은 문자열이 담긴 배열이며, 길이는 1 이상 100,000 이하이다.
 *                  다음은 record에 담긴 문자열에 대한 설명이다.
 *                  모든 유저는 [유저 아이디]로 구분한다.
 *                  [유저 아이디] 사용자가 [닉네임]으로 채팅방에 입장 - "Enter [유저 아이디] [닉네임]" (ex. "Enter uid1234 Muzi")
 *                  [유저 아이디] 사용자가 채팅방에서 퇴장 - "Leave [유저 아이디]" (ex. "Leave uid1234")
 *                  [유저 아이디] 사용자가 닉네임을 [닉네임]으로 변경 - "Change [유저 아이디] [닉네임]" (ex. "Change uid1234 Muzi")
 *                  첫 단어는 Enter, Leave, Change 중 하나이다.
 *                  각 단어는 공백으로 구분되어 있으며, 알파벳 대문자, 소문자, 숫자로만 이루어져있다.
 *                  유저 아이디와 닉네임은 알파벳 대문자, 소문자를 구별한다.
 *                  유저 아이디와 닉네임의 길이는 1 이상 10 이하이다.
 *                  채팅방에서 나간 유저가 닉네임을 변경하는 등 잘못 된 입력은 주어지지 않는다.
 * Output Condition: None
 * Input Example: ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]
 * Output Example: ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
 */
// Expected: 18:47 - 19:27
// Actual: 18:47 - 20:30
// *다시 풀기
// *시간 초과가 발생했을 때의 해결 방법에서 오래 걸렸다.

{
  const ENTER = "Enter";
  const LEAVE = "Leave";
  const CHANGE = "Change";
  const messageToEnter = (nickname) => {
    return `${nickname}님이 들어왔습니다.`;
  };
  const messageToLeave = (nickname) => {
    return `${nickname}님이 나갔습니다.`;
  };

  class MessageRecord {
    constructor() {
      this.commandRecord = [];
      this.users = new Users();
    }

    translateRecord = (record) => {
      record.forEach((recordMessage) => {
        const [command, id, nickname] = recordMessage.split(" ");

        switch (command) {
          case ENTER: {
            const user = this.users.getUser(id);
            if (user) {
              user.nickname = nickname;
            } else {
              this.users.setUser(id, nickname);
            }
            this.commandRecord.push(new CommandInfo(id, command));
            break;
          }
          case LEAVE: {
            this.commandRecord.push(new CommandInfo(id, command));
            break;
          }
          case CHANGE: {
            const user = this.users.getUser(id);
            user.changeNickname(nickname);
            break;
          }
          default:
        }
      });
    };

    getMessage = (commandInfo) => {
      let message = "";

      const { nickname } = this.users.getUser(commandInfo.id);

      switch (commandInfo.command) {
        case ENTER: {
          message = messageToEnter(nickname);
          break;
        }
        case LEAVE: {
          message = messageToLeave(nickname);
          break;
        }
        default:
      }

      return message;
    };

    getMessages = () => {
      return this.commandRecord.map((commandInfo) =>
        this.getMessage(commandInfo)
      );
    };
  }

  class CommandInfo {
    constructor(id, command) {
      this.id = id;
      this.command = command;
    }
  }

  class Users {
    constructor() {
      this.users = new Map();
    }

    getUser = (id) => {
      return this.users.get(id);
    };

    setUser = (id, nickname) => {
      this.users.set(id, new UserInfo(nickname));
    };
  }

  class UserInfo {
    constructor(nickname) {
      this.nickname = nickname;
    }

    changeNickname = (newNickname) => {
      this.nickname = newNickname;
    };
  }

  function getRecordMessages(record) {
    let messages = [];

    const messageRecord = new MessageRecord();
    messageRecord.translateRecord(record);
    messages = messageRecord.getMessages();

    return messages;
  }

  function solution(record) {
    const answer = getRecordMessages(record);
    return answer;
  }

  function main() {
    console.log("S11P16\n");

    const input = [
      "Enter uid1234 Muzi",
      "Enter uid4567 Prodo",
      "Leave uid1234",
      "Enter uid1234 Prodo",
      "Change uid4567 Ryan",
    ];
    const output = this.solution(input);

    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
  }

  main();
}

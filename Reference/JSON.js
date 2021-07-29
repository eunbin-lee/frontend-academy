/* 데이터를 주고받을 때 자바스크립트나 타입스크립트 입장에서는
객체로 주고받을 수 있다면 가장 효과적이지만 객체는 자바스크립트를 실행하는 시간에
메모리 상으로만 존재하는 구조이기 때문에 데이터로써 주고받기가 어렵다
따라서 데이터를 교환하기 위한 용도로 개발된 포맷이 JSON 이다 */

const jsonString = `
    {
        "name": "Hong gil dong",
        "age": 20,
        "bloodType": "A"
    }
`;
/* 
[ JSON 문법 ]
- 문자열 작성 시 쌍따옴표를 사용해야 한다
- 마지막 속성에는 콤마를 사용하지 않는다
- 문자열, 숫자, boolean, 배열, 객체인 value를 지원한다

JSON 문법에 오류가 있다면 JSON.parse에서 
JSON을 객체로 변환하는 순간 실패가 나고 프로그램이 종료된다
→ try catch를 이용하여 JSON 오류를 처리해준다
*/

try {
  /* [ JSON을 객체로 변환하는 방법 ] */
  const myJson = JSON.parse(jsonString);

  console.log(myJson.name); // Hong gil dong

  /* [ JSON을 문자열로 변환하는 방법 ] */
  console.log(JSON.stringify(myJson)); // {"name":"Hong gil dong","age":20,"bloodType":"A"}
} catch (e) {
  console.log('다시 시도해 주세요.');
}

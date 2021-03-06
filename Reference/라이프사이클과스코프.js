/* 
[ 스코프 ]
: 함수나 변수가 생기는 공간으로,
만들어진 함수나 블록에 진입했을 때 생성되며 해당 함수나 블록을 벗어나면 스코프는 사라진다

- 전역 스코프
- 블록 스코프
- 함수 스코프
*/

let myname = 'lee';

function foo() {
  let x = 10;

  console.log(x); // 10
  console.log(myname); // 'lee'
  bar();
  // zoo();
  /* 
  [ 호이스팅 ] 
  : 코드가 실행되기 전에 스코프 안에 코드를 탐색한 후
    그 스코프 안에 만들어야 될 함수나 변수들을 미리 만든 다음 코드를 실행시키는 것
    (함수 정의문(bar())에서는 적용되지만 함수식(zoo())에서는 적용되지 않음)
  */

  function bar() {
    let y = 15;

    console.log(x); // 10
    console.log(myname); // 'lee'
  }

  const zoo = function () {};

  if (x === 10) {
    let x = 100;

    console.log(x); // 100
  }

  bar();
}

foo();
/* foo 함수를 호출하면 foo 스코프가 생기고 그 스코프 안에 변수 x가 생성된다
변수 x는 foo 스코프 안에서 접근 가능하다 */

/*
함수 스코프는 전역 스코프 안에 포함되어 있는 것과 같이
스코프는 "중첩"되는 특성을 갖고 있으며 안쪽 스코프에서는 바깥쪽 스코프에 접근이 가능하다

스코프에서 변수를 찾을 땐 안쪽부터 바깥쪽 순서로 탐색한다
*/

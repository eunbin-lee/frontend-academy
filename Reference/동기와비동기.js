/* 
[ 동기 코드 ]
: 이전 코드의 실행이 끝나지 않으면 다음 코드가 실행될 수 없는 코드 (순차적으로 실행되는 코드)

[ 비동기 코드 ]
: 이전 코드의 실행이 끝나지 않아도 다음 코드도 실행될 수 있는 코드 (동시에 실행 가능한 코드)

→ 동기 코드와 비동기 코드의 순서를 엮기 위해선 콜백 함수를 사용한다
*/

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('OK');
    // reject('실패');
  }, 2000);
});

/* Promise 객체 안에서 resolve 함수가 호출된 응답으로는 then 메소드가 인자로 받는 함수가 호출되고
reject 함수가 호출된 응답으로는 catch 메소드가 인자로 받는 함수가 호출된다 */
p.then(function (ok) {
  console.log('첫번째 성공'); // 2초 후 '첫번째 성공'
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('두번째 성공');
    }, 3000);
  });
})
  .then(function (ok) {
    console.log(ok); // 2초 + 3초 후 '두번째 성공'
  })
  .catch(function (error) {
    console.log(error); // '실패'
  });

function double(x) {
  return x * 2;
}

function calcValue(a, b, cb) {
  setTimeout(() => {
    cb(a + b);
  }, 100);
}

const x = double(100);
const y = x;

const r = calcValue(10, 20, (result) => {
  console.log(result); // 30
});
const z = r;

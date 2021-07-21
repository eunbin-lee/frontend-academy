function delay(ms: number): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.floor(Math.random() * 10) % 2 === 0) {
        resolve('success');
      } else {
        reject('failure');
      }
    }, ms);
  });
}

/* 
[ 비동기 프로그래밍 코드 ]
- then과 catch에 콜백함수 작성
*/
delay(3000)
  .then((result: string) => {
    console.log('done promise! ' + result);
  })
  .catch((error: string) => {
    console.log('fail promise! ' + error);
  });

/*
[ 비동기 함수 ]
함수의 시그니처 앞에 async 지시어를 붙여주고 
기존의 promise 객체를 반환하는 함수가 있다면 그 앞에 await 오퍼레이터를 붙여준다

실제로는 비동기로 작동을 하지만 코드적으로는 동기적으로 작동하는 것처럼 보여준다
*/
async function main() {
  try {
    // 성공 케이스
    console.log('start');
    const result = await delay(3000);
    console.log('done async! ' + result); // 콜백함수가 아닌데도 마치 콜백함수처럼 비동기 작업이 실행됨
  } catch (e) {
    // 오류 케이스
    console.error('fail async! ' + e);
  }
}

main();

/* 
[ Polyfill(폴리필) ]
브라우저가 기본적으로 지원하지 않는 자바스크립트 기능을 구현하는 코드
기존 자바스크립트 코드로 상위 자바스크립트 코드의 기능을 대신 구현한다
*/

Array.prototype.MyMap = function (cb) {
  let arr = [];

  for (let i = 0; i < this.length; i++) {
    arr.push(cb(this[i], i, this));
  }

  return arr;
}[(1, 2, 3)].MyMap((n) => n * 2); // [2, 4, 6]

/*
[ core-js ]
: 폴리필 라이브러리
Babel 내부에 탑재되어 최신 버전의 자바스크립트 기능이 
하위 버전에서도 동작될 수 있도록 코드들을 주입한다

https://github.com/zloirock/core-js
*/

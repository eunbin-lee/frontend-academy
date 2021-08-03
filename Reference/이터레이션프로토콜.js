const myIterable = {};

/* Symbol: 유일한 값을 만들어내는 기능 */
myIterable[Symbol.iterator] = function* () {
  let i = 1;
  while (i <= 100) {
    yield i++; /* yield할 때마다 반환하고 대기한다 */
  }
};

for (const n of myIterable) {
  console.log(n); // 1 2 3 4 5 6 … 99 100
}

/*
for of문에 next를 호출하는 코드가 없는데도 100까지 출력 가능한 이유는
for of는 이터레이션 프로토콜을 준수하는 문이기 때문이다

값을 꺼내 올 때 next를 꺼내 오고 그 netx 안에 value 값을 참조하여 n에 넣는다
또한 done이 true인지 false인지에 따라 for of의 반복을 결정한다
*/

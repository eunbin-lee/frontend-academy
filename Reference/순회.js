/* [1, 2, 3, 4] 배열 요소들의 값을 2배로 만들기 */

const arr = [];
for (const n of [1, 2, 3, 4]) {
  arr.push(n * 2);
}

console.log(arr); // [2, 4, 6, 8]

const arr2 = [1, 2, 3, 4]
  .map((n) => n * 3)
  .filter((n) => n % 2 !== 0)
  .map((n) => `<li>${n}</li>`);

console.log(arr2); // [ '<li>3</li>', '<li>9</li>' ]

/* 
연산은 재활용을 하기 위해선 작게 유지하는 것이 중요하고
작게 유지된 연산 함수들은 재활용할 수 있는 가능성이 훨씬 커진다

순차적으로 연산을 할 수 있는 작은 단위로 로직을 분리하고
분리된 로직을 체이닝 방식 같은 형식으로 조합하면 로직을 깔끔하게 작성할 수 있다
*/

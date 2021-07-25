let saveNumber1 = 1;

function increment1() {
  return saveNumber1++;
}

console.log(increment1()); // 1
console.log(increment1()); // 2

saveNumber1 = 200;
/* saveNumber는 전역변수로 어디에서나 접근 가능한 상태이기 때문에
increment 함수는 saveNumber를 보호할 수 없다 */

console.log(increment1()); // 200

/* ----------------------------------------------------------- */

function increment2() {
  let saveNumber2 = 1;
  return saveNumber2++;
}

console.log(increment2()); // 1
console.log(increment2()); // 1
console.log(increment2()); // 1
/* increment2를 호출할 때마다 saveNumber2는 1로 설정되기 때문에 숫자를 증가시킬 수 없다 */

/* ----------------------------------------------------------- */

function increment3() {
  let saveNumber3 = 1;

  return function () {
    return saveNumber3++;
  };
}

const inc = increment3();

console.log(inc()); // 1
console.log(inc()); // 2
console.log(inc()); // 3

/*
[ 클로저 ]
: increment3 함수 내부의 함수가 바깥 함수에 있는 변수에 접근하게 되면 접근한 변수를 클로저라고 하는 공간에 저장한다
이후 increment3 함수가 반환을 하면 saveNumber3이 있던 increment3 함수의 지역 공간은 사라져서 saveNumber3은 사라지지만
내부 함수가 만들어지면서 옮겨졌던 클로저라는 공간에는 여전히 saveNumber3이 유지되고 있다
따라서 increment3 함수가 호출될 때 사라진 incremen3의 지역 공간이 아닌 클로저 공간에서 찾기 때문에 saveNumber3 값을 유지하면서 반환할 수 있다
(타입스크립트에서는 class 내 속성 앞에 private을 붙여주면 된다)

[ 클로저의 장점 ]
- 특정 값을 보호하면서 그 값을 계속 사용할 수 있다
- 클로저 공간은 코드 상 바깥에서 접근할 수 없다 
*/

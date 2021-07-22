function makeInfiniteEnergyGenerator() {
  let energy = 0;
  return function (booster = 0) {
    if (booster) {
      energy += booster;
    } else {
      energy++;
    }

    return energy;
  };
}

const energy = makeInfiniteEnergyGenerator();

for (let i = 0; i < 5; i++) {
  console.log(energy());
  // 출력: 1
  // 출력: 2
  // 출력: 3
  // 출력: 4
  // 출력: 5
}

console.log(energy(5)); // 출력: 10

/*
[ 제너레이터 ]
일반 함수는 값을 반환하면 종료되는 것과 달리
제너레이터 함수는 값을 반환한 후 함수의 종료 여부를 결정할 수 있다

제너레이터 함수를 사용하면 함수가 종료되지 않고 기존의 상태를 그대로 유지하기 때문에
일반 함수를 사용할 때처럼 energy값을 클로저 공간에 가둬둘 필요가 없다
*/
function* infiniteEnergyGenerator() {
  let energy = 1;
  while (true) {
    /*
    yield: 제너레이터를 멈추는 역할
    멈춘 상태에서 yield 뒤에 있는 값(energy)을 호출자(next를 호출한 것)에게 넘겨준다
    즉, next의 반환값으로 객체를 한번 포장({value: 1, done: false})하여 energy 값을 돌려준다
    */
    const booster = yield energy;

    if (booster) {
      energy += booster;
    } else {
      energy++;
    }
  }
}

/* 
제너레이터 함수를 처음으로 호출을 하면 실행시키는데 필요한 도구(ex. next 메소드)를 갖고 있는 객체를 만들어서 넘겨준다
(= energyGenerator 상수에 담기는 값)
*/
const energyGenerator = infiniteEnergyGenerator();

for (let i = 0; i < 5; i++) {
  /* next 메소드: 제너레이터 함수의 실행을 재개시킬 수 있는 함수 */
  console.log(energyGenerator.next());
  // 출력: {value: 1, done: false}
  // 출력: {value: 2, done: false}
  // 출력: {value: 3, done: false}
  // 출력: {value: 4, done: false}
  // 출력: {value: 5, done: false}

  /*
  done: 함수의 종료 여부를 알려주는 속성
  제너레이터 안에서 return문을 만나면 함수를 종료하고 done: true로 출력된다
  */
}

console.log(energyGenerator.next(5)); // 출력: {value: 10, done: false}

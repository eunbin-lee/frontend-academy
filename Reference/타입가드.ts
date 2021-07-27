/* 어떤 변수가 2개 이상의 타입을 갖게 되는 경우에
코드 상에서 a라는 타입이 들어왔을 때 작동될 수 없는 코드에 대해서
경고를 해주거나 그것을 원천적으로 막을 수 있는 코딩방식 */

function doubleTypeFunction(a: number | string) {
  if (typeof a === 'string') {
    return a.replace('x', 'X');
  }

  // return a.replace('Y', 'y');
  /* a이 string이 아닌 경우면 replace 메소드가 존재하지 않을 수도 있기 때문에 빨간 밑줄로 알려준다 */
}

doubleTypeFunction(10);

function foo(a?: number | null) {
  if (a === null) return;

  console.log('display before');
  console.log(a?.valueOf());
  /* a가 null이면(= 메소드가 없는 상황이면) undefined로 만들어준다 */
  console.log('display after');
}

foo();

interface Foo {
  foo: string;
  common: string;
}

/* arg is Foo: arg이 Foo 인터페이스와 같은지를 확인한다 */
function isFoo(arg: any): arg is Foo {
  return arg.foo !== undefined;
}

console.log(isFoo({ foo: 'ok', common: 'wow' })); // true
console.log(isFoo({ foo: 'ok', common: 'wow', active: false }));
/* 없는 속성을 추가해도 타입 가드가 확인을 하지 못하는 한계가 있다 */

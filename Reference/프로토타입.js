/*
[ 프로토타입 체이닝 ]
모든 객체에는 __proto__라고 하는 속성이 있고 그 속성은 Object라고 하는 객체를 가리키고 있다

자바스크립트는 기본적으로 속성에 접근하게 되면
객체가 갖고 있는 메소드 중에 해당 속성이 있는지를 먼저 확인하고
없으면 객체의 __proto__가 가리키고 있는 객체에 해당 속성이 있는지 확인한다

[ 프로토타입 체이닝의 장점 ]
각각의 객체는 본인에게 해당하는 데이터와 메소드만 가지고 있고
공통적으로 사용되는 것들은 상위 객체에 만들어 놓은 다음 프로토타입을 연결만 시켜서 재활용을 할 수 있다
*/
const c1 = {
  name: 'C1',
  color: 'red',
};

const c2 = {
  name: 'C2',
  width: 300,
};

const c3 = {
  name: 'C3',
  height: 100,
};

console.log(c1); // { color: 'red', name: 'C1' }
console.log(c2); // { name: 'C2', width: 300 }
console.log(c3); // { height: 100, name: 'C3' }

console.log(c1.toString()); // '[object Object]'

c1.__proto__ = c3;
c3.__proto__ = c2;
console.log(c1.width); // 300 (출력값이 300이 나오는 이유는 c1 → c3 → c2 순으로 width 속성이 있는지 찾아보기 때문이다)

/*
[ 함수의 프로토타입 ]
new 연산자는 인스턴스 객체를 만드는 것뿐만 아니라
일반 객체 프로토타입을 코드로 연결시켜 놓은 것을 
훨씬 간편하게 객체의 상속 관계로 만들 수 있게 하는 매커니즘을 제공한다
*/
function Foo(name) {
  this.name = name;
  this.__proto__ = Foo.prototype;
}

Foo.prototype.lastName = 'Gildong';

const f = new Foo('Hong');

console.log(f); // Foo { name: 'Hong' }
console.log(f.lastName); // 'Gildong' (f → __proto__(= Foo.prototype) 순으로 lastName 속성이 있는지 확인한다)

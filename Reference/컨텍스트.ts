/*
[ execution 컨텍스트 (실행 컨텍스트) ]
: 실행되는 순간 컨텍스트가 결정된다

[ lexical 컨텍스트 (어휘 컨텍스트) ]
: arrow 함수를 이용하여 어휘적으로 컨텍스트를 고정시킨다
*/

const person = {
  name: 'Hong gil dong',
  age: 20,
  getAge() {
    return this.age;
  },
};

person.age;
person.getAge(); // 40
/* 소유자가 getAge 함수를 실행하는 순간 소유자가 누군지 결정이 된다 (→ 소유자 = person 객체)
따라서 person 객체의 this가 person으로 접근 가능하여 40이 출력된다 */

const age = person.getAge;
age(); // undefined
/* age()가 호출되는 순간 소유자를 확인할 수 없기 때문에
getAge의 this를 확인할 수 없다 (this가 없는 것과 마찬가지이다) */

/* [ 컨텍스트 객체 지정하기 ] */
age.call(person); // 40

/* [ 클래스로 person 객체 만들기 ]*/
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.getAge =
      this.getAge.bind(this); /* bind(): 현재의 this로 고정시키는 역할 */
  }

  getAge() {
    return this.age;
  }

  getName = () =>
    this.name; /* arrow function: 처음 만들어질 때 this를 고정시킨다 */
}

const p1 = new Person('Lee', 20);

p1.getAge(); // 20

const myAge = p1.getAge;

myAge(); // 20
/* bind()로 컨텍스트를 고정시켰기 때문에 소유자를 설정하지 않아도 
언제나 인스턴트 객체인 p1으로 고정돼있다 */

p1.getName(); // 'Lee'

const x = p1.getName;
x(); // 'Lee'
/* arrow 함수를 사용하여 getName()을 만들었기 때문에
처음에 만들어질 때 이미 this가 고정되어 'Lee'를 반환한다  */

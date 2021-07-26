type User = {
  id: number;
  name: string;
};

type Address = {
  zipcode: number;
  address: string;
};

function pipeOne(value: any): any {
  return value;
}
/* 받은 인자를 그대로 반환하기 때문에 잘못된 인자도 그대로 반환할 수 있다 */

/* T라는 타입으로 들어오면 인자값과 반환값의 타입을 T로 설정 */
function pipeTwo<T>(value: T): T {
  return value;
}

let p1 = pipeOne(10);
let p2 = pipeTwo('10');
let p3 = pipeTwo(true);

/* any로 설정한 함수와 제네릭 함수의 차이는 객체를 쓸 때 가장 큰 차이가 난다 */
const pipeObjectOne = <T>(obj: T): T => {
  return obj;
};

let po1 = pipeObjectOne({ id: 1, name: '김', zipcode: 50123 });
let po2 = pipeObjectOne<User>({ id: 1, name: '김' });
/* 명시적으로 User타입 사용을 설정하면 호출하는 순간 
T타입이 User타입으로 확정되고 User타입 기준으로 인자의 객체를 검사한다 */

/* [ 클래스 제네릭 ] */
class State<S, Config = {}> {
  private _state: S;
  config: Config;

  constructor(state: S, config: Config) {
    this._state = state;
    this.config = config;
  }

  getState(): S {
    return this._state;
  }
}

let s1 = new State<Address, { active: boolean }>(
  {
    zipcode: 50123,
    address: ' 울시',
  },
  { active: true },
);

const s1Data = s1.getState();

/* s1은 Address타입으로 설정되고 타입스크립트가 타입을 추적하기 때문에 
s1Data을 이용하여 s1 속성들에 접근할 수 있다 */
console.log(s1Data.zipcode, s1Data.address, s1.config.active);

/* 확정된 Type의 속성들을 Key로 확장을 시킬 수 있다 */
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, 'a'); // 1
// getProperty(x, 'm'); /* x 객체 안에는 m이라는 key가 없음 빨간 밑줄로 알려준다 */

/* [ 인터페이스 제네릭 ] */
interface KeyPair<T, U> {
  key: T;
  value: U;
}

let kv1: KeyPair<number, string> = { key: 1, value: 'Kim' };
let kv2: KeyPair<number, number> = { key: 2, value: 12345 };

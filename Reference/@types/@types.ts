/* 타입스크립트를 지원하지 않는 라이브러리를 사용할 때 @types 라이브러리를 사용한다 */
import { v4 } from 'uuid';

type UniqObject = {
  id: string;
  [key: string]: string | number | boolean;
};

const makeObject = (): UniqObject => ({
  id: v4(),
});

console.log(makeObject());
console.log(makeObject());

export { default as TextField } from './text-field';
export { default as PasswordField } from './password-field';
export { default as AddressField } from './address-field';

/*
해당 디렉토리의 파일 구성이 바뀌면 import하는 파일에서 매번 코드를 바꿔야 하기 때문에
특정한 디렉토리 하위의 index.ts 파일을 생성하고 하위 디렉토리의 클래스들을 export하여 중개를 해주는 코드

import하는 파일에서는 해당 디렉토리만 지정해놓고 사용할 타입이나 클래스만 지정을 하면
해당 타입이나 클래스가 어디 위치에 있는지 신경쓰지 않고 사용할 수 있다.

ex. import { PasswordField, TextField, AddressField } from './views';
*/

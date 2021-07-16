import { ValidateRule } from './types';

export const RequireRule: ValidateRule = {
  rule: /.+/,
  match: true,
  message: '필수 입력 항목입니다.',
};

export const CantContainWhitespace: ValidateRule = {
  rule: /\s/,
  match: false,
  message: '공백을 포함할 수 없습니다.',
};

export const CantStartNumber: ValidateRule = {
  rule: /^\d/,
  match: false,
  message: '숫자로 시작하는 아이디는 사용할 수 없습니다.',
};

export const MinimumLengthLimit = (limit: number): ValidateRule => ({
  rule: new RegExp(`(.){${limit}}`), // 입력받은 수에 맞춰 데이터를 확인해야 하기 때문에 정규식 리터럴이 아닌 문자열로만 표현할 수 있는 RegExp 함수를 사용
  match: true,
  message: `최소한 ${limit}글자 이상이어야 합니다.`,
});

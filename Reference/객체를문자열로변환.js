/*
문자열 포맷: id, item, price, discount
*/

const cartItems = [
  { id: 1, item: '핸드밀', price: 40000, discount: 0 },
  { id: 2, item: 'A4용지', price: 4000, discount: 0 },
  { id: 3, item: '수영복', price: 120000, discount: 0 },
  { id: 4, item: '색연필72색', price: 150000, discount: 0 },
];

const cartItemsArray = [];

for (const item of cartItems) {
  const row = [];

  /* Object.entries(): 객체 안의 key, value쌍으로 돼있는 배열을 만들고 그 배열을 하나씩 리턴한다 (ex. [ 'id', 1 ]) */
  for (const [, value] of Object.entries(item)) {
    row.push(value);
  }

  cartItemsArray.push(row.join());
}

console.log(cartItemsArray.join('===')); // '1,핸드밀,40000,0===2,A4용지,4000,0===3,수영복,120000,0===4,색연필72색,150000,0'

/* [ 함수 연산을 이용하기 객체를 문제열로 변환하기 ] */
const extractValueInObject = (obj) =>
  Object.entries(obj).map(([, value]) => String(value));

const cartItemsString = cartItems.map(extractValueInObject).join('===');

console.log(cartItemsString); // '1,핸드밀,40000,0===2,A4용지,4000,0===3,수영복,120000,0===4,색연필72색,150000,0'

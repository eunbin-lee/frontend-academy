/* [ Template Literal ] */
const userName = 'Hong gildong';
const bolder = (text) => `<b>${text}</b>`;

console.log(`Hi~ ${userName}`); // 'Hi~ Hong gildong'

console.log(`Hi~ ${bolder(userName)}`); // 'Hi~ <b>Hong gildong</b>'

/* [ Tagged Template ] */
function div(strings, ...fns) {
  const flat = (s) => s.split('\n').join('');

  return function (props) {
    return `<div style="${
      flat(strings[0]) + (fns[0] && fns[0](props)) + flat(strings[1])
    }"></div>`;
  };
}

/* 
div함수의 첫번째 인자에는 문자열이 전달되고
${}의 개수만큼 두번째 인자로 전달된다

- strings[0] = font-size: 20px;\ncolor: 
- fns[0] = ${(props) => (props.active ? 'white' : 'gray')}
- strings[1] = ;\nborder: none;

*/
const Div = div`
    font-size: 20px;
    color: ${(props) => (props.active ? 'white' : 'gray')};
    border: none;
`;

console.log(Div({ active: true })); // '<div style="font-size: 20px; color: white; border: none;"></div>'

/* 
[ 배열 연산을 이용 ] 
- wi: word index
- ci: character index
*/
const simpleCamel = (text, splitter = ' ') =>
  text
    .split(splitter)
    .map((word, wi) =>
      word
        .split('')
        .map((c, ci) =>
          wi > 0 && ci === 0 ? c.toUpperCase() : c.toLowerCase(),
        )
        .join(''),
    )
    .join('');

/* [ 변수와 반복문을 이용 ] */
function convertCamelName(name) {
  let camelName = '';

  for (let i = 0, newSpace = false; i < name.length; i++) {
    if (name[i] == ' ') {
      newSpace = true;
      continue;
    }

    if (newSpace) {
      camelName = camelName + name[i].toUpperCase();
      newSpace = false;
    } else {
      camelName = camelName + name[i].toLowerCase();
    }
  }

  return camelName;
}

const camelName1 = convertCamelName('hong gil dong');
const camelNAme2 = simpleCamel('HONG GIL DONG');

console.log(camelName1); // 'HongGilDong'
console.log(camelNAme2); // 'HongGilDong'

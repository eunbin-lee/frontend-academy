const sourceObject = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
};

const targetObject = {
  aGroup: {
    a: 1,
    b: 2,
  },
  bGroup: {
    c: 3,
    d: 4,
    e: 5,
  },
};

const groupInfo = {
  aGroup: ['a', 'b'],
  bGroup: ['c', 'd', 'e'],
};

function makeGroup(source, info) {
  const merge = (a, b) => ({ ...a, ...b });

  return Object.keys(info)
    .map((group) => ({
      [group]: info[group].map((k) => ({ [k]: source[k] })).reduce(merge, {}),
    }))
    .reduce(merge, {});
}
// Object.keys(info) = [ 'aGroup', 'bGroup' ]
// → group = aGroup || bGroup
// → info[group] = 'a', 'b' || 'c', 'd', 'e'
// → k = 'a', 'b', 'c', 'd', 'e'
// → source[k] = 1, 2, 3, 4, 5
// → reduce(merge, {}) = { a: 1, b: 2 } || { c: 3, d: 4, e: 5 } }
// → reduce(merge, {}) = { aGroup: { a: 1, b: 2 }, bGroup: { c: 3, d: 4, e: 5 } }

console.log(makeGroup(sourceObject, groupInfo));
// { aGroup: { a: 1, b: 2 }, bGroup: { c: 3, d: 4, e: 5 } }

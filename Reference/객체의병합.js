const sourceObject = {
  traits: {
    first_name: {
      value: 'Bob',
      source_id: 1,
      updated_at: 1623238587468,
    },
    emails_opened_last_30_days: {
      value: 33,
      source_id: 2,
      updated_at: 1623238601089,
    },
  },
  cursor: {
    url: '/v1/spaces/lgJ4AAjFN4',
    has_more: false,
    next: '',
  },
};

// [깊은 복사(deep copy)] - 객체를 완전히 복사
const newObject1 = JSON.parse(JSON.stringify(sourceObject));
// 위의 방법을 사용할 경우 작은 객체라면 상관 없지만 큰 객체일 경우 성능 저하가 발생하므로 주의해야 한다

// [얕은 복사(shallow copy)] - 1뎁스는 복사하지만, 2뎁스 이상은 참조만
const newObject2 = Object.assign({}, sourceObject);
const newObject3 = { ...sourceObject };

console.log(sourceObject.traits.first_name.source_id); // 1

newObject1.traits.first_name.source_id = 100;
console.log(sourceObject.traits.first_name.source_id); // 1 (깊은 복사를 했기 때문에 원본 객체에 영향을 주지 않음)

newObject2.traits.first_name.source_id = 100;
console.log(sourceObject.traits.first_name.source_id); // 100

newObject3.traits.first_name.source_id = 500;
console.log(sourceObject.traits.first_name.source_id); // 500

// 원본 객체에 영향을 주지 않고 객체를 복사하기 위해서는 유틸리티 함수를 만드는 것을 권장
function deepCopyObject(obj) {
  const clone = {};
  for (const key in obj) {
    if (typeof obj[key] == 'object' && obj[key] != null) {
      clone[key] = deepCopyObject(obj[key]);
    } else {
      clone[key] = obj[key];
    }
  }

  return clone;
}

const newObject4 = deepCopyObject(sourceObject);

console.log(sourceObject.traits.first_name.source_id); // 500

newObject4.traits.first_name.source_id = 1000;
console.log(sourceObject.traits.first_name.source_id); // 500

const store = {
  user: null,
  cart: [],
  config: {
    multiDevice: false,
    lastLoginDate: 'Wed Jun 09 2021 20:46:55 GMT+0900',
  },
};

const newObject5 = {
  ...deepCopyObject(store),
  config: {
    ...store.config,
    lastLoginDate: new Date(),
  },
};

console.log(newObject5); // { user: null, cart: {}, config: { multiDevice: false, lastLoginDate: 2021-09-28T14:20:59.984Z } }

const DefaultStyle = {
  color: '#fff',
  fontColor: '#999',
  fontSize: 14,
  fontWeight: 200,
};

function createParagraph(config) {
  config = { ...DefaultStyle, ...config };

  console.log(config); // { color: '#fff', fontColor: '#999', fontSize: 12, fontWeight: 200 }
}

createParagraph({ fontSize: 12 });

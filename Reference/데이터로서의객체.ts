type Box = {
  width: number;
  height: number;
  borderRadius: number;
  backgroundColor: string;
  borderWidth?: number;
  ['className']?: string /* computed property: 속성명을 값으로 취급하여 기술하는 표기법 */;
};

/* 
[ 객체 리터럴 (객체 생성 표기법) ]
: 틀과 데이터가 묶여있다
*/
let box: Box = {
  width: 200,
  height: 200,
  borderRadius: 5,
  backgroundColor: 'red',
};

/*
[ 함수를 이용하여 객체 생성 ]
: 틀과 데이터가 분리된다

객체 리터럴과 비교했을 때 데이터로서의 객체의 차이는 전혀 없지만 코드 구성 상의 차이가 있다
함수를 이용할 경우 외부에서 데이터를 입력할 수 있으므로 다양한 값의 객체를 생성할 때 makeBox를 호출해주기만 하면 된다
또한 객체의 구조를 변경할 때(borderRadius를 radius로 변경해야 할 때)에도 훨씬 용이하다
*/
function makeBox(
  width: number,
  height: number,
  borderRadius: number,
  backgroundColor: string,
): Box {
  return {
    /* 객체 유형 */
    width,
    height,
    borderRadius,
    backgroundColor,
  };
}

makeBox(100, 100, 0, 'blue');

/*
[ 클래스를 이용하여 객체 생성 ]

순수하게 데이터만 들어가 있다고 한다면 일반 함수를 사용해도 무방하지만
클래스를 이용하면 

*/
class Shape implements Box {
  width: number;
  height: number;
  borderRadius: number;
  backgroundColor: string;

  constructor(
    width: number,
    height: number,
    borderRadius: number,
    backgroundColor: string,
  ) {
    this.width = width;
    this.height = height;
    this.borderRadius = borderRadius;
    this.backgroundColor = backgroundColor;
  }
}

/*
인스턴스 객체는 어떤 클래스로 만들어졌는지 확인할 수 있다
(ex. boxShape instanceof Shape ? true : false)
*/
const boxShape = new Shape(10, 10, 0, 'blue');

/* [ 객체 변형 ] */
box.borderWidth = 10;
box['className'] = 'box rounded';

/* 
[ 객체의 속성 추가 ]
자바스크립트에서는 box.color = 'blue'; 처럼 바로 속성을 추가할 수 있지만
타입스크립트에서는 type Box 안에 color 속성을 선택 사항으로 정의(color?: string;)해줘야 한다
*/

/*
[ 객체의 속성 삭제 ]
delete box.color;

타입스크립트에서는 필수 사항인 속성을 삭제하려고 하면 빨간 밑줄로 에러 표시를 해준다
*/

/*
[ 객체 복사 ]
- assign 메소드: 첫번째 인자로 준 객체에 두, 세, 네번째로 입력된 객체를 순서대로 덮어쓰기를 한다
                 주어진 모든 객체를 첫번째 객체에 모두 결합시킨 다음 결합된 객체를 리턴한다
                 똑같은 객체를 만들고 싶다면 첫번째 인자를 빈 객체로 설정하고 두번째 인자에 복사하고자 하는 객체를 추가한다
- JSON.stringify(객체): 객체를 문자열로 만들면 원본 객체와 연결이 끊어진다
*/
const box1 = box; // box1도 box를 가리키는 형식 (얕은 복사)
const box2 = Object.assign({}, box); // assign 메소드 사용
const box4 = { ...box, borderRadius: 10 }; // 전개 연산자 사용
const box3 = JSON.parse(JSON.stringify(box)); // 복사하고자 하는 객체를 문자열로 만든 다음 그 문자열을 다시 객체로 바꿈

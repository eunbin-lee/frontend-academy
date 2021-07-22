/* calculate 함수를 이용하여 도형의 면적 구하기 */
function calculateCircleArea(radius) {
  return radius * radius * Math.PI;
}

function calculateRectangleArea(width, height) {
  return width * height;
}

console.log(calculateCircleArea(circle.radius));
console.log(calculateRectangleArea(rectangle.width, rectangle.height));

/* 클래스를 사용하여 도형의 면적 구하기 */
class Circle {
  /* 
  클래스의 속성에 #을 붙여주면 private한 속성으로 설정된다 
  (외부에서 접근 불가) 
  */
  #radius;

  constructor(radius) {
    this.#radius = radius;
  }

  get redius() {
    return this.#radius;
  }

  area = () => this.#radius * this.#radius * Math.PI;
}

class Rectangle {
  #width;
  #height;

  constructor(width, height) {
    this.#width = width;
    this.#height = height;
  }

  get width() {
    return this.#width;
  }

  get height() {
    return this.#height;
  }

  area = () => this.#width * this.#height;
}

const circle = new Circle(50);
const rectangle = new Rectangle(150, 200);

console.log(circle.area());
console.log(rectangle.area());

/*
calculate 함수를 사용하는 방식은 사용하는 쪽에서 이 객체가 어떤 도형이고 
면적을 구하기 위해 어떤 데이터를 넘겨줘야 하는지 등을 모두 알고 있어야 한다
하지만 객체가 스스로의 행위까지 포함하고 있다면 area()만 호출하면 편리하게 면적을 구할 수 있다

어떤 대상을 모델링하는 객체가 그 대상과 관련된 데이터, 행위 등 모든 것을 가지고 있고
사용하는 쪽에 공급해 준다고 하면 코드가 훨씬 단순해지고 맥락을 나눌 수 있기 때문에 더 효과적이다
*/

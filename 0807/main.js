// 매게변수
function sum(x, y){
  return x + y
}

// 인수를 넘김다.
sum(1, 3)

// 험수 선언 방법

// 1. 함수 선언 방식
// 기명 함수
function abc(){
  // 함수 내부 어느 곳에서든 사용할 수 있다.
  console.log(arguments)
}

// 2. 함수 표현
// 익명 함수
const abd = function () {

}

// 화살표 함수
// () => {} vs function () {}

const double = function(x) {
  return x * 2
}

const doubleArrow = (x) => {
  return x * 2
}

const doubleArrow = (x) => x * 2 
// 위와 같이 작성해야지만  x * 2를 반환할 수 있다.
// {x * 2}로 작성하게 되면 return이 없기 때문에 연산 결과를 반환할 수 없다.
// 만약 객체 데이터를 반환하기 위해서 축약형을 사용하려면?
// 오늘 배운 것!
// {}를 사용하면 객체가 아닌 블럭으로 인식하기 때문에 () 소괄호로 감싸주고 객체를 담아 반환해야 한다.
// 차이점
// 로직을 축약할 수 있다.


//IIFE : Immediately-Invoked function expression
// 직전에 ;를 통해서 위에 함수 실행문과 같은 것을 종효했다는 것을 명시해 주어야 한다.

const a = 7 

// 익명의 함수
// (x)()
(function (){
  console.log(a*2)
})();

//( x ())
(function (){
  console.log(a*2)
}());

// hoisting
// 함수 선언부가 유효범위 최상단으로 끌러올려지는 현상

const a = 7

// 함수 표현
const abs = function () {
  console.log( a * 2 )
}

// 함수 선언
function abs2(){
  console.log(1 * 2)
}

abs()

// callback
// 함수의 인수로 사용되는 함수
// 실핸 위치를 보장해 주는 익명 함수로 많이 사용한다.


// 클래스

const yon = {
  name:'yong', // property
  greeting: function(){ // method
    return 'hello'
  }
}

// property + method = member

// ${} 데이터가 보간된다.
// What is this?
// this는 소속되어 있는 함수가 선언되는 객체 데이터를 지칭한다.

console.log(yon)

// 효율 => 메모리

function User(first, last){
  this.firstName = first
  this.lastName = last
}
// User 객체의 유전자라고 할 수 있다.
// 부모의 유전자에 함수를 기억시켜 자식이 사용할 수 있도록 한다.
User.prototype.greeting = function () {
  return `${this.firstNane} ${this.lastName}`
}
// new 생성자 함수  -> 하나의 객체 데이터가 생성된다.

// yong -> instance
const yong = new user('yong','kwon')
const ming = new user('ming','kang')

console.log(yong)

// this
// 일반 함수는 호출 위치에 따라 this가 정의
// 화살표 함수에서는 자신이 선언된 함수 범위에서 this정의

const yong = {
  name:'yong',
  normal: function () {
    console.log(this.name)
  },
  arrow: () => {
    console.log(this.name)
  }
}

User.prototype.arrow = () => {
  console.log(this.name)
}

// ES6 classes
// 객체 내부에서 일반 함수를 사용할때는 : function를 생략해 줄 수 있다.

// function User(fitst,last){
//   this.firstName = first
//   this.lastName = last
// }

// User.prototype.greeting =function(){
//  return `hello ${this.firstName} ${this.lastName}`
// }

class User {
  constructor(first,last){
    this.firstName = first
    this.lastName = last
  }
  // prototype의 method로 만들어 진다.
  greeting(){
    return `${this.firstName} ${this.lastName}`
  }
}


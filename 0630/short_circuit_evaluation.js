// 단축평가
// 논리 연산자를 사용한 단축평가
// 논리합 또는 논리곱 연산자 표현식은 언제나 2개의 피연산자 중 어느 한쪽으로 평가된다.
// 논리 연산의 결과를 결정하는 피연산자를 타입 변환하지 않고 그대로 반환한다. 이를 단축평가라고 한다.

const done = true;
let message = '';

// if(done) message = '완료';

message = done && '완료';
console.log(message);

const done2 = false;
let message2 = '';

if(done2) message2 = '미완료';

message2 = done2 || '미완료';
console.log(message2);

// 객체를 가리키기를 기대하는 변수가 null 또는 undefined가 아닌지 확인하고 프로퍼티를 참조할 때
// 객체는 키와 값으로 구성된 프로퍼티의 집합이다. 

const ele = null;
// const value = ele.value;
const value2 = ele && ele.value;
console.log(value2); // 프로그램이 오류를 만났을 때, 프로그램이 죽는 것을 방지할 수 있다.

// 함수 매개변수에 기본겂을 설정할 때

function getStringLength(str){
  str = str || '';
  return str.length;
}

console.log(getStringLength());
console.log(getStringLength('Hello'));

// ES6에 추가된 매개변수의 기본값 설정
function getStringLengthES6(str=''){
  return str.length;
}
console.log(getStringLengthES6('World'));
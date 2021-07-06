// Optional chaning
// ?. 좌항의 피연산자가 null 또는 undefiend 인 경우 undefined를 반환한다.
// 그렇지 않다면 우항의 프로퍼티 참조를 이어간다.
// 여기서 프로퍼티 참조란 변수를 통해서 변수값을 참조하듯이 객체의 프로퍼티에 접근해
// 프로퍼티 값을 참조하는 것을 의미한다.

let elem = null;

let value = elem?.value;

let value2 = elem && elem.value; 

// 단축평가로 변수가 null인지 undefined인지 평가했지만,
// 피연산자가 Falsy값인 0 또는 ''인 경우에 객체로 평가될 수 있기 때문에 주의가 필요하다.
console.log(value,value2);


// Optional chaining operator

// ?. 는 좌항의 피연산자가 null 또는 undefined인 경우 undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티를 참조를 이어간다.

const ele = null;
let value = ele?.value;
// let value = ele && ele.value;
console.log(value)

const ele2 = '' ?? 'default value';
console.log(ele2);
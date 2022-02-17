// nullish coalescing
// 좌항의 피연산자가 null 또는 undefined의 경우 우항의 피연산자를 반환하고,
// 그렇지 않은 경우 좌항의 피연산자를 반환한다.

let elem = null;

let value = elem ?? 'This variable is undefined!';
console.log(value);
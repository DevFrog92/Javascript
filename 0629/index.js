// 타입 변환과 단축 평가
// 명시적 변환과 타입 캐스트

function isTruhy(value){
  return !value;
}

console.log(isTruhy([]));
console.log(Boolean([]) === true);

const conversionValue = 10;
console.log(String(conversionValue));
console.log(conversionValue.toString());

// 숫자 변환의 경우 parseInt()를 많이 사용한다.
// 또는 + 단항 연산자를 사용해서 숫자타입으로 변환이 가능하다.

// Boolean 변환의 경우 !! 부정 논리 연산자를 두 번 사용해서 변환이 가능하다.

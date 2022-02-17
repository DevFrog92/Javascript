
  // 재귀함수 사례
  
  // 1. 2진수 변환
  let x = 11;
  let result = '';

  while (true){
    if(x%2 == 0){
      result += '0';
    }else {
      result += '1';
    }

    x =Math.floor(x / 2)
    console.log(x)
    if (x == 1 || x == 0){
      result += String(x);
      break
    }

    // Math.ceil() -> 올림
    // Math.floor() -> 버림
    // Math.round() -> 반올림
  }

 x = 11;
  function f(x){
    if(x == 1 || x ==0) {
      return String(x);
    }
    // 어떤 순서로 배치하는지가 중요하다.
    return f(Math.floor(x/2)) + String(x%2);
  }
  console.log(result.split("").reverse().join(''));
  console.log(`재귀함수 ${f(x)}`)
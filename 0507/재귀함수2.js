
  // 재귀함수 사례
  
  // 1. 2진수 변환
  let x = 11;
  let result = '';

  while (true){
    if(x%2 == 0){
      result = '0' + result;
    }else {
      result = '1' + result;
    }

    x =Math.floor(x / 2)
    if (x == 1 || x == 0){
      result = String(x) + result;
      break
    }

    // Math.ceil() -> 올림
    // Math.floor() -> 버림
    // Math.round() -> 반올림
  }
  console.log(result)
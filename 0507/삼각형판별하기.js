// 삼각형 판별하기

const max_val = (arr,crr) => arr> crr? arr:crr;
let result = false;
function sol(a,b,c){
  let temp = new Array(a,b,c);

  let max_ = temp.reduce(max_val);
  if(max_ < (a+b+c-max_)){
    result = true;
  }
  return result;
}

// console.log(sol(6,7,11) ? "YES":"NO")
console.log(sol(13,33,17) ? "YES":"NO")
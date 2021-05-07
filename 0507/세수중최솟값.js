let result = 0;


const min_val = (arr,crr) => arr < crr? arr:crr;
function solution(a,b,c){
  let temp = new Array(a,b,c);
  result = temp.reduce(min_val);
  return result
}

function solution2(a,b,c){
  let temp = new Array(a,b,c);
  let n = a;
  for (const i of temp) {
    if(n > i){
      n = i;
    }
  }
  return n
}
console.log(solution(2,5,1))
console.log(solution2(2,5,1))
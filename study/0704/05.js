function solution(array){
  const answer = array.reduce((acc,cur)=>acc<cur ? acc : cur);
  const minValue = Math.min(...array);
  const minValue2 = Math.min.apply(null,array);
  console.log(minValue,minValue2);
  return answer;
}
let array = [5,3,7,11,2,15,17];
console.log(solution(array));

// Number.MAX_SAFE_INTERGER;
// Number.MIN_SAFE_INTEGER;
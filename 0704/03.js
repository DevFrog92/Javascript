function solution(num){
  let head = Math.round(num/12);
  if(num - head*12 > 0){
    head+=1;
  }
  return head;
}

function solution2(num){
  return Math.ceil(num/12);
}
console.log(solution(25));
// 나머지가 존재할 때 ceil함수를 사용하면 쉽게 계산할 수 있다.
console.log(solution2(25));
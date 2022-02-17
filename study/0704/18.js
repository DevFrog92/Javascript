function solution(n,array){
  let answer = 1;
  let lastTall = array[0];
  for(let i = 1;i < array.length;i++){
    if(lastTall < array[i]){
      answer++;
      lastTall= array[i];
    }
  }
  return answer;
}
const n = 8
const array = [130,135,148,140,145,150,150,153]
console.log(solution(n,array));
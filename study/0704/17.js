function solution(num,array){
  let answer = [array[0]];

  for(let i = 1; i<array.length;i++){
    if(array[i-1] < array[i]) {
      answer.push(array[i]);
    }
  }
  return answer;
}
let num = 6;
let array = [7,3,9,5,6,12];
console.log(solution(num,array));
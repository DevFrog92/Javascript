function solution(num,array){
  let answer = array[0];
  let lengthOfWrods = array[0].length;
  for(let i=1;i<num;i++){
    if(lengthOfWrods < array[i].length){
      lengthOfWrods = array[i].length;
      answer = array[i];
    }
  }
  return answer;
}
const num = 5;
let array=["teacher", "time", "student", "beautiful", "good"];
console.log(solution(num,array));
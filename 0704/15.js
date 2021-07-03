function solution(words){
  let answer;
  
  if(words.length %2){
    answer = words[Math.round(words.length/2)-1]
  }else{
    let middle= Math.round(words.length/2);
    answer = `${words[middle-1]}${words[middle]}`
  }
  return answer;
}
let words = 'good'
console.log(solution(words));
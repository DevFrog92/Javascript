function solution(words){
  let answer = '';
  let objectWords = [];
  for(let i = 0; i <words.length ; i++){

    if(!objectWords.includes(words[i])){
      answer += words[i];
      objectWords.push(words[i]);
    }
  }
  return answer;
}
let words = 'ksekkset';
console.log(solution(words));
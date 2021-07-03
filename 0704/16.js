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

// indexOf(a,b)
// a는 찾는 요소
// b는 순회 시작 인덱스를 의미한다.

// for(let i = 0; i < words.length;i++){
//   if(words.indexOf(words[i]) === i) answer += words[i];
// }

// 특정 문자열 찾기
// while(pos!== -1){
//   answer++;
//   pos = s.indexOf('k',pos+1);
// }
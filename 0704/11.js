function solution(words){
  let answer=0;
  for(let i = 0;i<words.length ; i++){
    if(words[i] == words[i].toUpperCase()){
      answer++;
    }
  }
  return answer;
}

const words = 'KoreaTimeGood';
// 문자를 대문자로 바꿀 수 있는 메소드 toUpperCase()
// charCodeAt() ascii code로 문자열을 변환하는 방법
// 65~ 90
// 97~122
console.log(solution(words));
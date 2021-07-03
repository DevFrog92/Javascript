function solution(words){
  let answer = '';
  for(let i = 0; i<words.length;i++){
    if(words[i] == words[i].toUpperCase()){
      answer += words[i].toLowerCase();
    }else{
      answer += words[i].toUpperCase();
    }
  }
  return answer;
}
console.log(solution('StuDY'));

// charCodeAt() ascii code로 문자열을 변환하는 방법
// String.fromCharCode() 문자열로 다시 변환
// 60 ~ 90
// 97~102
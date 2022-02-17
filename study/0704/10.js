function solution(words,word){
  let answer = 0;
  for(let i =0; i< words.length;i++){
    if(words[i] == word){
      answer++;
    }
  }
  // let answer = s.split(word).length;
  // 구분자로 나누었으니까, 전체 길이의 -1을 해주면 구분자의 숫자가 나온다.
  // 만약 끝에 있어도, 자바스크립트는 빈문자열을 추가하게 된다.
  return answer;
}
const words = 'COMPUTERPROGRAMMING';
const word = 'R'
console.log(solution(words,word));



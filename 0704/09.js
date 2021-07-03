function solution(word){
  let answer = '';
  // 얕은 복사 문자열의 경우 값만 복사하게 된다.
  for(let i = 0; i < word.length;i++){
    // s = s.replace(/A/g,'#');
    // g를 붙이면 전체를 바라본다.
    if(word[i] === 'A'){
      answer+='#';
    }else{
      answer+= word[i];
    }
  }
  return answer;
}
const word = 'BANANA';
console.log(solution(word));
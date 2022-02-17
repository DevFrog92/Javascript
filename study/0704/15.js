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

// s.substring(a,b);
// a,b가 인덱스이다.
// a 부터 b-1까지 문자열을 뽑아 낸다.

// s.substr(a,b);
// a는 인덱스이고 b는 뽑아낼 숫자이다.
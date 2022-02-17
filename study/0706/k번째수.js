function solution(array, commands) {
  var answer = [];
  for(let n =0;n < commands.length;n++){
      let i = commands[n][0];
      let j = commands[n][1];
      let k = commands[n][2];
      let slicedArray = array.slice(i-1,j).sort((a,b)=>a-b);
      answer.push(slicedArray[k-1]);
  }
  return answer;
}

// 여기서 javascript의 sort에 대해서 정확히 알지 못해서 2번 테스트 케이스에서 실패했다.
// 정리가 필요하다.
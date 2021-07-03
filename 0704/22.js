function solution(arr){
  let answer = 0;
  let score_left = 0;
  let score_right = 0;

  for(let i =0; i<arr.length;i++){
    let score_x = 0;
    let score_y = 0;
    for(let j = 0; j<arr.length;j++){
      score_x+=arr[i][j];
      score_y+=arr[j][i];
      if(i == j){
        score_left+=arr[i][j];
      }
      if(i == arr.length-1-i){
        score_right+= arr[i][j];
      }
    }
    let max_value = Math.max(score_left,score_right,score_x,score_y);
    if(answer < max_value){
      answer = max_value;
    }
  }
  return answer
}

let arr=[[10, 13, 10, 12, 15], 
[12, 39, 30, 23, 11],
[11, 25, 50, 53, 15],
[19, 27, 29, 37, 27],
[19, 13, 30, 13, 19]];
console.log(solution(arr));
function solution(n,arr){
  let answer = 0;
  let dx = [0,0,1,-1];
  let dy = [1,-1,0,0];
  
  for(let i =0; i<n;i++){
    for(let j = 0;j<n;j++){
      let temp = 0
      for(let k = 0;k<4;k++){
        let value;
        if(i+dx[k] < 0 || j+dy[k] <0 ||i+dx[k] > n-1 || j+dy[k] >n-1 ) value = 0;
        else value  = arr[i+dx[k]][j+dy[k]]
        if(value < arr[i][j]){
          temp++;
        }
      }
      if(temp === 4){
        answer++;
      }
    }
  }

  return answer
}
let n = 5;
let arr=[[5, 3, 7, 2, 3], 
[3, 7, 1, 6, 1],
[7, 2, 5, 3, 4],
[4, 3, 6, 4, 1],
[8, 7, 3, 5, 2]];
console.log(solution(n,arr));
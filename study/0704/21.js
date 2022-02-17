function solution(arr){
  let answer = [];
  // 배열 초기값으로 생성하는 법
  // let n = arr.length;
  // let answer = Array.from({length:n},()=>1);
  for(let i =0;i<arr.length;i++){
    let score = 1;
    for(let j = 0;j<arr.length;j++){
      if(i !== j && arr[i] < arr[j]){
        score++;
      }
    }
    answer.push(score);
  }

  return answer
}
let arr=[87, 89, 92, 100, 76];
console.log(solution(arr));
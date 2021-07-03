function solution(num,array){
  const answer = array.filter((ele)=>{
    return ele%10 == num;
  })

  return answer.length
}
let num = 0;
let array = [12,20,54,30,87,91,30];
console.log(solution(num,array));
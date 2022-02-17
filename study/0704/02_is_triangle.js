function solution(num1,num2,num3){
  const inputArray = [num1,num2,num3];
  const maxValue = inputArray.reduce((acc,cur) => acc > cur?acc:cur);
  const sumOfAll = inputArray.reduce((acc,cur) => acc+cur);
  if((sumOfAll - maxValue) <= maxValue ) {
    return 'NO'
  }else{
    return 'YES'
  }
}

console.log(solution(13,33,17));
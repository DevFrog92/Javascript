function solution(array){
  let sumOfTall = array.reduce((acc,cur)=>acc+cur);
  let num1,num2;
  outer : for(let i=0;i<array.length;i++){
    for(let j = i+1;j<array.length;j++){
      if(sumOfTall - array[i] - array[j] === 100){
        num1 = array[i];
        num2 = array[j];
        // 아니면 splice 를 뒤에서 부터 하면 인덱스가 밀리는 현상을 막을 수 있다.
        break outer;
      }
    }
  }
  return array.filter(ele => ele != num1 && ele != num2).join(' ');
}

let array = [20,7,23,19,10,15,25,8,13];
console.log(solution(array));
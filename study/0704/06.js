function solution(array){
  let arrayForodd = array.filter(ele => ele%2);
  const sumOfOdd = arrayForodd.reduce((acc,cur) => acc+cur);
  const minValue = arrayForodd.reduce((acc,cur) => acc<cur?acc:cur);

  return `${sumOfOdd}\n${minValue}`
}

let array = [12,77,38,41,53,92,85];
console.log(solution(array));
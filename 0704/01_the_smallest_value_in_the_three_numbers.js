function solution(num1,num2,num3){
    let answer;
    const array = [num1,num2,num3];
    answer = array.reduce((acc,cur)=> acc < cur ? acc : cur);
    return answer
}

console.log(solution(6,5,11));
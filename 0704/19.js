
// function solution(a,b){
//   let answer = [];
//   let a_count = 0;
//   let b_count = 0;
//   let d_count = 0;
//   for(let i=0;i<a.length;i++){
//     let _a = a[i];
//     let _b = b[i];
//     if(_a === 1){
//       if(_b === 2){
//         b_count++;
//         answer.push('B');
//       }else if(_b === 3){
//         answer.push('A');
//       }else{
//         answer.push('D');
//       }
//     }else if(_a === 2){
//       if(_b === 2){
//         answer.push('D');
//       }else if(_b === 3){
//         answer.push('B');
//       }else{
//         answer.push('A');
//       }
//     }else {
//       if(_b === 2){
//         answer.push('A');
//       }else if(_b === 3){
//         answer.push('D');
//       }else{
//         answer.push('B');
//       }
//     }
//   }

//   return answer
// }

function solution(a,b){
  let answer = [];

  for(let i =0;i<a.length;i++){
    if(a[i] === b[i]){
      answer.push('D');
    }
    else if(a[i] === 1 && b[i] === 3){
      answer.push('A');
    }
    else if(a[i] === 2 && b[i] === 1){
      answer.push('A');
    }
    else if(a[i] === 3 && b[i] === 2){
      answer.push('A');
    }
    else {
      answer.push('B');
    }

  }
  return answer;
}

let a=[2, 3, 3, 1, 3];
let b=[1, 1, 2, 2, 3];
console.log(solution(a,b))

// 같은 경우를 미리 거른다
// A가 이기는 경우를 거른다
// 나머지는 모두 B가 이길것이다
// 반복되는 코드를 어떻게 줄일 수 있을지 고민해야 한다.
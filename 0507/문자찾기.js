'use strict'
function sol(a,b){
  let result = 0;
  let temp = a.split('');
  for (const i of temp) {
    if(i == b){
      result++;
    }
  }
  return result;
}

console.log(sol('COMPUTERPROGRAMMING','R'))
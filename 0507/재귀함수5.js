// 피보나치 수열

let n = 5;
let a = 1;
let b = 1
let c;
for (let i = 2; i < n; i++) {
  c = a+b;
  a = b;
  b = c;
}
console.log(b);


n = 5
function fibonacci(x){
  if(x == 1 || x == 2){
    return 1
  }

  return fibonacci(x-1) + fibonacci(x-2);
}

console.log('재귀함수',fibonacci(n))



// 피보나치 
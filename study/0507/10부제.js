
function sol(day,arr){
  let result = 0;
  for (const i of arr) {
    if(i%10 == day){
      result++;
    }
  }
  return result;
}
console.log(sol(0,[12,20,54,30,87,91,30]))
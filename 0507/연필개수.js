let result = 0;

function sol(n){
  result = parseInt(Math.floor(n/12),10);
  if(n%12){
    result++;
  }
  return result
};

console.log(sol(178));
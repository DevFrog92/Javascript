
let result = 0;
let x = '1231233'

while(true){
  if(x.length == 1) {
    result += parseInt(x,10);
    break;
  }
  // let temp = x.split('');
  result += parseInt(x[x.length-1],10)
  // result += temp.pop();
  x = x.slice(0,x.length-1);
}

console.log('반복문',result)
x = '1231233';
result = 0;
function rec(x) {
  if(x.length == 1){
    return parseInt(x,10);
  }

  return parseInt(x[x.length-1],10) + rec(x.slice(0,x.length-1));
}

console.log('재귀함수',rec(x))
let result = "";
let x = 'kwonyongsu'

while (true){
  if(x.length ==1){
    result += x;
    break;
  }
  let y = x.split('')
  result += String(y.pop());
  x = y.join('')
}
console.log(result)


result ="";
x = 'kwonyongsu'
function f(x){
  if(x.length == 1){
    return x;
  }
  return x[x.length-1] + f(x.slice(0,x.length-1))
}

console.log(f(x))

// 복습

let name = 'minji';
result = '';

while(true){
  if(name.length == 1) {
    result += name;
    break;
  }
  // let temp = name.split('');
  result += name[name.length-1]
  // result += temp.pop();
  name = name.slice(0,name.length-1);
}

console.log('반복문',result)
name = 'minji';
result = '';
function rec(name) {
  if(name.length == 1){
    return name;
  }

  return name[name.length-1] + rec(name.slice(0,name.length-1));
}

console.log('재귀함수',rec(name))
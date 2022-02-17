const min_val = (arr,crr) => arr<crr? arr:crr;

let temp = [];
let result = 0;
function sol(arr){
  for (const i of arr) {
    if(i%2){
      temp.push(i);
      result += i;
    }
  };
  return temp
}
let s = sol([12,77,38,41,53,92,85]);
let min_ = s.reduce(min_val);
console.log(result)
console.log(min_)

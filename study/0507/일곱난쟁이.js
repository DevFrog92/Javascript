const sum_ = (arr,crr) => arr+crr;

function sol(arr){
  let sum_val = arr.reduce(sum_);
  let a,b;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if(sum_val-arr[i]-arr[j] == 100){
        a = arr[i];
        b = arr[j];
      }
    }
  }
  return arr.filter(x => x != a && x!=b);
};

console.log(sol([20,7,23,19,10,15,25,8,13]));
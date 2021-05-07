let a =[10,20,30,1,2,3,5,9,11];
a.sort()
console.log(a) // javascipt 는 -> 사전식 정렬이 된다.
console.log(a.length)
console.log(a[a.length-1],a[0])

console.log(Math.max(a)); // array의 값을 넣지 못한다.
console.log(Math.min(a));

console.log(Math.max.apply(null,a)); // array의 값을 넣지 못한다.
console.log(Math.min.apply(null,a)); // 아주 큰 값을 만나면 오류가 발생하기도 한다. 메모리 효율도 안좋음


let m = a[0];
let n = a[0];
for (const variable of a) {
  if(m < variable){
    m = variable
  }

  if( n > variable){
    n = variable
  }
}
console.log(m,n)


// reduce
const reducerOne = (accumulator,currentvalue) => accumulator + currentvalue;
const reducerTwo = (accumulator,currentvalue) => accumulator - currentvalue;
const reducerThree = (accumulator,currentvalue) => accumulator > currentvalue? accumulator:currentvalue;
const reducerFour = (accumulator,currentvalue) => accumulator < currentvalue? accumulator:currentvalue;

console.log(a.reduce(reducerOne))
console.log(a.reduce(reducerTwo))
console.log(a.reduce(reducerThree))
console.log(a.reduce(reducerFour))


// 복습

let arr = [1,2,3,4,5,6]

const max_val = (acc,crr) => acc > crr ? acc:crr
const min_val = (acc,crr) => acc < crr ? acc:crr

console.log(arr.reduce(max_val))
console.log(arr.reduce(min_val))
// 선택 정렬 
// 가장 작은 녀석을 뽑아서 넣는다.

let a = [10,11,9,2,3,6,5,4]
let n = a.length
let result = [];

// while(a){}

// 최소값 찾기 함수
const min_val = (acc,crr) => acc < crr? acc : crr;

// a의 길이가 계속 바뀌기 때문에 주의해야한다.
for (let i = 0; i < n; i++) {
  let min_ = a.reduce(min_val)
  result.push(min_);
  // pop 뒤에서 꺼내기, push 뒤로 넣기, shift 앞에서 꺼내기, unshift 앞에서 넣기
  a.splice(a.indexOf(min_),1)
  console.log(a)
  console.log(result)
  
}



// 삽입정렬 
// 지금 있는 값의 앞 또는 뒤에 끼어들어서 정렬하는 알고리즘이다.

let arr2 = [5,10,66,77,54,32,11,15];
result = [];
n = arr2.length;

function findIndex(arr,val){
  for (const i in arr) {
    if (val < arr[i]) {
      return i;
    }
  };
  return arr.length;
};


for (let i = 0; i < n; i++) {
  let addVal = arr2.shift();
  // 정렬된 배열을 기준으로 위치를 뽑아야 한다.
  let index = findIndex(result,addVal);
  result.splice(index,0,addVal);
}
console.log(result)


// 병합정렬 (O(nlogn))
// array를 반으로 나누고 전부 나눠지지 않을때 까지 나는 다음 합쳐가면서 정렬한다.

let arr3 = [5,10,66,77,54,32,11,15];
// 분활 -> 절반으로 나눈다.
// [5,10,66,77],[54,32,11,15]
// [5,10],[66,77],[54,32],[11,15]
// [5],[10],[66],[77],[54],[32],[11],[15]
// 정복 -> 
// [5,10],[66,77],[32,54],[11,15]
// 0 번째 부터 확인
// [5,10],[66,77],[32,54],[11,15]
// [],[66,77],[32,54],[11,15]
// [5,10],[]
// [],[],[32,54],[11,15]
// [5,10,66,77],[11,15,32,54]
// [5,10,11,32,54,66,77]

// function concat(arr){
//   let n = arr.length;
//   if(n <= 1){
//     return arr
//   }

//   let middle = parseInt(n/2);
//   let left = concat(arr.slice(0,middle));
//   let right = concat(arr.slice(middle,)); //  마지막 값은 넣지 않아도 되지만 초기 값은 넣어야 한다.\
//   return `left ${left} , right ${right}\n`
  // }

// console.log(concat(arr3))

function concat(arr){
  let n = arr.length;
  let result = [];
  
  if(n <= 1){
    return arr
  }

  let middle = parseInt(n/2);
  let left = concat(arr.slice(0,middle));
  let right = concat(arr.slice(middle,)); //  마지막 값은 넣지 않아도 되지만 초기 값은 넣어야 한다.\

  // 두 그룹을 앞에서 부터 비교해서 값을 부여한다.
  while (left.length != 0 && right.length !=0){
    if(left[0] < right[0]){
      result.push(left.shift());
    }
    else{
      result.push(right.shift());
    }
  }

  // 왼쪽 그룹에 값이 남아 있으면 그대로 값을 넣는다.
  while (left.length != 0){
    result.push(left.shift());
  }

  // 오른쪽 그룹에 값이 남아 있으면 그대로 값을 넣는다.
  while (right.length != 0){
    result.push(right.shift());
  }

  return  result
}

console.log('병합정렬',concat(arr3))

// 퀵정렬 (worst - O(nlog2n),best - O(n**2) )
// 기준점을 정해서 작은 값과 큰 값으로 나눈다.
// pivot값(처음, 마지막, 중간값)을 사용한다.

let arr4 = [66,77,54,32,10,5,11,15];


// [66,77,54,32,10,5,11,15]

// pivot : 66;
// [,54,32,10,5,11,15] + [66]  +[77]

// [,32,10,5,11,15] + [54] + [66]  +[77]

// [,10,5,11,15] + [32] + [54] + [66]  +[77]

// pivot : 10;
// [5]+[10]+[11,15] + [32] + [54] + [66]  +[77]


function quick(arr){
  let n = arr.length;

  if(n <= 1){
    console.log(arr)
    return arr
  }

  let pivot = [arr.shift()];
  let left = [];
  let right = [];

  for (const i in arr) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    }else{
      right.push(arr[i]);
    }
  }
  return quick(left).concat(pivot,quick(right));
}
console.log('quick 정렬',quick(arr4))








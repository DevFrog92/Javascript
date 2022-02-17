// 1의 개수
// 0<= n <= 1000

let n = 1001;
let result = 0;
let word = '';

for (let i = 0; i < n; i++) {
  word += i;
}

function count_1(){

  for (let i = 0; i < n; i++) {
    String(i).split('').map(ele => {
      if(ele == 1){
        result++;
      }
    })
  }
  return result
}

function count_2(){

  
}


console.log(count_1())


console.log(word.match(/1/g).length);
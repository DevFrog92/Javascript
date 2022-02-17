// forEach, map, filter, reduce
// 고차 함수 : 매계변수로 함수를 입력받는다.
// function forEach(predicate,thisArg) {
//   for(let i = 0; i<a.length; i++){
//     predicate(a[i],i);
//     // index 를 함께 넘겨준다.
//   }
// }
// thisArg -> callback 함수 내부에서 사용되는 this의 arg이다.

a = [10, 11, 12, 13, 14, 15];
a.forEach(function(ele,index){console.log(ele,index,this)},[1,2]);
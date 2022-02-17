// 자바 스크립트 비동기 처리와 콜백 함수

// 비동기 처리
// 자바스크립트는 특정 코드의 연산이 끝날 때까지 코드의 실행을 멈추지 않고 다음 코드를 먼저 실행하는 특성이 있다.

// 가장 흔한 예로 fetch가 있다.
// 지정된 url로 get 요청(options에 아무것도 넘기지 않으면 GET 요청을 보낸다)을 보내 서버로 부터 지정 데이터를 받는다.

// function getData(){
//   let searchData;
//   fetch(`https://jjalbot.com/api/jjals?text=피자`)
//   .then(response => {
//     searchData = response.json();
//   })
//   return searchData;
// };

// console.log(getData()); 

// 현재 결과는 undefined가 출력된다.
// 이는 fetch를 통해서 요청한 데이터를 응답받지 못한 상태에서 seachData = response.json() 가 실행되었기 때문이다.
// 이렇게 특정 로직의 실행이 끝날 때까지 기다려주지 않고 나머지 코드를 먼저 실행하는 것이 비동기 처리이다.
// 이러한 비동기 처리가 있는 것은 서버에서 언제 데이터가 올지 알 수 없는데, 하염없이 데이터가 오기만을 기다릴수는 없기 때문이다.


// 콜백 함수로 비동기 처리 방식의 문제점 해결하기

// function getData(callbackFunc){
//   let searchData;
//   fetch(`https://jjalbot.com/api/jjals?text=피자`)
//   .then(response => callbackFunc(response.json()));
// }

// getData 로직이 끝나면 callbackFunc이 실행된다.
// getData(function(searchData){
//   console.log(searchData);
// });

// 하지만 콜백 함수의 사용은 Callback Hell을 마주할 수 있다.
// 콜백 안에 콜백 ....콜백....콜백...

// 이러한 콜백 지옥을 해결하는 방법에는 Promise와 Async를 사용한 방법이 있다. 


// Promise가 무엇인가?
// Promise는 자바스크립트 미동기 처리에 사용되는 객체이다.

// Promise code - basic

function getData(callbackFunc){
  return new Promise(function(resolve,reject){
    fetch(`https://jjalbot.com/api/jjals?text=피자`)
    .then(response => resolve(response));
  })
  
}

getData().then(function(searchData) {
  console.log(searchData);
})

// 프로미스의 3가지 상태(states)
// 1. pending(대기) : 비동기 처리 로직이 아직 완료되지 않은 상태
// new Promise()메서드를 호출할 때 콜백 함수를 선언할 수 있고, 콜백 함수의 인자는 resolve, reject이다.
new Promise(function(resolve,reject){});

// 2. Fullfilled(이행) : 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태
new Promise(function(resolve,reject){
  // 콜백함수의 인자를 아래와 같이 실행하면 이행상태가 된다.
  resolve();
});

// 이행 처리가 되면 .then()을 이용하여 처리 결과 값을 받을 수 있다.

getData().then(function(searchData) {
  console.log(searchData);
})

// 3. Rejected(실패) : 비동기 처리가 실패하거나 오류가 발생한 상태

new Promise(function(resolve,reject){
  // 콜백함수의 인자를 아래와 같이 실행하면 실패상태가 된다.
  reject();
});

getData().then().catch(function(error){
  // catch를 통해서 reject된 이유를 알 수 있다.
  console.log(error);
})

// 기본 콜백 함수와 프로미스의 단점을 보안하기 위한 문법이다.
//

async function getData(){
  const searchData = await fetchData();
  console.log(searchData);
}

//  async await 기본 문법

async function functionName(){
  await nameOfAsyncronousMethod();
} 
// 비동기 처리 메서드가 꼭 프로미스 객체를 반환해야 await가 의도한 대로 동작한다.


// async await 예외 처리
// try {} catch {}
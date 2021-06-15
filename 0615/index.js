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

function getData(callbackFunc){
  let searchData;
  fetch(`https://jjalbot.com/api/jjals?text=피자`)
  .then(response => callbackFunc(response.json()));
}

// getData 로직이 끝나면 callbackFunc이 실행된다.
getData(function(searchData){
  console.log(searchData);
});

// 하지만 콜백 함수의 사용은 Callback Hell을 마주할 수 있다.
// 콜백 안에 콜백 ....콜백....콜백...

// 이러한 콜백 지옥을 해결하는 방법에는 Promise와 Async를 사용한 방법이 있다. 



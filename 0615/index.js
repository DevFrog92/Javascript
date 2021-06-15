// 자바 스크립트 비동기 처리와 콜백 함수

// 비동기 처리
// 자바스크립트는 특정 코드의 연산이 끝날 때까지 코드의 실행을 멈추지 않고 다음 코드를 먼저 실행하는 특성이 있다.

// 가장 흔한 예로 fetch가 있다.
// 지정된 url로 get 요청(options에 아무것도 넘기지 않으면 GET 요청을 보낸다)을 보내 서버로 부터 지정 데이터를 받는다.

fetch(`https://jjalbot.com/api/jjals?text=피자`)
  .then(response => console.log(response.json()))
  
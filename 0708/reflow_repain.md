1. 렌더링이란 : HTML, CSS, Javascript등 개발자가 작성한 문서를 브라우저에 그래픽 형태로 출력하는 과정을 말한다. 대부분의 브라우저는 렌더링 엔진을 가지고 있다. 
2. 가장 먼저 서버로 부터 받은 HTML, CSS를 다운로드 받는다. 그리고 HTML, CSS파일은 단순한 텍스트이기 때문에 연산과 관리가 유리하도록 파싱 알고리즘을 통해 Object model로 만들게 된다. HTML은 DOM three, CSS는 CSSOM로 만들어지게 된다. 브라우저는 모든 HTML 토큰의 파싱이 끝나기도 전에 이후의 과정을 수행하며 미리 사용자에게 보여줄 수 있는 일부 내용을 출력한다.
3. Render three : DOM three 와 CSSOM  three가 만들어졌으면, 이 둘을 이용하여 Render three를 만들게 된다. Render three는 스타일 정보가 들어있으며, 실제 화면에 표현되는 노드들로만 구성된다.
4. Layout : 브라우저의 뷰포트내에서 각 노드들의 정확한 위치와 크기를 계산한다. 
5. Pain : Layout 계산이 완료되면 이제 요소들을 실제 화면에 그리게 된다. 
6. Reflow : 어떠한 이벤트가 발생하여 html요소의 크기나 위치등 레이아웃 수치를 수정하게 되면 그에 영향을 받는 자식 노드나 부모 노드들을 포함하여 layout 과정을 다시 수행하게 된다. 이렇게 되면 redner three와 각 요소들의 크기와 위치를 다시 계산하게된다.
    1. 윈도우 리사이징 시
    2. 초기 렌더링 시
    3. 요소 위치 변경 및 크기 변경 시
    4. 폰트 변경 및 이미지 변경 시
7. Repaint : Reflow만 수행되면 실제 화면에 반영되지 않는다. paint단계를 다시 수행해야한다. 하지만 반드시 reflow가 발생해야 일어나는 것은 아니다. 레이아웃을 다시 계산하는 경우가 아닌 연산은 paint만 다시 해주면 된다.
8. 성능 최적화 : visibility:invisible 대신 display:none을 사용하자. invisible의 경우 레이아웃 공간을 차지 하기 때문에 reflow의 대상이된다. 하지만 dispaly none은 레이아웃 공간을 차지 하지 않디 때문에 render three에서 제외된다.
9. Javascript + css를 조합하여 애니메이션이 많거나 레이아웃 변화가 많은 요소의 경우 position을 absolute 또는 fixed를 사용하여 영향을 받는 주변 노드들을 줄일 수 있다. fixed와 같이 영향을 받는 노드가 전혀 없는 경우 reflow과정이 전혀 필요가 없어지기 때문에 Repaint 연산비용만 들게 된다.
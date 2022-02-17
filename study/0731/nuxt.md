1. 폴더 이름을 `pages` 와 같이 명시해야하는 것은, nuxt는 웹사이트를 위해서 vue 위에서 확장하는 개념으로 컴포넌트 중심이 아니라 페이지 중심이다. 
2. index.vue -> 라우터 주소에서 생략이 가능하다.

3. nuxt는 hot reloading이 적용되어 있다.
4. DX: developer experience 
5. Dynamic routing?
6. vue의 라우팅은 컴포넌트를 바꾸는 눈속임이지만 nuxt의 경우 페이지를 이동하게 된다.
7. Code spliting의 개념이 들어가서 그렇다
8. 뷰의 경우 하나의 페이지에 수백만개의 컴포넌트가 있다면, 이 수백만개의 컴포넌트를 불러와야만 화면이 랜더링 된다. 이때 많은 성능 저하를 불러일으킨다. 네트워크 속도가 느리면..
9. 나는 컨포넌트 하나만 볼건데?
   1. 넉스트는 코드 스플리팅이 pages안의 뷰 파일은 개별 페이지로 인식한다. 하지만 페이지가 개별인 경우는 페이지가 넘어갈때 깜빡깜빡 거리는 문제가 있을 수 있다. 이것 때문에 뷰를 사용하는 것. 하지만 코드 스플리팅은 미리 다음에 갈 확률이 높은 페이지를 미리 불러올 수 있다. 이렇게 된다면 ux를 개선할 수 있다. 

- inject component에서 사용할 수있도록 $

- vuetify : mdi-아이콘 이름
- 

![image-20210731205149700](/Users/yongsukwon/Library/Application Support/typora-user-images/image-20210731205149700.png)

만약 개별 페이지에서 다른 레이아웃을 사용하고 싶다면 layout method를 사용한다.



- Layout 설계 시 가로 부터 설계 후 세로를 설계하는 것이 좋다.

@ > src folder

~ > root folder



"lint": "eslint **/*" 모든 파일을 검사해라



Contact style/ coding style guid/ test/ci/cd


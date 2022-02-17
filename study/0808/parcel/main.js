// bundler
// 다양한 패키지를 활용해 제작한 코드들를 외부의 패키지를 받아서 web에서 동작시킬 수 있는 형태(HTML, CSS, Javascript)로 변환한다.
// 수동의 작업을 번들러가 위임한다.


// bundler

// parcel
// 구성이 없는 단순한 자동 번들링
// 소/중형 프로젝트에 적합

// webpack
// 매우 꼼꼼한 구성
// 중/대형 프로젝트에 적합


// web의 표준
// 브라우저를 제작하는 vender사
// vernder prefix


// rc(Runtime Configurations의 약어)가 붙은 파일은 구성 파일을 의미한다.


// ESM
// CommonJs

//import autoprefixer from 'autoprefixer'
const autoprefixer = require('autoprefixer')

//export
module.exports = {
  plugins: [
    autoprefixer
  ]
}


// hot modile replacement / HMR
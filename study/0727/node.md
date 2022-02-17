# Node.js

Node.js는 Chrome V8 Javascript 엔진으로 빌드된 Javascript 런타임이다. 여기서 런타임은 프로그래밍 언어가 동작하는 환경이다.
즉, 자바스크립트가 동작할 수 있는 환경이 node.js이다.

HTML, CSS, Javascript를 제외한 모듈은 브라우저에서 동작하지 않는다. 이러한 모듈들은 javascript로 변환해 주어야 한다.

Javascript 프로그래밍 언어이다.

유의적 버전 3개의 마침표로 숫자를 나누게 된다.
Semantic versioning, SemVer
의미가 있다는 것으로 버전에 의미를 부여하는 것이다.
E.g, 12.14.1
12 : major version 기존 버전과 호환되지 않는 새로운 버전 사실상 이전의 버전과는 호환되지 않는다고 본다.
14 : minor version 기존 버전과 호환되는 새로운 기능이 추가된 버전
1 : Patch 기존 버전과 호환되는 버그 및 오타 등이 수정된 버전
^ : carrot 기호가 있다면 메이저 버전안에서 가장 최신 버전으로 업데이트 가능 ^12.14.1의 경우 12버전은 변경되지는 않지만 14, 1이 새롭게 변경될 수 있다. 즉, package.json이 update될 때 ^기회가 붙은 메인 버전은 변경없이 마이너와 패치만 업데이트가 된다.
npm init -y
package.json 에서 main은 npm 에서 module을 만들때 사용된다. 
script

node module

package-lock.json : 각 패키지들이 사용하는 내부 패키지에 대한 정보가 저장되어 있다.


-D : --save-dev의 단축어이다. ? 
devDependencies : 개발 의존성 패키지 설치
dependencies : 일반 의존성 설치

둘의 차이는 무엇인가? 
개발 의존성 패키지 : 개발 할때만 필요하다.
일반 의존성 설치 : 실제 브라우저에서 동작할 수 있는 개념이다.

build 난독화
작성된 코드를 읽기 어렵게 만드는 작업을 말한다. 빌드된 결과는 브라우저에서 해석되는 용도로, 용량을 축소하고 읽기 어렵게 만드는 등의 최적화를 거치는 것이 좋다.
// from 에 상대경로가 아니라면 node_module에서 모듈을 찾게 된다.
import getType from './getType'

// typeof data type을 리턴해 준다.
console.log(typeof true)
console.log(typeof undefined) // 자바스크립트 엔진에서 암묵적으로 부여하는 값
// object
console.log(typeof null) // 의도적으로 비워놓은 값
console.log(typeof {})
console.log(typeof [])
// getType function
console.log(getType(123))
console.log(getType(false))
console.log(getType(null))
console.log(getType({}))
console.log(getType([]))

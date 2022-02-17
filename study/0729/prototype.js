// prototype은 자바스크립트의 객체 유전자로 생각하는 것이 좋다.

function character(){
    this.q = '찌르기'
    this.w = '런'
    this.e = '눈 던지기'
    this.r = '궁'
}

// 부모의 유전자에 attack함수를 정의하려 자식이 사용할 수 있도록 적용한다.
character.prototype.attack = function() {
    console.log('공격하라!!!!')
}

const nunu = new character()

nunu.attack()
// object로 뭉쳐서 나오는 것을 상세하게 확인할 수 있는 함수 
export default function getType(data){
	return Object.prototype.toString.call(data).slice(8,-1)
}

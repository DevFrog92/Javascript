console.log('Not label Statement');
notLabel : for(let i = 0; i < 5; i++){
  for(let j = 0; j <5; j++){
    if(i+j === 0){
      console.log('내부 반복문이 끝난다.');
      break;
    }
    
  }
  console.log('하지만 외부 반복문은 끝나지 않는다.');
}

console.log('\nLabel Statement');
Label : for(let i = 0; i < 5; i++){
  for(let j = 0; j <5; j++){
    if(i+j === 0){
      console.log('내부 반복문이 끝난다.');
      break Label;
    }
  }
  console.log('외부 반복문까지 종료된다.')
}
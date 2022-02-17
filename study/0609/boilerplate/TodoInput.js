function TodoUnput({$app}){
  this.$target = document.createElement('input');

  $app.appendChild(this.$target);

  this.setState = () => {}
  this.render = () => {}

  //evnet binging
  this.$target.addEventListener('keydown',(e)=>{
    // 여기서 todo list를 어떻게 추가하는가?
    if(e.code === 'Enter'){
      console.log('Todo adding');
    }
  })

}
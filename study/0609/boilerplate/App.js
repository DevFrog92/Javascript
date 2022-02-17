function App({$target,initialState){
  this.state = initialState;
  this.$target = document.createElement('div');
  this.$app.className = 'app'

  $target.appendChild(this.$app);

  const todoInput = new TodoUnput({
    $app:this.$target,
    onAddTodo:(text) => { // callBack pattern 중 하나이다.
      this.setState([
        ...this.state,
        {
          text,
          isCompleted:false
        }
      ])
    }
  })
  const todoList = new TodoList({
    $app:this.$target,
    initialState:this.state
  });


  this.setState = (nexState) => {
    this.state = nexState
    this.render()
  }

  this.render = () =>{
    todoList.setState(this.state);

  }
}
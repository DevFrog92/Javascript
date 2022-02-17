function TodoList({$app, initialState}) {
  this.$target = document.createElement('ul')
  this.data = initialState

  $app.appendChild(this.$target);

  this.render = function() {
    this.$target.innerHTML = this.state
      .map(todo => `<div>${todo.text}</div>`)
      .join('')
  }

  this.setState = function(nextData) {
    this.data = nextData
    this.render()
  }

  this.render()
}

var React = require('react');

var AddTodo = React.createClass({
	handleSubmit: function (e) {
    e.preventDefault();
    var todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(todoText);
    } else {
			alert('please enter a new todo');
      this.refs.todoText.focus();
    }
  },
  render: function () {
		return (
			<div>
        <form ref="form" onSubmit={this.handleSubmit} className="new-todo-form">
          <input type="text" ref="todoText" placeholder="Enter new todo item"/>
          <button className="button expanded primary">Add Todo</button>
        </form>
			</div>
		)
	}
});

module.exports = AddTodo;

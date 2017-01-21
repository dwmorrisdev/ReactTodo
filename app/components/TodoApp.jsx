var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
	getInitialState: function () {
		return {
			todos: [
				{
					id: 1,
					text: 'walk the dog'
				},
				{
					id: 2,
					text: 'rake the leaves'
				},
				{
					id: 3,
					text: 'brush teeth'
				},
				{
					id: 4,
					text: 'shower and shave'
				},
				{
					id: 5,
					text: 'get dressed'
				}
			]
		};
	},
	render: function () {
		var {todos} = this.state;
		return (
			<div>
				<TodoList todos={todos}/>
			</div>
		)
	}

});

module.exports = TodoApp;

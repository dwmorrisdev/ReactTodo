var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch')

var TodoApp = React.createClass({
	getInitialState: function () {
		return {
			showCompleted: false,
			searchText: '',
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
	handleAddTodo: function (text) {
		alert('new todo is: ' + text);
	},
	handleSearch: function (showCompleted, searchText) {
		this.setState({
			showCompleted: showCompleted,
			searchText: searchText.toLowercase()
		})
	},
	render: function () {
		var {todos} = this.state;
		return (
			<div>
				<TodoSearch onSearch={this.handleSearch}/>
				<TodoList todos={todos}/>
				<AddTodo onAddTodo={this.handleAddTodo}/>
			</div>
		)
	}

});

module.exports = TodoApp;

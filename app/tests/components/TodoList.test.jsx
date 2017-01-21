var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
		it('should exist', () => {
			expect(TodoList).toExist();
		});

		it('should render one Todo component for each todo item', () => {
			//create test array.
			var todos = [{
				id: 1,
				text: 'Do something'
			},{
				id: 2,
				text: 'Check mail'
			}];
			var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
			//determine how many components in todos. (scry finds all of the nested components.)
			var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

			// test to see is length of array matches the number of components. If 1:1 ratio, all is well.
			expect(todosComponents.length).toBe(todos.length);
		});
});

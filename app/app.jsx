var React = require('react');
var ReactDOM = require('react-dom');
var Favicon = require('react-favicon');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');


// insert specified favicon                          -------NOT WORKING---------
<Favicon url='../assets/react-logo-trans.png'/>

//load foundation
$(document).foundation();

//app css
require('style!css!sass!applicationStyles');

ReactDOM.render(
<TodoApp/>,
  document.getElementById('app')
);

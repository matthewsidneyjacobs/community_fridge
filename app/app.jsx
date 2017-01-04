var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var MyFridge = require('MyFridge');
var CommunityFridge = require('CommunityFridge');
var Login = require('Login');
var Chat = require('Chat');

//Load foundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={MyFridge}/>
      <Route path="community" component={CommunityFridge}/>
      <Route path="chat" component={Chat}/>


      <Route path="login" component={Login}/>
    </Route>
  </Router>,
  document.getElementById('app')
);

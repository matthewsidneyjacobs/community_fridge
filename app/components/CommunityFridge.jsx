var React = require('react');
var CommunityItems = require('CommunityItems');

var {Link, IndexLink} = require('react-router');

var CommunityFridge = React.createClass({
  render: function () {
    return (
      <div>
        <h1 className="page-title">Community Fridge</h1>
        <CommunityItems/>
        <Link to="/chat" activeClassName="active-link">Chat</Link>
      </div>
    );
  }
})

module.exports = CommunityFridge;

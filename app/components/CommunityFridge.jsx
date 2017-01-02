var React = require('react');
var CommunityItems = require('CommunityItems');

var CommunityFridge = React.createClass({
  render: function () {
    return (
      <div>
        <h1 className="page-title">Community Fridge</h1>
        <CommunityItems/>
      </div>
    );
  }
})

module.exports = CommunityFridge;

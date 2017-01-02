var React = require('react');
var PersonalItems = require('PersonalItems');
var PersonalControls = require('PersonalControls');

var MyFridge = React.createClass({
  render: function () {
    return (
      <div>
        <h1 className="page-title">My Fridge</h1>
        <PersonalItems/>
        {/* <PersonalControls/> */}
      </div>
    )
  }
})

module.exports = MyFridge;

var React = require('react');

var CommunityItems = React.createClass({
  render: function () {
    return (
      <div>
        <h4>This is going to be a list of everyone's items</h4>
        <ul>
          <li>Test1</li>
          <li>Test2</li>
          <li>Test3</li>
          <li>Test4</li>
          <li>Test5</li>
          <li>Test6</li>
        </ul>
      </div>
    )
  }
})

module.exports = CommunityItems;

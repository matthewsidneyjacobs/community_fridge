var React = require('react');

var FoodItem = React.createClass({
  render: function() {
    var {text, id} = this.props;

    return (
      <div>
        <p>{id}. {text}</p>
      </div>
    )
  }
});

module.exports = FoodItem;

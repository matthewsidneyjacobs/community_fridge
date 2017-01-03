var React = require('react');
var FoodItem = require('FoodItem');

var FoodList = React.createClass({
  render: function() {
    var {items} = this.props;
    var renderItems = () => {
      return items.map((item) => {
        return (
          <FoodItem key={item.id} {...item} onToggle={this.props.onToggle}/>
        )
      });
    };
    return (
      <div>
        {renderItems()}
      </div>
    )
  }
});

module.exports = FoodList;

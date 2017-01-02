var React = require('react');
var FoodList = require('FoodList');

var PersonalItems = React.createClass({
  getInitialState: function() {
    return {
      items: [
        {
          id: 1,
          text: 'carrots'
        },
        {
          id:2,
          text: 'cabbage'
        },
        {
          id:3,
          text: 'eggs'
        },
        {
          id:4,
          text: 'yams'
        }
      ]
    }
  },
  render: function () {
    var {items} = this.state;
    return (
      <div>
        <FoodList items={items}/>
      </div>
    )
  }
})

module.exports = PersonalItems;

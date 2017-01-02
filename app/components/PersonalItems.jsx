var React = require('react');
var FoodList = require('FoodList');
var PersonalControls = require('PersonalControls');
var FoodSearch = require('FoodSearch');

var PersonalItems = React.createClass({
  getInitialState: function() {
    return {
      searchText: '',
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
  handleAddItem: function(text) {
    alert('new food item:' + text);
  },
  handleSearch: function(searchText) {
    this.setState({
      searchText: searchText
    })
  },
  render: function () {
    var {items} = this.state;
    return (
      <div>
        <FoodSearch onSearc={this.handleSearch}/>
        <FoodList items={items}/>
        <PersonalControls onAddItem={this.handleAddItem}/>
      </div>
    )
  }
})

module.exports = PersonalItems;

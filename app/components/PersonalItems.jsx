var React = require('react');
var FoodList = require('FoodList');
var PersonalControls = require('PersonalControls');
var FoodSearch = require('FoodSearch');
var ItemsAPI = require('ItemsAPI');
var uuid = require('node-uuid');

var PersonalItems = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      items: ItemsAPI.getItems()
    };
  },
  componentDidUpdate: function() {
    ItemsAPI.setItems(this.state.items);
  },
  handleAddItem: function(text) {
    this.setState ({
      items: [
        ...this.state.items,
        {
          id:uuid(),
          text: text,
          completed: false
        }
      ]
    })
  },
  handleSearch: function(searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  handleToggle: function(id) {
    var updatedItems = this.state.items.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    this.setState({items: updatedItems});
  },
  render: function () {
    var {items} = this.state;
    return (
      <div>
        <FoodSearch onSearc={this.handleSearch}/>
        <FoodList items={items} onToggle={this.handleToggle}/>
        <PersonalControls onAddItem={this.handleAddItem}/>
      </div>
    )
  }
})

module.exports = PersonalItems;

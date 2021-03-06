var React = require('react');
var FoodList = require('FoodList');
var PersonalControls = require('PersonalControls');
var FoodSearch = require('FoodSearch');
var ItemsAPI = require('ItemsAPI');
var uuid = require('node-uuid');
var moment = require('moment');

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
          completed: false,
          createdAt: moment().unix()
        }
      ]
    })
  },
  handleSearch: function(searchText) {
    this.setState({
      // showCompleted: showCompleted,
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
    var {items, showCompleted, searchText} = this.state;
    var filteredItems = ItemsAPI.filterItems(items, showCompleted, searchText);
    return (
      <div className="personal-container">
        <FoodSearch onSearch={this.handleSearch}/>
        <FoodList items={filteredItems} onToggle={this.handleToggle}/>
        <PersonalControls onAddItem={this.handleAddItem}/>
      </div>
    )
  }
})

module.exports = PersonalItems;

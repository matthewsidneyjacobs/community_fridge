// var React = require('react');

// var React = require('react');
// var FoodList = require('FoodList');
// var PersonalControls = require('PersonalControls');
// var FoodSearch = require('FoodSearch');
// var ItemsAPI = require('ItemsAPI');
// var uuid = require('node-uuid');
// var moment = require('moment');
//
//
// var CommunityItems = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <FoodList/>
//       </div>
//     )
//   }
// })
//
// module.exports = CommunityItems;


var React = require('react');
var FoodList = require('FoodList');
var PersonalControls = require('PersonalControls');
var FoodSearch = require('FoodSearch');
var ItemsAPI = require('ItemsAPI');
var uuid = require('node-uuid');
var moment = require('moment');

var CommunityItems = React.createClass({
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
        <FoodList items={filteredItems} onToggle={this.handleToggle}/>
      </div>
    )
  }
})

module.exports = CommunityItems;

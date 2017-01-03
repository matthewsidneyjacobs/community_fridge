var $ = require('jquery');

module.exports = {
  setItems: function (items) {
    if ($.isArray(items)) {
      localStorage.setItem('items', JSON.stringify(items));
      return items;
    }
  },
  getItems: function () {
    var stringItems = localStorage.getItem('items');
    var items = [];

    try {
      items = JSON.parse(stringItems);
    } catch(e) {

    }
    if ($.isArray(items)) {
      return items;
    } else {
      return [];
    }
  },
  filterItems: function(items, showCompleted, searchText) {
    var filteredItems = items;

    filteredItems = filteredItems.filter((item) => {
      var select = item.text.toLowerCase();
      return searchText.length === 0 || select.indexOf(searchText) >-1;
    })
    return filteredItems;
  }
}

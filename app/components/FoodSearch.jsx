var React = require('react');

var FoodSearch = React.createClass({
  handleSearch: function() {
    var searchText = this.refs.searchText.value;

    this.props.onSearch( searchText);
  },
  render: function () {
    return (
      <div className="personalSearch">
        <div>
          <input className="search-box" type="search" ref="searchText" placeholder="Search Food Items" onChange={this.handleSearch}/>
          {/* //onchange kinda seems like filter in angular */}
        </div>
        {/* will i need to show completed trades? maybe past trades? this is the label for it */}
        {/* <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
            Show Completed Trades
          </label>
        </div> */}
      </div>
    )
  }
})

module.exports = FoodSearch;

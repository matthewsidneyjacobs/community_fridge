var React = require('react');

var PersonalControls = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();

    var newFoodItem = this.refs.EditItems.value;

    if (newFoodItem.length>0) {
      this.refs.EditItems.value= '';
      this.props.onAddItem(newFoodItem)
    } else {
      this.refs.EditItems.focus();
    }
  },
  render: function () {
    return (
      <div>
      <form ref="form" onSubmit={this.onSubmit} className="UpdateItems-form">
        <input type="text" ref="EditItems" placeholder="Enter New Food Item Here"/>
        <button className="button expanded">Add New Item</button>
      </form>
    </div>
    )
  }
})

module.exports = PersonalControls;

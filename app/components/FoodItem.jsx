var React = require('react');
var moment = require('moment');

var FoodItem = React.createClass({
  render: function() {
    var {text, id, completed, createdAt} = this.props;

    var renderDate = () => {
    var message = "Added on: ";
    var timestamp = createdAt;



    return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
  };
    return (
      <div  className="item" onClick={()=>{
        this.props.onToggle(id);
      }}>
      <div>
        <input type="checkbox" checked={completed}/>
      </div>
      <div>
        {text}
        <p>{renderDate()}</p>
      </div>

      </div>
    )
  }
});

module.exports = FoodItem;

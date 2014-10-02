var React = require('react');

var Time = React.createClass({

  render : function() {
    var time = (new Date(this.props.time)).toString();
    return <small>{time}</small>;
  }

});

module.exports = Time;
var React = require('react');

var ProfilePicture = React.createClass({

  render : function() {
    return (
      <div>
        {this.props.subject}
      </div>
    );
  }

});

module.exports = ProfilePicture;
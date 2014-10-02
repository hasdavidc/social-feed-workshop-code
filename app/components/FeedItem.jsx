var React = require('react');

var ProfilePicture = require('components/ProfilePicture');

var FeedItem = React.createClass({

  render : function() {
    return (
      <div>
        <ProfilePicture subject={this.props.story.name} />
        <h1>{this.props.story.name}</h1>
        <div>
          {this.props.story.content}
        </div>
      </div>
    );
  }

});

module.exports = FeedItem;
var React = require('react');

var Comment = require('components/Comment');

var CommentsList = React.createClass({

  render : function() {
    return (
      <div>
        {this.props.comments.map(comment => <Comment comment={comment} />)}
      </div>
    );
  }

});

module.exports = CommentsList;
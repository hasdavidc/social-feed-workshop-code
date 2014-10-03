var React = require('react');
var _ = require('lodash');

var FeedActions = require('actions/FeedActions');

var Comment = require('components/Comment');
var NewEntityEditor = require('components/NewEntityEditor');

var CommentsList = React.createClass({

  render : function() {
    return (
      <section>
        <div>
          {this.props.feedItem.comments.map(comment => <Comment comment={comment} />)}
        </div>
        <div>
          <NewEntityEditor
            placeholderText="Add New Comment"
            submitText="Publish Comment"
            handleSubmit={this._handleSubmit} />
        </div>
      </section>
    );
  },

  _handleSubmit : function(newEntity) {
    var feedItem = _.clone(this.props.feedItem, true);
    feedItem.comments.push(newEntity);

    FeedActions.upsertFeedItem(feedItem);
  }

});

module.exports = CommentsList;
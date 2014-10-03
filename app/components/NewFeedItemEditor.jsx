var React = require('react');

var FeedActions = require('actions/FeedActions');

var NewEntityEditor = require('components/NewEntityEditor');

var NewFeedItemEditor = React.createClass({

  render : function() {
    return (
      <NewEntityEditor
            placeholderText="Add New Feed Item"
            submitText="Publish Feed Item"
            handleSubmit={this._handleSubmit} />
    );
  },

  _handleSubmit : function(newEntity) {
    newEntity.comments = [];
    FeedActions.upsertFeedItem(newEntity);
  }

});

module.exports = NewFeedItemEditor;
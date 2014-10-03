var React = require('react');

var FeedActions = require('actions/FeedActions');

var config = require('config');

var NewFeedItemEditor = React.createClass({

  getInitialState : function() {
    return {
      newFeedItem : ''
    };
  },

  render : function() {
    return (
      <section className="new-feed-item-editor clearfix">
        <textarea
          className="form-control"
          rows="3"
          placeholder="Add New Feed Item"
          value={this.state.newFeedItem}
          onChange={this._handleChange} >
        </textarea>

        <button className="btn btn-default pull-right" onClick={this._publish}>
          Publish Feed Item
        </button>
      </section>
    );
  },

  _handleChange : function(event) {
    this.setState({
      newFeedItem : event.target.value
    });
  },

  _publish : function() {
    FeedActions.createNewFeedItem({
      name : config.user,
      content : this.state.newFeedItem,
      date : (new Date()).valueOf(),
      comments : []
    });

    this.setState({
      newFeedItem : ''
    });
  }

});

module.exports = NewFeedItemEditor;
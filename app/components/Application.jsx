var React = require('react');

require('bootstrap/dist/css/bootstrap.css');
require('styles/styles.less');

var FeedStore = require('stores/FeedStore');
var FeedActions = require('actions/FeedActions');

var FeedItem = require('components/FeedItem');

var getState = function() {
  return {
    feedItems  : FeedStore.feedItems
  };
};

var counter = 0;

var Application = React.createClass({

  getInitialState : function() {
    return getState();
  },

  componentDidMount : function() {
    FeedStore.addChangeListener(this._onChange);
    FeedActions.fetch();
  },

  componentWillUnmount : function() {
    FeedStore.removeChangeListener(this._onChange);
  },

  _onChange : function() {
    this.setState(getState());
  },

  _sendMessage : function() {
    FeedActions.sendMessage('hello world! ' + counter++);
  },

  render : function() {
    return (
      <div className="wrapper">
        {this.state.feedItems.map(feedItem => <FeedItem feedItem={feedItem} />)}
      </div>
    );
  }

});

React.renderComponent(Application(), document.body);
var React = require('react');

require('bootstrap/dist/css/bootstrap.css');
require('styles/styles.less');

var FeedStore = require('stores/FeedStore');
var FeedActions = require('actions/FeedActions');

var NewFeedItemEditor = require('components/NewFeedItemEditor');
var FeedItemsList = require('components/FeedItemsList');

var getState = function() {
  return {
    feedItems  : FeedStore.feedItems
  };
};

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

  render : function() {
    return (
      <div className="wrapper">
        <NewFeedItemEditor />
        <FeedItemsList feedItems={this.state.feedItems} />
      </div>
    );
  }

});

React.renderComponent(Application(), document.body);
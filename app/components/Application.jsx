var React = require('react');

require('bootstrap/dist/css/bootstrap.css');
require('styles/styles.less');

var StoreListenerMixin = require('mixins/StoreListenerMixin');

var FeedStore = require('stores/FeedStore');

var NewFeedItemEditor = require('components/NewFeedItemEditor');
var FeedItemsList = require('components/FeedItemsList');

var Application = React.createClass({

  mixins : [StoreListenerMixin(FeedStore)],

  render : function() {
    return (
      <div className="wrapper">
        <NewFeedItemEditor />
        <FeedItemsList feedItems={this.state.feedItems} />
      </div>
    );
  },

  getStateFromStores : function() {
    return {
      feedItems  : FeedStore.feedItems
    };
  }

});

React.renderComponent(Application(), document.body);
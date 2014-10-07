var React = require('react');
var _ = require('lodash');

require('bootstrap/dist/css/bootstrap.css');
require('styles/styles.less');

var StoreListenerMixin = require('mixins/StoreListenerMixin');

var FeedStore = require('stores/FeedStore');

var Application = React.createClass({

  mixins : [StoreListenerMixin(FeedStore)],

  render : function() {

    var feedItemsHtml = _.map(this.state.feedItems, item => {

      return (
        <div>
          <strong>{item.name}</strong> said <strong>{item.content}</strong> on <strong>{item.date}</strong>
          <div>Comments:</div>
          {item.comments.map(comment => {
            return (
              <div>
                <strong>{comment.name}</strong> said <strong>{comment.content}</strong> on <strong>{comment.date}</strong>
              </div>
            );
          })}

          <br/><br/><br/>
        </div>
      );
    });

    return (
      <div className="wrapper">
        {feedItemsHtml}
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
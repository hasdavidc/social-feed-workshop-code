var React = require('react');

var FeedItem = require('components/FeedItem');

var FeedItemList = React.createClass({

  render : function() {
    return (
      <section>
        {this.props.feedItems.map(feedItem => <FeedItem feedItem={feedItem} />)}
      </section>
    );
  }

});

module.exports = FeedItemList;
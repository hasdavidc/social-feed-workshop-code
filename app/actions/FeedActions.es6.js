var AppDispatcher = require('../AppDispatcher');
var FeedConstants = require('constants/FeedConstants');

var FeedActions = {

  fetch : () => {
    AppDispatcher.handleViewAction({
      actionType : FeedConstants.FETCH
    });
  },

  upsertFeedItem : feedItem => {
    AppDispatcher.handleViewAction({
      actionType : FeedConstants.UPSERT_FEED_ITEM,
      feedItem : feedItem
    });
  }

};

module.exports = FeedActions;
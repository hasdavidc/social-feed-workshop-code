var AppDispatcher = require('../AppDispatcher');
var FeedConstants = require('constants/FeedConstants');

var FeedActions = {

  fetch : () => {
    AppDispatcher.handleViewAction({
      actionType : FeedConstants.FETCH
    });
  },

  createNewFeedItem : feedItem => {
    AppDispatcher.handleViewAction({
      actionType : FeedConstants.CREATE_NEW_FEED_ITEM,
      feedItem : feedItem
    });
  }

};

module.exports = FeedActions;
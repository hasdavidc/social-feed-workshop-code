var AppDispatcher = require('../AppDispatcher');
var FeedConstants = require('constants/FeedConstants');

var FeedActions = {

  fetch : () => {
    AppDispatcher.handleViewAction({
      actionType : FeedConstants.FETCH
    });
  }

};

module.exports = FeedActions;
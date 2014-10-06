var request = require('superagent');

var BaseStore = require('./BaseStore');
var FeedConstants = require('constants/FeedConstants');

var config = require('config');

var storeInstance;

var feedItems = [];

var query = () => {
  return request
    .get('https://api.mongolab.com/api/1/databases/react-workshop-social-feed/collections/posts?apiKey=' + config.apiKey)
    .end((err, res) => {
      feedItems = res.body;
      storeInstance.emitChange();
    });
};

// also just initially populate data here, though you could trigger FeedActions.fetch
// in Application's componentDidMount as well
query();

var upsertItem = feedItem => {
  return request
    .post('https://api.mongolab.com/api/1/databases/react-workshop-social-feed/collections/posts?apiKey=' + config.apiKey)
    .send(feedItem)
    .set('Accept', 'application/json')
    .end(query);
};

class FeedStore extends BaseStore {
  get feedItems() {
    return feedItems;
  }
}

var actions = {};

actions[FeedConstants.FETCH] = action => {
  query();
};

actions[FeedConstants.UPSERT_FEED_ITEM] = action => {
  upsertItem(action.feedItem);
};

storeInstance = new FeedStore(actions);

module.exports = storeInstance;
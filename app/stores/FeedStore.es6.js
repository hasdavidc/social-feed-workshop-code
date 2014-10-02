var request = require('superagent');

var BaseStore = require('./BaseStore');
var FeedConstants = require('constants/FeedConstants');

var config = require('config');

var storeInstance;

var stories = [];

var query = cb => {
  return request
    .get('https://api.mongolab.com/api/1/databases/react-workshop-social-feed/collections/posts?apiKey=' + config.apiKey)
    .end(cb);
};

class FeedStore extends BaseStore {
  get stories() {
    return stories;
  }
}

var actions = {};

actions[FeedConstants.FETCH] = action => {
  query((err, res) => {
    stories = res.body;
    storeInstance.emitChange();
  })
};

storeInstance = new FeedStore(actions);

module.exports = storeInstance;
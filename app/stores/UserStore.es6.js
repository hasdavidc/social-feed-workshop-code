var request = require('superagent');

var BaseStore = require('./BaseStore');

var config = require('config');

var storeInstance;

var users = {};


request
  .get(`https://api.mongolab.com/api/1/databases/react-workshop-social-feed/collections/users?apiKey=${config.apiKey}`)
  .end((err, res) => {
    users = res.body[0];
    storeInstance.emitChange();
  });


class UserStore extends BaseStore {
  getProfilePicImage(userId) {
    if (!users[userId]) {
      return '';
    }

    return `https://ho-websites.s3.amazonaws.com/whois/portraits/${users[userId]}.png`;
  }
}

storeInstance = new UserStore();

module.exports = storeInstance;
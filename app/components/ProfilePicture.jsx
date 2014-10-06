var React = require('react');

var StoreListenerMixin = require('mixins/StoreListenerMixin');

var UserStore = require('stores/UserStore');

var ProfilePicture = React.createClass({

  mixins : [StoreListenerMixin(UserStore)],

  render : function() {
    return <img className={this.props.class + ' profilePic'} src={this.state.imageUrl} />;
  },

  getStateFromStores : function() {
    return {
      'imageUrl' : UserStore.getProfilePicImage(this.props.user)
    };
  }

});

module.exports = ProfilePicture;
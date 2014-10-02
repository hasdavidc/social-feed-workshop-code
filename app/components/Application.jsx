var React = require('react');

var FeedStore = require('stores/FeedStore');
var FeedActions = require('actions/FeedActions');

var FeedItem = require('components/FeedItem');

var getState = function() {
  return {
    stories  : FeedStore.stories
  };
};

var counter = 0;

var Application = React.createClass({

  getInitialState : function() {
    return getState();
  },

  componentDidMount : function() {
    FeedStore.addChangeListener(this._onChange);
    FeedActions.fetch();
  },

  componentWillUnmount : function() {
    FeedStore.removeChangeListener(this._onChange);
  },

  _onChange : function() {
    this.setState(getState());
  },

  _sendMessage : function() {
    FeedActions.sendMessage('hello world! ' + counter++);
  },

  render : function() {
    return (
      <div>
        {this.state.stories.map(story => {
          return <FeedItem story={story} />;
        })}
      </div>
    );
  }

});

React.renderComponent(Application(), document.body);
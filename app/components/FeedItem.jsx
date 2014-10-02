var React = require('react');

var ProfilePicture = require('components/ProfilePicture');
var CommentsList = require('components/CommentsList');
var Time = require('components/Time');

var FeedItem = React.createClass({

  render : function() {
    return (
      <div className="well post">

        <div className="media">
          <a className="pull-left" href="#">
            <ProfilePicture class="medium media-object" subject={this.props.feedItem.name} />
          </a>

          <div className="media-body">
            <h4 className="media-heading">{this.props.feedItem.name}</h4>
            <div>
              <Time time={this.props.feedItem.date} />
            </div>
          </div>
        </div>

        <div className="content">
          {this.props.feedItem.content}
        </div>

        <CommentsList comments={this.props.feedItem.comments} />

      </div>
    );
  }

});

module.exports = FeedItem;
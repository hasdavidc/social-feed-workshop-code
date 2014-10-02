var React = require('react');

var ProfilePicture = require('components/ProfilePicture');
var Time = require('components/Time');

var Comment = React.createClass({

  render : function() {

    return (
      <div className="media comment">
        <a className="pull-left" href="#">
          <ProfilePicture class="small media-object" subject={this.props.comment.name} />
        </a>

        <div className="media-body">

          <div className="clearfix">
            <h4 className="media-heading pull-left">{this.props.comment.name}</h4>
            <div className="pull-left">{this.props.comment.content}</div>
          </div>

          <div>
            <Time time={this.props.comment.date} />
          </div>

        </div>

      </div>
    );
  }

});

module.exports = Comment;
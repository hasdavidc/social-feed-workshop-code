var React = require('react');

var imageMap = {
  'david' : 'cff20880868f54a8c2b77953dba525a9e6929fe6c1f2a701dbcf4fd1',
  'dave' : 'b1916087ee7f95107d0198384ae6c75f60285231601319149e47cb55',
  'roie' : '6428563e5e2625d16eb0a8628b6eaf5867dc64ee94ede685a7ad5821',
  'jack' : '89135107665c8b7bc22fe9f8dee2d2af4e711725768c86c2462f4609',
  'kevin' : '75511a04d3baa126992dec6007449795be48504f748d86dc6a5148dc'
};

var ProfilePicture = React.createClass({

  render : function() {
    return <img className={this.props.class + ' profilePic'} src={'https://ho-websites.s3.amazonaws.com/whois/portraits/' + imageMap[this.props.subject] + '.png'} />;
  }

});

module.exports = ProfilePicture;
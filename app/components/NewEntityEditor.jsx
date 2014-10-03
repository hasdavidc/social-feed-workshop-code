var React = require('react');

var config = require('config');

var NewEntityEditor = React.createClass({

  getInitialState : function() {
    return {
      newEntity : ''
    };
  },

  render : function() {
    return (
      <section className="new-entity-editor clearfix">
        <textarea
          className="form-control"
          rows="3"
          placeholder={this.props.placeholderText}
          value={this.state.newEntity}
          onChange={this._handleChange} >
        </textarea>

        <button className="btn btn-default pull-right" onClick={this._publish}>
          {this.props.submitText}
        </button>
      </section>
    );
  },

  _handleChange : function(event) {
    this.setState({
      newEntity : event.target.value
    });
  },

  _publish : function() {
    this.props.handleSubmit({
      name : config.user,
      content : this.state.newEntity,
      date : (new Date()).valueOf()
    });

    this.setState({
      newEntity : ''
    });
  }

});

module.exports = NewEntityEditor;
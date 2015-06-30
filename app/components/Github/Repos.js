var React = require('react');

var Repos = React.createClass({

  propTypes: {
    username: React.PropTypes.string.isRequired,
    repos: React.PropTypes.array.isRequired
  },
  render: function () {
    return (
      <div>
        User name:  { this.props.username }
        Repos: { this.props.repos }
      </div>
    )
  }

});

module.exports = Repos;
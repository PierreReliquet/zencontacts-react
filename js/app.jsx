var React = require('react');
var ContactList = require('./contact-list.jsx');
var ContactEdit = require('./contact-edit.jsx');

module.exports = React.createClass({
  componentDidMount: function() {
    window.addEventListener('hashchange', function() {
      this.setState();
    }.bind(this));
  },
  render: function() {
    if(location.hash.indexOf('edit') !== -1) {
      return (
        <ContactEdit />
      );
    } else {
      return (
        <ContactList />
      );
    }
  }
});

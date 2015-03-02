var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <ul>
          {
            this.props.contacts.map(function(contact) {
              return (
                <li>
                  <a href="#/edit{contact.id}">{contact.firstName} {contact.lastName}</a>
                </li>
              );
            })
          }
      </ul>
    );
  }
});

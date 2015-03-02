var React = require('react');
var VCard = require('./vcard.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="row">
        {
          this.props.contacts.map(function(contact) {
            return <VCard key={contact.id} contact={contact} />
          })
        }
      </div>
    );
  }
});

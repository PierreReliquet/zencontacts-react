var React = require('react');
var VCard = require('./vcard.jsx');
var qwest = require('qwest');

module.exports = React.createClass({
  getInitialState: function() {
    return {
        contacts: []
    }
  },
  componentDidMount: function() {
   qwest.get('/rest/contacts')
   .then(function(result) {
     result = JSON.parse(result);
     this.setState({
       contacts: result
     });
   }.bind(this));
  },
  render: function() {
    return (
      <div className="row">
        {
          this.state.contacts.map(function(contact) {
            return <VCard key={contact.id} contact={contact} />
          })
        }
      </div>
    );
  }
});

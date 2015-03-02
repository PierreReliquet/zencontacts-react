var React = require('react');
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
      <ul>
        {
          this.state.contacts.map(function(contact) {
            return (
              <li>
                <a href={'#/edit/' + contact.id}>{contact.firstName} {contact.lastName}</a>
              </li>
            );
          })
        }
      </ul>
    );
  }
});

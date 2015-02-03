var VCard = React.createClass({
  render: function() {
    return (
      <div className="contact-card col-xs-12 col-sm-6">
          <div className="contact-card-inner">
              <h4>
                <span>{this.props.contact.firstName}</span>
                <span>{this.props.contact.lastName}</span>
              </h4>
              <div className="contact-address">{this.props.contact.address}</div>
              <div className="contact-phone">{this.props.contact.phone}</div>
          </div>
      </div>
    );
  }
});

var VCardList = React.createClass({
  getInitialState: function() {
   return {
     contacts:[]
   };
  },
  componentDidMount: function() {
   http.get('contacts.json', function(result) {
     if (Array.isArray(result)) {
       this.setState({
         contacts: result
       });
     }
   }.bind(this));
  },
  render: function() {
    return (
      <div>
        {this.state.contacts.map(function(contact) {
          return <VCard key={contact.id} contact={contact} />
        })}
      </div>
    );
  }
})

React.render(
  <VCardList />,
  document.querySelector('#contactList')
);

var OneShortListContact = React.createClass({
  render: function() {
    return (
      <li>
        <a href={"#/edit/" + this.props.contact.id}>
          <span>{this.props.contact.firstName}</span>&nbsp;
          <span>{this.props.contact.lastName}</span>
        </a>
      </li>
    );
  }
});

var ShortList = React.createClass({
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
      <ul>
        {this.state.contacts.map(function(contact) {
          return <OneShortListContact key={contact.id} contact={contact}/>;
        })}
      </ul>
    );
  }
});

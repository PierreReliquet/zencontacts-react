var App = React.createClass({
  render: function() {
    window.addEventListener('hashchange', function() {
      this.setState();
    }.bind(this));
    
    if(location.hash.indexOf('edit') !== -1) {
      return (
        <ContactDetail />
      );
    } else {
      return (
        <ContactsList />
      );
    }
  }
});

React.render(
  <App />,
  document.querySelector('#content')
);

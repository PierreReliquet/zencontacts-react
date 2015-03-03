var React = require('react');
var qwest = require('qwest');
var _ = require('lodash');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      contact: {
        firstName: '',
        lastName: '',
        address: '',
        phone: ''
      }
    }
  },
  componentDidMount: function() {
    var id = parseInt(location.hash.substring('#/edit/'.length));
    if (id !== undefined) {
      qwest.get('/rest/contacts/' +id)
      .then(function(result) {
        this.setState({
          contact: JSON.parse(result)
        });
      }.bind(this));
    }
  },
  handleChange: function(event) {
    this.state.contact[event.target.name] = event.target.value;
    this.setState({
      contact: this.state.contact
    });
  },
  submit: function(event) {
    if(this.state.contact.id !== undefined) {
      qwest.put('/rest/contacts/' + this.state.contact.id, this.state.contact, {dataType: 'json', cache: false})
      .then(function() {
      	location.hash = "/list";
      });
    } else {
      qwest.post('/rest/contacts', this.state.contact, {dataType: 'json', cache: false})
      .then(function(response) {
      	var contact = JSON.parse(response);
	location.hash = "/list";
      });
    }
    event.preventDefault();
  },
  render: function() {
    return (
      <div className="col-xs-12">
          <div className="well">
              <div className="row">
                  <div className="col-xs-12 col-md-4 col-md-offset-4">
                      <form onSubmit={this.submit}>
                          <div className="form-group">
                              <label for="firstName">First name</label>
                              <input name="firstName" id="firstName" className="form-control" onChange={this.handleChange} value={this.state.contact.firstName}/>
                          </div>
                          <div className="form-group">
                              <label for="lastName">Last name</label>
                              <input name="lastName" id="lastName" className="form-control" onChange={this.handleChange} value={this.state.contact.lastName}/>
                          </div>
                          <div className="form-group">
                              <label for="address">Address</label>
                              <textarea rows="3" name="address" id="address" className="form-control" onChange={this.handleChange} value={this.state.contact.address}></textarea>
                          </div>
                          <div className="form-group">
                              <label for="phone">Phone</label>
                              <input name="phone" id="phone" className="form-control" onChange={this.handleChange} value={this.state.contact.phone}/>
                          </div>
                          <div className="form-group">
                              <input type="submit" className="btn btn-primary" value="Save" />
                              <a href="/#/list" className="btn btn-link">Cancel</a>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
    );
  }
});

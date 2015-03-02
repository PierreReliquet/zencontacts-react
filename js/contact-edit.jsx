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
  render: function() {
    return (
      <div className="col-xs-12">
          <div className="well">
              <div className="row">
                  <div className="col-xs-12 col-md-4 col-md-offset-4">
                      <form>
                          <div className="form-group">
                              <label for="firstName">First name</label>
                              <input name="firstName" id="firstName" className="form-control" value={this.state.contact.firstName}/>
                          </div>
                          <div className="form-group">
                              <label for="lastName">Last name</label>
                              <input name="lastName" id="lastName" className="form-control" value={this.state.contact.lastName}/>
                          </div>
                          <div className="form-group">
                              <label for="address">Address</label>
                              <textarea rows="3" name="address" id="address" className="form-control" value={this.state.contact.address}></textarea>
                          </div>
                          <div className="form-group">
                              <label for="phone">Phone</label>
                              <input name="phone" id="phone" className="form-control" value={this.state.contact.phone}/>
                          </div>
                          <div className="form-group">
                              <button className="btn btn-primary">Save</button>
                              <a className="btn btn-link">Cancel</a>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
    );
  }
});

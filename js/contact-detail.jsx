var ContactDetail = React.createClass({

  getInitialState: function() {
    return {
      contact:{
        firstName: '',
        lastName: '',
        address: '',
        phone: ''
      }
    };
  },

  componentDidMount: function() {
    var id = parseInt(location.hash.substring('#/edit/'.length));
    if (isNaN(id)) {
        this.setState(
          {
            contact:{
              firstName: '',
              lastName: '',
              address: '',
              phone: ''
            }
          }
        );
    } else {
      http.get('contacts.json', function(result) {
        if (Array.isArray(result)) {
          for (var i = 0; i < result.length; i++) {
            if (id === result[i].id) {
              this.setState({
                contact: result[i]
              });
              return;
            }
          }
        }
      }.bind(this));
    }
  },

  render: function() {
    return (
      <div className="row">
        <div clasclasss="col-xs-12">
          <div className="well" auto-height="160">
            <div className="row">
              <div className="col-xs-12 col-md-4 col-md-offset-4">

                <form name="contactForm">
                  <div className="form-group">
                    <label for="firstName" className="control-label">First name</label>
                    <input name="firstName" id="firstName" className="form-control" value={this.state.contact.firstName} required/>
                  </div>
                  <div className="form-group">
                    <label for="lastName" className="control-label">Last name</label>
                    <input name="lastName" id="lastName" className="form-control" value={this.state.contact.lastName} required/>
                  </div>
                  <div className="form-group">
                    <label for="address" className="control-label">Address</label>
                    <textarea rows="3" name="address" id="address" className="form-control" value={this.state.contact.address} required></textarea>
                  </div>
                  <div className="form-group">
                    <label for="phone" className="control-label">Phone</label>
                    <input name="phone" id="phone" className="form-control" required value={this.state.contact.phone}/>
                    <span className="help-block">Required, format 555-XXXXXX</span>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary">Save</button>
                    <a className="btn btn-link" href="#/list">Cancel</a>
                    <button type="button" className="btn btn-danger">Delete</button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
})

var React = require('react');
var qwest = require('qwest');
var VCardList = require('./vcard-list.jsx');
var ShortList = require('./short-list.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {
        contacts: []
    }
  },
  componentDidMount: function() {
   qwest.get('/rest/contacts')
   .then(function(result) {
     this.setState({
       contacts: JSON.parse(result)
     });
   }.bind(this));
  },
  render: function() {
    return (
      <div>
        <div className="col-xs-12 col-md-4">
            <div className="well">
                <form className="form-search">
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-search"></i></span>
                            <input className="form-control" placeholder="Search" />
                        </div>
                    </div>
                </form>
                <ShortList contacts={this.state.contacts} />
            </div>
        </div>

        <div className="col-xs-12 col-md-8">
          <VCardList contacts={this.state.contacts} />
        </div>
      </div>
    );
  }
});

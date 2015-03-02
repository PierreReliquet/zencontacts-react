var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="contact-card col-xs-12 col-sm-6">
          <div className="contact-card-inner">
              <h4>{this.props.contact.firstName} {this.props.contact.lastName}</h4>
              <div className="contact-address">{this.props.contact.address}</div>
              <div className="contact-phone">{this.props.contact.phone}</div>
          </div>
      </div>
    );
  }
});

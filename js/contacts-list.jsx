var ContactsList = React.createClass({
  render: function() {
    return (
      <div className="row">

          <div className="col-xs-12 col-md-4">
              <ShortList className="well"/>
          </div>

          <div className="col-xs-12 col-md-8">
              <VCardList className="row" />
          </div>

      </div>
    );
  }
});

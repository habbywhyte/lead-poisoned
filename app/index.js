var React = require('react');
var ReactDOM = require('react-dom');


var Home = React.createClass({
  render: function(){
    var headerText = "Lead Contamination";
    var headerSubtext = "Excessive and harmful levels of lead found in cities across all 50 states";
    return(
      <div className="header">
        <div className="callout large primary">
          <div className="row column text-center">
            <h1>Water Watch </h1>
            <h2> {headerText} </h2>
            <h3> {headerSubtext} </h3>
            </div>
        </div>
      </div>

    );
  }

});


ReactDOM.render(
<Home />,
document.getElementById("app")
);

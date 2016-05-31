var React = require('react');
var ReactDOM = require('react-dom');
var ParallaxScrollView = ('react-native-parallax-scroll-view');

var Home = React.createClass({
  render: function(){
    return(
      <div>
        <h1>Lead Contamination </h1>
      </div>
    );
  }
});

ReactDOM.render(
  <Home />,
  document.getElementById("app")
)

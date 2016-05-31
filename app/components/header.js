var React = require('react');
var ReactDOM = require('react-dom');
var ParallaxScrollView = ('react-native-parallax-scroll-view');

var header = React.createClass({
    render: function(){
      return (
    <ParallaxScrollView
      backgroundColor="blue"
      contentBackgroundColor="pink"
      parallaxHeaderHeight={300}
      renderForeground={() => (
       <View style={{ height: 300, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <h1>Hello World!</h1>
        </View>
      )}>
      <View style={{ height: 500 }}>
        <Text>Scroll me</Text>
      </View>
    </ParallaxScrollView>
  );
}
});

ReactDOM.render(
  <header />,
  document.getElementById("app")
);

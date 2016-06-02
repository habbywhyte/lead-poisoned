var Parallax = React.createClass({
  render: function () {
    var children = React.Children.map(
      this.props.children,
      function(child, idx) {
        return React.createElement(Stickybox, {className: 'card', idx: idx}, child);
      }
    );
    return React.createElement('div', {className: 'parallax'}, children);
  }
});

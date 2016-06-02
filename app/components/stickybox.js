var Stickybox = React.createClass({

  mixins: [PageScrollMixin],

  node: null,

  getInitialState: function () {
    return {
      top: 1,
      height: -1,
      scrolling: false
    };
  },

  componentDidMount: function () {
    this.node = this.getDOMNode();
    this.updateTopPosition();
  },

  handleScroll: function () {
    this.updateTopPosition();
  },

  updateTopPosition: function () {
    var box = this.node.getBoundingClientRect();
    this.setState({
      top: box.top,
      height: box.height
    });
  },

  onScrollStart: function() {
    this.setState({scrolling: true});
    this.handleScroll();
  },

  onScrollProxy: function () {
    this.handleScroll();
  },

  onScrollEnd: function() {
    this.setState({scrolling: false});
    this.handleScroll();
  },

  getState: function () {
    return this.state;
  },

  isFrozen: function () {
    return this.state.top < 1 && this.state.top < window.document.body.scrollTop;
  },

  /**
   * Render
   * @returns {ReactElement} react element
   */
  render: function () {
    var args = {}, isFrozen = this.isFrozen();

    args.className = classnames('component-stickybox', {
      frozen: isFrozen
    });
    args.style = {
      height: isFrozen ? this.state.height : 'auto',
      zIndex: this.props.idx
    };
    return React.createElement('div', args,
      	this.props.children);
  }
});

var parallaxWithContent = React.createElement(Parallax, {index: 0}, React.createElement('img', {className: 'section2', src: 'http://galleria.io/static/i/s2013/1m.jpg'}), React.createElement('img', {className: 'section2', src: 'http://galleria.io/static/i/s2013/2m.jpg'}), React.createElement('img', {className: 'section2', src: 'http://galleria.io/static/i/s2013/3m.jpg'}));

var content = React.createElement('div', null, parallaxWithContent);

React.render(content, document.getElementById('parallax'));

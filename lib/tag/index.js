'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AntTag = function (_React$Component) {
  _inherits(AntTag, _React$Component);

  function AntTag(props) {
    _classCallCheck(this, AntTag);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AntTag).call(this, props));

    _this.state = {
      closing: false,
      closed: false
    };
    return _this;
  }

  _createClass(AntTag, [{
    key: 'close',
    value: function close(e) {
      var dom = _reactDom2.default.findDOMNode(this);
      dom.style.width = dom.offsetWidth + 'px';
      // It's Magic Code, don't know why
      dom.style.width = dom.offsetWidth + 'px';
      this.setState({
        closing: true
      });
      this.props.onClose(e);
    }
  }, {
    key: 'animationEnd',
    value: function animationEnd(key, existed) {
      if (!existed) {
        this.setState({
          closed: true,
          closing: false
        });
        this.props.afterClose();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props;
      var prefixCls = _props.prefixCls;
      var closable = _props.closable;
      var color = _props.color;
      var className = _props.className;
      var children = _props.children;

      var restProps = _objectWithoutProperties(_props, ['prefixCls', 'closable', 'color', 'className', 'children']);

      var close = closable ? _react2.default.createElement(_icon2.default, { type: 'cross', onClick: this.close.bind(this) }) : '';
      var classString = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, prefixCls + '-' + color, !!color), _defineProperty(_classNames, prefixCls + '-close', this.state.closing), _defineProperty(_classNames, className, !!className), _classNames));
      return _react2.default.createElement(
        _rcAnimate2.default,
        { component: '',
          showProp: 'data-show',
          transitionName: prefixCls + '-zoom',
          transitionAppear: true,
          onEnd: this.animationEnd.bind(this) },
        this.state.closed ? null : _react2.default.createElement(
          'div',
          _extends({ 'data-show': !this.state.closing }, restProps, { className: classString }),
          _react2.default.createElement(
            'span',
            { className: prefixCls + '-text' },
            children
          ),
          close
        )
      );
    }
  }]);

  return AntTag;
}(_react2.default.Component);

AntTag.defaultProps = {
  prefixCls: 'ant-tag',
  closable: false,
  onClose: function onClose() {},
  afterClose: function afterClose() {}
};

exports.default = AntTag;
module.exports = exports['default'];
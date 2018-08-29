"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.array.find");

var _react = _interopRequireWildcard(require("react"));

require("./tabs.css");

var _Tab = _interopRequireDefault(require("./Tab"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _TabIndicator = _interopRequireDefault(require("./TabIndicator"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var bem = (0, _utils.bemClassNames)('d2ui-tabs');

var Tabs =
/*#__PURE__*/
function (_Component) {
  _inherits(Tabs, _Component);

  function Tabs(props) {
    var _this;

    _classCallCheck(this, Tabs);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tabs).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addTabRef", function (node) {
      _this.nodes.tabs.push(node);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getActiveTabRef", function () {
      var activeTabIndex = _this.props.activeTabIndex;
      return _this.nodes.tabs[activeTabIndex];
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setScrollBoxRef", function (node) {
      _this.nodes.scrollBox = node;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setScrollAreaRef", function (node) {
      _this.nodes.scrollArea = node;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSideScroll", function () {
      _this.toggleScrollButtonVisibility();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollLeft", function () {
      var _this$nodes = _this.nodes,
          scrollBox = _this$nodes.scrollBox,
          tabs = _this$nodes.tabs;
      var offsetLeft = scrollBox.scrollLeft - scrollBox.offsetWidth;
      var targetTab = offsetLeft <= 0 ? tabs[0] : _this.getTabAtOffsetLeft(offsetLeft);

      _this.scrollToTab(targetTab);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollRight", function () {
      var _this$nodes2 = _this.nodes,
          scrollBox = _this$nodes2.scrollBox,
          scrollArea = _this$nodes2.scrollArea,
          tabs = _this$nodes2.tabs;
      var offsetLeft = scrollBox.scrollLeft + scrollBox.offsetWidth * 2;
      var atEnd = scrollArea.offsetWidth <= offsetLeft;
      var targetTab = atEnd ? tabs[tabs.length - 1] : _this.getTabAtOffsetLeft(offsetLeft);

      _this.scrollToTab(targetTab);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showTabIndicator", function () {
      _this.setState({
        showTabIndicator: true
      });
    });

    _this.nodes = {
      scrollBox: null,
      scrollArea: null,
      tabs: []
    };
    _this.state = {
      // By setting these to false, the scroll buttons are hidden when the component mounts
      scrolledToStart: true,
      scrolledToEnd: true,
      showTabIndicator: false
    };
    return _this;
  } // Lifecycle hooks


  _createClass(Tabs, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.contained) {
        this.showTabIndicator();
        return;
      }

      this.nodes.scrollBox.addEventListener('scroll', this.handleSideScroll);

      if (this.scrollRequiredToReachActiveTab()) {
        // If a scroll is required the scroll event is triggered and
        // the scroll button visibility is updated as a result
        var scrollParams = {
          duration: 1,
          // no animation
          callback: this.showTabIndicator
        };
        this.scrollToTab(this.getActiveTabRef(), scrollParams);
      } else {
        // If no scroll is required the scrollButtons need to be updated manually
        this.toggleScrollButtonVisibility();
        this.showTabIndicator();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!this.props.contained && this.props.activeTabIndex !== prevProps.activeTabIndex && this.scrollRequiredToReachActiveTab()) {
        this.scrollToTab(this.getActiveTabRef());
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!this.props.contained) {
        this.nodes.scrollBox.removeEventListener('scroll', this.handleSideScroll);
      }
    } // Refs

  }, {
    key: "getTabAtOffsetLeft",
    // Methods
    value: function getTabAtOffsetLeft(offsetLeft) {
      return this.nodes.tabs.find(function (tab) {
        return offsetLeft >= tab.offsetLeft && offsetLeft <= tab.offsetLeft + tab.offsetWidth;
      });
    }
  }, {
    key: "scrollRequiredToReachActiveTab",
    value: function scrollRequiredToReachActiveTab() {
      var scrollBox = this.nodes.scrollBox;
      var tab = this.getActiveTabRef();
      var shouldScrollRight = tab.offsetLeft - scrollBox.scrollLeft + tab.offsetWidth > scrollBox.offsetWidth;
      var shouldScrollLeft = tab.offsetLeft < scrollBox.scrollLeft;
      return shouldScrollRight || shouldScrollLeft;
    }
  }, {
    key: "scrollToTab",
    value: function scrollToTab(tab) {
      var scrollParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      (0, _utils.animatedScrollTo)(_objectSpread({
        to: tab,
        scrollBox: this.nodes.scrollBox,
        direction: 'horizontal'
      }, scrollParams));
    }
  }, {
    key: "toggleScrollButtonVisibility",
    value: function toggleScrollButtonVisibility() {
      var _this$nodes3 = this.nodes,
          scrollBox = _this$nodes3.scrollBox,
          scrollArea = _this$nodes3.scrollArea;
      var scrolledToStart = scrollBox.scrollLeft === 0;
      var scrolledToEnd = scrollBox.scrollLeft + scrollBox.offsetWidth === scrollArea.offsetWidth;

      if (this.state.scrolledToStart !== scrolledToStart || this.state.scrolledToEnd !== scrolledToEnd) {
        this.setState({
          scrolledToStart: scrolledToStart,
          scrolledToEnd: scrolledToEnd
        });
      }
    }
  }, {
    key: "getAdditionalTabProps",
    value: function getAdditionalTabProps(index) {
      var _this$props = this.props,
          stackedTabs = _this$props.stackedTabs,
          activeTabIndex = _this$props.activeTabIndex;
      return {
        stacked: stackedTabs,
        active: index === activeTabIndex,
        addTabRef: this.addTabRef
      };
    }
  }, {
    key: "renderTabItems",
    value: function renderTabItems() {
      var _this2 = this;

      var tabItems = this.props.tabItems;
      return tabItems.map(function (tab, index) {
        return _react.default.createElement(_Tab.default, _extends({
          key: "tab-".concat(index)
        }, _this2.getAdditionalTabProps(index), tab));
      });
    }
  }, {
    key: "renderChildren",
    value: function renderChildren() {
      var _this3 = this;

      var children = this.props.children;
      return _react.Children.map(children, function (child, index) {
        return (0, _react.cloneElement)(child, _this3.getAdditionalTabProps(index));
      });
    } // Rendering

  }, {
    key: "renderTabBar",
    value: function renderTabBar() {
      var _this$props2 = this.props,
          cluster = _this$props2.cluster,
          contained = _this$props2.contained,
          children = _this$props2.children;
      var showTabIndicator = this.state.showTabIndicator;
      var className = bem.e('tab-container', // A scrollable tabBar cannot be clustered
      _defineProperty({}, "cluster-".concat(cluster), cluster && contained), {
        contained: contained
      });
      return _react.default.createElement("div", {
        className: className
      }, children ? this.renderChildren() : this.renderTabItems(), _react.default.createElement(_TabIndicator.default, {
        getActiveTabRef: this.getActiveTabRef,
        visible: showTabIndicator
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          scrolledToStart = _this$state.scrolledToStart,
          scrolledToEnd = _this$state.scrolledToEnd;
      var _this$props3 = this.props,
          position = _this$props3.position,
          contained = _this$props3.contained;
      var tabBar = this.renderTabBar();

      if (!contained) {
        tabBar = _react.default.createElement(_react.Fragment, null, _react.default.createElement("button", {
          onClick: this.scrollLeft,
          className: bem.e('scroll-button', {
            hidden: scrolledToStart
          })
        }, _react.default.createElement(_Icon.default, {
          name: "keyboard_arrow_left"
        })), _react.default.createElement("div", {
          className: bem.e('scroll-box'),
          ref: this.setScrollBoxRef
        }, _react.default.createElement("div", {
          className: bem.e('scroll-area'),
          ref: this.setScrollAreaRef
        }, tabBar)), _react.default.createElement("button", {
          onClick: this.scrollRight,
          className: bem.e('scroll-button', {
            hidden: scrolledToEnd
          })
        }, _react.default.createElement(_Icon.default, {
          name: "keyboard_arrow_right"
        })));
      }

      return _react.default.createElement("div", {
        className: bem.b(position)
      }, tabBar);
    }
  }]);

  return Tabs;
}(_react.Component);

Tabs.defaultProps = {
  tabItems: [],
  contained: false,
  position: 'relative',
  cluster: null,
  stackedTabs: false
};
var _default = Tabs;
exports.default = _default;
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

var AMapPicker = (function (_MapPicker) {
  _inherits(AMapPicker, _MapPicker);

  function AMapPicker() {
    _classCallCheck(this, AMapPicker);

    _get(Object.getPrototypeOf(AMapPicker.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(AMapPicker, [{
    key: 'init',
    value: function init() {
      _get(Object.getPrototypeOf(AMapPicker.prototype), 'init', this).call(this);
      this.map = new AMap.Map(this.id, { zoom: 16 });
    }
  }]);

  return AMapPicker;
})(_base2['default']);

jQuery.fn.mapPicker.maps.amap = AMapPicker;

},{"./base":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var MapPicker = (function () {
  function MapPicker($element) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, MapPicker);

    this.$element = $element;
    this.id = this._generateUniqueId();
    this.options = options;

    this.init();
  }

  _createClass(MapPicker, [{
    key: '_generateUniqueId',
    value: function _generateUniqueId() {
      var date = Date.now();
      var salt = Math.floor(Math.random() * 26);
      return 'map-picker-' + date + '-' + salt;
    }
  }, {
    key: '_makeMapContainer',
    value: function _makeMapContainer() {
      var $container = this.$element.closest('#' + this.id);

      if ($container.size() === 0) {
        $container = $('<div id="' + this.id + '"></div>');
        $container.css({ 'width': '100%', 'min-height': '300px' });

        console.log(this.$element.closest('.map-container'));
        if (this.$element.closest('.map-container').size()) {

          this.$element.closest('.map-container').append($container);
        } else {
          this.$element.after($container);
        }
      }

      return $container;
    }
  }, {
    key: 'init',
    value: function init() {
      this.$container = this._makeMapContainer();
    }
  }]);

  return MapPicker;
})();

exports['default'] = MapPicker;
module.exports = exports['default'];

},{}]},{},[1]);

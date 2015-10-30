(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

var AMapAddressPicker = (function (_AddressPicker) {
  _inherits(AMapAddressPicker, _AddressPicker);

  function AMapAddressPicker() {
    _classCallCheck(this, AMapAddressPicker);

    _get(Object.getPrototypeOf(AMapAddressPicker.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(AMapAddressPicker, [{
    key: 'initInput',
    value: function initInput() {
      var _this = this;

      _get(Object.getPrototypeOf(AMapAddressPicker.prototype), 'initInput', this).call(this);

      AMap.service(['AMap.Autocomplete'], function () {
        var auto = new AMap.Autocomplete();
        var bb = new Bloodhound({
          datumTokenizer: function datumTokenizer(d) {
            return [d.name, d.district];
          },
          queryTokenizer: Bloodhound.tokenizers.whitespace,
          remote: {
            url: '%QUERY',
            wildcard: '%QUERY',
            transport: function transport(query, onSuccess, onError) {
              auto.search(decodeURIComponent(query.url), function (status, result) {
                if (status == 'complete') {
                  onSuccess(result.tips);
                } else {
                  onSuccess([]);
                }
              });
            }
          }
        });
        bb.initialize();

        _this.$input.typeahead({
          hint: true,
          highlight: true
        }, {
          display: function display(tip) {
            return tip.district + tip.name;
          },
          name: 'amap-places',
          source: bb.ttAdapter()
        });
      });

      // this.map = new AMap.Map(this.id, { zoom: 16 });
      // this.initAutoComplete();
    }
  }]);

  return AMapAddressPicker;
})(_base2['default']);

jQuery.fn.addressPicker.maps.amap = AMapAddressPicker;

},{"./base":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var AddressPicker = (function () {
  function AddressPicker($input) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, AddressPicker);

    this.$input = $input;
    this.id = this._generateUniqueId();
    this.options = options;

    this.initInput();
  }

  _createClass(AddressPicker, [{
    key: '_generateUniqueId',
    value: function _generateUniqueId() {
      var date = Date.now();
      var salt = Math.floor(Math.random() * 26);
      return 'address-picker-' + date + '-' + salt;
    }
  }, {
    key: 'initInput',
    value: function initInput() {
      if (!this.$input.attr('id')) {
        this.$input.attr('id', 'input-' + this.id);
      }
    }

    // _makeMapContainer() {
    //   var $container = this.$element.closest(`#${this.id}`);

    //   if ($container.size() === 0) {
    //     $container = $(`<div id="${this.id}"></div>`);
    //     $container.css({ 'width': '100%', 'min-height': '300px' });

    //     if (this.$element.closest('.map-container').size()) {

    //       this.$element.closest('.map-container').append($container);
    //     } else {
    //       this.$element.after($container);
    //     }
    //   }

    //   return $container;
    // }
  }]);

  return AddressPicker;
})();

exports['default'] = AddressPicker;
module.exports = exports['default'];

},{}]},{},[1]);

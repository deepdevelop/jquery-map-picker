(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

jQuery.fn.addressPicker = function () {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  this.each(function () {
    var $element = $(this);
    var settings = $.extend({
      map: 'amap' // 默认使用高德地图
    }, options);

    if (!$element.data('deep-address-picker')) {
      var AddressPicker = jQuery.fn.addressPicker.maps[settings.map];
      $element.data('deep-address-picker', new AddressPicker($element, settings));
    }
  });
};

jQuery.fn.addressPicker.maps = [];

},{}]},{},[1]);

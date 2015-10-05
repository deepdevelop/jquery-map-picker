import MapPicker from './map-picker';

jQuery.fn.mapPicker = function(options={}) {
  this.each(function() {
    var $element = $(this);
    var settings = $.extend({
      adapter: 'amap'
    }, options);

    if (!$element.data('map-picker')) {
      $element.data('map-picker', new MapPicker(settings));
    }
  });
};
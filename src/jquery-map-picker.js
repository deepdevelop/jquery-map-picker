jQuery.fn.mapPicker = function(options={}) {
  this.each(function() {
    var $element = $(this);
    var settings = $.extend({
      map: 'amap'
    }, options);

    if (!$element.data('map-picker')) {
      var MapPicker =jQuery.fn.mapPicker.maps[settings.map];
      $element.data('map-picker', new MapPicker($element, settings));
    }
  });
};

jQuery.fn.mapPicker.maps = [];
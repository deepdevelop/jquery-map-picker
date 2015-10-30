jQuery.fn.addressPicker = function(options={}) {
  this.each(function() {
    let $element = $(this);
    let settings = $.extend({
      map: 'amap' // 默认使用高德地图
    }, options);

    if (!$element.data('deep-address-picker')) {
      let AddressPicker = jQuery.fn.addressPicker.maps[settings.map];
      $element.data('deep-address-picker', new AddressPicker($element, settings));
    }
  });
};

jQuery.fn.addressPicker.maps = [];
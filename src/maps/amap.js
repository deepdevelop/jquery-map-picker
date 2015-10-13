import MapPicker from './base';

class AMapPicker extends MapPicker {
  init() {
    super.init();
    this.map = new AMap.Map(this.id, { zoom: 16 });
  }
}

jQuery.fn.mapPicker.maps.amap = AMapPicker;
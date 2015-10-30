import AddressPicker from './base';

class AMapAddressPicker extends AddressPicker {
  initInput() {
    super.initInput();

    AMap.service(['AMap.Autocomplete'], () => {
      let auto = new AMap.Autocomplete();
      let bb = new Bloodhound({
        datumTokenizer: (d) => { return [d.name, d.district]; },
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        remote: {
          url: '%QUERY',
          wildcard: '%QUERY',
          transport: (query, onSuccess, onError) => {
            auto.search(decodeURIComponent(query.url), (status, result) => {
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

      this.$input.typeahead({
        hint: true,
        highlight: true
      }, {
        display: (tip) => { return tip.district + tip.name; },
        name: 'amap-places',
        source: bb.ttAdapter()
      });
    });

    // this.map = new AMap.Map(this.id, { zoom: 16 });
    // this.initAutoComplete();
  }
}

jQuery.fn.addressPicker.maps.amap = AMapAddressPicker;
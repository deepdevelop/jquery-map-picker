export default class AddressPicker {
  constructor($input, options={}) {
    this.$input = $input;
    this.id = this._generateUniqueId();
    this.options = options;

    this.initInput();
  }

  _generateUniqueId() {
    var date = Date.now();
    var salt = Math.floor(Math.random() * 26);
    return `address-picker-${date}-${salt}`;
  }

  initInput() {
    if (!(this.$input.attr('id'))) {
      this.$input.attr('id', `input-${this.id}`);
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
}
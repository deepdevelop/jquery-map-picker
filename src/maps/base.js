export default class MapPicker {
  constructor($element, options={}) {
    this.$element = $element;
    this.id = this._generateUniqueId();
    this.options = options;

    this.init();
  }

  _generateUniqueId() {
    var date = Date.now();
    var salt = Math.floor(Math.random() * 26);
    return `map-picker-${date}-${salt}`;
  }


  _makeMapContainer() {
    var $container = this.$element.closest(`#${this.id}`);

    
    if ($container.size() === 0) {
      $container = $(`<div id="${this.id}"></div>`);
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

  init() {
    this.$container = this._makeMapContainer();
  }
}
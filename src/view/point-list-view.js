import {createElement} from '../render';

function createEventLIstTemplate() {
  return ('<ul class="trip-events__list"></li>');
}

export default class PointListView {
  #element = null;

  get template() {
    return createEventLIstTemplate(this.point);
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}

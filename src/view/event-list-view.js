import { createElement } from '../render';

function createEventLIstTemplate() {
  return ('<ul class="trip-events__list"></li>');
}

export default class EventListView {
  getTemplate() {
    return createEventLIstTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}

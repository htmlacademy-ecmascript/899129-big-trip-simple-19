import {FilterType} from '../const';
import {createElement} from '../render';

const messageForFilter = {
  [FilterType.EVERYTHING]: 'Click New Event to create your first point',
  [FilterType.FUTURE]: 'There are no future events now'
};

function createListEmptyTemplate() {
  return '<p class="trip-events__msg">Click New Event to create your first point</p>';
}

export default class ListEmptyView {
  #element = null;
  #point = null;
  #filterType = messageForFilter.EVERYTHING;


  get template() {
    return createListEmptyTemplate(this.#filterType);
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



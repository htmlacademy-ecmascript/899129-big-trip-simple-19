import SortView from '../view/sort-view.js';
import EventEditView from '../view/event-editing-view.js';
import EventCreateView from '../view/event-creating-view.js';
import EventItem from '../view/event-item-view.js';
import EventListView from '../view/event-list-view.js';
import {render} from '../render.js';

export default class EventPresenter {
  eventListContainer = new EventListView();

  constructor({eventContainer}) {
    this.eventContainer = eventContainer;
  }

  init() {
    render(new SortView(), this.eventContainer);
    render(new EventEditView(), this.eventContainer);
    render(new EventCreateView(), this.eventContainer);
    render(this.eventListContainer, this.eventContainer);

    for (let i = 0; i < 3; i++) {
      render(new EventItem(), this.eventListContainer.getElement());
    }
  }
}

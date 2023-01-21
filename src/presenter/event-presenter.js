import SortView from '../view/sort-view.js';
import PointEditView from '../view/point-editing-view.js';
import PointCreateView from '../view/point-creating-view.js';
import EventItem from '../view/point-item-view.js';
import PointListView from '../view/point-list-view.js';
import {render} from '../render.js';
export default class EventPresenter {
  eventListContainer = new PointListView();

  constructor({eventContainer}, eventsModel) {
    this.eventContainer = eventContainer;
    this.eventsModel = eventsModel;
  }

  init() {
    this.pointsList = [...this.eventsModel.getPoints()];

    render(new SortView(), this.eventContainer);

    for (let i = 0; i < 1; i++) {
      render(new PointCreateView({point: this.pointsList[i]}), this.eventContainer);
    }

    render(this.eventListContainer, this.eventContainer);

    for (let i = 0; i < 3; i++) {
      render(new EventItem({event: this.pointsList[i]}), this.eventListContainer.getElement());
    }

    for (let i = 1; i < 2; i++) {
      render(new PointEditView({point: this.pointsList[i]}), this.eventContainer);
    }
  }
}

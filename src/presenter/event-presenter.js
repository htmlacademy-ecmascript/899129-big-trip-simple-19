import SortView from '../view/sort-view.js';
import PointEditView from '../view/point-editing-view.js';
import EventItem from '../view/point-item-view.js';
import PointListView from '../view/point-list-view.js';
import {render} from '../render.js';
export default class EventPresenter {
  #eventContainer = null;
  #eventsModel = null;
  #eventList = new PointListView();
  #pointsList = [];

  constructor({eventContainer}, eventsModel) {
    this.#eventContainer = eventContainer;
    this.#eventsModel = eventsModel;
  }

  init() {
    this.#pointsList = [...this.#eventsModel.points];

    render(new SortView(), this.#eventContainer);
    render(this.#eventList, this.#eventContainer);

    for (let i = 0; i < this.#pointsList.length; i++) {
      this.#renderEvent(this.#pointsList[i]);
    }

  }

  #renderEvent({point}) {
    const eventComponent = new EventItem({point});
    const editFormComponent = new PointEditView({point});

    const replaceEventToEditForm = () => {
      this.#eventList.element.replaceChild(editFormComponent.element, eventComponent.element);
    };

    const replaceEditFormToEvent = () => {
      this.#eventList.element.replaceChild(eventComponent.element, editFormComponent.element);
    };

    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        replaceEditFormToEvent();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    eventComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replaceEventToEditForm();
    });

    editFormComponent.element.querySelector('event--edit').addEventListener('submit', (evt) => {
      evt.preventDefault();
      replaceEditFormToEvent();
      document.addEventListener('keydown', escKeyDownHandler);
    });

    render(eventComponent, this.#eventList.element);
  }
}

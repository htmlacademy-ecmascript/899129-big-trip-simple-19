import FilterView from './view/filter-view.js';
import EventPresenter from './presenter/event-presenter.js';
import {render} from './render.js';
import EventsModel from './model/events-model.js';

const eventBoardElement = document.querySelector('.trip-events');
const filterElement = document.querySelector('.trip-controls__filters');

const eventsModel = new EventsModel();
const eventPresenter = new EventPresenter({eventContainer: eventBoardElement}, eventsModel);

render(new FilterView(), filterElement);

eventPresenter.init();

import FilterView from './view/filter-view.js';
import EventPresenter from './presenter/event-presenter.js';
import {render} from './render.js';

const eventBoardElement = document.querySelector('.trip-events');
const filterElement = document.querySelector('.trip-controls__filters');
const eventPresenter = new EventPresenter({eventContainer: eventBoardElement});

render(new FilterView(), filterElement);

eventPresenter.init();

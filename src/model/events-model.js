import {getRandomPoint} from '../mock/point';
import {getRandomDestination} from '../mock/destination';

export default class EventModel {
  points = Array.from({length: 3}, getRandomPoint);
  destinations = Array.from({length: 3}, getRandomDestination);

  getPoints() {
    return this.points;
  }
}

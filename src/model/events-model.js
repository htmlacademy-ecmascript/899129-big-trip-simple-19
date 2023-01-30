import {getRandomPoint} from '../mock/point';
export default class EventModel {
  #points = Array.from({length: 10}, getRandomPoint);

  get points() {
    return this.#points;
  }
}

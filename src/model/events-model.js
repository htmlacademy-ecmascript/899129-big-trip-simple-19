import {getRandomPoint} from '../mock/point';
export default class EventModel {
  #points = Array.from({length: 0}, getRandomPoint);

  get points() {
    return this.#points;
  }
}

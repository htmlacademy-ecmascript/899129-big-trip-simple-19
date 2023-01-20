import {getRandomArrayElement} from '../utils';
import {POINT_TYPES} from '../const';

const mockPoints = [
  {
    basePrice: 1100,
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination: 1,
    id: '0',
    offers: [2, 3],
    type: getRandomArrayElement(POINT_TYPES)
  },
  {
    basePrice: 2100,
    dateFrom: '2020-07-10T22:55:56.845Z',
    dateTo: '2020-07-11T11:22:13.375Z',
    destination: 2,
    id: '1',
    offers: [1, 2, 3, 5],
    type: getRandomArrayElement(POINT_TYPES)
  },
  {
    basePrice: 700,
    dateFrom: '2021-07-10T22:55:56.845Z',
    dateTo: '2021-07-11T11:22:13.375Z',
    destination: 3,
    id: '2',
    offers: [1, 2, 4],
    type: getRandomArrayElement(POINT_TYPES)
  }
];

function getRandomPoint() {
  return getRandomArrayElement(mockPoints);
}

export {getRandomPoint};

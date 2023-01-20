import {getRandomArrayElement} from '../utils';

const mockOffers = [
  {
    id: 1,
    title: 'Upgrade to a business class',
    price: 120
  },
  {
    id: 2,
    title: 'Switch to comfort',
    price: 80
  },
  {
    id: 3,
    title: 'Add meal',
    price: 15
  },
  {
    id: 4,
    title: 'Travel by train',
    price: 40
  },
  {
    id: 5,
    title: 'Choose seats',
    price: 5
  }
];

function getRandomOffer() {
  return getRandomArrayElement(mockOffers);
}

export {getRandomOffer, mockOffers};

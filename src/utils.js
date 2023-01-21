const getRandomNumber = () => Math.random();

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

export {getRandomNumber, getRandomArrayElement};

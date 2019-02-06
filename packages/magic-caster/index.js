const allMagic = require('./magic-data.json');
const uniqueRandomArray = require('unique-random-array');

const castSingleMagic = uniqueRandomArray(allMagic);
const getRandomMagic = (number) => {
  if(number === undefined) {
    return castSingleMagic();
  } else {
    let randomMagic = [];
    for(let i = 0; i < number; i++) {
      randomMagic.push(castSingleMagic());
    }

    return randomMagic;
  }
}

module.exports = {
  all: allMagic,
  random: getRandomMagic,
};
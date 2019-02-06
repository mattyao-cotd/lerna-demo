
const myMagic = require('magic-caster');

const outputAllMagic = () => {
  console.log('All magic: ', myMagic.all);
}

const outputRandomMagic = (number) => {
  console.log(`Random ${number} magic: `, myMagic.random(number));
}

outputAllMagic();
outputRandomMagic(3);
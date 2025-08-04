const Backpack = require('./src/Backpack');
const Line = require('./src/Line');

const { intro, logo, say } = require('./src/utils/banner');
const { quote, joke, motivate } = require('./src/utils/asciiQuotes');

module.exports = {
  Backpack,
  Line,
  intro,
  logo,
  say,
  quote,
  joke,
  motivate
};

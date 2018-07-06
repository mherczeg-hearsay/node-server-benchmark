const { renderer } = require('./dist/bundle');
const data = require('../data.json');

module.exports = () => renderer(data);
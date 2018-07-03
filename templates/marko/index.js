require('marko/node-require');

const template = require('./template');
const data = require('../data.json');

module.exports = () => template.renderToString(data);
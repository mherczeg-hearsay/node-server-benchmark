const nunjucks = require('nunjucks');
const path = require('path');
const data = require('../data.json');

module.exports = () => nunjucks.render(path.join('templates', 'nunjucks', 'template.html'), data);
const pug = require('pug');
const data = require('../data.json');
const render = pug.compileFile(`${__dirname}/template.pug`);

module.exports = () => render(data);
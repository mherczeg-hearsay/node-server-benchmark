require("dot").process({
	global: "_page.render"
	, destination: __dirname + "/rendered/"
	, path: (__dirname + "/templates")
});

const render = require('./rendered/template');
const data = require('../data.json');

module.exports = () => render(data);
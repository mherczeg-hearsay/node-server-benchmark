const handlebars = require('handlebars');
const fs = require('fs');
const data = require('../data.json');

module.exports = () => new Promise(function(resolve, reject) {
    fs.readFile(`${__dirname}/template.html`, 'utf-8', (error, source) => {
        if (error) {
            reject(error);
        } else {
            const template = handlebars.compile(source);
            resolve(template(data));
        }
    });
});





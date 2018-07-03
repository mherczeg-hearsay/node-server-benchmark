const ejs = require('ejs');
const data = require('../data.json');

module.exports = () => new Promise(function(resolve, reject) {
    ejs.renderFile(`${__dirname}/template.html`, data, {}, function(err, str){
        if (err) {
            reject(err);
        } else {
            resolve(str);
        }
    });
});


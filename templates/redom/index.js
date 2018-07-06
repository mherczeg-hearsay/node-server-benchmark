const { Document, render } = require('nodom');
const { mount } = require('redom');
const template = require('./template');
const data = require('../data.json');

module.exports = () => {
    throw Error(`
        Re:dom is bugged on nodejs atm, only keeping this example for prudency's sake.
        (it has a weird caching, that in conjuction with our fake dom causes
        every newly created element to have the content of the previously created element
        with the same name)
    `);
    // technically this line should go before requiring redom
    // I'm kinda hating that. only ever use it like this, if you make sure no redom 
    // function is called before this line. ever. in any module.
    global.document = new Document(); 
    mount(global.document.body, template(data));
    return render(global.document.documentElement);
};

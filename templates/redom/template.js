const { el } = require('redom');

module.exports = (data) => el('div', [
    el('div.b', [
        el('span.c', 'firstName'),
        el('span.d', data.firstName)
    ]),
    el('div.e', [
        el('span.f', 'lastName'),
        el('span.g', data.lastName)
    ])
]);
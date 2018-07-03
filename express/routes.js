'use strict';

const router = require('express').Router();
const nunjucksRender = require('../templates/nunjucks');
const markoRender = require('../templates/marko');
const dotRender = require('../templates/dot');
const ejsRender = require('../templates/ejs');
const pugRender = require('../templates/pug');
const redomRender = require('../templates/redom');

router.get('/', (req, res) => {
    res.sendFile('index.html', {
        root: process.cwd()
    });
});

router.get('/nunjucks', (req, res) => {
    res.send(nunjucksRender());
});

router.get('/marko', (req, res) => {
    res.send(markoRender());
});

router.get('/dot', (req, res) => {
    res.send(dotRender());
});

router.get('/ejs', (req, res) => {
    ejsRender()
        .then((output) => res.send(output))
        .catch((err) => res.send(err));
});

router.get('/pug', (req, res) => {
    res.send(pugRender());
});

module.exports = router;
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

module.exports = router;
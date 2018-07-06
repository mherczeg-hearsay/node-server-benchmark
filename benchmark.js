const Benchmark = require('benchmark');
const nunjucksRender = require('./templates/nunjucks');
const markoRender = require('./templates/marko');
const dotRender = require('./templates/dot');
const ejsRender = require('./templates/ejs');
const pugRender = require('./templates/pug');
const redomRender = require('./templates/redom');
const handlebarsRender = require('./templates/handlebars');
const suite = new Benchmark.Suite;

// add tests
suite
    .add('Nunjucks', () => nunjucksRender())
    .add('marko', () => markoRender())
    .add('doT', () => dotRender())
    .add('Pug', () => pugRender())
    .add('Re:dom', () => redomRender())
    .add('EJS', (deferred) => ejsRender().then(() => deferred.resolve()), {defer: true})
    .add('handlebars', (deferred) => handlebarsRender().then(() => deferred.resolve()), {defer: true})
    // add listeners
    .on('cycle', (event) => {
        if (!event.target.error) {
            console.log(String(event.target));
        } else {
            console.log(String(event.target), event.target.error.message);
        }
    })
    .on('complete', () => {
        console.log('Fastest is ' + suite.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });
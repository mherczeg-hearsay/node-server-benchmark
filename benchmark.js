const Benchmark = require('benchmark');
const nunjucksRender = require('./templates/nunjucks');
const markoRender = require('./templates/marko');
const dotRender = require('./templates/dot');
const ejsRender = require('./templates/ejs');
const pugRender = require('./templates/pug');
const suite = new Benchmark.Suite;


// add tests
suite
    .add('Nunjucks', () => nunjucksRender())
    .add('marko', () => markoRender())
    .add('doT', () => dotRender())
    .add('Pug', () => pugRender())
    .add('EJS', (deferred) => ejsRender().then(() => deferred.resolve()), {defer: true})
    // add listeners
    .on('cycle', (event) => {
        console.log(String(event.target));
    })
    .on('complete', () => {
        console.log('Fastest is ' + suite.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });
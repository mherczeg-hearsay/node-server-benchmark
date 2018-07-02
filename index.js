const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;

// add tests
suite
    .add('do nothing', () => { })
    // add listeners
    .on('cycle', (event) => {
        console.log(String(event.target));
    })
    .on('complete', () => {
        console.log('Fastest is ' + suite.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });
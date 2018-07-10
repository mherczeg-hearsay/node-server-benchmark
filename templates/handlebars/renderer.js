import handlebars from 'handlebars';
import * as template from './template.html';

handlebars.registerHelper('times', (times, block) => Array(times).fill('').map((item, index) => block.fn(index)).join(''));

export const renderer = (data) => {
    const render = handlebars.compile(template);
    return render(data);
};



import handlebars from 'handlebars';
import * as template from './template.html';

export const renderer = (data) => {
    const render = handlebars.compile(template);
    return render(data);
};



import doT from 'dot';
import * as defs from './dot.defs'; 
import * as source from './template.html';

export const renderer = (data) => {
    const compile = doT.template(source, undefined, defs);
    return compile(data);
};

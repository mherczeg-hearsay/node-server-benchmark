import { readFileSync } from 'fs';

export const include = (path) => readFileSync(`${process.cwd()}/templates/dot/${path}`);

import React from 'react';
import { renderToString } from 'react-dom/server';
import Template from './Template';

export const renderer = (data) => renderToString(<Template {...data}/>);
'use strict';

import "@babel/polyfill";
import 'formdata-polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'es6-promise';
import 'fetch-polyfill';

import telHeader from './modules/telHeader';

//Вызов функции telHeader
telHeader();
'use strict';

const bus = require('./bus');

setInterval(function () {
  const data = { data: 'Zis is an imerginsy' };
  bus.publish('event.publish', data);
}, 1000);

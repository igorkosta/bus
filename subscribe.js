'use strict';

const bus = require('./bus');

bus.subscribe('event.publish', { ack: true }, (msg) => {
  console.log('soon to be acked message ' + JSON.stringify(msg));
  msg.handle.ack(function () {
    console.log('acknowledged and gone :)');
  });
});

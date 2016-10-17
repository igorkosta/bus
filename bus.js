'use strict';

const servicebus = require('servicebus');
const retry = require('servicebus-retry');

const bus = servicebus.bus({
  url: 'amqp://localhost'
});

bus.use(retry({
  store: new retry.MemoryStore()
}));

module.exports = bus;

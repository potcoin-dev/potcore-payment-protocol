'use strict';

var spec = {
  name: 'PaymentProtocol',
  message: 'Internal Error on potcore-payment-protocol Module: {0}'
};

module.exports = require('potcore-lib').errors.extend(spec);

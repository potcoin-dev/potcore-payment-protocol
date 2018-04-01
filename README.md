Potcore Payment Protocol
=======

[![NPM Package](https://img.shields.io/npm/v/potcore-payment-protocol.svg?style=flat-square)](https://www.npmjs.org/package/potcore-payment-protocol)
[![Build Status](https://img.shields.io/travis/potcoin-dev/potcore-payment-protocol.svg?branch=master&style=flat-square)](https://travis-ci.org/potcoin-dev/potcore-payment-protocol)
[![Coverage Status](https://img.shields.io/coveralls/potcoin-dev/potcore-payment-protocol.svg?style=flat-square)](https://coveralls.io/r/potcoin-dev/potcore-payment-protocol)

A module for [potcore](https://github.com/potcoin-dev/potcore) that implements [Payment Protocol](https://github.com/bitcoin/bips/blob/master/bip-0070.mediawiki) and other related BIPs.

## Getting Started

This library is distributed in both the npm and bower packaging systems.

```sh
npm install potcore-lib
npm install potcore-payment-protocol
```

```sh
bower install potcore-lib
bower install potcore-payment-protocol
```

There are many examples of how to use it on the developer guide [section for payment protocol](https://potcore.io/api/paypro). For example, the following code would verify a payment request:

```javascript
var PaymentProtocol = require('potcore-payment-protocol');

var body = PaymentProtocol.PaymentRequest.decode(rawbody);
var request = new PaymentProtocol().makePaymentRequest(body);

var version = pr.get('payment_details_version');
var pki_type = pr.get('pki_type');
var pki_data = pr.get('pki_data');
var serializedDetails = pr.get('serialized_payment_details');
var signature = pr.get('signature');

// Verify the signature
var verified = request.verify();
```

## Contributing

See [CONTRIBUTING.md](https://github.com/potcoin-dev/potcore/blob/master/CONTRIBUTING.md) on the main potcore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/potcoin-dev/potcore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.

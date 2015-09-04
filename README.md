Complement
====

[![Build Status](http://img.shields.io/travis/NickTomlin/node-complement/master.svg?style=flat)](https://travis-ci.org/NickTomlin/node-complement)
![NPM package](https://img.shields.io/npm/v/complement.svg)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

A stand-alone version of the common 'complement' or 'not' found in functional libraries

```javascript
var complement = require('./index');

function isDog (string) {
  return string === 'dog'
}

var isNotDog = complement(isDog);

assert(isDog('dog'));
assert(isNotDog('cat'));
assert(isNotDog('dog') === false);
```

Related
---

- Underscore contrib's [complement](https://github.com/TheNodeILs/lodash-contrib/blob/master/common-js/_.function.combinators.js#L96)
- Lemonad's [not](https://github.com/fogus/lemonad/blob/master/lib/lemonad.js#L98)

FAQ
---

Q: Why even is this a module?

a. I wanted to play around with tweaking my publishing process and this was a great excuse to publish something
b. I wanted this without bringing in a library
c. I hate `util.js` files littered with things that can be found elsewhere

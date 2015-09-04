Complement
====

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

[Underscore contrib's complement](https://github.com/TheNodeILs/lodash-contrib/blob/master/common-js/_.function.combinators.js#L96)
[Lemonad's not](https://github.com/fogus/lemonad/blob/master/lib/lemonad.js#L98)

FAQ
---

Q: Why even is this a module?

a. I wanted to play around with tweaking my publishing process and this was a great excuse to publish something
b. I wanted this without bringing in a library
c. I hate `util.js` files littered with things that can be found elsewhere

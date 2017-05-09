mainspring
----------

[![Latest Version](https://img.shields.io/npm/v/mainspring.svg?style=flat-square)](https://www.npmjs.com/package/mainspring)
[![Build Status](https://img.shields.io/travis/banterability/mainspring.svg?style=flat-square)](https://travis-ci.org/banterability/mainspring)

### Installation

```bash
npm install -s mainspring
```

### Usage

```javascript
var mainspring = require('mainspring');

// Compare a date against now
mainspring(new Date(2023, 8, 24));
/* -> {
  inFuture: true,
  days: 2401,
  hours: 11,
  minutes: 16,
  seconds: 7
} */

// Compare two dates
mainspring(
  new Date(1962, 8, 12),
  new Date(1969, 5, 20)
);
/* -> {
  inFuture: false,
  days: 2473,
  hours: 0,
  minutes: 0,
  seconds: 0
}
*/
```

### Testing

```bash
npm test
```

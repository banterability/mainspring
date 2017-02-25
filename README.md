mainspring
----------

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

[![Build Status](https://travis-ci.org/banterability/mainspring.svg?branch=master)](https://travis-ci.org/banterability/mainspring)

```bash
npm test
```

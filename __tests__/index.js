const mainspring = require('../');
const timekeeper = require('timekeeper');

const buildMainspringResponse = (attributes) => {
  const output = {};
  output.days = attributes.days || 0;
  output.hours = attributes.hours || 0;
  output.minutes = attributes.minutes || 0;
  output.seconds = attributes.seconds || 0;
  output.inFuture = false;
  return output;
}

describe('Mainspring', function() {
  describe('comparing two dates', function() {
    it('15 seconds ago', function() {
      var d1 = new Date(2015, 3, 1, 14, 3, 45);
      var d2 = new Date(2015, 3, 1, 14, 4, 0);
      var expected = buildMainspringResponse({seconds: 15});

      expect(mainspring(d1, d2)).toEqual(expected);
    });

    it('15 minutes ago', function() {
      var d1 = new Date(2015, 3, 1, 13, 49, 0);
      var d2 = new Date(2015, 3, 1, 14, 4, 0);
      var expected = buildMainspringResponse({minutes: 15});

      expect(mainspring(d1, d2)).toEqual(expected);
    });

    it('15 hours ago', function() {
      var d1 = new Date(2015, 2, 31, 23, 4, 0);
      var d2 = new Date(2015, 3, 1, 14, 4, 0);
      var expected = buildMainspringResponse({hours: 15});

      expect(mainspring(d1, d2)).toEqual(expected);
    });

    it('15 days ago', function() {
      var d1 = new Date(2015, 2, 17, 14, 4, 0);
      var d2 = new Date(2015, 3, 1, 14, 4, 0);
      var expected = buildMainspringResponse({days: 15});

      expect(mainspring(d1, d2)).toEqual(expected);
    });
  });

  describe('comparing to now dates', function() {
    beforeAll(function(){
      timekeeper.freeze(new Date(2015, 3, 1, 14, 4, 0));
    });

    afterAll(function(){
      timekeeper.reset();
    });

    it('15 seconds ago', function() {
      var d1 = new Date(2015, 3, 1, 14, 3, 45);
      var expected = buildMainspringResponse({seconds: 15});

      expect(mainspring(d1)).toEqual(expected);
    });

    it('15 minutes ago', function() {
      var d1 = new Date(2015, 3, 1, 13, 49, 0);
      var expected = buildMainspringResponse({minutes: 15});

      expect(mainspring(d1)).toEqual(expected);
    });

    it('15 hours ago', function() {
      var d1 = new Date(2015, 2, 31, 23, 4, 0);
      var expected = buildMainspringResponse({hours: 15})

      expect(mainspring(d1)).toEqual(expected);
    });

    it('15 days ago', function() {
      var d1 = new Date(2015, 2, 17, 14, 4, 0);
      var expected = buildMainspringResponse({days: 15});

      expect(mainspring(d1)).toEqual(expected);
    });
  });
});

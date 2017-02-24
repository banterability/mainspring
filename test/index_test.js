var assert = require('assertive');
var buildMainspringResponse = require('./helpers').buildMainspringResponse;
var mainspring = require('../');
var timekeeper = require('timekeeper');

describe('Mainspring', function() {
  describe('comparing two dates', function() {
    it('15 seconds ago', function() {
      var d1 = new Date(2015, 3, 1, 14, 3, 45);
      var d2 = new Date(2015, 3, 1, 14, 4, 0);
      var expected = buildMainspringResponse({seconds: 15});

      assert.deepEqual(expected, mainspring(d1, d2));
    });

    it('15 minutes ago', function() {
      var d1 = new Date(2015, 3, 1, 13, 49, 0);
      var d2 = new Date(2015, 3, 1, 14, 4, 0);
      var expected = buildMainspringResponse({minutes: 15});

      assert.deepEqual(expected, mainspring(d1, d2));
    });

    it('15 hours ago', function() {
      var d1 = new Date(2015, 2, 31, 23, 4, 0);
      var d2 = new Date(2015, 3, 1, 14, 4, 0);
      var expected = buildMainspringResponse({hours: 15});

      assert.deepEqual(expected, mainspring(d1, d2));
    });

    it('15 days ago', function() {
      var d1 = new Date(2015, 2, 17, 14, 4, 0);
      var d2 = new Date(2015, 3, 1, 14, 4, 0);
      var expected = buildMainspringResponse({days: 15});

      assert.deepEqual(expected, mainspring(d1, d2));
    });
  });

  describe('comparing to now dates', function() {
    before(function(){
      timekeeper.freeze(new Date(2015, 3, 1, 14, 4, 0));
    });

    after(function(){
      timekeeper.reset();
    });

    it('15 seconds ago', function() {
      var d1 = new Date(2015, 3, 1, 14, 3, 45);
      var expected = buildMainspringResponse({seconds: 15});

      assert.deepEqual(expected, mainspring(d1));
    });

    it('15 minutes ago', function() {
      var d1 = new Date(2015, 3, 1, 13, 49, 0);
      var expected = buildMainspringResponse({minutes: 15});

      assert.deepEqual(expected, mainspring(d1));
    });

    it('15 hours ago', function() {
      var d1 = new Date(2015, 2, 31, 23, 4, 0);
      var expected = buildMainspringResponse({hours: 15})

      assert.deepEqual(expected, mainspring(d1));
    });

    it('15 days ago', function() {
      var d1 = new Date(2015, 2, 17, 14, 4, 0);
      var expected = buildMainspringResponse({days: 15});

      assert.deepEqual(expected, mainspring(d1));
    });
  });
});

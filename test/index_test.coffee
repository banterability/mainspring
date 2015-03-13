assert = require 'assertive'
{buildMainspringResponse} = require './helpers'
mainspring = require '../lib'

describe 'Mainspring', ->
  describe 'comparing two dates', ->
    it 'handles 15 seconds ago', ->
      d1 = new Date 2015, 3, 1, 14, 3, 45
      d2 = new Date 2015, 3, 1, 14, 4, 0
      actual = mainspring d1, d2
      expected = buildMainspringResponse seconds: 15

      assert.deepEqual expected, actual

    it 'handles 15 minutes ago', ->
      d1 = new Date 2015, 3, 1, 13, 49, 0
      d2 = new Date 2015, 3, 1, 14, 4, 0
      actual = mainspring d1, d2
      expected = buildMainspringResponse minutes: 15

      assert.deepEqual expected, actual

    it 'handles 15 hours ago', ->
      d1 = new Date 2015, 2, 31, 23, 4, 0
      d2 = new Date 2015, 3, 1, 14, 4, 0
      actual = mainspring d1, d2
      expected = buildMainspringResponse hours: 15

      assert.deepEqual expected, actual

    it 'handles 15 days ago', ->
      d1 = new Date 2015, 2, 17, 14, 4, 0
      d2 = new Date 2015, 3, 1, 14, 4, 0
      actual = mainspring d1, d2
      expected = buildMainspringResponse days: 15

      assert.deepEqual expected, actual

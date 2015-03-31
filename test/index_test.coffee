assert = require 'assertive'
{buildMainspringResponse} = require './helpers'
mainspring = require '../lib'
timekeeper = require 'timekeeper'

describe 'Mainspring', ->
  describe 'comparing two dates', ->
    it '15 seconds ago', ->
      d1 = new Date 2015, 3, 1, 14, 3, 45
      d2 = new Date 2015, 3, 1, 14, 4, 0
      expected = buildMainspringResponse seconds: 15

      assert.deepEqual expected, mainspring d1, d2

    it '15 minutes ago', ->
      d1 = new Date 2015, 3, 1, 13, 49, 0
      d2 = new Date 2015, 3, 1, 14, 4, 0
      expected = buildMainspringResponse minutes: 15

      assert.deepEqual expected, mainspring d1, d2

    it '15 hours ago', ->
      d1 = new Date 2015, 2, 31, 23, 4, 0
      d2 = new Date 2015, 3, 1, 14, 4, 0
      expected = buildMainspringResponse hours: 15

      assert.deepEqual expected, mainspring d1, d2

    it '15 days ago', ->
      d1 = new Date 2015, 2, 17, 14, 4, 0
      d2 = new Date 2015, 3, 1, 14, 4, 0
      expected = buildMainspringResponse days: 15

      assert.deepEqual expected, mainspring d1, d2

  describe 'comparing to now dates', ->
    before ->
      timekeeper.freeze new Date 2015, 3, 1, 14, 4, 0

    after ->
      timekeeper.reset()

    it '15 seconds ago', ->
      d1 = new Date 2015, 3, 1, 14, 3, 45
      expected = buildMainspringResponse seconds: 15

      assert.deepEqual expected, mainspring d1

    it '15 minutes ago', ->
      d1 = new Date 2015, 3, 1, 13, 49, 0
      expected = buildMainspringResponse minutes: 15

      assert.deepEqual expected, mainspring d1

    it '15 hours ago', ->
      d1 = new Date 2015, 2, 31, 23, 4, 0
      expected = buildMainspringResponse hours: 15

      assert.deepEqual expected, mainspring d1

    it '15 days ago', ->
      d1 = new Date 2015, 2, 17, 14, 4, 0
      expected = buildMainspringResponse days: 15

      assert.deepEqual expected, mainspring d1
Mainspring = (date1, date2 = new Date()) ->
  CONSTANTS =
    days: 1000 * 60 * 60 * 24
    hours: 1000 * 60 * 60
    minutes: 1000 * 60
    seconds: 1000

  diffBetweenTimes = (date1, date2) ->
    if date1 > date2
      diff = date1 - date2
      future = true
    else
      diff = date2 - date1
      future = false

    {ms: diff, future}

  extractTimeElement = (time, value, constant) ->
    if time > constant
      elapsed = Math.floor time / constant
      time = time - (constant * elapsed)
    else
      elapsed = 0

    {time, value, elapsed}

  spellOut = (timeDiff) ->
    output =
      inFuture: timeDiff.future

    totalTime = timeDiff.ms

    for constantName, constantValue of CONSTANTS
      {time, value, elapsed} = extractTimeElement totalTime, constantName, constantValue
      totalTime = time
      output[value] = elapsed

    output

  spellOut diffBetweenTimes(date1, date2)

module.exports = Mainspring

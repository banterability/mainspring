module.exports =
  buildMainspringResponse: (attributes) ->
    output = {}
    output.days = attributes.days || 0
    output.hours = attributes.hours || 0
    output.minutes = attributes.minutes || 0
    output.seconds = attributes.seconds || 0
    output.inFuture = false
    output

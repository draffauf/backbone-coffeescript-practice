class window.ScoreboardApp
  sanity: -> true

  constructor: ->
    new ScoreboardApp.Router()
    Backbone.history.start()
    
    Backbone.sync = (method, model, success, error) ->
      success()

      
jQuery ->
  new ScoreboardApp
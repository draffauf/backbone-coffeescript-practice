window.ScoreboardApp = window.ScoreboardApp || {}

class window.ScoreboardApp.Router extends Backbone.Router

  routes:
    "": "index"

  index: ->
    new ScoreboardApp.MainView
window.ScoreboardApp = window.ScoreboardApp || {}

class window.ScoreboardApp.HighScoreView extends Backbone.View
  el: $ 'body'

  template: Handlebars.compile($('#HighScores').html())

  events: 'click button' : 'addScore'

  initialize: ->
    console.log("HighScoreView::initialize")   
    _.bindAll @

    @initializeCounter()
    @initializeCollection()

    @render()
  
  render: ->
    @$el.append @template()

  initializeCounter: ->
    @counter = 0
  
  initializeCollection: ->
    @collection = new ScoreboardApp.HighScores
    @collection.bind 'add', @appendScore
  
  generateScoreId: (score) ->
    @counter++
    score.get('score') + @counter      

  addScore: ->
    score = new ScoreboardApp.Score
    score.set score: @generateScoreId score

    @collection.add score

  appendScore: (score) ->
    score_view = new ScoreboardApp.ScoreView model: score
    @.$('ul').append score_view.render().el
#
# App.js
#

jQuery ->
  
  #
  # Models
  #

  class Score extends Backbone.Model
    defaults:
      name:'AAA'
      score: 100



  #
  # Collections
  #
  
  class HighScores extends Backbone.Collection
    model: Score



  #
  # Views
  #

  class HighScoreView extends Backbone.View
    el: $ 'body'

    template: Handlebars.compile($('#HighScores').html())

    events: 'click button' : 'addScore'

    initialize: ->      
      _.bindAll @

      @initializeCounter()
      @initializeCollection()

      @render()
      
    render: ->
      @$el.append @template()

    initializeCounter: ->
      @counter = 0
      
    initializeCollection: ->
      @collection = new HighScores
      @collection.bind 'add', @appendScore
      
    generateScoreId: (score) ->
      @counter++
      score.get('score') + @counter      

    addScore: ->
      score = new Score
      score.set score: @generateScoreId score

      @collection.add score

    appendScore: (score) ->
      score_view = new ScoreView model: score
      @.$('ul').append score_view.render().el



  class ScoreView extends Backbone.View
    tagName: 'li'

    template: Handlebars.compile($('#Score').html())

    events:
      'click .swap' : 'swap'
      'click .delete' : 'remove'

    initialize: ->
      _.bindAll @

      @model.bind 'change', @render
      @model.bind 'remove', @unrender

    render: ->
      $(@el).html(@template(score: @model.toJSON()))
      @

    unrender: ->
      $(@el).remove()

    swap: ->
      @model.set
        name: @model.get 'score'
        score: @model.get 'name'

    remove: -> 
      @model.destroy()



  #
  # Backbone.sync
  #

  Backbone.sync = (method, model, success, error) ->
    success()



  #
  # Fire it up!
  #

  highScoreView = new HighScoreView

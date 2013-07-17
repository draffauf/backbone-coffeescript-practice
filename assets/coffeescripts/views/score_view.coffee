window.ScoreboardApp = window.ScoreboardApp || {}

class window.ScoreboardApp.ScoreView extends Backbone.View
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
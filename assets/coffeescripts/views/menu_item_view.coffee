window.ScoreboardApp = window.ScoreboardApp || {}

class window.ScoreboardApp.MenuItemView extends Backbone.View
  tagName: 'li'

  template: Handlebars.compile($('#MenuItem').html())

  initialize: ->
    _.bindAll @

    @model.bind 'change', @render
    @model.bind 'remove', @unrender

  render: ->
    $(@el).html(@template(menu_item: @model.toJSON()))
    @

  unrender: ->
    $(@el).remove()

  remove: -> 
    @model.destroy()
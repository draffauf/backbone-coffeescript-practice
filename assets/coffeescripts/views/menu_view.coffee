window.ScoreboardApp = window.ScoreboardApp || {}

class window.ScoreboardApp.MenuView extends Backbone.View
  tagName: 'ul'

  initialize: (collection)->
    @collection = collection
    
    _.bindAll @
    
    @initializeCollection()
    @render()

  initializeCollection: ->
    @collection.bind 'add', @addMenuItem

  render: ->
    @addAllMenuItems()

  addAllMenuItems: ->
    console.log @collection
    @collection.each @addMenuItem

  addMenuItem: (menu_item) ->
    menu_item_view = new ScoreboardApp.MenuItemView model: menu_item
    @.$el.append menu_item_view.render().el
window.ScoreboardApp = window.ScoreboardApp || {}

class window.ScoreboardApp.MainView extends Backbone.View
  el: $ 'body'

  template: Handlebars.compile($('#Main').html())

  events: 'click button' : 'addMenuItem'

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
    @collection = new ScoreboardApp.Menu
    @collection.bind 'add', @appendMenuItem
  
  addMenuItem: ->
    menu_item = new ScoreboardApp.MenuItem
    @collection.add menu_item

  appendMenuItem: (menu_item) ->
    menu_item_view = new ScoreboardApp.MenuItemView model: menu_item
    @.$('ul').append menu_item_view.render().el
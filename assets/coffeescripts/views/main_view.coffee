window.ScoreboardApp = window.ScoreboardApp || {}

class window.ScoreboardApp.MainView extends Backbone.View
  el: $ 'body'

  template: Handlebars.compile($('#Main').html())

  views: {}

  initialize: ->
    _.bindAll @

    @render()

  render: ->
    @$el.append @template()
    @addMenus()

  addMenus: ->
    menu_1 = new ScoreboardApp.Menu([
      {image_url: "", name: "Profile",  url: "/profile"},
      {image_url: "", name: "Company",  url: "/company"},
      {image_url: "", name: "Account",  url: "/account"},
      {image_url: "", name: "Logout",   url: "/logout"}
    ])

    @addMenu(menu_1)

    menu_2 = new ScoreboardApp.Menu([
      {image_url: "", name: "Profile",  url: "/profile"},
      {image_url: "", name: "Company",  url: "/company"},
      {image_url: "", name: "Account",  url: "/account"},
      {image_url: "", name: "Logout",   url: "/logout"}
    ])

    @addMenu(menu_2)


  addMenu: (menu) ->    
    menu_view = new ScoreboardApp.MenuView(menu)

    @views << menu_view

    @$el.append menu_view.$el
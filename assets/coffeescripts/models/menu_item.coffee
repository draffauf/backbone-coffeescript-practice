window.ScoreboardApp = window.ScoreboardApp || {}

class window.ScoreboardApp.MenuItem extends Backbone.Model
  defaults:
    image_url: 'http://www.scoreboardtracking.com/assets/icon.png'
    name: 'Profile'
    url: 'https://www.scoreboardtracking.com'
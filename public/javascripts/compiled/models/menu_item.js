(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.ScoreboardApp = window.ScoreboardApp || {};

  window.ScoreboardApp.MenuItem = (function(_super) {
    __extends(MenuItem, _super);

    function MenuItem() {
      _ref = MenuItem.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    MenuItem.prototype.defaults = {
      image_url: 'http://www.scoreboardtracking.com/assets/icon.png',
      name: 'Profile',
      url: 'https://www.scoreboardtracking.com'
    };

    return MenuItem;

  })(Backbone.Model);

}).call(this);

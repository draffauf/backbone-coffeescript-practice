(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.ScoreboardApp = window.ScoreboardApp || {};

  window.ScoreboardApp.Menu = (function(_super) {
    __extends(Menu, _super);

    function Menu() {
      _ref = Menu.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Menu.prototype.model = ScoreboardApp.MenuItem;

    return Menu;

  })(Backbone.Collection);

}).call(this);

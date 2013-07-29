(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.ScoreboardApp = window.ScoreboardApp || {};

  window.ScoreboardApp.Router = (function(_super) {
    __extends(Router, _super);

    function Router() {
      _ref = Router.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Router.prototype.routes = {
      "": "index"
    };

    Router.prototype.index = function() {
      return new ScoreboardApp.MainView;
    };

    return Router;

  })(Backbone.Router);

}).call(this);

(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.ScoreboardApp = window.ScoreboardApp || {};

  window.ScoreboardApp.HighScores = (function(_super) {
    __extends(HighScores, _super);

    function HighScores() {
      _ref = HighScores.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    HighScores.prototype.model = ScoreboardApp.Score;

    return HighScores;

  })(Backbone.Collection);

}).call(this);

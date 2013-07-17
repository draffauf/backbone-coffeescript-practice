(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.ScoreboardApp = window.ScoreboardApp || {};

  window.ScoreboardApp.Score = (function(_super) {
    __extends(Score, _super);

    function Score() {
      _ref = Score.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Score.prototype.defaults = {
      name: 'AAA',
      score: 100
    };

    return Score;

  })(Backbone.Model);

}).call(this);

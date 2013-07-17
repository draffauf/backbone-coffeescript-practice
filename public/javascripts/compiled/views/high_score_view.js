(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.ScoreboardApp = window.ScoreboardApp || {};

  window.ScoreboardApp.HighScoreView = (function(_super) {
    __extends(HighScoreView, _super);

    function HighScoreView() {
      _ref = HighScoreView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    HighScoreView.prototype.el = $('body');

    HighScoreView.prototype.template = Handlebars.compile($('#HighScores').html());

    HighScoreView.prototype.events = {
      'click button': 'addScore'
    };

    HighScoreView.prototype.initialize = function() {
      console.log("HighScoreView::initialize");
      _.bindAll(this);
      this.initializeCounter();
      this.initializeCollection();
      return this.render();
    };

    HighScoreView.prototype.render = function() {
      return this.$el.append(this.template());
    };

    HighScoreView.prototype.initializeCounter = function() {
      return this.counter = 0;
    };

    HighScoreView.prototype.initializeCollection = function() {
      this.collection = new ScoreboardApp.HighScores;
      return this.collection.bind('add', this.appendScore);
    };

    HighScoreView.prototype.generateScoreId = function(score) {
      this.counter++;
      return score.get('score') + this.counter;
    };

    HighScoreView.prototype.addScore = function() {
      var score;

      score = new ScoreboardApp.Score;
      score.set({
        score: this.generateScoreId(score)
      });
      return this.collection.add(score);
    };

    HighScoreView.prototype.appendScore = function(score) {
      var score_view;

      score_view = new ScoreboardApp.ScoreView({
        model: score
      });
      return this.$('ul').append(score_view.render().el);
    };

    return HighScoreView;

  })(Backbone.View);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  jQuery(function() {
    var HighScoreView, HighScores, Score, ScoreView, highScoreView, _ref, _ref1, _ref2, _ref3;

    Score = (function(_super) {
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
    HighScores = (function(_super) {
      __extends(HighScores, _super);

      function HighScores() {
        _ref1 = HighScores.__super__.constructor.apply(this, arguments);
        return _ref1;
      }

      HighScores.prototype.model = Score;

      return HighScores;

    })(Backbone.Collection);
    HighScoreView = (function(_super) {
      __extends(HighScoreView, _super);

      function HighScoreView() {
        _ref2 = HighScoreView.__super__.constructor.apply(this, arguments);
        return _ref2;
      }

      HighScoreView.prototype.el = $('body');

      HighScoreView.prototype.template = Handlebars.compile($('#HighScores').html());

      HighScoreView.prototype.events = {
        'click button': 'addScore'
      };

      HighScoreView.prototype.initialize = function() {
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
        this.collection = new HighScores;
        return this.collection.bind('add', this.appendScore);
      };

      HighScoreView.prototype.generateScoreId = function(score) {
        this.counter++;
        return score.get('score') + this.counter;
      };

      HighScoreView.prototype.addScore = function() {
        var score;

        score = new Score;
        score.set({
          score: this.generateScoreId(score)
        });
        return this.collection.add(score);
      };

      HighScoreView.prototype.appendScore = function(score) {
        var score_view;

        score_view = new ScoreView({
          model: score
        });
        return this.$('ul').append(score_view.render().el);
      };

      return HighScoreView;

    })(Backbone.View);
    ScoreView = (function(_super) {
      __extends(ScoreView, _super);

      function ScoreView() {
        _ref3 = ScoreView.__super__.constructor.apply(this, arguments);
        return _ref3;
      }

      ScoreView.prototype.tagName = 'li';

      ScoreView.prototype.template = Handlebars.compile($('#Score').html());

      ScoreView.prototype.events = {
        'click .swap': 'swap',
        'click .delete': 'remove'
      };

      ScoreView.prototype.initialize = function() {
        _.bindAll(this);
        this.model.bind('change', this.render);
        return this.model.bind('remove', this.unrender);
      };

      ScoreView.prototype.render = function() {
        $(this.el).html(this.template({
          score: this.model.toJSON()
        }));
        return this;
      };

      ScoreView.prototype.unrender = function() {
        return $(this.el).remove();
      };

      ScoreView.prototype.swap = function() {
        return this.model.set({
          name: this.model.get('score'),
          score: this.model.get('name')
        });
      };

      ScoreView.prototype.remove = function() {
        return this.model.destroy();
      };

      return ScoreView;

    })(Backbone.View);
    Backbone.sync = function(method, model, success, error) {
      return success();
    };
    return highScoreView = new HighScoreView;
  });

}).call(this);

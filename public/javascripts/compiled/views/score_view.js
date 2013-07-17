(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.ScoreboardApp = window.ScoreboardApp || {};

  window.ScoreboardApp.ScoreView = (function(_super) {
    __extends(ScoreView, _super);

    function ScoreView() {
      _ref = ScoreView.__super__.constructor.apply(this, arguments);
      return _ref;
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

}).call(this);

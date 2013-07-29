(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.ScoreboardApp = window.ScoreboardApp || {};

  window.ScoreboardApp.MenuItemView = (function(_super) {
    __extends(MenuItemView, _super);

    function MenuItemView() {
      _ref = MenuItemView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    MenuItemView.prototype.tagName = 'li';

    MenuItemView.prototype.template = Handlebars.compile($('#MenuItem').html());

    MenuItemView.prototype.initialize = function() {
      _.bindAll(this);
      this.model.bind('change', this.render);
      return this.model.bind('remove', this.unrender);
    };

    MenuItemView.prototype.render = function() {
      $(this.el).html(this.template({
        menu_item: this.model.toJSON()
      }));
      return this;
    };

    MenuItemView.prototype.unrender = function() {
      return $(this.el).remove();
    };

    MenuItemView.prototype.remove = function() {
      return this.model.destroy();
    };

    return MenuItemView;

  })(Backbone.View);

}).call(this);

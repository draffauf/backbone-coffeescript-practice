(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.ScoreboardApp = window.ScoreboardApp || {};

  window.ScoreboardApp.MenuView = (function(_super) {
    __extends(MenuView, _super);

    function MenuView() {
      _ref = MenuView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    MenuView.prototype.tagName = 'ul';

    MenuView.prototype.initialize = function(collection) {
      this.collection = collection;
      _.bindAll(this);
      this.initializeCollection();
      return this.render();
    };

    MenuView.prototype.initializeCollection = function() {
      return this.collection.bind('add', this.addMenuItem);
    };

    MenuView.prototype.render = function() {
      return this.addAllMenuItems();
    };

    MenuView.prototype.addAllMenuItems = function() {
      console.log(this.collection);
      return this.collection.each(this.addMenuItem);
    };

    MenuView.prototype.addMenuItem = function(menu_item) {
      var menu_item_view;

      menu_item_view = new ScoreboardApp.MenuItemView({
        model: menu_item
      });
      return this.$el.append(menu_item_view.render().el);
    };

    return MenuView;

  })(Backbone.View);

}).call(this);

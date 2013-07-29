(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.ScoreboardApp = window.ScoreboardApp || {};

  window.ScoreboardApp.MainView = (function(_super) {
    __extends(MainView, _super);

    function MainView() {
      _ref = MainView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    MainView.prototype.el = $('body');

    MainView.prototype.template = Handlebars.compile($('#Main').html());

    MainView.prototype.events = {
      'click button': 'addMenuItem'
    };

    MainView.prototype.initialize = function() {
      _.bindAll(this);
      this.initializeCounter();
      this.initializeCollection();
      return this.render();
    };

    MainView.prototype.render = function() {
      return this.$el.append(this.template());
    };

    MainView.prototype.initializeCounter = function() {
      return this.counter = 0;
    };

    MainView.prototype.initializeCollection = function() {
      this.collection = new ScoreboardApp.Menu;
      return this.collection.bind('add', this.appendMenuItem);
    };

    MainView.prototype.addMenuItem = function() {
      var menu_item;

      menu_item = new ScoreboardApp.MenuItem;
      return this.collection.add(menu_item);
    };

    MainView.prototype.appendMenuItem = function(menu_item) {
      var menu_item_view;

      menu_item_view = new ScoreboardApp.MenuItemView({
        model: menu_item
      });
      return this.$('ul').append(menu_item_view.render().el);
    };

    return MainView;

  })(Backbone.View);

}).call(this);

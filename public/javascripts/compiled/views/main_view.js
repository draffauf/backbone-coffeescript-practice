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

    MainView.prototype.views = {};

    MainView.prototype.initialize = function() {
      _.bindAll(this);
      return this.render();
    };

    MainView.prototype.render = function() {
      this.$el.append(this.template());
      return this.addMenus();
    };

    MainView.prototype.addMenus = function() {
      var menu_1, menu_2;

      menu_1 = new ScoreboardApp.Menu([
        {
          image_url: "",
          name: "Profile",
          url: "/profile"
        }, {
          image_url: "",
          name: "Company",
          url: "/company"
        }, {
          image_url: "",
          name: "Account",
          url: "/account"
        }, {
          image_url: "",
          name: "Logout",
          url: "/logout"
        }
      ]);
      this.addMenu(menu_1);
      menu_2 = new ScoreboardApp.Menu([
        {
          image_url: "",
          name: "Profile",
          url: "/profile"
        }, {
          image_url: "",
          name: "Company",
          url: "/company"
        }, {
          image_url: "",
          name: "Account",
          url: "/account"
        }, {
          image_url: "",
          name: "Logout",
          url: "/logout"
        }
      ]);
      return this.addMenu(menu_2);
    };

    MainView.prototype.addMenu = function(menu) {
      var menu_view;

      menu_view = new ScoreboardApp.MenuView(menu);
      this.views << menu_view;
      return this.$el.append(menu_view.$el);
    };

    return MainView;

  })(Backbone.View);

}).call(this);

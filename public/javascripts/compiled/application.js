(function() {
  window.ScoreboardApp = (function() {
    ScoreboardApp.prototype.sanity = function() {
      return true;
    };

    function ScoreboardApp() {
      console.log("ScoreboardApp");
      new ScoreboardApp.Router();
      Backbone.history.start();
      Backbone.sync = function(method, model, success, error) {
        return success();
      };
    }

    return ScoreboardApp;

  })();

  jQuery(function() {
    return new ScoreboardApp;
  });

}).call(this);

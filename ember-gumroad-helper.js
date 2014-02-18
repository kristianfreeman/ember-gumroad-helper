(function() {
  Ember.Handlebars.helper('gumroad', function(gumroadID, opts) {
    Ember.assert("You must provide the Gumroad product ID", !!gumroadID.length);
    var options = opts.hash;
    var escaped = Handlebars.Utils.escapeExpression(gumroadID);
    if (options.type === "overlay") {
      var text = options.text || "Buy my product";
      if (options.wanted) { var wanted = true; }
      if (options.locale) { var locale = true; }

      if (wanted || locale) {
        var params = "?";
        if (wanted) { params += "wanted=true"; }
        if (wanted && locale) { params += "&"; }
        if (locale) { params += "locale=true"; }
      } else {
        var params = "";
      }

      return new Handlebars.SafeString('<script type="text/javascript" src="https://gumroad.com/js/gumroad.js"></script>\n<a href="https://gum.co/' + escaped + params + '" class="gumroad-button">' + text + '</a>')
    } else {
      return new Handlebars.SafeString('<script type="text/javascript" src="https://gumroad.com/js/gumroad-embed.js"></script>\n<div class="gumroad-product-embed" data-gumroad-product-id="' + escaped + '"></div>');
    }
  });

}).call(this);

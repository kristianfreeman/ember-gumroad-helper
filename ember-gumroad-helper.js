(function() {
  Ember.Handlebars.helper('gumroad', function(gumroadID) {
    var escaped;
    Ember.assert("You must provide the Gumroad product ID", !!gumroadID.length);
    escaped = Handlebars.Utils.escapeExpression(gumroadID);
    return new Handlebars.SafeString('<script type="text/javascript" src="https://gumroad.com/js/gumroad-embed.js"></script>\n<div class="gumroad-product-embed" data-gumroad-product-id="' + escaped + '"></div>');
  });

}).call(this);

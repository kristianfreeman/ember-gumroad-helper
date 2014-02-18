Ember.Handlebars.helper 'gumroad', (gumroadID) ->
  Ember.assert "You must provide the Gumroad product ID", !!gumroadID.length

  escaped = Handlebars.Utils.escapeExpression gumroadID
  new Handlebars.SafeString '<script type="text/javascript" src="https://gumroad.com/js/gumroad-embed.js"></script>\n<div class="gumroad-product-embed" data-gumroad-product-id="' + escaped + '"></div>'

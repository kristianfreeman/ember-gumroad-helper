## ember-gumroad-helper

A simple helper for embedding [Gumroad](https://gumroad.com) products in your Ember application.

## Install

`bower install --save ember-gumroad-helper`

OR

Add file to your Ember project manually

## Usage

```hbs
{{ gumroad "<your_product_id"> }}
```

### Options

Pass in `type=overlay` for the [overlay type](https://gumroad.com/overlay) instead of the standard embed. The options on that page can be used here...

- `text=''` can be used to pass in the text for the overlay link (defaults to "Buy my product") 
- `wanted=true` for the wanted config (clicking the "Buy" link automatically opens to the payment section of the overlay, instead of the product description)
- `locale=true` to auto-set the locale.

```hbs
{{ gumroad "demo" overlay=true text="PLZ BUY THNX" wanted=true }}
```

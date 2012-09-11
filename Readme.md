
# more

  Expand and collapse lists.

 ![](http://f.cl.ly/items/1l1B2I2H3x2h1b1C2E2K/Screen%20Shot%202012-09-11%20at%2011.47.46%20AM.png)

## Installation

    $ component install component/more

## Example

```js
var more = require('more');
var list = document.querySelector('ul');

more(list)
  .max(5)
  .more('Show more')
  .less('Show less')
  .render();
```

## API

### More#max(n)

  Change max number of list items shown when collapsed, defaults to `5`.

### More#more(label)

  Change `label` from default of "More".

### More#less(label)

  Change `label` from default of "Less".

### More#render()

  Render the list, adds the appropriate more / less link
  depending on the state.

### More#expand()

  Expand the list and re-render.

### More#collapse()

  Collapse the list and re-render.

### More#state

  String representing the state. Either "expanded", or "collapsed".

# License

  MIT

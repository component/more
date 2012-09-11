
/**
 * Module dependencies.
 */

var classes = require('classes');

/**
 * Expose `More`.
 */

module.exports = More;

/**
 * Initialize `More` with the given `list`.
 *
 * @param {Element} list
 * @api public
 */

function More(list) {
  if (!(this instanceof More)) return new More(list);
  this.state = 'collapsed';
  this.list = list;
  this.max(5);
  this.less('Less');
  this.more('More');
}

/**
 * Create a link with `name` and `label`.
 *
 * @param {String} name
 * @param {String} label
 * @return {Element}
 * @api private
 */

More.prototype.link = function(name, label){
  var link = document.createElement('a');
  link.setAttribute('href', '#');
  link.textContent = label;
  link.addEventListener('click', this['on' + name].bind(this), false);
  classes(link).add(name);
  return link;
};

/**
 * Set more link `label`.
 *
 * @param {String} label
 * @return {More}
 * @api public
 */

More.prototype.more = function(label){
  this._more = this.link('more', label);
  return this;
};

/**
 * Handle more click.
 *
 * @api private
 */

More.prototype.onmore = function(e){
  e.preventDefault();
  this.expand();
};

/**
 * Set less link `label`.
 *
 * @param {String} label
 * @return {More}
 * @api public
 */

More.prototype.less = function(label){
  this._less = this.link('less', label);
  return this;
};

/**
 * Handle less click.
 *
 * @api private
 */

More.prototype.onless = function(e){
  e.preventDefault();
  this.collapse();
};

/**
 * Set max shown to `n`.
 *
 * @param {Number} n
 * @return {More}
 * @api public
 */

More.prototype.max = function(n){
  this._max = n;
  return this;
};

/**
 * Expand list.
 *
 * @api public
 */

More.prototype.expand = function(){
  this.state = 'expanded';
  this.list.removeChild(this._more);
  this.render();
};

/**
 * Collapse list.
 *
 * @api public
 */

More.prototype.collapse = function(){
  this.state = 'collapsed';
  this.list.removeChild(this._less);
  this.render();
};

/**
 * Re-render the list.
 *
 * @return {More}
 * @api public
 */

More.prototype.render = function(){
  var state = this.state;
  var list = this.list;
  var items = list.children;
  var len = items.length;
  var max = this._max;

  // hide / show elements
  for (var i = 0; i < len; ++i) {
    if ('expanded' == state || i < max) {
      classes(items[i]).remove('more-hide');
    } else {
      classes(items[i]).add('more-hide');
    }
  }

  // more / less links
  if ('collapsed' == state) list.appendChild(this._more);
  if ('expanded' == state) list.appendChild(this._less);

  return this;
};


const html = require('bel')
const Component = require('nanocomponent')
const morph = require('nanomorph')
const inherits = require('util').inherits

module.exports = Note
inherits(Note, Component)

function Note () {
  Component.call(this)
  this.height = null
  this.width = null
  this.velocity = null
  this.selected = null
}

Note.prototype._render = function (opts) {
  const height = this.height = opts.height
  const width = this.width = opts.width
  const velocity = this.velocity = opts.velocity
  const selected = this.selected = opts.selected

  const hue = 280 - velocity * 280
  const bg = selected ? `hsl(${hue}, 80%, 70%)` : `hsl(${hue}, 100%, 50%)`
  const border = selected ? `hsl(${hue}, 100%, 38%)` : bg
  const line = selected ? border : 'hsl(0, 100%, 97%)'

  const el = html`
    <g>
      <rect x="1" y="1" height="${height - 2}" width="${width - 2}" stroke-width="1" stroke="black">
      <rect fill="${bg}" x="3" y="3" height="${height - 6}" width="${width - 6}" stroke-width="2" stroke="${border}" />
      <line x1="10" y1="${height / 2 + 1}" x2="${(width - 15 - 2) * velocity + 15}" y2="${height / 2 + 1}" stroke-width="2" stroke="${line}" />
    </g>
  `
  if (this._element) morph(this._element, el)
  else this._element = el
  return el
}

Note.prototype._update = function (opts) {
  return opts.height !== this.height
    || opts.width !== this.width
    || opts.velocity !== this.velocity
    || opts.selected !== this.selected
}

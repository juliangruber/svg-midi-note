const html = require('bel')

module.exports = ({ height, width, velocity, selected }) => {
  const hue = 280 - (velocity * 280)
  const bg = selected
    ? `hsl(${hue}, 80%, 70%)`
    : `hsl(${hue}, 100%, 50%)`
  const border = selected
    ? `hsl(${hue}, 100%, 38%)`
    : bg
  const line = selected
    ? border
    : 'hsl(0, 100%, 97%)'

  return html`
    <svg height="${height}" width="${width}">
      <rect x="1" y="1" height="${height-2}" width="${width-2}" stroke-width="1" stroke="black">
      <rect fill="${bg}" x="3" y="3" height="${height-6}" width="${width-6}" stroke-width="2" stroke="${border}" />
      <line x1="10" y1="${height/2+1}" x2="${((width - 15 - 2) * velocity) + 15}" y2="${height/2+1}" stroke-width="2" stroke="${line}" />
    </svg>  
  `
}

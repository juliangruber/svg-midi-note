const midiNote = require('.')
const html = require('bel')
const morph = require('nanomorph')

const render = () => html`
  <ul>
    <li>
      Normal:
      ${midiNote({
        height: 20,
        width: 50,
        velocity: input.value / 100
      })}
    </li>
    <li>
      Selected:
      ${midiNote({
        height: 20,
        width: 50,
        velocity: input.value / 100,
        selected: true
      })}
    </li>
  </ul>
`

const update = () => {
  morph(el, render())
}

const input = html`
  <input type="range" oninput=${update}>
`
document.body.appendChild(input)

const el = render()
document.body.appendChild(el)

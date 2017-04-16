const note = require('.')
const html = require('bel')
const morph = require('nanomorph')

const normalNote = note()
const selectedNote = note()

const render = () => html`
  <ul>
    <li>
      Normal:
      <svg height=20 width=50>
        ${normalNote.render({
          height: 20,
          width: 50,
          velocity: input.value / 100,
          onclick: () => console.log('click')
        })}
      </svg>
    </li>
    <li>
      Selected:
      <svg height=20 width=50>
        ${selectedNote.render({
          height: 20,
          width: 50,
          velocity: input.value / 100,
          selected: true,
          onclick: () => console.log('click')
        })}
      </svg>
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

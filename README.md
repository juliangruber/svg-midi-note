
# svg-midi-note

Render a Midi Note as SVG with velocity and a selected state.

![screenshot 0](screenshots/0.png)

![screenshot 1](screenshots/1.png)

## Usage

```js
const Note = require('svg-midi-note')

const note = Note()

const el = note.render({
  height: 20,
  width: 50,
  velocity: 0.8,
  selected: true
})

svg.appendChild(el)
```

## License

MIT

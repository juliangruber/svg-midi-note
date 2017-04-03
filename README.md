
# svg-midi-note

Render a Midi Note as SVG with velocitity and a selected state.

![screenshot 0](screenshots/0.png)

![screenshot 1](screenshots/1.png)

## Usage

```js
const midiNote = require('svg-midi-note')

const el = midiNote({
  height: 20,
  width: 50,
  velocity: 0.8,
  selected: true
})

document.body.appendChild(el)
```

## License

MIT

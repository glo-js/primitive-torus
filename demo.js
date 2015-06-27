var mesh = require('./')({
  majorRadius: 0.8,
  minorRadius: 0.25,
  majorSegments: 64,
  minorSegments: 32
})

require('glo-demo-primitive')(mesh, {
  repeat: [8, 4],
  angle: -Math.PI / 2.5
}).start()

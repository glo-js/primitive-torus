var shell = require('mesh-viewer')({
  meshColor: [0.0, 0.0, 0.0]
})

var mesh = require('./')({
  majorRadius: 0.25,
  minorRadius: 0.05,
  majorSegments: 64,
  minorSegments: 64
})
 
shell.on('viewer-init', function() {
  mesh = shell.createMesh({
    positions: mesh.positions,
    cells: mesh.cells,
    vertexNormals: mesh.normals
  })
})
 
shell.on('gl-render', function() {
  mesh.draw()
})
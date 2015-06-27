var defined = require('defined')
var sub = require('gl-vec3/subtract')
var normalize = require('gl-vec3/normalize')

module.exports = createTorusMesh
function createTorusMesh (opt) {
  opt = opt || {}
  var majorRadius = defined(opt.majorRadius, 1)
  var minorRadius = defined(opt.minorRadius, 0.25)
  var minorSegments = defined(opt.minorSegments, 32)
  var majorSegments = defined(opt.majorSegments, 64)
  var arc = defined(opt.arc, Math.PI * 2)
  var PI2 = Math.PI * 2

  var center = [0, 0, 0]
  var uvs = []
  var positions = []
  var cells = []
  var tmp = [0, 0, 0]
  var normals = []

  for (var j = 0; j <= minorSegments; j++) {
    for (var i = 0; i <= majorSegments; i++) {
      var u = i / majorSegments * arc
      var v = j / minorSegments * PI2

      center[0] = majorRadius * Math.cos(u)
      center[1] = majorRadius * Math.sin(u)

      var vertex = [
        (majorRadius + minorRadius * Math.cos(v)) * Math.cos(u),
        (majorRadius + minorRadius * Math.cos(v)) * Math.sin(u),
        minorRadius * Math.sin(v)
      ]
      positions.push(vertex)

      sub(tmp, vertex, center)
      normalize(tmp, tmp)
      normals.push(tmp.slice())
      uvs.push([ i / majorSegments, j / minorSegments ])
    }
  }

  for (var j = 1; j <= minorSegments; j++) {
    for (var i = 1; i <= majorSegments; i++) {
      var a = (majorSegments + 1) * j + i - 1
      var b = (majorSegments + 1) * (j - 1) + i - 1
      var c = (majorSegments + 1) * (j - 1) + i
      var d = (majorSegments + 1) * j + i

      cells.push([ a, b, d ])
      cells.push([ b, c, d ])
    }
  }

  return {
    uvs: uvs,
    cells: cells,
    normals: normals,
    positions: positions
  }
}

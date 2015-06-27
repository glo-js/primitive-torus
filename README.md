# primitive-torus

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

[![screen](http://i.imgur.com/6BKbSZb.png)](http://glo-js.github.io/primitive-torus/)

[(demo)](http://glo-js.github.io/primitive-torus/)

<!-- iframe: https://glo-js.github.io/primitive-torus/index.html -->

A minimal 3D torus geometry for 3D rendering, including normals, UVs, and cell indices.

## Example

```js
var torus = require('primitive-torus')
var mesh = torus()

// the simplicial complex
console.log(mesh.positions, mesh.cells)

// rendering attributes
console.log(mesh.uvs)
console.log(mesh.normals)
```

## Usage

[![NPM](https://nodei.co/npm/primitive-torus.png)](https://www.npmjs.com/package/primitive-torus)

#### `mesh = torus([opt])`

Creates a new torus with options:

- `majorRadius` the radius of the major ring `R`, default 1.0
- `minorRadius` the radius of the minor ring `r`, default 0.25
- `majorSegments` the number of segments for the major ring, default 32
- `minorSegments` the number of segments for the minor ring, defualt 64
- `arc` the arc to draw, default `Math.PI * 2` (full circle)

The returned mesh is an object with the following data:

```
{
  positions: [ [x, y, z], [x, y, z], ... ],
  cells: [ [a, b, c], [a, b, c], ... ],
  uvs: [ [u, v], [u, v], ... ],
  normals: [ [x, y, z], [x, y, z], ... ]
}
```

## Credits

The algorithm here is from [ThreeJS TorusGeometry](https://github.com/mrdoob/three.js/blob/d49bb0e85f9c013198dc5a6c0f94f0bbe6a02add/src/extras/geometries/TorusGeometry.js).

## License

MIT. See [LICENSE.md](http://github.com/mattdesl/primitive-torus/blob/master/LICENSE.md) for details.

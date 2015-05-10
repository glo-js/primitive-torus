# torus-mesh

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Generates an indexed 3D torus mesh.

```js
var torus = require('torus-mesh')
var mesh = torus()

console.log(mesh)
=> { positions, cells, normals, uvs }
```

It returns a simplicial complex, but also includes `normals` and `uvs` for lighting and texturing.

## Usage

[![NPM](https://nodei.co/npm/torus-mesh.png)](https://nodei.co/npm/torus-mesh/)

#### `mesh = torus([opt])`

![demo-image](http://i.imgur.com/Aqbg23b.png)

[(click for demo)](https://mattdesl.github.io/torus-mesh/index.html)

<!-- iframe: https://mattdesl.github.io/torus-mesh/index.html -->

Creates a new torus with options:

- `majorRadius` the radius of the major ring `R`, default 1.0
- `minorRadius` the radius of the minor ring `r`, default 0.25
- `majorSegments` the number of segments for the major ring, default 32
- `minorSegments` the number of segments for the minor ring, defualt 64
- `arc` the arc to draw, default `Math.PI * 2` (full circle)

## Credits

The algorithm here is from [ThreeJS TorusGeometry](https://github.com/mrdoob/three.js/blob/d49bb0e85f9c013198dc5a6c0f94f0bbe6a02add/src/extras/geometries/TorusGeometry.js).

## License

MIT. See [LICENSE.md](http://github.com/mattdesl/torus-mesh/blob/master/LICENSE.md) for details.

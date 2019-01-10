import Map from "ol/Map.js";
import View from "ol/View.js";
import MVT from "ol/format/MVT.js";
import VectorTileLayer from "ol/layer/VectorTile.js";
import VectorTileSource from "ol/source/VectorTile.js";
import { Fill, Icon, Stroke, Style, Text } from "ol/style.js";

var key =
  "pk.eyJ1IjoibG93em9uZW5vc2UiLCJhIjoiY2pqNW9pM3BnMDh3YzNxc3d1NDBrOXJiYiJ9.fpJA4mi3Dau4qgEHiqdbpw";

var map = new Map({
  layers: [
    new VectorTileLayer({
      declutter: true,
      source: new VectorTileSource({
        attributions:
          '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> ' +
          '© <a href="https://www.openstreetmap.org/copyright">' +
          "OpenStreetMap contributors</a>",
        format: new MVT(),
        url:
          "https://{a-d}.tiles.mapbox.com/v4/mapbox.mapbox-streets-v6/" +
          "{z}/{x}/{y}.vector.pbf?access_token=" +
          key
      }),
      style: createMapboxStreetsV6Style(Style, Fill, Stroke, Icon, Text)
    })
  ],
  target: "map",
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});

import olms from "ol-mapbox-style/olms.js";
/* import { apply } from "ol-mapbox-style"; */

var mapStyle = {
  version: 8,
  name: "Qwant Style Basic",
  metadata: {
    "taxonomy:title": "Qwant Style Basic",
    "taxonomy:groups": [
      {
        id: "admin-boundaries",
        type: "line",
        title: "Administrative boundaries"
      },
      {
        id: "landuse",
        type: "polygon",
        title: "Land use",
        zooms: 13
      },
      {
        id: "waterway",
        type: "line",
        title: "Waterways",
        zooms: {
          minzoom: 5,
          maxzoom: 20
        }
      },
      {
        id: "building",
        type: "polygon",
        title: "Buildings",
        zooms: 20
      },
      {
        id: "tunnels",
        type: "line",
        title: "Roads Tunnels",
        zooms: {
          minzoom: 5,
          maxzoom: 20
        }
      },
      {
        id: "roads",
        type: "line",
        title: "Roads",
        zooms: {
          minzoom: 5,
          maxzoom: 20
        }
      },
      {
        id: "bridges",
        type: "line",
        title: "Roads Bridges",
        zooms: {
          minzoom: 5,
          maxzoom: 20
        }
      },
      {
        id: "roads-labels",
        type: "symbol",
        title: "Water Labels",
        zooms: {
          minzoom: 9,
          maxzoom: 20
        }
      },
      {
        id: "waterway-labels",
        type: "symbol",
        title: "Water Labels",
        zooms: {
          minzoom: 11,
          maxzoom: 20
        }
      },
      {
        id: "places",
        type: "symbol",
        title: "Political & Place Labels",
        zooms: [2, 4, 6, 8, 10, 12, 14, 16]
      }
    ],
    "mapbox:autocomposite": false,
    "mapbox:type": "template",
    "maputnik:renderer": "mbgljs",
    "openmaptiles:version": "3.x"
  },
  center: [2.27896, 48.87001],
  zoom: 11,
  bearing: 0,
  pitch: 0,
  sources: {
    basemap: {
      tiles: ["https://www.qwant.com/maps/tiles/ozbasemap/{z}/{x}/{y}.pbf"],
      name: "OpenMapTiles",
      format: "pbf",
      basename: "v3.7.mbtiles",
      id: "openmaptiles",
      attribution:
        '<a href="https://about.qwant.com/fr/legal/cgu/qwant-maps/" target="_blank">Qwant Maps</a> <a href="http://www.openmaptiles.org/" target="_blank">&copy; OpenMapTiles</a> <a href="http://www.openstreetmap.org/about/" target="_blank">&copy; OpenStreetMap contributors</a>',
      center: [-12.2168, 28.6135, 4],
      description: "Une adaptation des tuiles OpenMapTiles pour Qwant Maps",
      maxzoom: 14,
      minzoom: 0,
      pixel_scale: "256",
      maskLevel: "8",
      bounds: [-180, -85.0511, 180, 85.0511],
      planettime: "1508716800000",
      version: "3.6.2",
      tilejson: "2.0.0",
      type: "vector"
    },
    poi: {
      tiles: ["https://www.qwant.com/maps/tiles/ozpoi/{z}/{x}/{y}.pbf"],
      name: "OpenMapTiles",
      format: "pbf",
      basename: "v3.7.mbtiles",
      id: "openmaptiles",
      attribution:
        '<a href="https://about.qwant.com/fr/legal/cgu/qwant-maps/" target="_blank">Qwant Maps</a> <a href="http://www.openmaptiles.org/" target="_blank">&copy; OpenMapTiles</a> <a href="http://www.openstreetmap.org/about/" target="_blank">&copy; OpenStreetMap contributors</a>',
      center: [-12.2168, 28.6135, 4],
      description:
        "Une adaptation des tuiles OpenMapTiles pour Qwant Maps - juste les POIs",
      maxzoom: 14,
      minzoom: 0,
      pixel_scale: "256",
      maskLevel: "8",
      bounds: [-180, -85.0511, 180, 85.0511],
      planettime: "1508716800000",
      version: "3.6.2",
      tilejson: "2.0.0",
      type: "vector"
    }
  },
  sprite: "https://www.qwant.com/maps/mapstyle/sprite",
  glyphs: "https://www.qwant.com/maps/mapstyle/font/{fontstack}/{range}.pbf",
  layers: [
    {
      id: "background",
      type: "background",
      paint: {
        "background-color": "#F8F8F8"
      }
    },
    {
      id: "landcover-glacier",
      type: "fill",
      metadata: {
        "mapbox:group": "1444849388993.3071",
        "taxonomy:group": "landuse"
      },
      source: "basemap",
      "source-layer": "landcover",
      filter: ["==", "subclass", "glacier"],
      layout: {
        visibility: "visible"
      },
      paint: {
        "fill-color": "#fff",
        "fill-opacity": {
          base: 1,
          stops: [[0, 0.9], [10, 0.3]]
        }
      }
    },
    {
      id: "landuse-residential",
      type: "fill",
      metadata: {
        "mapbox:group": "1444849388993.3071",
        "taxonomy:group": "landuse"
      },
      source: "basemap",
      "source-layer": "landuse",
      filter: ["==", "class", "residential"],
      paint: {
        "fill-color": {
          base: 1,
          stops: [[12, "hsla(0, 6%, 93%, 0.4)"], [16, "hsla(0, 5%, 91%, 0.2)"]]
        }
      }
    },
    {
      id: "landuse-commercial",
      type: "fill",
      metadata: {
        "mapbox:group": "1444849388993.3071",
        "taxonomy:group": "landuse"
      },
      source: "basemap",
      "source-layer": "landuse",
      filter: [
        "all",
        ["==", "$type", "Polygon"],
        ["==", "class", "commercial"]
      ],
      paint: {
        "fill-color": "hsla(49, 100%, 88%, 0.34)"
      }
    },
    {
      id: "landuse-industrial",
      type: "fill",
      metadata: {
        "mapbox:group": "1444849388993.3071",
        "taxonomy:group": "landuse"
      },
      source: "basemap",
      "source-layer": "landuse",
      filter: [
        "all",
        ["==", "$type", "Polygon"],
        ["==", "class", "industrial"]
      ],
      paint: {
        "fill-color": "hsla(49, 100%, 88%, 0.34)"
      }
    },
    {
      id: "park",
      type: "fill",
      metadata: {
        "mapbox:group": "1444849388993.3071",
        "taxonomy:group": "landuse"
      },
      source: "basemap",
      "source-layer": "park",
      filter: ["==", "$type", "Polygon"],
      paint: {
        "fill-color": "#d8e8c8",
        "fill-opacity": {
          base: 1.8,
          stops: [[9, 0.5], [12, 0.2]]
        }
      }
    },
    {
      id: "park-outline",
      type: "line",
      metadata: {
        "mapbox:group": "1444849388993.3071"
      },
      source: "basemap",
      "source-layer": "park",
      filter: ["==", "$type", "Polygon"],
      layout: {},
      paint: {
        "line-color": {
          base: 1,
          stops: [
            [6, "hsla(96, 40%, 49%, 0.36)"],
            [8, "hsla(96, 40%, 49%, 0.66)"]
          ]
        },
        "line-dasharray": [3, 3]
      }
    },
    {
      id: "landuse-cemetery",
      type: "fill",
      metadata: {
        "mapbox:group": "1444849388993.3071",
        "taxonomy:group": "landuse"
      },
      source: "basemap",
      "source-layer": "landuse",
      filter: ["==", "class", "cemetery"],
      paint: {
        "fill-color": "#e0e4dd"
      }
    },
    {
      id: "landuse-hospital",
      type: "fill",
      metadata: {
        "mapbox:group": "1444849388993.3071",
        "taxonomy:group": "landuse"
      },
      source: "basemap",
      "source-layer": "landuse",
      filter: ["==", "class", "hospital"],
      paint: {
        "fill-color": "#4AA0E7",
        "fill-outline-color": "#4AA0E7",
        "fill-opacity": 0.1
      }
    },
    {
      id: "landuse-school",
      type: "fill",
      metadata: {
        "mapbox:group": "1444849388993.3071",
        "taxonomy:group": "landuse"
      },
      source: "basemap",
      "source-layer": "landuse",
      filter: ["in", "class", "school", "kindergarten", "university"],
      paint: {
        "fill-color": "#e3e3e3"
      }
    },
    {
      id: "landuse-railway",
      type: "fill",
      metadata: {
        "mapbox:group": "1444849388993.3071",
        "taxonomy:group": "landuse"
      },
      source: "basemap",
      "source-layer": "landuse",
      filter: ["==", "class", "railway"],
      paint: {
        "fill-color": "hsla(30, 19%, 90%, 0.4)"
      }
    },
    {
      id: "landcover-wood",
      type: "fill",
      metadata: {
        "mapbox:group": "1444849388993.3071",
        "taxonomy:group": "landuse"
      },
      source: "basemap",
      "source-layer": "landcover",
      filter: ["==", "class", "wood"],
      paint: {
        "fill-color": "#6a4",
        "fill-opacity": 0.1,
        "fill-outline-color": "hsla(0, 0%, 0%, 0.03)",
        "fill-antialias": {
          base: 1,
          stops: [[0, false], [9, true]]
        }
      }
    },
    {
      id: "landcover-grass",
      type: "fill",
      metadata: {
        "mapbox:group": "1444849388993.3071",
        "taxonomy:group": "landuse"
      },
      source: "basemap",
      "source-layer": "landcover",
      filter: ["==", "class", "grass"],
      paint: {
        "fill-color": "#B7EBBF",
        "fill-opacity": 1
      }
    },
    {
      id: "landcover-grass-park",
      type: "fill",
      metadata: {
        "mapbox:group": "1444849388993.3071",
        "taxonomy:group": "landuse"
      },
      source: "basemap",
      "source-layer": "park",
      filter: ["==", "class", "public_park"],
      paint: {
        "fill-color": "#d8e8c8",
        "fill-opacity": 0.8
      }
    },
    {
      id: "landuse-aerodrome",
      type: "fill",
      metadata: {
        "mapbox:group": "1444849388993.3071",
        "taxonomy:group": "landuse"
      },
      source: "basemap",
      "source-layer": "aeroway",
      filter: ["in", "class", "aerodrome"],
      paint: {
        "fill-color": "#8665E7",
        "fill-opacity": 0.06
      }
    },
    {
      id: "landuse-bus",
      type: "fill",
      metadata: {
        "mapbox:group": "1444849388993.3071",
        "taxonomy:group": "landuse"
      },
      source: "basemap",
      "source-layer": "landuse",
      filter: ["in", "class", "bus_station"],
      paint: {
        "fill-color": "#8665E7",
        "fill-opacity": 0.06
      }
    },
    {
      id: "landuse-entertainment",
      type: "fill",
      metadata: {
        "mapbox:group": "1444849388993.3071",
        "taxonomy:group": "landuse"
      },
      source: "basemap",
      "source-layer": "landuse",
      filter: ["in", "class", "theme_park", "zoo"],
      paint: {
        "fill-color": "#E93865",
        "fill-opacity": 0.05
      }
    },
    {
      id: "landuse-pitch",
      type: "fill",
      metadata: {
        "mapbox:group": "1444849388993.3071",
        "taxonomy:group": "landuse"
      },
      source: "basemap",
      "source-layer": "landuse",
      filter: ["in", "class", "pitch", "playground", "stadium"],
      paint: {
        "fill-color": "rgb(105,150,108)",
        "fill-opacity": 0.2
      }
    },
    {
      id: "waterway-other",
      type: "line",
      metadata: {
        "mapbox:group": "1444849382550.77",
        "taxonomy:group": "waterway"
      },
      source: "basemap",
      "source-layer": "waterway",
      filter: ["!in", "class", "canal", "river", "stream"],
      layout: {
        "line-cap": "round"
      },
      paint: {
        "line-color": "#a0c8f0",
        "line-width": {
          base: 1.3,
          stops: [[13, 0.5], [20, 2]]
        }
      }
    },
    {
      id: "waterway-stream-canal",
      type: "line",
      metadata: {
        "mapbox:group": "1444849382550.77",
        "taxonomy:group": "waterway"
      },
      source: "basemap",
      "source-layer": "waterway",
      filter: ["in", "class", "canal", "stream"],
      layout: {
        "line-cap": "round"
      },
      paint: {
        "line-color": "#a0c8f0",
        "line-width": {
          base: 1.3,
          stops: [[13, 0.5], [20, 6]]
        }
      }
    },
    {
      id: "waterway-river",
      type: "line",
      metadata: {
        "mapbox:group": "1444849382550.77",
        "taxonomy:group": "waterway"
      },
      source: "basemap",
      "source-layer": "waterway",
      filter: ["==", "class", "river"],
      layout: {
        "line-cap": "round"
      },
      paint: {
        "line-color": "#a0c8f0",
        "line-width": {
          base: 1.2,
          stops: [[10, 0.8], [20, 6]]
        }
      }
    },
    {
      id: "water-offset",
      type: "fill",
      metadata: {
        "mapbox:group": "1444849382550.77"
      },
      source: "basemap",
      "source-layer": "water",
      maxzoom: 8,
      filter: ["==", "$type", "Polygon"],
      layout: {
        visibility: "visible"
      },
      paint: {
        "fill-opacity": 1,
        "fill-color": "#a0c8f0",
        "fill-translate": {
          base: 1,
          stops: [[6, [2, 0]], [8, [0, 0]]]
        }
      }
    },
    {
      id: "water",
      type: "fill",
      metadata: {
        "mapbox:group": "1444849382550.77",
        "taxonomy:group": "landuse"
      },
      source: "basemap",
      "source-layer": "water",
      layout: {
        visibility: "visible"
      },
      paint: {
        "fill-color": "#BBE0FC"
      }
    },
    {
      id: "water-pattern",
      type: "fill",
      metadata: {
        "mapbox:group": "1444849382550.77"
      },
      source: "basemap",
      "source-layer": "water",
      layout: {
        visibility: "visible"
      },
      paint: {
        "fill-translate": [0, 2.5],
        "fill-color": "#BBE0FC"
      }
    },
    {
      id: "landcover-ice-shelf",
      type: "fill",
      metadata: {
        "mapbox:group": "1444849382550.77",
        "taxonomy:group": "landuse"
      },
      source: "basemap",
      "source-layer": "landcover",
      filter: ["==", "subclass", "ice_shelf"],
      layout: {
        visibility: "visible"
      },
      paint: {
        "fill-color": "#fff",
        "fill-opacity": {
          base: 1,
          stops: [[0, 0.9], [10, 0.3]]
        }
      }
    },
    {
      id: "building",
      type: "fill",
      metadata: {
        "mapbox:group": "1444849364238.8171",
        "taxonomy:group": "building"
      },
      source: "basemap",
      "source-layer": "building",
      paint: {
        "fill-color": {
          base: 1,
          stops: [[15.5, "hsla(0, 0%, 95%, 0)"], [16, "hsla(0, 0%, 84%, 0)"]]
        },
        "fill-antialias": true
      }
    },
    {
      id: "building-top",
      type: "fill",
      metadata: {
        "mapbox:group": "1444849364238.8171",
        "taxonomy:group": "building"
      },
      source: "basemap",
      "source-layer": "building",
      layout: {
        visibility: "visible"
      },
      paint: {
        "fill-translate": {
          base: 1,
          stops: [[14, [0, 0]], [16, [-2, -2]]]
        },
        "fill-outline-color": "#dfdbd7",
        "fill-color": "hsl(0, 0%, 93%)",
        "fill-opacity": {
          base: 1,
          stops: [[15.9, 0], [16, 0.8]]
        }
      }
    },
    {
      id: "tunnel-service-track-casing",
      type: "line",
      metadata: {
        "mapbox:group": "1444849354174.1904",
        "taxonomy:group": "tunnels",
        "taxonomy:casing": "tunnel-service-track"
      },
      source: "basemap",
      "source-layer": "transportation",
      filter: [
        "all",
        ["==", "brunnel", "tunnel"],
        ["in", "class", "service", "track"]
      ],
      layout: {
        "line-join": "round"
      },
      paint: {
        "line-color": "#cfcdca",
        "line-dasharray": [0.5, 0.25],
        "line-width": {
          base: 1.2,
          stops: [[15, 1], [16, 4], [18, 11], [20, 21]]
        }
      }
    },
    {
      id: "tunnel-minor-casing",
      type: "line",
      metadata: {
        "mapbox:group": "1444849354174.1904",
        "taxonomy:group": "tunnels",
        "taxonomy:casing": "tunnel-minor"
      },
      source: "basemap",
      "source-layer": "transportation",
      filter: ["all", ["==", "brunnel", "tunnel"], ["==", "class", "minor"]],
      layout: {
        "line-join": "round"
      },
      paint: {
        "line-color": "#cfcdca",
        "line-dasharray": [0.5, 0.25],
        "line-opacity": {
          stops: [[12, 0], [12.5, 1]]
        },
        "line-width": {
          base: 1.2,
          stops: [[12, 0.5], [13, 1], [14, 4], [18, 15], [20, 25]]
        }
      }
    },
    {
      id: "tunnel-secondary-tertiary-casing",
      type: "line",
      metadata: {
        "mapbox:group": "1444849354174.1904",
        "taxonomy:group": "tunnels",
        "taxonomy:casing": "tunnel-secondary-tertiary"
      },
      source: "basemap",
      "source-layer": "transportation",
      filter: [
        "all",
        ["==", "brunnel", "tunnel"],
        ["in", "class", "secondary", "tertiary"]
      ],
      layout: {
        "line-join": "round"
      },
      paint: {
        "line-color": "#e9ac77",
        "line-dasharray": [0.5, 0.25],
        "line-opacity": 1,
        "line-width": {
          base: 1.2,
          stops: [[8, 1.5], [18, 15], [20, 25]]
        }
      }
    },
    {
      id: "tunnel-trunk-primary-casing",
      type: "line",
      metadata: {
        "mapbox:group": "1444849354174.1904",
        "taxonomy:group": "tunnels",
        "taxonomy:casing": "tunnel-trunk-primary"
      },
      source: "basemap",
      "source-layer": "transportation",
      filter: [
        "all",
        ["==", "brunnel", "tunnel"],
        ["in", "class", "primary", "trunk"]
      ],
      layout: {
        "line-join": "round"
      },
      paint: {
        "line-color": "#e9ac77",
        "line-dasharray": [0.5, 0.25],
        "line-width": {
          base: 1.2,
          stops: [[5, 0.4], [6, 0.6], [7, 1.5], [18, 22], [20, 42]]
        }
      }
    },
    {
      id: "tunnel-motorway-casing",
      type: "line",
      metadata: {
        "mapbox:group": "1444849354174.1904",
        "taxonomy:group": "tunnels",
        "taxonomy:casing": "tunnel-motorway"
      },
      source: "basemap",
      "source-layer": "transportation",
      filter: ["all", ["==", "brunnel", "tunnel"], ["==", "class", "motorway"]],
      layout: {
        "line-join": "round",
        visibility: "visible"
      },
      paint: {
        "line-color": "#e9ac77",
        "line-dasharray": [0.5, 0.25],
        "line-width": {
          base: 1.2,
          stops: [[5, 0.4], [6, 0.6], [7, 1.5], [18, 22], [20, 42]]
        }
      }
    },
    {
      id: "tunnel-path",
      type: "line",
      metadata: {
        "mapbox:group": "1444849354174.1904",
        "taxonomy:group": "tunnels"
      },
      source: "basemap",
      "source-layer": "transportation",
      filter: [
        "all",
        ["==", "$type", "LineString"],
        ["all", ["==", "brunnel", "tunnel"], ["==", "class", "path"]]
      ],
      paint: {
        "line-color": "#cba",
        "line-dasharray": [1.5, 0.75],
        "line-width": {
          base: 1.2,
          stops: [[15, 1.2], [20, 4]]
        }
      }
    },
    {
      id: "tunnel-service-track",
      type: "line",
      metadata: {
        "mapbox:group": "1444849354174.1904",
        "taxonomy:group": "tunnels"
      },
      source: "basemap",
      "source-layer": "transportation",
      filter: [
        "all",
        ["==", "brunnel", "tunnel"],
        ["in", "class", "service", "track"]
      ],
      layout: {
        "line-join": "round"
      },
      paint: {
        "line-color": "#fff",
        "line-width": {
          base: 1.2,
          stops: [[15.5, 0], [16, 2], [18, 7.5], [20, 17.5]]
        }
      }
    },
    {
      id: "tunnel-minor",
      type: "line",
      metadata: {
        "mapbox:group": "1444849354174.1904",
        "taxonomy:group": "tunnels"
      },
      source: "basemap",
      "source-layer": "transportation",
      filter: [
        "all",
        ["==", "brunnel", "tunnel"],
        ["==", "class", "minor_road"]
      ],
      layout: {
        "line-join": "round"
      },
      paint: {
        "line-color": "#fff",
        "line-opacity": 1,
        "line-width": {
          base: 1.2,
          stops: [[13.5, 0], [14, 2.5], [18, 11.5], [20, 21.5]]
        }
      }
    },
    {
      id: "tunnel-secondary-tertiary",
      type: "line",
      metadata: {
        "mapbox:group": "1444849354174.1904",
        "taxonomy:group": "tunnels"
      },
      source: "basemap",
      "source-layer": "transportation",
      filter: [
        "all",
        ["==", "brunnel", "tunnel"],
        ["in", "class", "secondary", "tertiary"]
      ],
      layout: {
        "line-join": "round"
      },
      paint: {
        "line-color": "#fff4c6",
        "line-width": {
          base: 1.2,
          stops: [[6.5, 0], [7, 0.5], [18, 10], [20, 20]]
        }
      }
    },
    {
      id: "tunnel-trunk-primary",
      type: "line",
      metadata: {
        "mapbox:group": "1444849354174.1904",
        "taxonomy:group": "tunnels"
      },
      source: "basemap",
      "source-layer": "transportation",
      filter: [
        "all",
        ["==", "brunnel", "tunnel"],
        ["in", "class", "primary", "trunk"]
      ],
      layout: {
        "line-join": "round"
      },
      paint: {
        "line-color": "#fff4c6",
        "line-width": {
          base: 1.2,
          stops: [[6.5, 0], [7, 0.5], [18, 18], [20, 38]]
        }
      }
    },
    {
      id: "tunnel-motorway",
      type: "line",
      metadata: {
        "mapbox:group": "1444849354174.1904",
        "taxonomy:group": "tunnels"
      },
      source: "basemap",
      "source-layer": "transportation",
      filter: ["all", ["==", "brunnel", "tunnel"], ["==", "class", "motorway"]],
      layout: {
        "line-join": "round",
        visibility: "visible"
      },
      paint: {
        "line-color": "#ffdaa6",
        "line-width": {
          base: 1.2,
          stops: [[6.5, 0], [7, 0.5], [18, 18], [20, 38]]
        }
      }
    },
    {
      id: "tunnel-railway",
      type: "line",
      metadata: {
        "mapbox:group": "1444849354174.1904",
        "taxonomy:group": "tunnels"
      },
      source: "basemap",
      "source-layer": "transportation",
      filter: ["all", ["==", "brunnel", "tunnel"], ["==", "class", "rail"]],
      paint: {
        "line-color": "#bbb",
        "line-width": {
          base: 1.4,
          stops: [[14, 0.4], [15, 0.75], [20, 2]]
        },
        "line-dasharray": [2, 2]
      }
    },
    {
      id: "ferry",
      type: "line",
      metadata: {
        "taxonomy:group": "roads"
      },
      source: "basemap",
      "source-layer": "transportation",
      filter: ["all", ["in", "class", "ferry"]],
      layout: {
        "line-join": "round",
        visibility: "visible"
      },
      paint: {
        "line-color": "rgba(108, 159, 182, 1)",
        "line-width": 1.1,
        "line-dasharray": [2, 2]
      }
    },
    {
      id: "aeroway-area",
      type: "fill",
      metadata: {
        "mapbox:group": "1444849345966.4436",
        "taxonomy:group": "landuse"
      },
      source: "basemap",
      "source-layer": "aeroway",
      minzoom: 4,
      filter: [
        "all",
        ["==", "$type", "Polygon"],
        ["in", "class", "runway", "taxiway"]
      ],
      layout: {
        visibility: "visible"
      },
      paint: {
        "fill-opacity": {
          base: 1,
          stops: [[13, 0], [14, 1]]
        },
        "fill-color": "rgba(255, 255, 255, 1)"
      }
    },
    {
      id: "aeroway-taxiway",
      type: "line",
      metadata: {
        "mapbox:group": "1444849345966.4436",
        "taxonomy:group": "bridges"
      },
      source: "basemap",
      "source-layer": "aeroway",
      minzoom: 4,
      filter: [
        "all",
        ["in", "class", "taxiway"],
        ["==", "$type", "LineString"]
      ],
      layout: {
        "line-cap": "butt",
        "line-join": "round",
        visibility: "visible"
      },
      paint: {
        "line-color": "rgba(255, 255, 255, 1)",
        "line-width": {
          base: 1.5,
          stops: [[11, 1], [17, 10]]
        },
        "line-opacity": {
          base: 1,
          stops: [[11, 0], [12, 1]]
        }
      }
    },
    {
      id: "aeroway-runway",
      type: "line",
      metadata: {
        "mapbox:group": "1444849345966.4436",
        "taxonomy:group": "bridges"
      },
      source: "basemap",
      "source-layer": "aeroway",
      minzoom: 4,
      filter: ["all", ["==", "$type", "LineString"], ["in", "class", "runway"]],
      layout: {
        "line-cap": "butt",
        "line-join": "round",
        visibility: "visible"
      },
      paint: {
        "line-color": "rgba(255, 255, 255, 1)",
        "line-width": {
          base: 1.5,
          stops: [[11, 4], [17, 50]]
        },
        "line-opacity": {
          base: 1,
          stops: [[11, 0], [12, 1]]
        }
      }
    },
    {
      id: "highway-area",
      type: "fill",
      metadata: {
        "mapbox:group": "1444849345966.4436",
        "taxonomy:group": "landuse"
      },
      source: "basemap",
      "source-layer": "transportation",
      filter: ["==", "$type", "Polygon"],
      layout: {
        visibility: "visible"
      },
      paint: {
        "fill-color": "hsla(0, 0%, 93%, 0.56)",
        "fill-outline-color": "#cfcdca",
        "fill-opacity": 0.9,
        "fill-antialias": false
      }
    },
    {
      id: "highway-motorway-link-casing",
      type: "line",
      metadata: {
        "mapbox:group": "1444849345966.4436",
        "taxonomy:group": "roads",
        "taxonomy:casing": "highway-motorway-link"
      },
      source: "basemap",
      "source-layer": "transportation",
      minzoom: 12,
      filter: [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        ["==", "class", "motorway_link"]
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round"
      },
      paint: {
        "line-color": "#e9ac77",
        "line-opacity": 1,
        "line-width": {
          base: 1.2,
          stops: [[12, 1], [13, 3], [14, 4], [18, 15], [20, 25]]
        }
      }
    },
    {
      id: "highway-link-casing",
      type: "line",
      metadata: {
        "mapbox:group": "1444849345966.4436",
        "taxonomy:group": "roads",
        "taxonomy:casing": "highway-link"
      },
      source: "basemap",
      "source-layer": "transportation",
      minzoom: 13,
      filter: [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        [
          "in",
          "class",
          "primary_link",
          "secondary_link",
          "tertiary_link",
          "trunk_link"
        ]
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible"
      },
      paint: {
        "line-color": "#e9ac77",
        "line-opacity": 1,
        "line-width": {
          base: 1.2,
          stops: [[12, 1], [13, 3], [14, 4], [18, 15], [18, 25]]
        }
      }
    },
    {
      id: "highway-minor-casing",
      type: "line",
      metadata: {
        "mapbox:group": "1444849345966.4436",
        "taxonomy:group": "roads",
        "taxonomy:casing": "highway-minor"
      },
      source: "basemap",
      "source-layer": "transportation",
      filter: [
        "all",
        ["==", "$type", "LineString"],
        [
          "all",
          ["!=", "brunnel", "tunnel"],
          ["in", "class", "minor", "service", "track"]
        ]
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round"
      },
      paint: {
        "line-color": "hsl(0, 0%, 93%)",
        "line-opacity": {
          stops: [[12, 0], [12.5, 1]]
        },
        "line-width": {
          base: 1.2,
          stops: [[12, 0.5], [13.5, 2], [14, 3], [18, 15.5], [20, 25.5]]
        }
      }
    },
    {
      id: "highway-secondary-tertiary-casing",
      type: "line",
      metadata: {
        "mapbox:group": "1444849345966.4436",
        "taxonomy:group": "roads",
        "taxonomy:casing": "highway-secondary-tertiary"
      },
      source: "basemap",
      "source-layer": "transportation",
      filter: [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        ["in", "class", "secondary", "tertiary"]
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible"
      },
      paint: {
        "line-color": "#FCDC7F",
        "line-opacity": 1,
        "line-width": {
          base: 1.2,
          stops: [[8, 1.5], [18, 17], [20, 27]]
        }
      }
    },
    {
      id: "highway-primary-casing",
      type: "line",
      metadata: {
        "mapbox:group": "1444849345966.4436",
        "taxonomy:group": "roads",
        "taxonomy:casing": "highway-primary"
      },
      source: "basemap",
      "source-layer": "transportation",
      minzoom: 5,
      filter: [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        ["in", "class", "primary"]
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible"
      },
      paint: {
        "line-color": "#e9ac77",
        "line-opacity": {
          stops: [[7, 0], [8, 1]]
        },
        "line-width": {
          base: 1.2,
          stops: [[7, 0], [8, 0.6], [9, 1.5], [18, 22], [20, 42]]
        }
      }
    },
    {
      id: "highway-trunk-casing",
      type: "line",
      metadata: {
        "mapbox:group": "1444849345966.4436",
        "taxonomy:group": "roads",
        "taxonomy:casing": "highway-trunk"
      },
      source: "basemap",
      "source-layer": "transportation",
      minzoom: 5,
      filter: [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        ["in", "class", "trunk"]
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible"
      },
      paint: {
        "line-color": "#e9ac77",
        "line-opacity": {
          stops: [[5, 0], [6, 1]]
        },
        "line-width": {
          base: 1.2,
          stops: [[5, 0], [6, 0.6], [7, 1.5], [18, 22], [20, 42]]
        }
      }
    },
    {
      id: "highway-motorway-casing",
      type: "line",
      metadata: {
        "mapbox:group": "1444849345966.4436",
        "taxonomy:group": "roads",
        "taxonomy:casing": "highway-motorway"
      },
      source: "basemap",
      "source-layer": "transportation",
      minzoom: 4,
      filter: [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        ["==", "class", "motorway"]
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible"
      },
      paint: {
        "line-color": "#e9ac77",
        "line-width": {
          base: 1.2,
          stops: [[4, 0], [5, 0.4], [6, 0.6], [7, 1.5], [18, 22], [20, 42]]
        },
        "line-opacity": {
          stops: [[4, 0], [5, 1]]
        }
      }
    },
    {
      id: "highway-path",
      type: "line",
      metadata: {
        "mapbox:group": "1444849345966.4436",
        "taxonomy:group": "roads"
      },
      source: "basemap",
      "source-layer": "transportation",
      filter: [
        "all",
        ["==", "$type", "LineString"],
        ["all", ["!in", "brunnel", "bridge", "tunnel"], ["==", "class", "path"]]
      ],
      paint: {
        "line-color": "hsla(0, 0%, 0%, 0.05)",
        "line-dasharray": [1.5, 0.75],
        "line-width": {
          base: 1.2,
          stops: [[14.9, 0], [15, 2], [20, 4]]
        }
      }
    },
    {
      id: "highway-motorway-link",
      type: "line",
      metadata: {
        "mapbox:group": "1444849345966.4436",
        "taxonomy:group": "roads"
      },
      source: "basemap",
      "source-layer": "transportation",
      minzoom: 12,
      filter: [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        ["==", "class", "motorway_link"]
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round"
      },
      paint: {
        "line-color": "#fc8",
        "line-width": {
          base: 1.2,
          stops: [[12.5, 0], [13, 1.5], [14, 2.5], [18, 11.5], [20, 21.5]]
        }
      }
    },
    {
      id: "highway-link",
      type: "line",
      metadata: {
        "mapbox:group": "1444849345966.4436",
        "taxonomy:group": "roads"
      },
      source: "basemap",
      "source-layer": "transportation",
      minzoom: 13,
      filter: [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        [
          "in",
          "class",
          "primary_link",
          "secondary_link",
          "tertiary_link",
          "trunk_link"
        ]
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible"
      },
      paint: {
        "line-color": "#fea",
        "line-width": {
          base: 1.2,
          stops: [[12.5, 0], [13, 1.5], [14, 2.5], [18, 11.5], [20, 21.5]]
        }
      }
    },
    {
      id: "highway-minor",
      type: "line",
      metadata: {
        "mapbox:group": "1444849345966.4436",
        "taxonomy:group": "roads"
      },
      source: "basemap",
      "source-layer": "transportation",
      filter: [
        "all",
        ["==", "$type", "LineString"],
        [
          "all",
          ["!=", "brunnel", "tunnel"],
          ["in", "class", "minor", "service", "track"]
        ]
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round"
      },
      paint: {
        "line-color": "#fff",
        "line-opacity": 1,
        "line-width": {
          base: 1.2,
          stops: [[13.5, 0], [14, 1], [18, 11.5], [20, 21.5]]
        }
      }
    },
    {
      id: "highway-secondary-tertiary",
      type: "line",
      metadata: {
        "mapbox:group": "1444849345966.4436",
        "taxonomy:group": "roads"
      },
      source: "basemap",
      "source-layer": "transportation",
      filter: [
        "all",
        ["!in", "brunnel", "bridge", "tunnel"],
        ["in", "class", "secondary", "tertiary"]
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible"
      },
      paint: {
        "line-color": "#FEF1CC",
        "line-width": {
          base: 1.2,
          stops: [[6.5, 0], [8, 0.5], [18, 13], [20, 23]]
        }
      }
    },
    {
      id: "highway-primary",
      type: "line",
      metadata: {
        "mapbox:group": "1444849345966.4436",
        "taxonomy:group": "roads"
      },
      source: "basemap",
      "source-layer": "transportation",
      filter: [
        "all",
        ["==", "$type", "LineString"],
        [
          "all",
          ["!in", "brunnel", "bridge", "tunnel"],
          ["in", "class", "primary"]
        ]
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible"
      },
      paint: {
        "line-color": "#FDEAB2",
        "line-width": {
          base: 1.2,
          stops: [[8.5, 0], [9, 0.5], [18, 18], [20, 38]]
        }
      }
    },
    {
      id: "highway-trunk",
      type: "line",
      metadata: {
        "mapbox:group": "1444849345966.4436",
        "taxonomy:group": "roads"
      },
      source: "basemap",
      "source-layer": "transportation",
      filter: [
        "all",
        ["==", "$type", "LineString"],
        [
          "all",
          ["!in", "brunnel", "bridge", "tunnel"],
          ["in", "class", "trunk"]
        ]
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible"
      },
      paint: {
        "line-color": "#fea",
        "line-width": {
          base: 1.2,
          stops: [[6.5, 0], [7, 0.5], [18, 18], [20, 38]]
        }
      }
    },
    {
      id: "highway-motorway",
      type: "line",
      metadata: {
        "mapbox:group": "1444849345966.4436",
        "taxonomy:group": "roads"
      },
      source: "basemap",
      "source-layer": "transportation",
      minzoom: 5,
      filter: [
        "all",
        ["==", "$type", "LineString"],
        [
          "all",
          ["!in", "brunnel", "bridge", "tunnel"],
          ["==", "class", "motorway"]
        ]
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible"
      },
      paint: {
        "line-color": "#fc8",
        "line-width": {
          base: 1.2,
          stops: [[6.5, 0], [7, 0.5], [18, 18], [20, 38]]
        }
      }
    },
    {
      id: "railway-transit",
      type: "line",
      metadata: {
        "mapbox:group": "1444849345966.4436",
        "taxonomy:group": "roads"
      },
      source: "basemap",
      "source-layer": "transportation",
      filter: [
        "all",
        ["==", "$type", "LineString"],
        ["all", ["==", "class", "transit"], ["!in", "brunnel", "tunnel"]]
      ],
      layout: {
        visibility: "visible"
      },
      paint: {
        "line-color": "hsla(0, 0%, 73%, 0.77)",
        "line-width": {
          base: 1.4,
          stops: [[14, 0.4], [20, 1]]
        }
      }
    },
    {
      id: "railway-transit-hatching",
      type: "line",
      metadata: {
        "mapbox:group": "1444849345966.4436"
      },
      source: "basemap",
      "source-layer": "transportation",
      filter: [
        "all",
        ["==", "$type", "LineString"],
        ["all", ["==", "class", "transit"], ["!in", "brunnel", "tunnel"]]
      ],
      layout: {
        visibility: "visible"
      },
      paint: {
        "line-color": "hsla(0, 0%, 73%, 0.68)",
        "line-dasharray": [0.2, 8],
        "line-width": {
          base: 1.4,
          stops: [[14.5, 0], [15, 2], [20, 6]]
        }
      }
    },
    {
      id: "railway-service",
      type: "line",
      metadata: {
        "mapbox:group": "1444849345966.4436",
        "taxonomy:group": "roads"
      },
      source: "basemap",
      "source-layer": "transportation",
      filter: [
        "all",
        ["==", "$type", "LineString"],
        ["all", ["==", "class", "rail"], ["has", "service"]]
      ],
      paint: {
        "line-color": "hsla(0, 0%, 73%, 0.77)",
        "line-width": {
          base: 1.4,
          stops: [[14, 0.4], [20, 1]]
        }
      }
    },
    {
      id: "railway-service-hatching",
      type: "line",
      metadata: {
        "mapbox:group": "1444849345966.4436"
      },
      source: "basemap",
      "source-layer": "transportation",
      filter: [
        "all",
        ["==", "$type", "LineString"],
        ["all", ["==", "class", "rail"], ["has", "service"]]
      ],
      layout: {
        visibility: "visible"
      },
      paint: {
        "line-color": "hsla(0, 0%, 73%, 0.68)",
        "line-dasharray": [0.2, 8],
        "line-width": {
          base: 1.4,
          stops: [[14.5, 0], [15, 2], [20, 6]]
        }
      }
    },
    {
      id: "railway",
      type: "line",
      metadata: {
        "mapbox:group": "1444849345966.4436",
        "taxonomy:group": "roads"
      },
      source: "basemap",
      "source-layer": "transportation",
      filter: [
        "all",
        ["==", "$type", "LineString"],
        [
          "all",
          ["!has", "service"],
          ["!in", "brunnel", "bridge", "tunnel"],
          ["==", "class", "rail"]
        ]
      ],
      paint: {
        "line-color": "#bbb",
        "line-width": {
          base: 1.4,
          stops: [[14, 0.4], [15, 0.75], [20, 2]]
        }
      }
    },
    {
      id: "railway-hatching",
      type: "line",
      metadata: {
        "mapbox:group": "1444849345966.4436"
      },
      source: "basemap",
      "source-layer": "transportation",
      filter: [
        "all",
        ["==", "$type", "LineString"],
        [
          "all",
          ["!has", "service"],
          ["!in", "brunnel", "bridge", "tunnel"],
          ["==", "class", "rail"]
        ]
      ],
      paint: {
        "line-color": "#bbb",
        "line-dasharray": [0.2, 8],
        "line-width": {
          base: 1.4,
          stops: [[14.5, 0], [15, 3], [20, 8]]
        }
      }
    },
    {
      id: "bridge-motorway-link-casing",
      type: "line",
      metadata: {
        "mapbox:group": "1444849334699.1902",
        "taxonomy:group": "bridges",
        "taxonomy:casing": "bridge-motorway-link"
      },
      source: "basemap",
      "source-layer": "transportation",
      filter: [
        "all",
        ["==", "brunnel", "bridge"],
        ["==", "class", "motorway_link"]
      ],
      layout: {
        "line-join": "round"
      },
      paint: {
        "line-color": "#e9ac77",
        "line-opacity": 1,
        "line-width": {
          base: 1.2,
          stops: [[12, 1], [13, 3], [14, 4], [18, 15], [20, 25]]
        }
      }
    },
    {
      id: "bridge-link-casing",
      type: "line",
      metadata: {
        "mapbox:group": "1444849334699.1902",
        "taxonomy:group": "bridges",
        "taxonomy:casing": "bridge-link"
      },
      source: "basemap",
      "source-layer": "transportation",
      filter: [
        "all",
        ["==", "brunnel", "bridge"],
        [
          "in",
          "class",
          "primary_link",
          "secondary_link",
          "tertiary_link",
          "trunk_link"
        ]
      ],
      layout: {
        "line-join": "round"
      },
      paint: {
        "line-color": "#e9ac77",
        "line-opacity": 1,
        "line-width": {
          base: 1.2,
          stops: [[12, 1], [13, 3], [14, 4], [18, 15], [20, 25]]
        }
      }
    },
    {
      id: "bridge-secondary-tertiary-casing",
      type: "line",
      metadata: {
        "mapbox:group": "1444849334699.1902",
        "taxonomy:group": "bridges",
        "taxonomy:casing": "bridge-secondary-tertiary"
      },
      source: "basemap",
      "source-layer": "transportation",
      filter: [
        "all",
        ["==", "brunnel", "bridge"],
        ["in", "class", "secondary", "tertiary"]
      ],
      layout: {
        "line-join": "round"
      },
      paint: {
        "line-color": "#e9ac77",
        "line-opacity": 1,
        "line-width": {
          base: 1.2,
          stops: [[8, 1.5], [18, 17], [20, 27]]
        }
      }
    },
    {
      id: "bridge-trunk-primary-casing",
      type: "line",
      metadata: {
        "mapbox:group": "1444849334699.1902",
        "taxonomy:group": "bridges",
        "taxonomy:casing": "bridge-trunk-primary"
      },
      source: "basemap",
      "source-layer": "transportation",
      filter: [
        "all",
        ["==", "brunnel", "bridge"],
        ["in", "class", "primary", "trunk"]
      ],
      layout: {
        "line-join": "round"
      },
      paint: {
        "line-color": "hsl(28, 76%, 67%)",
        "line-width": {
          base: 1.2,
          stops: [[5, 0], [6, 0.6], [7, 1.5], [18, 22], [20, 42]]
        }
      }
    },
    {
      id: "bridge-motorway-casing",
      type: "line",
      metadata: {
        "mapbox:group": "1444849334699.1902",
        "taxonomy:group": "bridges",
        "taxonomy:casing": "bridge-motorway"
      },
      source: "basemap",
      "source-layer": "transportation",
      filter: ["all", ["==", "brunnel", "bridge"], ["==", "class", "motorway"]],
      layout: {
        "line-join": "round"
      },
      paint: {
        "line-color": "#e9ac77",
        "line-width": {
          base: 1.2,
          stops: [[5, 0.4], [6, 0.6], [7, 1.5], [18, 22], [20, 42]]
        }
      }
    },
    {
      id: "bridge-path-casing",
      type: "line",
      metadata: {
        "mapbox:group": "1444849334699.1902",
        "taxonomy:group": "bridges",
        "taxonomy:casing": "bridge-path"
      },
      source: "basemap",
      "source-layer": "transportation",
      filter: [
        "all",
        ["==", "$type", "LineString"],
        ["all", ["==", "brunnel", "bridge"], ["==", "class", "path"]]
      ],
      paint: {
        "line-color": "#f8f4f0",
        "line-width": {
          base: 1.2,
          stops: [[15, 1.2], [20, 18]]
        }
      }
    },
    {
      id: "bridge-path",
      type: "line",
      metadata: {
        "mapbox:group": "1444849334699.1902",
        "taxonomy:group": "bridges"
      },
      source: "basemap",
      "source-layer": "transportation",
      filter: [
        "all",
        ["==", "$type", "LineString"],
        ["all", ["==", "brunnel", "bridge"], ["==", "class", "path"]]
      ],
      paint: {
        "line-color": "#cba",
        "line-width": {
          base: 1.2,
          stops: [[15, 1.2], [20, 4]]
        },
        "line-dasharray": [1.5, 0.75]
      }
    },
    {
      id: "bridge-motorway-link",
      type: "line",
      metadata: {
        "mapbox:group": "1444849334699.1902",
        "taxonomy:group": "bridges"
      },
      source: "basemap",
      "source-layer": "transportation",
      filter: [
        "all",
        ["==", "brunnel", "bridge"],
        ["==", "class", "motorway_link"]
      ],
      layout: {
        "line-join": "round"
      },
      paint: {
        "line-color": "#fc8",
        "line-width": {
          base: 1.2,
          stops: [[12.5, 0], [13, 1.5], [14, 2.5], [18, 11.5], [20, 21.5]]
        }
      }
    },
    {
      id: "bridge-link",
      type: "line",
      metadata: {
        "mapbox:group": "1444849334699.1902",
        "taxonomy:group": "bridges"
      },
      source: "basemap",
      "source-layer": "transportation",
      filter: [
        "all",
        ["==", "brunnel", "bridge"],
        [
          "in",
          "class",
          "primary_link",
          "secondary_link",
          "tertiary_link",
          "trunk_link"
        ]
      ],
      layout: {
        "line-join": "round"
      },
      paint: {
        "line-color": "#fea",
        "line-width": {
          base: 1.2,
          stops: [[12.5, 0], [13, 1.5], [14, 2.5], [18, 11.5], [20, 21.5]]
        }
      }
    },
    {
      id: "bridge-secondary-tertiary",
      type: "line",
      metadata: {
        "mapbox:group": "1444849334699.1902",
        "taxonomy:group": "bridges"
      },
      source: "basemap",
      "source-layer": "transportation",
      filter: [
        "all",
        ["==", "brunnel", "bridge"],
        ["in", "class", "secondary", "tertiary"]
      ],
      layout: {
        "line-join": "round"
      },
      paint: {
        "line-color": "#fea",
        "line-width": {
          base: 1.2,
          stops: [[6.5, 0], [8, 0.5], [18, 13], [20, 23]]
        }
      }
    },
    {
      id: "bridge-trunk-primary",
      type: "line",
      metadata: {
        "mapbox:group": "1444849334699.1902",
        "taxonomy:group": "bridges"
      },
      source: "basemap",
      "source-layer": "transportation",
      filter: [
        "all",
        ["==", "brunnel", "bridge"],
        ["in", "class", "primary", "trunk"]
      ],
      layout: {
        "line-join": "round"
      },
      paint: {
        "line-color": "#fea",
        "line-width": {
          base: 1.2,
          stops: [[6.5, 0], [7, 0.5], [18, 18], [20, 38]]
        }
      }
    },
    {
      id: "bridge-motorway",
      type: "line",
      metadata: {
        "mapbox:group": "1444849334699.1902",
        "taxonomy:group": "bridges"
      },
      source: "basemap",
      "source-layer": "transportation",
      filter: ["all", ["==", "brunnel", "bridge"], ["==", "class", "motorway"]],
      layout: {
        "line-join": "round"
      },
      paint: {
        "line-color": "#fc8",
        "line-width": {
          base: 1.2,
          stops: [[6.5, 0], [7, 0.5], [18, 18], [20, 38]]
        }
      }
    },
    {
      id: "bridge-railway",
      type: "line",
      metadata: {
        "mapbox:group": "1444849334699.1902",
        "taxonomy:group": "bridges"
      },
      source: "basemap",
      "source-layer": "transportation",
      filter: ["all", ["==", "brunnel", "bridge"], ["==", "class", "rail"]],
      paint: {
        "line-color": "#bbb",
        "line-width": {
          base: 1.4,
          stops: [[14, 0.4], [15, 0.75], [20, 2]]
        }
      }
    },
    {
      id: "bridge-railway-hatching",
      type: "line",
      metadata: {
        "mapbox:group": "1444849334699.1902"
      },
      source: "basemap",
      "source-layer": "transportation",
      filter: ["all", ["==", "brunnel", "bridge"], ["==", "class", "rail"]],
      paint: {
        "line-color": "#bbb",
        "line-dasharray": [0.2, 8],
        "line-width": {
          base: 1.4,
          stops: [[14.5, 0], [15, 3], [20, 8]]
        }
      }
    },
    {
      id: "cablecar",
      type: "line",
      source: "basemap",
      "source-layer": "transportation",
      minzoom: 13,
      maxzoom: 24,
      filter: ["==", "class", "cable_car"],
      layout: {
        visibility: "visible",
        "line-cap": "round"
      },
      paint: {
        "line-color": "hsl(0, 0%, 70%)",
        "line-width": {
          base: 1,
          stops: [[11, 1], [19, 2.5]]
        }
      }
    },
    {
      id: "cablecar-dash",
      type: "line",
      source: "basemap",
      "source-layer": "transportation",
      minzoom: 13,
      maxzoom: 24,
      filter: ["==", "class", "cable_car"],
      layout: {
        visibility: "visible",
        "line-cap": "round"
      },
      paint: {
        "line-color": "hsl(0, 0%, 70%)",
        "line-width": {
          base: 1,
          stops: [[11, 3], [19, 5.5]]
        },
        "line-dasharray": [2, 3]
      }
    },
    {
      id: "boundary-land-level-4",
      type: "line",
      metadata: {
        "taxonomy:group": "admin-boundaries"
      },
      source: "basemap",
      "source-layer": "boundary",
      filter: [
        "all",
        ["!=", "maritime", 1],
        ["in", "admin_level", 4, 5, 6, 7, 8]
      ],
      layout: {
        "line-join": "round"
      },
      paint: {
        "line-color": "#9e9cab",
        "line-dasharray": [3, 1, 1, 1],
        "line-width": {
          base: 1.4,
          stops: [[4, 0.4], [5, 0.7], [12, 1]]
        }
      }
    },
    {
      id: "boundary-land-level-2",
      type: "line",
      metadata: {
        "taxonomy:group": "admin-boundaries"
      },
      source: "basemap",
      "source-layer": "boundary",
      filter: [
        "all",
        ["!=", "disputed", 1],
        ["!=", "maritime", 1],
        ["==", "admin_level", 2]
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round"
      },
      paint: {
        "line-color": "hsl(248, 7%, 66%)",
        "line-width": {
          base: 1,
          stops: [[0, 0.6], [4, 1.4], [5, 2], [12, 3]]
        }
      }
    },
    {
      id: "boundary-land-disputed",
      type: "line",
      metadata: {
        "taxonomy:group": "admin-boundaries"
      },
      source: "basemap",
      "source-layer": "boundary",
      filter: ["all", ["!=", "maritime", 1], ["==", "disputed", 1]],
      layout: {
        "line-cap": "round",
        "line-join": "round"
      },
      paint: {
        "line-color": "hsl(248, 7%, 70%)",
        "line-dasharray": [1, 3],
        "line-width": {
          base: 1,
          stops: [[0, 0.6], [4, 1.4], [5, 2], [12, 3]]
        }
      }
    },
    {
      id: "waterway-name",
      type: "symbol",
      metadata: {
        "taxonomy:group": "waterway-labels"
      },
      source: "basemap",
      "source-layer": "waterway",
      minzoom: 13,
      filter: ["all", ["==", "$type", "LineString"], ["has", "name"]],
      layout: {
        "text-font": ["Noto Sans Italic"],
        "text-size": 14,
        "text-field": [
          "case",
          ["has", "name:fr"],
          ["get", "name:fr"],
          ["get", "name"]
        ],
        "text-max-width": 5,
        "text-rotation-alignment": "map",
        "symbol-placement": "line",
        "text-letter-spacing": 0.2,
        "symbol-spacing": 350
      },
      paint: {
        "text-color": "#74aee9",
        "text-halo-width": 1.5,
        "text-halo-color": "rgba(255,255,255,0.7)"
      }
    },
    {
      id: "water-name-lakeline",
      type: "symbol",
      metadata: {
        "taxonomy:group": "waterway-labels"
      },
      source: "basemap",
      "source-layer": "water_name",
      filter: ["==", "$type", "LineString"],
      layout: {
        "text-font": ["Noto Sans Italic"],
        "text-size": 14,
        "text-field": [
          "case",
          ["has", "name:fr"],
          ["get", "name:fr"],
          ["get", "name"]
        ],
        "text-max-width": 5,
        "text-rotation-alignment": "map",
        "symbol-placement": "line",
        "symbol-spacing": 350,
        "text-letter-spacing": 0.2
      },
      paint: {
        "text-color": "#74aee9",
        "text-halo-width": 1.5,
        "text-halo-color": "rgba(255,255,255,0.7)"
      }
    },
    {
      id: "water-name-ocean",
      type: "symbol",
      metadata: {
        "taxonomy:group": "waterway-labels"
      },
      source: "basemap",
      "source-layer": "water_name",
      filter: ["all", ["==", "$type", "Point"], ["==", "class", "ocean"]],
      layout: {
        "text-font": ["Noto Sans Italic"],
        "text-size": 14,
        "text-field": [
          "case",
          ["has", "name:fr"],
          ["get", "name:fr"],
          ["get", "name"]
        ],
        "text-max-width": 5,
        "text-rotation-alignment": "map",
        "symbol-placement": "point",
        "symbol-spacing": 350,
        "text-letter-spacing": 0.2
      },
      paint: {
        "text-color": "#74aee9",
        "text-halo-width": 1.5,
        "text-halo-color": "rgba(255,255,255,0.7)"
      }
    },
    {
      id: "water-name-other",
      type: "symbol",
      metadata: {
        "taxonomy:group": "waterway-labels"
      },
      source: "basemap",
      "source-layer": "water_name",
      filter: ["all", ["!=", "class", "ocean"], ["==", "$type", "Point"]],
      layout: {
        "text-size": {
          stops: [[0, 10], [6, 14]]
        },
        "symbol-spacing": 350,
        "text-font": ["Noto Sans Italic"],
        "symbol-placement": "point",
        visibility: "visible",
        "text-rotation-alignment": "map",
        "text-field": [
          "case",
          ["has", "name:fr"],
          ["get", "name:fr"],
          ["get", "name"]
        ],
        "text-letter-spacing": 0.2,
        "text-max-width": 5
      },
      paint: {
        "text-color": "#74aee9",
        "text-halo-width": 1.5,
        "text-halo-color": "rgba(255,255,255,0.7)"
      }
    },
    {
      id: "poi-level-street-furniture",
      type: "symbol",
      source: "poi",
      "source-layer": "poi",
      minzoom: 18,
      filter: [
        "all",
        ["==", "$type", "Point"],
        [
          "any",
          [
            "in",
            "subclass",
            "bollard",
            "border_control",
            "cycle_barrier",
            "gate",
            "lift_gate",
            "post_box",
            "recycling",
            "sally_port",
            "shelter",
            "stile",
            "telephone",
            "toll_booth",
            "waste_basket"
          ],
          ["in", "class", "barrier"]
        ]
      ],
      layout: {
        "text-size": 11,
        "icon-image": [
          "case",
          [
            "all",
            ["==", ["get", "subclass"], "station"],
            ["==", ["get", "class"], "aerialway"]
          ],
          "aerialway-11",
          [
            "all",
            ["==", ["get", "subclass"], "station"],
            ["==", ["get", "class"], "railway"]
          ],
          "rail-11",
          ["==", ["get", "subclass"], "halt"],
          "rail-11",
          [
            "all",
            ["==", ["get", "subclass"], "tram_stop"],
            ["==", ["get", "class"], "railway"]
          ],
          "rail-light-11",
          ["==", ["get", "subclass"], "subway_entrance"],
          "entrance-11",
          ["==", ["get", "subclass"], "train_station_entrance"],
          "entrance-11",
          ["==", ["get", "subclass"], "bank"],
          "bank-11",
          ["==", ["get", "subclass"], "car_rental"],
          "car-rental-11",
          ["==", ["get", "subclass"], "car_repair"],
          "car-repair-11",
          ["==", ["get", "subclass"], "confectionary"],
          "confectionary-11",
          ["==", ["get", "subclass"], "ice_cream"],
          "ice-cream-11",
          ["==", ["get", "subclass"], "beverages"],
          "teahouse-11",
          ["==", ["get", "subclass"], "bbq"],
          "bbq-11",
          ["==", ["get", "subclass"], "toilets"],
          "toilet-11",
          ["==", ["get", "subclass"], "police"],
          "police-11",
          ["==", ["get", "subclass"], "theatre"],
          "theatre-11",
          ["==", ["get", "subclass"], "arts_centre"],
          "theatre-11",
          ["==", ["get", "subclass"], "restaurant"],
          "restaurant-11",
          ["==", ["get", "subclass"], "bar"],
          "bar-11",
          ["==", ["get", "subclass"], "equestrian"],
          "horse-riding-11",
          ["==", ["get", "subclass"], "swimming_pool"],
          "swimming-11",
          ["==", ["get", "subclass"], "bicycle_rental"],
          "bicycle-share-11",
          [
            "all",
            ["==", ["get", "subclass"], "christian"],
            ["==", ["get", "class"], "place_of_worship"]
          ],
          "religious-christian-11",
          [
            "all",
            ["==", ["get", "subclass"], "muslim"],
            ["==", ["get", "class"], "place_of_worship"]
          ],
          "religious-muslim-11",
          [
            "all",
            ["==", ["get", "subclass"], "jewish"],
            ["==", ["get", "class"], "place_of_worship"]
          ],
          "religious-jewish-11",
          ["==", ["get", "class"], "place_of_worship"],
          "place-of-worship-11",
          ["==", ["get", "subclass"], "place_of_worship"],
          "place-of-worship-11",
          ["==", ["get", "subclass"], "embassy"],
          "embassy-11",
          ["==", ["get", "subclass"], "fire_station"],
          "fire-station-11",
          ["==", ["get", "subclass"], "bakery"],
          "bakery-11",
          ["==", ["get", "subclass"], "mobile_phone"],
          "mobile-phone-11",
          ["==", ["get", "subclass"], "florist"],
          "florist-11",
          ["==", ["get", "subclass"], "cafe"],
          "cafe-11",
          ["==", ["get", "subclass"], "hairdresser"],
          "hairdresser-11",
          ["==", ["get", "subclass"], "telephone"],
          "telephone-11",
          ["==", ["get", "subclass"], "waste_basket"],
          "waste-basket-11",
          ["==", ["get", "subclass"], "pharmacy"],
          "pharmacy-11",
          ["==", ["get", "subclass"], "convenience"],
          "convenience-store-11",
          ["==", ["get", "subclass"], "clothes"],
          "clothing-store-11",
          ["==", ["get", "subclass"], "shoes"],
          "clothing-store-11",
          ["==", ["get", "subclass"], "boutique"],
          "clothing-store-11",
          ["==", ["get", "subclass"], "furniture"],
          "furniture-11",
          ["==", ["get", "subclass"], "hardware"],
          "hardware-11",
          ["==", ["get", "subclass"], "jewelry"],
          "jewelry-store-11",
          ["==", ["get", "subclass"], "optician"],
          "optician-11",
          ["==", ["get", "subclass"], "interior_decoration"],
          "paint-11",
          ["==", ["get", "subclass"], "watches"],
          "paint-11",
          ["==", ["get", "subclass"], "fast_food"],
          "fast-food-11",
          ["==", ["get", "subclass"], "bus_stop"],
          "bus-11",
          ["==", ["get", "subclass"], "subway"],
          "rail-metro-11",
          ["==", ["get", "subclass"], "ferry_terminal"],
          "ferry-11",
          ["==", ["get", "subclass"], "entrance"],
          "entrance-11",
          ["==", ["get", "subclass"], "park"],
          "park-alt1-11",
          ["==", ["get", "subclass"], "dog_park"],
          "dog-park-11",
          ["==", ["get", "subclass"], "playground"],
          "playground-11",
          ["==", ["get", "subclass"], "food_court"],
          "food-court-11",
          ["==", ["get", "subclass"], "picnic_site"],
          "picnic-site-11",
          ["==", ["get", "subclass"], "garden"],
          "garden-11",
          ["==", ["get", "subclass"], "veterinary"],
          "veterinary-11",
          ["==", ["get", "subclass"], "zoo"],
          "zoo-11",
          ["==", ["get", "subclass"], "aquarium"],
          "aquarium-11",
          ["==", ["get", "subclass"], "gallery"],
          "art-gallery-11",
          ["==", ["get", "subclass"], "doctors"],
          "doctor-11",
          ["==", ["get", "subclass"], "clinic"],
          "doctor-11",
          ["==", ["get", "subclass"], "dentist"],
          "dentist-11",
          ["==", ["get", "subclass"], "museum"],
          "museum-11",
          ["==", ["get", "subclass"], "public_building"],
          "building-15",
          ["==", ["get", "subclass"], "artwork"],
          "artwork-11",
          ["==", ["get", "subclass"], "viewpoint"],
          "viewpoint-11",
          ["==", ["get", "subclass"], "theme_park"],
          "amusement-park-11",
          ["==", ["get", "subclass"], "cinema"],
          "cinema-11",
          ["==", ["get", "subclass"], "nightclub"],
          "music-11",
          ["==", ["get", "subclass"], "prison"],
          "prison-11",
          ["==", ["get", "subclass"], "sports_centre"],
          "basketball-11",
          ["==", ["get", "subclass"], "fuel"],
          "fuel-11",
          ["==", ["get", "subclass"], "gift"],
          "gift-11",
          ["==", ["get", "subclass"], "recycling"],
          "recycling-11",
          ["==", ["get", "subclass"], "mall"],
          "commercial-11",
          ["==", ["get", "subclass"], "marketplace"],
          "commercial-11",
          ["==", ["get", "subclass"], "video_games"],
          "gaming-11",
          ["==", ["get", "subclass"], "toys"],
          "gaming-11",
          ["==", ["get", "subclass"], "gate"],
          "barrier-11",
          ["==", ["get", "subclass"], "cycle_barrier"],
          "barrier-11",
          ["==", ["get", "subclass"], "stile"],
          "barrier-11",
          ["==", ["get", "subclass"], "shelter"],
          "shelter-11",
          ["==", ["get", "subclass"], "sally_port"],
          "ranger-station-11",
          ["==", ["get", "subclass"], "basin"],
          "dam-11",
          ["==", ["get", "subclass"], "reservoir"],
          "dam-11",
          ["==", ["get", "subclass"], "monument"],
          "monument-11",
          ["==", ["get", "subclass"], "airport"],
          "airport-11",
          ["==", ["get", "subclass"], "athletics"],
          "soccer-11",
          ["==", ["get", "subclass"], "pitch"],
          "soccer-11",
          ["==", ["get", "class"], "alcohol_shop"],
          "alcohol-shop-11",
          ["==", ["get", "class"], "art_gallery"],
          "art-gallery-11",
          ["==", ["get", "class"], "attraction"],
          "attraction-11",
          ["==", ["get", "class"], "barrier"],
          "barrier-11",
          ["==", ["get", "class"], "beer"],
          "beer-11",
          ["==", ["get", "class"], "bicycle"],
          "bicycle-11",
          ["==", ["get", "class"], "bus"],
          "bus-11",
          ["==", ["get", "class"], "campsite"],
          "campsite-11",
          ["==", ["get", "class"], "car"],
          "car-11",
          ["==", ["get", "class"], "castle"],
          "castle-11",
          ["==", ["get", "class"], "cemetery"],
          "cemetery-11",
          ["==", ["get", "class"], "college"],
          "college-11",
          ["==", ["get", "class"], "golf"],
          "golf-11",
          ["==", ["get", "class"], "grocery"],
          "grocery-11",
          ["==", ["get", "class"], "harbor"],
          "harbor-11",
          ["==", ["get", "class"], "hospital"],
          "hospital-11",
          ["==", ["get", "class"], "information"],
          "information-11",
          ["==", ["get", "class"], "library"],
          "library-11",
          ["==", ["get", "class"], "laundry"],
          "laundry-11",
          ["==", ["get", "class"], "lodging"],
          "lodging-11",
          ["==", ["get", "class"], "post"],
          "post-11",
          ["==", ["get", "class"], "school"],
          "school-11",
          ["==", ["get", "class"], "shop"],
          "shop-11",
          ["==", ["get", "class"], "stadium"],
          "stadium-11",
          ["==", ["get", "class"], "swimming"],
          "swimming-11",
          ["==", ["get", "class"], "town_hall"],
          "town-hall-11",
          "marker-11"
        ],
        "text-font": ["Noto Sans Regular"],
        "text-padding": 2,
        "text-offset": [0, 1.4],
        "text-anchor": "top",
        "text-optional": true,
        "text-max-width": 9
      },
      paint: {
        "text-halo-blur": 0.5,
        "text-color": [
          "case",
          [
            "all",
            ["==", ["get", "subclass"], "station"],
            ["==", ["get", "class"], "aerialway"]
          ],
          "#8665E7",
          [
            "all",
            ["==", ["get", "subclass"], "station"],
            ["==", ["get", "class"], "railway"]
          ],
          "#8665E7",
          ["==", ["get", "subclass"], "halt"],
          "#8665E7",
          [
            "all",
            ["==", ["get", "subclass"], "tram_stop"],
            ["==", ["get", "class"], "railway"]
          ],
          "#8665E7",
          ["==", ["get", "subclass"], "subway_entrance"],
          "#8665E7",
          ["==", ["get", "subclass"], "train_station_entrance"],
          "#8665E7",
          ["==", ["get", "subclass"], "bank"],
          "#495063",
          ["==", ["get", "subclass"], "car_rental"],
          "#495063",
          ["==", ["get", "subclass"], "car_repair"],
          "#495063",
          ["==", ["get", "subclass"], "confectionary"],
          "#EF8000",
          ["==", ["get", "subclass"], "ice_cream"],
          "#EF8000",
          ["==", ["get", "subclass"], "beverages"],
          "#EF8000",
          ["==", ["get", "subclass"], "bbq"],
          "#EF8000",
          ["==", ["get", "subclass"], "toilets"],
          "#5C6F84",
          ["==", ["get", "subclass"], "police"],
          "#495063",
          ["==", ["get", "subclass"], "theatre"],
          "#E93865",
          ["==", ["get", "subclass"], "arts_centre"],
          "#E93865",
          ["==", ["get", "subclass"], "restaurant"],
          "#EF8000",
          ["==", ["get", "subclass"], "bar"],
          "#EF8000",
          ["==", ["get", "subclass"], "equestrian"],
          "#5C6F84",
          ["==", ["get", "subclass"], "swimming_pool"],
          "#5C6F84",
          ["==", ["get", "subclass"], "bicycle_rental"],
          "#495063",
          [
            "all",
            ["==", ["get", "subclass"], "christian"],
            ["==", ["get", "class"], "place_of_worship"]
          ],
          "#495063",
          [
            "all",
            ["==", ["get", "subclass"], "muslim"],
            ["==", ["get", "class"], "place_of_worship"]
          ],
          "#495063",
          [
            "all",
            ["==", ["get", "subclass"], "jewish"],
            ["==", ["get", "class"], "place_of_worship"]
          ],
          "#495063",
          ["==", ["get", "class"], "place_of_worship"],
          "#495063",
          ["==", ["get", "subclass"], "place_of_worship"],
          "#495063",
          ["==", ["get", "subclass"], "embassy"],
          "#495063",
          ["==", ["get", "subclass"], "fire_station"],
          "#495063",
          ["==", ["get", "subclass"], "bakery"],
          "#EF8000",
          ["==", ["get", "subclass"], "mobile_phone"],
          "#C17900",
          ["==", ["get", "subclass"], "florist"],
          "#C17900",
          ["==", ["get", "subclass"], "cafe"],
          "#EF8000",
          ["==", ["get", "subclass"], "hairdresser"],
          "#C17900",
          ["==", ["get", "subclass"], "telephone"],
          "#5C6F84",
          ["==", ["get", "subclass"], "waste_basket"],
          "#5C6F84",
          ["==", ["get", "subclass"], "pharmacy"],
          "#4AA0E7",
          ["==", ["get", "subclass"], "convenience"],
          "#C17900",
          ["==", ["get", "subclass"], "clothes"],
          "#C17900",
          ["==", ["get", "subclass"], "shoes"],
          "#C17900",
          ["==", ["get", "subclass"], "boutique"],
          "#C17900",
          ["==", ["get", "subclass"], "furniture"],
          "#C17900",
          ["==", ["get", "subclass"], "hardware"],
          "#C17900",
          ["==", ["get", "subclass"], "jewelry"],
          "#C17900",
          ["==", ["get", "subclass"], "optician"],
          "#C17900",
          ["==", ["get", "subclass"], "interior_decoration"],
          "#C17900",
          ["==", ["get", "subclass"], "watches"],
          "#C17900",
          ["==", ["get", "subclass"], "fast_food"],
          "#EF8000",
          ["==", ["get", "subclass"], "bus_stop"],
          "#8665E7",
          ["==", ["get", "subclass"], "subway"],
          "#8665E7",
          ["==", ["get", "subclass"], "ferry_terminal"],
          "#8665E7",
          ["==", ["get", "subclass"], "entrance"],
          "#8665E7",
          ["==", ["get", "subclass"], "park"],
          "#538C37",
          ["==", ["get", "subclass"], "dog_park"],
          "#538C37",
          ["==", ["get", "subclass"], "playground"],
          "#5C6F84",
          ["==", ["get", "subclass"], "food_court"],
          "#5C6F84",
          ["==", ["get", "subclass"], "picnic_site"],
          "#538C37",
          ["==", ["get", "subclass"], "garden"],
          "#538C37",
          ["==", ["get", "subclass"], "veterinary"],
          "#4AA0E7",
          ["==", ["get", "subclass"], "zoo"],
          "#E93865",
          ["==", ["get", "subclass"], "aquarium"],
          "#E93865",
          ["==", ["get", "subclass"], "gallery"],
          "#E93865",
          ["==", ["get", "subclass"], "doctors"],
          "#4AA0E7",
          ["==", ["get", "subclass"], "clinic"],
          "#4AA0E7",
          ["==", ["get", "subclass"], "dentist"],
          "#4AA0E7",
          ["==", ["get", "subclass"], "museum"],
          "#E93865",
          ["==", ["get", "subclass"], "public_building"],
          "#495063",
          ["==", ["get", "subclass"], "artwork"],
          "#5C6F84",
          ["==", ["get", "subclass"], "viewpoint"],
          "#5C6F84",
          ["==", ["get", "subclass"], "theme_park"],
          "#E93865",
          ["==", ["get", "subclass"], "cinema"],
          "#E93865",
          ["==", ["get", "subclass"], "nightclub"],
          "#E93865",
          ["==", ["get", "subclass"], "prison"],
          "#495063",
          ["==", ["get", "subclass"], "sports_centre"],
          "#5C6F84",
          ["==", ["get", "subclass"], "fuel"],
          "#5C6F84",
          ["==", ["get", "subclass"], "gift"],
          "#C17900",
          ["==", ["get", "subclass"], "recycling"],
          "#5C6F84",
          ["==", ["get", "subclass"], "mall"],
          "#C17900",
          ["==", ["get", "subclass"], "marketplace"],
          "#C17900",
          ["==", ["get", "subclass"], "video_games"],
          "#C17900",
          ["==", ["get", "subclass"], "toys"],
          "#C17900",
          ["==", ["get", "subclass"], "gate"],
          "#5C6F84",
          ["==", ["get", "subclass"], "cycle_barrier"],
          "#5C6F84",
          ["==", ["get", "subclass"], "stile"],
          "#5C6F84",
          ["==", ["get", "subclass"], "shelter"],
          "#5C6F84",
          ["==", ["get", "subclass"], "sally_port"],
          "#5C6F84",
          ["==", ["get", "subclass"], "basin"],
          "#538C37",
          ["==", ["get", "subclass"], "reservoir"],
          "#538C37",
          ["==", ["get", "subclass"], "monument"],
          "#5C6F84",
          ["==", ["get", "subclass"], "airport"],
          "#8665E7",
          ["==", ["get", "subclass"], "athletics"],
          "#5C6F84",
          ["==", ["get", "subclass"], "pitch"],
          "#5C6F84",
          ["==", ["get", "class"], "alcohol_shop"],
          "#C17900",
          ["==", ["get", "class"], "art_gallery"],
          "#E93865",
          ["==", ["get", "class"], "attraction"],
          "#E93865",
          ["==", ["get", "class"], "barrier"],
          "#5C6F84",
          ["==", ["get", "class"], "beer"],
          "#EF8000",
          ["==", ["get", "class"], "bicycle"],
          "#EF8000",
          ["==", ["get", "class"], "bus"],
          "#8665E7",
          ["==", ["get", "class"], "campsite"],
          "#538C37",
          ["==", ["get", "class"], "car"],
          "#C17900",
          ["==", ["get", "class"], "castle"],
          "#5C6F84",
          ["==", ["get", "class"], "cemetery"],
          "#495063",
          ["==", ["get", "class"], "college"],
          "#495063",
          ["==", ["get", "class"], "golf"],
          "#5C6F84",
          ["==", ["get", "class"], "grocery"],
          "#C17900",
          ["==", ["get", "class"], "harbor"],
          "#495063",
          ["==", ["get", "class"], "hospital"],
          "#4AA0E7",
          ["==", ["get", "class"], "information"],
          "#495063",
          ["==", ["get", "class"], "library"],
          "#495063",
          ["==", ["get", "class"], "laundry"],
          "#495063",
          ["==", ["get", "class"], "lodging"],
          "#495063",
          ["==", ["get", "class"], "post"],
          "#495063",
          ["==", ["get", "class"], "school"],
          "#495063",
          ["==", ["get", "class"], "shop"],
          "#C17900",
          ["==", ["get", "class"], "stadium"],
          "#5C6F84",
          ["==", ["get", "class"], "swimming"],
          "#5C6F84",
          ["==", ["get", "class"], "town_hall"],
          "#495063",
          "#5C6F84"
        ],
        "text-halo-width": 0.8,
        "text-halo-color": "#ffffff"
      }
    },
    {
      id: "poi-level-3",
      type: "symbol",
      source: "poi",
      "source-layer": "poi",
      minzoom: 16,
      filter: [
        "all",
        ["==", "$type", "Point"],
        [">=", "rank", 25],
        [
          "!in",
          "subclass",
          "bollard",
          "border_control",
          "cycle_barrier",
          "gate",
          "lift_gate",
          "post_box",
          "recycling",
          "sally_port",
          "shelter",
          "stile",
          "telephone",
          "toll_booth",
          "waste_basket"
        ],
        ["!in", "class", "railway", "bus", "barrier"]
      ],
      layout: {
        "text-size": 11,
        "icon-image": [
          "case",
          [
            "all",
            ["==", ["get", "subclass"], "station"],
            ["==", ["get", "class"], "aerialway"]
          ],
          "aerialway-11",
          [
            "all",
            ["==", ["get", "subclass"], "station"],
            ["==", ["get", "class"], "railway"]
          ],
          "rail-11",
          ["==", ["get", "subclass"], "halt"],
          "rail-11",
          [
            "all",
            ["==", ["get", "subclass"], "tram_stop"],
            ["==", ["get", "class"], "railway"]
          ],
          "rail-light-11",
          ["==", ["get", "subclass"], "subway_entrance"],
          "entrance-11",
          ["==", ["get", "subclass"], "train_station_entrance"],
          "entrance-11",
          ["==", ["get", "subclass"], "bank"],
          "bank-11",
          ["==", ["get", "subclass"], "car_rental"],
          "car-rental-11",
          ["==", ["get", "subclass"], "car_repair"],
          "car-repair-11",
          ["==", ["get", "subclass"], "confectionary"],
          "confectionary-11",
          ["==", ["get", "subclass"], "ice_cream"],
          "ice-cream-11",
          ["==", ["get", "subclass"], "beverages"],
          "teahouse-11",
          ["==", ["get", "subclass"], "bbq"],
          "bbq-11",
          ["==", ["get", "subclass"], "toilets"],
          "toilet-11",
          ["==", ["get", "subclass"], "police"],
          "police-11",
          ["==", ["get", "subclass"], "theatre"],
          "theatre-11",
          ["==", ["get", "subclass"], "arts_centre"],
          "theatre-11",
          ["==", ["get", "subclass"], "restaurant"],
          "restaurant-11",
          ["==", ["get", "subclass"], "bar"],
          "bar-11",
          ["==", ["get", "subclass"], "equestrian"],
          "horse-riding-11",
          ["==", ["get", "subclass"], "swimming_pool"],
          "swimming-11",
          ["==", ["get", "subclass"], "bicycle_rental"],
          "bicycle-share-11",
          [
            "all",
            ["==", ["get", "subclass"], "christian"],
            ["==", ["get", "class"], "place_of_worship"]
          ],
          "religious-christian-11",
          [
            "all",
            ["==", ["get", "subclass"], "muslim"],
            ["==", ["get", "class"], "place_of_worship"]
          ],
          "religious-muslim-11",
          [
            "all",
            ["==", ["get", "subclass"], "jewish"],
            ["==", ["get", "class"], "place_of_worship"]
          ],
          "religious-jewish-11",
          ["==", ["get", "class"], "place_of_worship"],
          "place-of-worship-11",
          ["==", ["get", "subclass"], "place_of_worship"],
          "place-of-worship-11",
          ["==", ["get", "subclass"], "embassy"],
          "embassy-11",
          ["==", ["get", "subclass"], "fire_station"],
          "fire-station-11",
          ["==", ["get", "subclass"], "bakery"],
          "bakery-11",
          ["==", ["get", "subclass"], "mobile_phone"],
          "mobile-phone-11",
          ["==", ["get", "subclass"], "florist"],
          "florist-11",
          ["==", ["get", "subclass"], "cafe"],
          "cafe-11",
          ["==", ["get", "subclass"], "hairdresser"],
          "hairdresser-11",
          ["==", ["get", "subclass"], "telephone"],
          "telephone-11",
          ["==", ["get", "subclass"], "waste_basket"],
          "waste-basket-11",
          ["==", ["get", "subclass"], "pharmacy"],
          "pharmacy-11",
          ["==", ["get", "subclass"], "convenience"],
          "convenience-store-11",
          ["==", ["get", "subclass"], "clothes"],
          "clothing-store-11",
          ["==", ["get", "subclass"], "shoes"],
          "clothing-store-11",
          ["==", ["get", "subclass"], "boutique"],
          "clothing-store-11",
          ["==", ["get", "subclass"], "furniture"],
          "furniture-11",
          ["==", ["get", "subclass"], "hardware"],
          "hardware-11",
          ["==", ["get", "subclass"], "jewelry"],
          "jewelry-store-11",
          ["==", ["get", "subclass"], "optician"],
          "optician-11",
          ["==", ["get", "subclass"], "interior_decoration"],
          "paint-11",
          ["==", ["get", "subclass"], "watches"],
          "paint-11",
          ["==", ["get", "subclass"], "fast_food"],
          "fast-food-11",
          ["==", ["get", "subclass"], "bus_stop"],
          "bus-11",
          ["==", ["get", "subclass"], "subway"],
          "rail-metro-11",
          ["==", ["get", "subclass"], "ferry_terminal"],
          "ferry-11",
          ["==", ["get", "subclass"], "entrance"],
          "entrance-11",
          ["==", ["get", "subclass"], "park"],
          "park-alt1-11",
          ["==", ["get", "subclass"], "dog_park"],
          "dog-park-11",
          ["==", ["get", "subclass"], "playground"],
          "playground-11",
          ["==", ["get", "subclass"], "food_court"],
          "food-court-11",
          ["==", ["get", "subclass"], "picnic_site"],
          "picnic-site-11",
          ["==", ["get", "subclass"], "garden"],
          "garden-11",
          ["==", ["get", "subclass"], "veterinary"],
          "veterinary-11",
          ["==", ["get", "subclass"], "zoo"],
          "zoo-11",
          ["==", ["get", "subclass"], "aquarium"],
          "aquarium-11",
          ["==", ["get", "subclass"], "gallery"],
          "art-gallery-11",
          ["==", ["get", "subclass"], "doctors"],
          "doctor-11",
          ["==", ["get", "subclass"], "clinic"],
          "doctor-11",
          ["==", ["get", "subclass"], "dentist"],
          "dentist-11",
          ["==", ["get", "subclass"], "museum"],
          "museum-11",
          ["==", ["get", "subclass"], "public_building"],
          "building-15",
          ["==", ["get", "subclass"], "artwork"],
          "artwork-11",
          ["==", ["get", "subclass"], "viewpoint"],
          "viewpoint-11",
          ["==", ["get", "subclass"], "theme_park"],
          "amusement-park-11",
          ["==", ["get", "subclass"], "cinema"],
          "cinema-11",
          ["==", ["get", "subclass"], "nightclub"],
          "music-11",
          ["==", ["get", "subclass"], "prison"],
          "prison-11",
          ["==", ["get", "subclass"], "sports_centre"],
          "basketball-11",
          ["==", ["get", "subclass"], "fuel"],
          "fuel-11",
          ["==", ["get", "subclass"], "gift"],
          "gift-11",
          ["==", ["get", "subclass"], "recycling"],
          "recycling-11",
          ["==", ["get", "subclass"], "mall"],
          "commercial-11",
          ["==", ["get", "subclass"], "marketplace"],
          "commercial-11",
          ["==", ["get", "subclass"], "video_games"],
          "gaming-11",
          ["==", ["get", "subclass"], "toys"],
          "gaming-11",
          ["==", ["get", "subclass"], "gate"],
          "barrier-11",
          ["==", ["get", "subclass"], "cycle_barrier"],
          "barrier-11",
          ["==", ["get", "subclass"], "stile"],
          "barrier-11",
          ["==", ["get", "subclass"], "shelter"],
          "shelter-11",
          ["==", ["get", "subclass"], "sally_port"],
          "ranger-station-11",
          ["==", ["get", "subclass"], "basin"],
          "dam-11",
          ["==", ["get", "subclass"], "reservoir"],
          "dam-11",
          ["==", ["get", "subclass"], "monument"],
          "monument-11",
          ["==", ["get", "subclass"], "airport"],
          "airport-11",
          ["==", ["get", "subclass"], "athletics"],
          "soccer-11",
          ["==", ["get", "subclass"], "pitch"],
          "soccer-11",
          ["==", ["get", "class"], "alcohol_shop"],
          "alcohol-shop-11",
          ["==", ["get", "class"], "art_gallery"],
          "art-gallery-11",
          ["==", ["get", "class"], "attraction"],
          "attraction-11",
          ["==", ["get", "class"], "barrier"],
          "barrier-11",
          ["==", ["get", "class"], "beer"],
          "beer-11",
          ["==", ["get", "class"], "bicycle"],
          "bicycle-11",
          ["==", ["get", "class"], "bus"],
          "bus-11",
          ["==", ["get", "class"], "campsite"],
          "campsite-11",
          ["==", ["get", "class"], "car"],
          "car-11",
          ["==", ["get", "class"], "castle"],
          "castle-11",
          ["==", ["get", "class"], "cemetery"],
          "cemetery-11",
          ["==", ["get", "class"], "college"],
          "college-11",
          ["==", ["get", "class"], "golf"],
          "golf-11",
          ["==", ["get", "class"], "grocery"],
          "grocery-11",
          ["==", ["get", "class"], "harbor"],
          "harbor-11",
          ["==", ["get", "class"], "hospital"],
          "hospital-11",
          ["==", ["get", "class"], "information"],
          "information-11",
          ["==", ["get", "class"], "library"],
          "library-11",
          ["==", ["get", "class"], "laundry"],
          "laundry-11",
          ["==", ["get", "class"], "lodging"],
          "lodging-11",
          ["==", ["get", "class"], "post"],
          "post-11",
          ["==", ["get", "class"], "school"],
          "school-11",
          ["==", ["get", "class"], "shop"],
          "shop-11",
          ["==", ["get", "class"], "stadium"],
          "stadium-11",
          ["==", ["get", "class"], "swimming"],
          "swimming-11",
          ["==", ["get", "class"], "town_hall"],
          "town-hall-11",
          "marker-11"
        ],
        "icon-padding": {
          stops: [[16, 20], [18, 2]]
        },
        "text-font": ["Noto Sans Regular"],
        "text-padding": 2,
        "text-offset": [0, 1.4],
        "text-anchor": "top",
        "text-field": [
          "case",
          ["has", "name:fr"],
          ["get", "name:fr"],
          ["get", "name"]
        ],
        "text-optional": true,
        "text-max-width": 9
      },
      paint: {
        "text-halo-blur": 0.5,
        "text-color": [
          "case",
          [
            "all",
            ["==", ["get", "subclass"], "station"],
            ["==", ["get", "class"], "aerialway"]
          ],
          "#8665E7",
          [
            "all",
            ["==", ["get", "subclass"], "station"],
            ["==", ["get", "class"], "railway"]
          ],
          "#8665E7",
          ["==", ["get", "subclass"], "halt"],
          "#8665E7",
          [
            "all",
            ["==", ["get", "subclass"], "tram_stop"],
            ["==", ["get", "class"], "railway"]
          ],
          "#8665E7",
          ["==", ["get", "subclass"], "subway_entrance"],
          "#8665E7",
          ["==", ["get", "subclass"], "train_station_entrance"],
          "#8665E7",
          ["==", ["get", "subclass"], "bank"],
          "#495063",
          ["==", ["get", "subclass"], "car_rental"],
          "#495063",
          ["==", ["get", "subclass"], "car_repair"],
          "#495063",
          ["==", ["get", "subclass"], "confectionary"],
          "#EF8000",
          ["==", ["get", "subclass"], "ice_cream"],
          "#EF8000",
          ["==", ["get", "subclass"], "beverages"],
          "#EF8000",
          ["==", ["get", "subclass"], "bbq"],
          "#EF8000",
          ["==", ["get", "subclass"], "toilets"],
          "#5C6F84",
          ["==", ["get", "subclass"], "police"],
          "#495063",
          ["==", ["get", "subclass"], "theatre"],
          "#E93865",
          ["==", ["get", "subclass"], "arts_centre"],
          "#E93865",
          ["==", ["get", "subclass"], "restaurant"],
          "#EF8000",
          ["==", ["get", "subclass"], "bar"],
          "#EF8000",
          ["==", ["get", "subclass"], "equestrian"],
          "#5C6F84",
          ["==", ["get", "subclass"], "swimming_pool"],
          "#5C6F84",
          ["==", ["get", "subclass"], "bicycle_rental"],
          "#495063",
          [
            "all",
            ["==", ["get", "subclass"], "christian"],
            ["==", ["get", "class"], "place_of_worship"]
          ],
          "#495063",
          [
            "all",
            ["==", ["get", "subclass"], "muslim"],
            ["==", ["get", "class"], "place_of_worship"]
          ],
          "#495063",
          [
            "all",
            ["==", ["get", "subclass"], "jewish"],
            ["==", ["get", "class"], "place_of_worship"]
          ],
          "#495063",
          ["==", ["get", "class"], "place_of_worship"],
          "#495063",
          ["==", ["get", "subclass"], "place_of_worship"],
          "#495063",
          ["==", ["get", "subclass"], "embassy"],
          "#495063",
          ["==", ["get", "subclass"], "fire_station"],
          "#495063",
          ["==", ["get", "subclass"], "bakery"],
          "#EF8000",
          ["==", ["get", "subclass"], "mobile_phone"],
          "#C17900",
          ["==", ["get", "subclass"], "florist"],
          "#C17900",
          ["==", ["get", "subclass"], "cafe"],
          "#EF8000",
          ["==", ["get", "subclass"], "hairdresser"],
          "#C17900",
          ["==", ["get", "subclass"], "telephone"],
          "#5C6F84",
          ["==", ["get", "subclass"], "waste_basket"],
          "#5C6F84",
          ["==", ["get", "subclass"], "pharmacy"],
          "#4AA0E7",
          ["==", ["get", "subclass"], "convenience"],
          "#C17900",
          ["==", ["get", "subclass"], "clothes"],
          "#C17900",
          ["==", ["get", "subclass"], "shoes"],
          "#C17900",
          ["==", ["get", "subclass"], "boutique"],
          "#C17900",
          ["==", ["get", "subclass"], "furniture"],
          "#C17900",
          ["==", ["get", "subclass"], "hardware"],
          "#C17900",
          ["==", ["get", "subclass"], "jewelry"],
          "#C17900",
          ["==", ["get", "subclass"], "optician"],
          "#C17900",
          ["==", ["get", "subclass"], "interior_decoration"],
          "#C17900",
          ["==", ["get", "subclass"], "watches"],
          "#C17900",
          ["==", ["get", "subclass"], "fast_food"],
          "#EF8000",
          ["==", ["get", "subclass"], "bus_stop"],
          "#8665E7",
          ["==", ["get", "subclass"], "subway"],
          "#8665E7",
          ["==", ["get", "subclass"], "ferry_terminal"],
          "#8665E7",
          ["==", ["get", "subclass"], "entrance"],
          "#8665E7",
          ["==", ["get", "subclass"], "park"],
          "#538C37",
          ["==", ["get", "subclass"], "dog_park"],
          "#538C37",
          ["==", ["get", "subclass"], "playground"],
          "#5C6F84",
          ["==", ["get", "subclass"], "food_court"],
          "#5C6F84",
          ["==", ["get", "subclass"], "picnic_site"],
          "#538C37",
          ["==", ["get", "subclass"], "garden"],
          "#538C37",
          ["==", ["get", "subclass"], "veterinary"],
          "#4AA0E7",
          ["==", ["get", "subclass"], "zoo"],
          "#E93865",
          ["==", ["get", "subclass"], "aquarium"],
          "#E93865",
          ["==", ["get", "subclass"], "gallery"],
          "#E93865",
          ["==", ["get", "subclass"], "doctors"],
          "#4AA0E7",
          ["==", ["get", "subclass"], "clinic"],
          "#4AA0E7",
          ["==", ["get", "subclass"], "dentist"],
          "#4AA0E7",
          ["==", ["get", "subclass"], "museum"],
          "#E93865",
          ["==", ["get", "subclass"], "public_building"],
          "#495063",
          ["==", ["get", "subclass"], "artwork"],
          "#5C6F84",
          ["==", ["get", "subclass"], "viewpoint"],
          "#5C6F84",
          ["==", ["get", "subclass"], "theme_park"],
          "#E93865",
          ["==", ["get", "subclass"], "cinema"],
          "#E93865",
          ["==", ["get", "subclass"], "nightclub"],
          "#E93865",
          ["==", ["get", "subclass"], "prison"],
          "#495063",
          ["==", ["get", "subclass"], "sports_centre"],
          "#5C6F84",
          ["==", ["get", "subclass"], "fuel"],
          "#5C6F84",
          ["==", ["get", "subclass"], "gift"],
          "#C17900",
          ["==", ["get", "subclass"], "recycling"],
          "#5C6F84",
          ["==", ["get", "subclass"], "mall"],
          "#C17900",
          ["==", ["get", "subclass"], "marketplace"],
          "#C17900",
          ["==", ["get", "subclass"], "video_games"],
          "#C17900",
          ["==", ["get", "subclass"], "toys"],
          "#C17900",
          ["==", ["get", "subclass"], "gate"],
          "#5C6F84",
          ["==", ["get", "subclass"], "cycle_barrier"],
          "#5C6F84",
          ["==", ["get", "subclass"], "stile"],
          "#5C6F84",
          ["==", ["get", "subclass"], "shelter"],
          "#5C6F84",
          ["==", ["get", "subclass"], "sally_port"],
          "#5C6F84",
          ["==", ["get", "subclass"], "basin"],
          "#538C37",
          ["==", ["get", "subclass"], "reservoir"],
          "#538C37",
          ["==", ["get", "subclass"], "monument"],
          "#5C6F84",
          ["==", ["get", "subclass"], "airport"],
          "#8665E7",
          ["==", ["get", "subclass"], "athletics"],
          "#5C6F84",
          ["==", ["get", "subclass"], "pitch"],
          "#5C6F84",
          ["==", ["get", "class"], "alcohol_shop"],
          "#C17900",
          ["==", ["get", "class"], "art_gallery"],
          "#E93865",
          ["==", ["get", "class"], "attraction"],
          "#E93865",
          ["==", ["get", "class"], "barrier"],
          "#5C6F84",
          ["==", ["get", "class"], "beer"],
          "#EF8000",
          ["==", ["get", "class"], "bicycle"],
          "#EF8000",
          ["==", ["get", "class"], "bus"],
          "#8665E7",
          ["==", ["get", "class"], "campsite"],
          "#538C37",
          ["==", ["get", "class"], "car"],
          "#C17900",
          ["==", ["get", "class"], "castle"],
          "#5C6F84",
          ["==", ["get", "class"], "cemetery"],
          "#495063",
          ["==", ["get", "class"], "college"],
          "#495063",
          ["==", ["get", "class"], "golf"],
          "#5C6F84",
          ["==", ["get", "class"], "grocery"],
          "#C17900",
          ["==", ["get", "class"], "harbor"],
          "#495063",
          ["==", ["get", "class"], "hospital"],
          "#4AA0E7",
          ["==", ["get", "class"], "information"],
          "#495063",
          ["==", ["get", "class"], "library"],
          "#495063",
          ["==", ["get", "class"], "laundry"],
          "#495063",
          ["==", ["get", "class"], "lodging"],
          "#495063",
          ["==", ["get", "class"], "post"],
          "#495063",
          ["==", ["get", "class"], "school"],
          "#495063",
          ["==", ["get", "class"], "shop"],
          "#C17900",
          ["==", ["get", "class"], "stadium"],
          "#5C6F84",
          ["==", ["get", "class"], "swimming"],
          "#5C6F84",
          ["==", ["get", "class"], "town_hall"],
          "#495063",
          "#5C6F84"
        ],
        "text-halo-width": 0.8,
        "text-halo-color": "#ffffff"
      }
    },
    {
      id: "poi-level-2",
      type: "symbol",
      source: "poi",
      "source-layer": "poi",
      minzoom: 15,
      filter: [
        "all",
        ["==", "$type", "Point"],
        ["<=", "rank", 24],
        [">=", "rank", 15],
        [
          "!in",
          "subclass",
          "bollard",
          "border_control",
          "cycle_barrier",
          "gate",
          "lift_gate",
          "post_box",
          "recycling",
          "sally_port",
          "shelter",
          "stile",
          "telephone",
          "toll_booth",
          "waste_basket"
        ],
        ["!in", "class", "railway", "bus", "barrier"]
      ],
      layout: {
        "text-padding": 2,
        "text-font": ["Noto Sans Regular"],
        "text-anchor": "top",
        "icon-image": [
          "case",
          [
            "all",
            ["==", ["get", "subclass"], "station"],
            ["==", ["get", "class"], "aerialway"]
          ],
          "aerialway-11",
          [
            "all",
            ["==", ["get", "subclass"], "station"],
            ["==", ["get", "class"], "railway"]
          ],
          "rail-11",
          ["==", ["get", "subclass"], "halt"],
          "rail-11",
          [
            "all",
            ["==", ["get", "subclass"], "tram_stop"],
            ["==", ["get", "class"], "railway"]
          ],
          "rail-light-11",
          ["==", ["get", "subclass"], "subway_entrance"],
          "entrance-11",
          ["==", ["get", "subclass"], "train_station_entrance"],
          "entrance-11",
          ["==", ["get", "subclass"], "bank"],
          "bank-11",
          ["==", ["get", "subclass"], "car_rental"],
          "car-rental-11",
          ["==", ["get", "subclass"], "car_repair"],
          "car-repair-11",
          ["==", ["get", "subclass"], "confectionary"],
          "confectionary-11",
          ["==", ["get", "subclass"], "ice_cream"],
          "ice-cream-11",
          ["==", ["get", "subclass"], "beverages"],
          "teahouse-11",
          ["==", ["get", "subclass"], "bbq"],
          "bbq-11",
          ["==", ["get", "subclass"], "toilets"],
          "toilet-11",
          ["==", ["get", "subclass"], "police"],
          "police-11",
          ["==", ["get", "subclass"], "theatre"],
          "theatre-11",
          ["==", ["get", "subclass"], "arts_centre"],
          "theatre-11",
          ["==", ["get", "subclass"], "restaurant"],
          "restaurant-11",
          ["==", ["get", "subclass"], "bar"],
          "bar-11",
          ["==", ["get", "subclass"], "equestrian"],
          "horse-riding-11",
          ["==", ["get", "subclass"], "swimming_pool"],
          "swimming-11",
          ["==", ["get", "subclass"], "bicycle_rental"],
          "bicycle-share-11",
          [
            "all",
            ["==", ["get", "subclass"], "christian"],
            ["==", ["get", "class"], "place_of_worship"]
          ],
          "religious-christian-11",
          [
            "all",
            ["==", ["get", "subclass"], "muslim"],
            ["==", ["get", "class"], "place_of_worship"]
          ],
          "religious-muslim-11",
          [
            "all",
            ["==", ["get", "subclass"], "jewish"],
            ["==", ["get", "class"], "place_of_worship"]
          ],
          "religious-jewish-11",
          ["==", ["get", "class"], "place_of_worship"],
          "place-of-worship-11",
          ["==", ["get", "subclass"], "place_of_worship"],
          "place-of-worship-11",
          ["==", ["get", "subclass"], "embassy"],
          "embassy-11",
          ["==", ["get", "subclass"], "fire_station"],
          "fire-station-11",
          ["==", ["get", "subclass"], "bakery"],
          "bakery-11",
          ["==", ["get", "subclass"], "mobile_phone"],
          "mobile-phone-11",
          ["==", ["get", "subclass"], "florist"],
          "florist-11",
          ["==", ["get", "subclass"], "cafe"],
          "cafe-11",
          ["==", ["get", "subclass"], "hairdresser"],
          "hairdresser-11",
          ["==", ["get", "subclass"], "telephone"],
          "telephone-11",
          ["==", ["get", "subclass"], "waste_basket"],
          "waste-basket-11",
          ["==", ["get", "subclass"], "pharmacy"],
          "pharmacy-11",
          ["==", ["get", "subclass"], "convenience"],
          "convenience-store-11",
          ["==", ["get", "subclass"], "clothes"],
          "clothing-store-11",
          ["==", ["get", "subclass"], "shoes"],
          "clothing-store-11",
          ["==", ["get", "subclass"], "boutique"],
          "clothing-store-11",
          ["==", ["get", "subclass"], "furniture"],
          "furniture-11",
          ["==", ["get", "subclass"], "hardware"],
          "hardware-11",
          ["==", ["get", "subclass"], "jewelry"],
          "jewelry-store-11",
          ["==", ["get", "subclass"], "optician"],
          "optician-11",
          ["==", ["get", "subclass"], "interior_decoration"],
          "paint-11",
          ["==", ["get", "subclass"], "watches"],
          "paint-11",
          ["==", ["get", "subclass"], "fast_food"],
          "fast-food-11",
          ["==", ["get", "subclass"], "bus_stop"],
          "bus-11",
          ["==", ["get", "subclass"], "subway"],
          "rail-metro-11",
          ["==", ["get", "subclass"], "ferry_terminal"],
          "ferry-11",
          ["==", ["get", "subclass"], "entrance"],
          "entrance-11",
          ["==", ["get", "subclass"], "park"],
          "park-alt1-11",
          ["==", ["get", "subclass"], "dog_park"],
          "dog-park-11",
          ["==", ["get", "subclass"], "playground"],
          "playground-11",
          ["==", ["get", "subclass"], "food_court"],
          "food-court-11",
          ["==", ["get", "subclass"], "picnic_site"],
          "picnic-site-11",
          ["==", ["get", "subclass"], "garden"],
          "garden-11",
          ["==", ["get", "subclass"], "veterinary"],
          "veterinary-11",
          ["==", ["get", "subclass"], "zoo"],
          "zoo-11",
          ["==", ["get", "subclass"], "aquarium"],
          "aquarium-11",
          ["==", ["get", "subclass"], "gallery"],
          "art-gallery-11",
          ["==", ["get", "subclass"], "doctors"],
          "doctor-11",
          ["==", ["get", "subclass"], "clinic"],
          "doctor-11",
          ["==", ["get", "subclass"], "dentist"],
          "dentist-11",
          ["==", ["get", "subclass"], "museum"],
          "museum-11",
          ["==", ["get", "subclass"], "public_building"],
          "building-15",
          ["==", ["get", "subclass"], "artwork"],
          "artwork-11",
          ["==", ["get", "subclass"], "viewpoint"],
          "viewpoint-11",
          ["==", ["get", "subclass"], "theme_park"],
          "amusement-park-11",
          ["==", ["get", "subclass"], "cinema"],
          "cinema-11",
          ["==", ["get", "subclass"], "nightclub"],
          "music-11",
          ["==", ["get", "subclass"], "prison"],
          "prison-11",
          ["==", ["get", "subclass"], "sports_centre"],
          "basketball-11",
          ["==", ["get", "subclass"], "fuel"],
          "fuel-11",
          ["==", ["get", "subclass"], "gift"],
          "gift-11",
          ["==", ["get", "subclass"], "recycling"],
          "recycling-11",
          ["==", ["get", "subclass"], "mall"],
          "commercial-11",
          ["==", ["get", "subclass"], "marketplace"],
          "commercial-11",
          ["==", ["get", "subclass"], "video_games"],
          "gaming-11",
          ["==", ["get", "subclass"], "toys"],
          "gaming-11",
          ["==", ["get", "subclass"], "gate"],
          "barrier-11",
          ["==", ["get", "subclass"], "cycle_barrier"],
          "barrier-11",
          ["==", ["get", "subclass"], "stile"],
          "barrier-11",
          ["==", ["get", "subclass"], "shelter"],
          "shelter-11",
          ["==", ["get", "subclass"], "sally_port"],
          "ranger-station-11",
          ["==", ["get", "subclass"], "basin"],
          "dam-11",
          ["==", ["get", "subclass"], "reservoir"],
          "dam-11",
          ["==", ["get", "subclass"], "monument"],
          "monument-11",
          ["==", ["get", "subclass"], "airport"],
          "airport-11",
          ["==", ["get", "subclass"], "athletics"],
          "soccer-11",
          ["==", ["get", "subclass"], "pitch"],
          "soccer-11",
          ["==", ["get", "class"], "alcohol_shop"],
          "alcohol-shop-11",
          ["==", ["get", "class"], "art_gallery"],
          "art-gallery-11",
          ["==", ["get", "class"], "attraction"],
          "attraction-11",
          ["==", ["get", "class"], "barrier"],
          "barrier-11",
          ["==", ["get", "class"], "beer"],
          "beer-11",
          ["==", ["get", "class"], "bicycle"],
          "bicycle-11",
          ["==", ["get", "class"], "bus"],
          "bus-11",
          ["==", ["get", "class"], "campsite"],
          "campsite-11",
          ["==", ["get", "class"], "car"],
          "car-11",
          ["==", ["get", "class"], "castle"],
          "castle-11",
          ["==", ["get", "class"], "cemetery"],
          "cemetery-11",
          ["==", ["get", "class"], "college"],
          "college-11",
          ["==", ["get", "class"], "golf"],
          "golf-11",
          ["==", ["get", "class"], "grocery"],
          "grocery-11",
          ["==", ["get", "class"], "harbor"],
          "harbor-11",
          ["==", ["get", "class"], "hospital"],
          "hospital-11",
          ["==", ["get", "class"], "information"],
          "information-11",
          ["==", ["get", "class"], "library"],
          "library-11",
          ["==", ["get", "class"], "laundry"],
          "laundry-11",
          ["==", ["get", "class"], "lodging"],
          "lodging-11",
          ["==", ["get", "class"], "post"],
          "post-11",
          ["==", ["get", "class"], "school"],
          "school-11",
          ["==", ["get", "class"], "shop"],
          "shop-11",
          ["==", ["get", "class"], "stadium"],
          "stadium-11",
          ["==", ["get", "class"], "swimming"],
          "swimming-11",
          ["==", ["get", "class"], "town_hall"],
          "town-hall-11",
          "marker-11"
        ],
        "text-field": [
          "case",
          ["has", "name:fr"],
          ["get", "name:fr"],
          ["get", "name"]
        ],
        "text-optional": true,
        "text-offset": [0, 1.4],
        "text-size": 10,
        "text-max-width": 9
      },
      paint: {
        "text-halo-blur": 0.5,
        "text-color": [
          "case",
          [
            "all",
            ["==", ["get", "subclass"], "station"],
            ["==", ["get", "class"], "aerialway"]
          ],
          "#8665E7",
          [
            "all",
            ["==", ["get", "subclass"], "station"],
            ["==", ["get", "class"], "railway"]
          ],
          "#8665E7",
          ["==", ["get", "subclass"], "halt"],
          "#8665E7",
          [
            "all",
            ["==", ["get", "subclass"], "tram_stop"],
            ["==", ["get", "class"], "railway"]
          ],
          "#8665E7",
          ["==", ["get", "subclass"], "subway_entrance"],
          "#8665E7",
          ["==", ["get", "subclass"], "train_station_entrance"],
          "#8665E7",
          ["==", ["get", "subclass"], "bank"],
          "#495063",
          ["==", ["get", "subclass"], "car_rental"],
          "#495063",
          ["==", ["get", "subclass"], "car_repair"],
          "#495063",
          ["==", ["get", "subclass"], "confectionary"],
          "#EF8000",
          ["==", ["get", "subclass"], "ice_cream"],
          "#EF8000",
          ["==", ["get", "subclass"], "beverages"],
          "#EF8000",
          ["==", ["get", "subclass"], "bbq"],
          "#EF8000",
          ["==", ["get", "subclass"], "toilets"],
          "#5C6F84",
          ["==", ["get", "subclass"], "police"],
          "#495063",
          ["==", ["get", "subclass"], "theatre"],
          "#E93865",
          ["==", ["get", "subclass"], "arts_centre"],
          "#E93865",
          ["==", ["get", "subclass"], "restaurant"],
          "#EF8000",
          ["==", ["get", "subclass"], "bar"],
          "#EF8000",
          ["==", ["get", "subclass"], "equestrian"],
          "#5C6F84",
          ["==", ["get", "subclass"], "swimming_pool"],
          "#5C6F84",
          ["==", ["get", "subclass"], "bicycle_rental"],
          "#495063",
          [
            "all",
            ["==", ["get", "subclass"], "christian"],
            ["==", ["get", "class"], "place_of_worship"]
          ],
          "#495063",
          [
            "all",
            ["==", ["get", "subclass"], "muslim"],
            ["==", ["get", "class"], "place_of_worship"]
          ],
          "#495063",
          [
            "all",
            ["==", ["get", "subclass"], "jewish"],
            ["==", ["get", "class"], "place_of_worship"]
          ],
          "#495063",
          ["==", ["get", "class"], "place_of_worship"],
          "#495063",
          ["==", ["get", "subclass"], "place_of_worship"],
          "#495063",
          ["==", ["get", "subclass"], "embassy"],
          "#495063",
          ["==", ["get", "subclass"], "fire_station"],
          "#495063",
          ["==", ["get", "subclass"], "bakery"],
          "#EF8000",
          ["==", ["get", "subclass"], "mobile_phone"],
          "#C17900",
          ["==", ["get", "subclass"], "florist"],
          "#C17900",
          ["==", ["get", "subclass"], "cafe"],
          "#EF8000",
          ["==", ["get", "subclass"], "hairdresser"],
          "#C17900",
          ["==", ["get", "subclass"], "telephone"],
          "#5C6F84",
          ["==", ["get", "subclass"], "waste_basket"],
          "#5C6F84",
          ["==", ["get", "subclass"], "pharmacy"],
          "#4AA0E7",
          ["==", ["get", "subclass"], "convenience"],
          "#C17900",
          ["==", ["get", "subclass"], "clothes"],
          "#C17900",
          ["==", ["get", "subclass"], "shoes"],
          "#C17900",
          ["==", ["get", "subclass"], "boutique"],
          "#C17900",
          ["==", ["get", "subclass"], "furniture"],
          "#C17900",
          ["==", ["get", "subclass"], "hardware"],
          "#C17900",
          ["==", ["get", "subclass"], "jewelry"],
          "#C17900",
          ["==", ["get", "subclass"], "optician"],
          "#C17900",
          ["==", ["get", "subclass"], "interior_decoration"],
          "#C17900",
          ["==", ["get", "subclass"], "watches"],
          "#C17900",
          ["==", ["get", "subclass"], "fast_food"],
          "#EF8000",
          ["==", ["get", "subclass"], "bus_stop"],
          "#8665E7",
          ["==", ["get", "subclass"], "subway"],
          "#8665E7",
          ["==", ["get", "subclass"], "ferry_terminal"],
          "#8665E7",
          ["==", ["get", "subclass"], "entrance"],
          "#8665E7",
          ["==", ["get", "subclass"], "park"],
          "#538C37",
          ["==", ["get", "subclass"], "dog_park"],
          "#538C37",
          ["==", ["get", "subclass"], "playground"],
          "#5C6F84",
          ["==", ["get", "subclass"], "food_court"],
          "#5C6F84",
          ["==", ["get", "subclass"], "picnic_site"],
          "#538C37",
          ["==", ["get", "subclass"], "garden"],
          "#538C37",
          ["==", ["get", "subclass"], "veterinary"],
          "#4AA0E7",
          ["==", ["get", "subclass"], "zoo"],
          "#E93865",
          ["==", ["get", "subclass"], "aquarium"],
          "#E93865",
          ["==", ["get", "subclass"], "gallery"],
          "#E93865",
          ["==", ["get", "subclass"], "doctors"],
          "#4AA0E7",
          ["==", ["get", "subclass"], "clinic"],
          "#4AA0E7",
          ["==", ["get", "subclass"], "dentist"],
          "#4AA0E7",
          ["==", ["get", "subclass"], "museum"],
          "#E93865",
          ["==", ["get", "subclass"], "public_building"],
          "#495063",
          ["==", ["get", "subclass"], "artwork"],
          "#5C6F84",
          ["==", ["get", "subclass"], "viewpoint"],
          "#5C6F84",
          ["==", ["get", "subclass"], "theme_park"],
          "#E93865",
          ["==", ["get", "subclass"], "cinema"],
          "#E93865",
          ["==", ["get", "subclass"], "nightclub"],
          "#E93865",
          ["==", ["get", "subclass"], "prison"],
          "#495063",
          ["==", ["get", "subclass"], "sports_centre"],
          "#5C6F84",
          ["==", ["get", "subclass"], "fuel"],
          "#5C6F84",
          ["==", ["get", "subclass"], "gift"],
          "#C17900",
          ["==", ["get", "subclass"], "recycling"],
          "#5C6F84",
          ["==", ["get", "subclass"], "mall"],
          "#C17900",
          ["==", ["get", "subclass"], "marketplace"],
          "#C17900",
          ["==", ["get", "subclass"], "video_games"],
          "#C17900",
          ["==", ["get", "subclass"], "toys"],
          "#C17900",
          ["==", ["get", "subclass"], "gate"],
          "#5C6F84",
          ["==", ["get", "subclass"], "cycle_barrier"],
          "#5C6F84",
          ["==", ["get", "subclass"], "stile"],
          "#5C6F84",
          ["==", ["get", "subclass"], "shelter"],
          "#5C6F84",
          ["==", ["get", "subclass"], "sally_port"],
          "#5C6F84",
          ["==", ["get", "subclass"], "basin"],
          "#538C37",
          ["==", ["get", "subclass"], "reservoir"],
          "#538C37",
          ["==", ["get", "subclass"], "monument"],
          "#5C6F84",
          ["==", ["get", "subclass"], "airport"],
          "#8665E7",
          ["==", ["get", "subclass"], "athletics"],
          "#5C6F84",
          ["==", ["get", "subclass"], "pitch"],
          "#5C6F84",
          ["==", ["get", "class"], "alcohol_shop"],
          "#C17900",
          ["==", ["get", "class"], "art_gallery"],
          "#E93865",
          ["==", ["get", "class"], "attraction"],
          "#E93865",
          ["==", ["get", "class"], "barrier"],
          "#5C6F84",
          ["==", ["get", "class"], "beer"],
          "#EF8000",
          ["==", ["get", "class"], "bicycle"],
          "#EF8000",
          ["==", ["get", "class"], "bus"],
          "#8665E7",
          ["==", ["get", "class"], "campsite"],
          "#538C37",
          ["==", ["get", "class"], "car"],
          "#C17900",
          ["==", ["get", "class"], "castle"],
          "#5C6F84",
          ["==", ["get", "class"], "cemetery"],
          "#495063",
          ["==", ["get", "class"], "college"],
          "#495063",
          ["==", ["get", "class"], "golf"],
          "#5C6F84",
          ["==", ["get", "class"], "grocery"],
          "#C17900",
          ["==", ["get", "class"], "harbor"],
          "#495063",
          ["==", ["get", "class"], "hospital"],
          "#4AA0E7",
          ["==", ["get", "class"], "information"],
          "#495063",
          ["==", ["get", "class"], "library"],
          "#495063",
          ["==", ["get", "class"], "laundry"],
          "#495063",
          ["==", ["get", "class"], "lodging"],
          "#495063",
          ["==", ["get", "class"], "post"],
          "#495063",
          ["==", ["get", "class"], "school"],
          "#495063",
          ["==", ["get", "class"], "shop"],
          "#C17900",
          ["==", ["get", "class"], "stadium"],
          "#5C6F84",
          ["==", ["get", "class"], "swimming"],
          "#5C6F84",
          ["==", ["get", "class"], "town_hall"],
          "#495063",
          "#5C6F84"
        ],
        "text-halo-width": 1,
        "text-halo-color": "#ffffff"
      }
    },
    {
      id: "poi-level-1",
      type: "symbol",
      source: "poi",
      "source-layer": "poi",
      minzoom: 14,
      filter: [
        "all",
        ["==", "$type", "Point"],
        ["<=", "rank", 14],
        [
          "!in",
          "subclass",
          "bollard",
          "border_control",
          "cycle_barrier",
          "gate",
          "lift_gate",
          "post_box",
          "recycling",
          "sally_port",
          "shelter",
          "stile",
          "telephone",
          "toll_booth",
          "waste_basket"
        ],
        ["!in", "class", "railway", "bus", "barrier"]
      ],
      layout: {
        "text-size": 10,
        "icon-image": [
          "case",
          [
            "all",
            ["==", ["get", "subclass"], "station"],
            ["==", ["get", "class"], "aerialway"]
          ],
          "aerialway-11",
          [
            "all",
            ["==", ["get", "subclass"], "station"],
            ["==", ["get", "class"], "railway"]
          ],
          "rail-11",
          ["==", ["get", "subclass"], "halt"],
          "rail-11",
          [
            "all",
            ["==", ["get", "subclass"], "tram_stop"],
            ["==", ["get", "class"], "railway"]
          ],
          "rail-light-11",
          ["==", ["get", "subclass"], "subway_entrance"],
          "entrance-11",
          ["==", ["get", "subclass"], "train_station_entrance"],
          "entrance-11",
          ["==", ["get", "subclass"], "bank"],
          "bank-11",
          ["==", ["get", "subclass"], "car_rental"],
          "car-rental-11",
          ["==", ["get", "subclass"], "car_repair"],
          "car-repair-11",
          ["==", ["get", "subclass"], "confectionary"],
          "confectionary-11",
          ["==", ["get", "subclass"], "ice_cream"],
          "ice-cream-11",
          ["==", ["get", "subclass"], "beverages"],
          "teahouse-11",
          ["==", ["get", "subclass"], "bbq"],
          "bbq-11",
          ["==", ["get", "subclass"], "toilets"],
          "toilet-11",
          ["==", ["get", "subclass"], "police"],
          "police-11",
          ["==", ["get", "subclass"], "theatre"],
          "theatre-11",
          ["==", ["get", "subclass"], "arts_centre"],
          "theatre-11",
          ["==", ["get", "subclass"], "restaurant"],
          "restaurant-11",
          ["==", ["get", "subclass"], "bar"],
          "bar-11",
          ["==", ["get", "subclass"], "equestrian"],
          "horse-riding-11",
          ["==", ["get", "subclass"], "swimming_pool"],
          "swimming-11",
          ["==", ["get", "subclass"], "bicycle_rental"],
          "bicycle-share-11",
          [
            "all",
            ["==", ["get", "subclass"], "christian"],
            ["==", ["get", "class"], "place_of_worship"]
          ],
          "religious-christian-11",
          [
            "all",
            ["==", ["get", "subclass"], "muslim"],
            ["==", ["get", "class"], "place_of_worship"]
          ],
          "religious-muslim-11",
          [
            "all",
            ["==", ["get", "subclass"], "jewish"],
            ["==", ["get", "class"], "place_of_worship"]
          ],
          "religious-jewish-11",
          ["==", ["get", "class"], "place_of_worship"],
          "place-of-worship-11",
          ["==", ["get", "subclass"], "place_of_worship"],
          "place-of-worship-11",
          ["==", ["get", "subclass"], "embassy"],
          "embassy-11",
          ["==", ["get", "subclass"], "fire_station"],
          "fire-station-11",
          ["==", ["get", "subclass"], "bakery"],
          "bakery-11",
          ["==", ["get", "subclass"], "mobile_phone"],
          "mobile-phone-11",
          ["==", ["get", "subclass"], "florist"],
          "florist-11",
          ["==", ["get", "subclass"], "cafe"],
          "cafe-11",
          ["==", ["get", "subclass"], "hairdresser"],
          "hairdresser-11",
          ["==", ["get", "subclass"], "telephone"],
          "telephone-11",
          ["==", ["get", "subclass"], "waste_basket"],
          "waste-basket-11",
          ["==", ["get", "subclass"], "pharmacy"],
          "pharmacy-11",
          ["==", ["get", "subclass"], "convenience"],
          "convenience-store-11",
          ["==", ["get", "subclass"], "clothes"],
          "clothing-store-11",
          ["==", ["get", "subclass"], "shoes"],
          "clothing-store-11",
          ["==", ["get", "subclass"], "boutique"],
          "clothing-store-11",
          ["==", ["get", "subclass"], "furniture"],
          "furniture-11",
          ["==", ["get", "subclass"], "hardware"],
          "hardware-11",
          ["==", ["get", "subclass"], "jewelry"],
          "jewelry-store-11",
          ["==", ["get", "subclass"], "optician"],
          "optician-11",
          ["==", ["get", "subclass"], "interior_decoration"],
          "paint-11",
          ["==", ["get", "subclass"], "watches"],
          "paint-11",
          ["==", ["get", "subclass"], "fast_food"],
          "fast-food-11",
          ["==", ["get", "subclass"], "bus_stop"],
          "bus-11",
          ["==", ["get", "subclass"], "subway"],
          "rail-metro-11",
          ["==", ["get", "subclass"], "ferry_terminal"],
          "ferry-11",
          ["==", ["get", "subclass"], "entrance"],
          "entrance-11",
          ["==", ["get", "subclass"], "park"],
          "park-alt1-11",
          ["==", ["get", "subclass"], "dog_park"],
          "dog-park-11",
          ["==", ["get", "subclass"], "playground"],
          "playground-11",
          ["==", ["get", "subclass"], "food_court"],
          "food-court-11",
          ["==", ["get", "subclass"], "picnic_site"],
          "picnic-site-11",
          ["==", ["get", "subclass"], "garden"],
          "garden-11",
          ["==", ["get", "subclass"], "veterinary"],
          "veterinary-11",
          ["==", ["get", "subclass"], "zoo"],
          "zoo-11",
          ["==", ["get", "subclass"], "aquarium"],
          "aquarium-11",
          ["==", ["get", "subclass"], "gallery"],
          "art-gallery-11",
          ["==", ["get", "subclass"], "doctors"],
          "doctor-11",
          ["==", ["get", "subclass"], "clinic"],
          "doctor-11",
          ["==", ["get", "subclass"], "dentist"],
          "dentist-11",
          ["==", ["get", "subclass"], "museum"],
          "museum-11",
          ["==", ["get", "subclass"], "public_building"],
          "building-15",
          ["==", ["get", "subclass"], "artwork"],
          "artwork-11",
          ["==", ["get", "subclass"], "viewpoint"],
          "viewpoint-11",
          ["==", ["get", "subclass"], "theme_park"],
          "amusement-park-11",
          ["==", ["get", "subclass"], "cinema"],
          "cinema-11",
          ["==", ["get", "subclass"], "nightclub"],
          "music-11",
          ["==", ["get", "subclass"], "prison"],
          "prison-11",
          ["==", ["get", "subclass"], "sports_centre"],
          "basketball-11",
          ["==", ["get", "subclass"], "fuel"],
          "fuel-11",
          ["==", ["get", "subclass"], "gift"],
          "gift-11",
          ["==", ["get", "subclass"], "recycling"],
          "recycling-11",
          ["==", ["get", "subclass"], "mall"],
          "commercial-11",
          ["==", ["get", "subclass"], "marketplace"],
          "commercial-11",
          ["==", ["get", "subclass"], "video_games"],
          "gaming-11",
          ["==", ["get", "subclass"], "toys"],
          "gaming-11",
          ["==", ["get", "subclass"], "gate"],
          "barrier-11",
          ["==", ["get", "subclass"], "cycle_barrier"],
          "barrier-11",
          ["==", ["get", "subclass"], "stile"],
          "barrier-11",
          ["==", ["get", "subclass"], "shelter"],
          "shelter-11",
          ["==", ["get", "subclass"], "sally_port"],
          "ranger-station-11",
          ["==", ["get", "subclass"], "basin"],
          "dam-11",
          ["==", ["get", "subclass"], "reservoir"],
          "dam-11",
          ["==", ["get", "subclass"], "monument"],
          "monument-11",
          ["==", ["get", "subclass"], "airport"],
          "airport-11",
          ["==", ["get", "subclass"], "athletics"],
          "soccer-11",
          ["==", ["get", "subclass"], "pitch"],
          "soccer-11",
          ["==", ["get", "class"], "alcohol_shop"],
          "alcohol-shop-11",
          ["==", ["get", "class"], "art_gallery"],
          "art-gallery-11",
          ["==", ["get", "class"], "attraction"],
          "attraction-11",
          ["==", ["get", "class"], "barrier"],
          "barrier-11",
          ["==", ["get", "class"], "beer"],
          "beer-11",
          ["==", ["get", "class"], "bicycle"],
          "bicycle-11",
          ["==", ["get", "class"], "bus"],
          "bus-11",
          ["==", ["get", "class"], "campsite"],
          "campsite-11",
          ["==", ["get", "class"], "car"],
          "car-11",
          ["==", ["get", "class"], "castle"],
          "castle-11",
          ["==", ["get", "class"], "cemetery"],
          "cemetery-11",
          ["==", ["get", "class"], "college"],
          "college-11",
          ["==", ["get", "class"], "golf"],
          "golf-11",
          ["==", ["get", "class"], "grocery"],
          "grocery-11",
          ["==", ["get", "class"], "harbor"],
          "harbor-11",
          ["==", ["get", "class"], "hospital"],
          "hospital-11",
          ["==", ["get", "class"], "information"],
          "information-11",
          ["==", ["get", "class"], "library"],
          "library-11",
          ["==", ["get", "class"], "laundry"],
          "laundry-11",
          ["==", ["get", "class"], "lodging"],
          "lodging-11",
          ["==", ["get", "class"], "post"],
          "post-11",
          ["==", ["get", "class"], "school"],
          "school-11",
          ["==", ["get", "class"], "shop"],
          "shop-11",
          ["==", ["get", "class"], "stadium"],
          "stadium-11",
          ["==", ["get", "class"], "swimming"],
          "swimming-11",
          ["==", ["get", "class"], "town_hall"],
          "town-hall-11",
          "marker-11"
        ],
        "text-font": ["Noto Sans Regular"],
        "text-padding": 2,
        "text-offset": [0, 1.4],
        "text-anchor": "top",
        "text-field": [
          "case",
          ["has", "name:fr"],
          ["get", "name:fr"],
          ["get", "name"]
        ],
        "text-optional": true,
        "text-max-width": 9
      },
      paint: {
        "text-halo-blur": 0.5,
        "text-color": [
          "case",
          [
            "all",
            ["==", ["get", "subclass"], "station"],
            ["==", ["get", "class"], "aerialway"]
          ],
          "#8665E7",
          [
            "all",
            ["==", ["get", "subclass"], "station"],
            ["==", ["get", "class"], "railway"]
          ],
          "#8665E7",
          ["==", ["get", "subclass"], "halt"],
          "#8665E7",
          [
            "all",
            ["==", ["get", "subclass"], "tram_stop"],
            ["==", ["get", "class"], "railway"]
          ],
          "#8665E7",
          ["==", ["get", "subclass"], "subway_entrance"],
          "#8665E7",
          ["==", ["get", "subclass"], "train_station_entrance"],
          "#8665E7",
          ["==", ["get", "subclass"], "bank"],
          "#495063",
          ["==", ["get", "subclass"], "car_rental"],
          "#495063",
          ["==", ["get", "subclass"], "car_repair"],
          "#495063",
          ["==", ["get", "subclass"], "confectionary"],
          "#EF8000",
          ["==", ["get", "subclass"], "ice_cream"],
          "#EF8000",
          ["==", ["get", "subclass"], "beverages"],
          "#EF8000",
          ["==", ["get", "subclass"], "bbq"],
          "#EF8000",
          ["==", ["get", "subclass"], "toilets"],
          "#5C6F84",
          ["==", ["get", "subclass"], "police"],
          "#495063",
          ["==", ["get", "subclass"], "theatre"],
          "#E93865",
          ["==", ["get", "subclass"], "arts_centre"],
          "#E93865",
          ["==", ["get", "subclass"], "restaurant"],
          "#EF8000",
          ["==", ["get", "subclass"], "bar"],
          "#EF8000",
          ["==", ["get", "subclass"], "equestrian"],
          "#5C6F84",
          ["==", ["get", "subclass"], "swimming_pool"],
          "#5C6F84",
          ["==", ["get", "subclass"], "bicycle_rental"],
          "#495063",
          [
            "all",
            ["==", ["get", "subclass"], "christian"],
            ["==", ["get", "class"], "place_of_worship"]
          ],
          "#495063",
          [
            "all",
            ["==", ["get", "subclass"], "muslim"],
            ["==", ["get", "class"], "place_of_worship"]
          ],
          "#495063",
          [
            "all",
            ["==", ["get", "subclass"], "jewish"],
            ["==", ["get", "class"], "place_of_worship"]
          ],
          "#495063",
          ["==", ["get", "class"], "place_of_worship"],
          "#495063",
          ["==", ["get", "subclass"], "place_of_worship"],
          "#495063",
          ["==", ["get", "subclass"], "embassy"],
          "#495063",
          ["==", ["get", "subclass"], "fire_station"],
          "#495063",
          ["==", ["get", "subclass"], "bakery"],
          "#EF8000",
          ["==", ["get", "subclass"], "mobile_phone"],
          "#C17900",
          ["==", ["get", "subclass"], "florist"],
          "#C17900",
          ["==", ["get", "subclass"], "cafe"],
          "#EF8000",
          ["==", ["get", "subclass"], "hairdresser"],
          "#C17900",
          ["==", ["get", "subclass"], "telephone"],
          "#5C6F84",
          ["==", ["get", "subclass"], "waste_basket"],
          "#5C6F84",
          ["==", ["get", "subclass"], "pharmacy"],
          "#4AA0E7",
          ["==", ["get", "subclass"], "convenience"],
          "#C17900",
          ["==", ["get", "subclass"], "clothes"],
          "#C17900",
          ["==", ["get", "subclass"], "shoes"],
          "#C17900",
          ["==", ["get", "subclass"], "boutique"],
          "#C17900",
          ["==", ["get", "subclass"], "furniture"],
          "#C17900",
          ["==", ["get", "subclass"], "hardware"],
          "#C17900",
          ["==", ["get", "subclass"], "jewelry"],
          "#C17900",
          ["==", ["get", "subclass"], "optician"],
          "#C17900",
          ["==", ["get", "subclass"], "interior_decoration"],
          "#C17900",
          ["==", ["get", "subclass"], "watches"],
          "#C17900",
          ["==", ["get", "subclass"], "fast_food"],
          "#EF8000",
          ["==", ["get", "subclass"], "bus_stop"],
          "#8665E7",
          ["==", ["get", "subclass"], "subway"],
          "#8665E7",
          ["==", ["get", "subclass"], "ferry_terminal"],
          "#8665E7",
          ["==", ["get", "subclass"], "entrance"],
          "#8665E7",
          ["==", ["get", "subclass"], "park"],
          "#538C37",
          ["==", ["get", "subclass"], "dog_park"],
          "#538C37",
          ["==", ["get", "subclass"], "playground"],
          "#5C6F84",
          ["==", ["get", "subclass"], "food_court"],
          "#5C6F84",
          ["==", ["get", "subclass"], "picnic_site"],
          "#538C37",
          ["==", ["get", "subclass"], "garden"],
          "#538C37",
          ["==", ["get", "subclass"], "veterinary"],
          "#4AA0E7",
          ["==", ["get", "subclass"], "zoo"],
          "#E93865",
          ["==", ["get", "subclass"], "aquarium"],
          "#E93865",
          ["==", ["get", "subclass"], "gallery"],
          "#E93865",
          ["==", ["get", "subclass"], "doctors"],
          "#4AA0E7",
          ["==", ["get", "subclass"], "clinic"],
          "#4AA0E7",
          ["==", ["get", "subclass"], "dentist"],
          "#4AA0E7",
          ["==", ["get", "subclass"], "museum"],
          "#E93865",
          ["==", ["get", "subclass"], "public_building"],
          "#495063",
          ["==", ["get", "subclass"], "artwork"],
          "#5C6F84",
          ["==", ["get", "subclass"], "viewpoint"],
          "#5C6F84",
          ["==", ["get", "subclass"], "theme_park"],
          "#E93865",
          ["==", ["get", "subclass"], "cinema"],
          "#E93865",
          ["==", ["get", "subclass"], "nightclub"],
          "#E93865",
          ["==", ["get", "subclass"], "prison"],
          "#495063",
          ["==", ["get", "subclass"], "sports_centre"],
          "#5C6F84",
          ["==", ["get", "subclass"], "fuel"],
          "#5C6F84",
          ["==", ["get", "subclass"], "gift"],
          "#C17900",
          ["==", ["get", "subclass"], "recycling"],
          "#5C6F84",
          ["==", ["get", "subclass"], "mall"],
          "#C17900",
          ["==", ["get", "subclass"], "marketplace"],
          "#C17900",
          ["==", ["get", "subclass"], "video_games"],
          "#C17900",
          ["==", ["get", "subclass"], "toys"],
          "#C17900",
          ["==", ["get", "subclass"], "gate"],
          "#5C6F84",
          ["==", ["get", "subclass"], "cycle_barrier"],
          "#5C6F84",
          ["==", ["get", "subclass"], "stile"],
          "#5C6F84",
          ["==", ["get", "subclass"], "shelter"],
          "#5C6F84",
          ["==", ["get", "subclass"], "sally_port"],
          "#5C6F84",
          ["==", ["get", "subclass"], "basin"],
          "#538C37",
          ["==", ["get", "subclass"], "reservoir"],
          "#538C37",
          ["==", ["get", "subclass"], "monument"],
          "#5C6F84",
          ["==", ["get", "subclass"], "airport"],
          "#8665E7",
          ["==", ["get", "subclass"], "athletics"],
          "#5C6F84",
          ["==", ["get", "subclass"], "pitch"],
          "#5C6F84",
          ["==", ["get", "class"], "alcohol_shop"],
          "#C17900",
          ["==", ["get", "class"], "art_gallery"],
          "#E93865",
          ["==", ["get", "class"], "attraction"],
          "#E93865",
          ["==", ["get", "class"], "barrier"],
          "#5C6F84",
          ["==", ["get", "class"], "beer"],
          "#EF8000",
          ["==", ["get", "class"], "bicycle"],
          "#EF8000",
          ["==", ["get", "class"], "bus"],
          "#8665E7",
          ["==", ["get", "class"], "campsite"],
          "#538C37",
          ["==", ["get", "class"], "car"],
          "#C17900",
          ["==", ["get", "class"], "castle"],
          "#5C6F84",
          ["==", ["get", "class"], "cemetery"],
          "#495063",
          ["==", ["get", "class"], "college"],
          "#495063",
          ["==", ["get", "class"], "golf"],
          "#5C6F84",
          ["==", ["get", "class"], "grocery"],
          "#C17900",
          ["==", ["get", "class"], "harbor"],
          "#495063",
          ["==", ["get", "class"], "hospital"],
          "#4AA0E7",
          ["==", ["get", "class"], "information"],
          "#495063",
          ["==", ["get", "class"], "library"],
          "#495063",
          ["==", ["get", "class"], "laundry"],
          "#495063",
          ["==", ["get", "class"], "lodging"],
          "#495063",
          ["==", ["get", "class"], "post"],
          "#495063",
          ["==", ["get", "class"], "school"],
          "#495063",
          ["==", ["get", "class"], "shop"],
          "#C17900",
          ["==", ["get", "class"], "stadium"],
          "#5C6F84",
          ["==", ["get", "class"], "swimming"],
          "#5C6F84",
          ["==", ["get", "class"], "town_hall"],
          "#495063",
          "#5C6F84"
        ],
        "text-halo-width": 1,
        "text-halo-color": "#ffffff"
      }
    },
    {
      id: "poi-level-public-tranports-2",
      type: "symbol",
      source: "poi",
      "source-layer": "poi",
      minzoom: 15,
      filter: [
        "all",
        ["==", "$type", "Point"],
        [
          "any",
          [
            "all",
            ["==", "class", "railway"],
            ["!in", "subclass", "station", "subway", "halt"]
          ],
          ["in", "class", "bus"]
        ]
      ],
      layout: {
        "text-size": 10,
        "icon-image": [
          "case",
          [
            "all",
            ["==", ["get", "subclass"], "station"],
            ["==", ["get", "class"], "aerialway"]
          ],
          "aerialway-11",
          [
            "all",
            ["==", ["get", "subclass"], "station"],
            ["==", ["get", "class"], "railway"]
          ],
          "rail-11",
          ["==", ["get", "subclass"], "halt"],
          "rail-11",
          [
            "all",
            ["==", ["get", "subclass"], "tram_stop"],
            ["==", ["get", "class"], "railway"]
          ],
          "rail-light-11",
          ["==", ["get", "subclass"], "subway_entrance"],
          "entrance-11",
          ["==", ["get", "subclass"], "train_station_entrance"],
          "entrance-11",
          ["==", ["get", "subclass"], "bank"],
          "bank-11",
          ["==", ["get", "subclass"], "car_rental"],
          "car-rental-11",
          ["==", ["get", "subclass"], "car_repair"],
          "car-repair-11",
          ["==", ["get", "subclass"], "confectionary"],
          "confectionary-11",
          ["==", ["get", "subclass"], "ice_cream"],
          "ice-cream-11",
          ["==", ["get", "subclass"], "beverages"],
          "teahouse-11",
          ["==", ["get", "subclass"], "bbq"],
          "bbq-11",
          ["==", ["get", "subclass"], "toilets"],
          "toilet-11",
          ["==", ["get", "subclass"], "police"],
          "police-11",
          ["==", ["get", "subclass"], "theatre"],
          "theatre-11",
          ["==", ["get", "subclass"], "arts_centre"],
          "theatre-11",
          ["==", ["get", "subclass"], "restaurant"],
          "restaurant-11",
          ["==", ["get", "subclass"], "bar"],
          "bar-11",
          ["==", ["get", "subclass"], "equestrian"],
          "horse-riding-11",
          ["==", ["get", "subclass"], "swimming_pool"],
          "swimming-11",
          ["==", ["get", "subclass"], "bicycle_rental"],
          "bicycle-share-11",
          [
            "all",
            ["==", ["get", "subclass"], "christian"],
            ["==", ["get", "class"], "place_of_worship"]
          ],
          "religious-christian-11",
          [
            "all",
            ["==", ["get", "subclass"], "muslim"],
            ["==", ["get", "class"], "place_of_worship"]
          ],
          "religious-muslim-11",
          [
            "all",
            ["==", ["get", "subclass"], "jewish"],
            ["==", ["get", "class"], "place_of_worship"]
          ],
          "religious-jewish-11",
          ["==", ["get", "class"], "place_of_worship"],
          "place-of-worship-11",
          ["==", ["get", "subclass"], "place_of_worship"],
          "place-of-worship-11",
          ["==", ["get", "subclass"], "embassy"],
          "embassy-11",
          ["==", ["get", "subclass"], "fire_station"],
          "fire-station-11",
          ["==", ["get", "subclass"], "bakery"],
          "bakery-11",
          ["==", ["get", "subclass"], "mobile_phone"],
          "mobile-phone-11",
          ["==", ["get", "subclass"], "florist"],
          "florist-11",
          ["==", ["get", "subclass"], "cafe"],
          "cafe-11",
          ["==", ["get", "subclass"], "hairdresser"],
          "hairdresser-11",
          ["==", ["get", "subclass"], "telephone"],
          "telephone-11",
          ["==", ["get", "subclass"], "waste_basket"],
          "waste-basket-11",
          ["==", ["get", "subclass"], "pharmacy"],
          "pharmacy-11",
          ["==", ["get", "subclass"], "convenience"],
          "convenience-store-11",
          ["==", ["get", "subclass"], "clothes"],
          "clothing-store-11",
          ["==", ["get", "subclass"], "shoes"],
          "clothing-store-11",
          ["==", ["get", "subclass"], "boutique"],
          "clothing-store-11",
          ["==", ["get", "subclass"], "furniture"],
          "furniture-11",
          ["==", ["get", "subclass"], "hardware"],
          "hardware-11",
          ["==", ["get", "subclass"], "jewelry"],
          "jewelry-store-11",
          ["==", ["get", "subclass"], "optician"],
          "optician-11",
          ["==", ["get", "subclass"], "interior_decoration"],
          "paint-11",
          ["==", ["get", "subclass"], "watches"],
          "paint-11",
          ["==", ["get", "subclass"], "fast_food"],
          "fast-food-11",
          ["==", ["get", "subclass"], "bus_stop"],
          "bus-11",
          ["==", ["get", "subclass"], "subway"],
          "rail-metro-11",
          ["==", ["get", "subclass"], "ferry_terminal"],
          "ferry-11",
          ["==", ["get", "subclass"], "entrance"],
          "entrance-11",
          ["==", ["get", "subclass"], "park"],
          "park-alt1-11",
          ["==", ["get", "subclass"], "dog_park"],
          "dog-park-11",
          ["==", ["get", "subclass"], "playground"],
          "playground-11",
          ["==", ["get", "subclass"], "food_court"],
          "food-court-11",
          ["==", ["get", "subclass"], "picnic_site"],
          "picnic-site-11",
          ["==", ["get", "subclass"], "garden"],
          "garden-11",
          ["==", ["get", "subclass"], "veterinary"],
          "veterinary-11",
          ["==", ["get", "subclass"], "zoo"],
          "zoo-11",
          ["==", ["get", "subclass"], "aquarium"],
          "aquarium-11",
          ["==", ["get", "subclass"], "gallery"],
          "art-gallery-11",
          ["==", ["get", "subclass"], "doctors"],
          "doctor-11",
          ["==", ["get", "subclass"], "clinic"],
          "doctor-11",
          ["==", ["get", "subclass"], "dentist"],
          "dentist-11",
          ["==", ["get", "subclass"], "museum"],
          "museum-11",
          ["==", ["get", "subclass"], "public_building"],
          "building-15",
          ["==", ["get", "subclass"], "artwork"],
          "artwork-11",
          ["==", ["get", "subclass"], "viewpoint"],
          "viewpoint-11",
          ["==", ["get", "subclass"], "theme_park"],
          "amusement-park-11",
          ["==", ["get", "subclass"], "cinema"],
          "cinema-11",
          ["==", ["get", "subclass"], "nightclub"],
          "music-11",
          ["==", ["get", "subclass"], "prison"],
          "prison-11",
          ["==", ["get", "subclass"], "sports_centre"],
          "basketball-11",
          ["==", ["get", "subclass"], "fuel"],
          "fuel-11",
          ["==", ["get", "subclass"], "gift"],
          "gift-11",
          ["==", ["get", "subclass"], "recycling"],
          "recycling-11",
          ["==", ["get", "subclass"], "mall"],
          "commercial-11",
          ["==", ["get", "subclass"], "marketplace"],
          "commercial-11",
          ["==", ["get", "subclass"], "video_games"],
          "gaming-11",
          ["==", ["get", "subclass"], "toys"],
          "gaming-11",
          ["==", ["get", "subclass"], "gate"],
          "barrier-11",
          ["==", ["get", "subclass"], "cycle_barrier"],
          "barrier-11",
          ["==", ["get", "subclass"], "stile"],
          "barrier-11",
          ["==", ["get", "subclass"], "shelter"],
          "shelter-11",
          ["==", ["get", "subclass"], "sally_port"],
          "ranger-station-11",
          ["==", ["get", "subclass"], "basin"],
          "dam-11",
          ["==", ["get", "subclass"], "reservoir"],
          "dam-11",
          ["==", ["get", "subclass"], "monument"],
          "monument-11",
          ["==", ["get", "subclass"], "airport"],
          "airport-11",
          ["==", ["get", "subclass"], "athletics"],
          "soccer-11",
          ["==", ["get", "subclass"], "pitch"],
          "soccer-11",
          ["==", ["get", "class"], "alcohol_shop"],
          "alcohol-shop-11",
          ["==", ["get", "class"], "art_gallery"],
          "art-gallery-11",
          ["==", ["get", "class"], "attraction"],
          "attraction-11",
          ["==", ["get", "class"], "barrier"],
          "barrier-11",
          ["==", ["get", "class"], "beer"],
          "beer-11",
          ["==", ["get", "class"], "bicycle"],
          "bicycle-11",
          ["==", ["get", "class"], "bus"],
          "bus-11",
          ["==", ["get", "class"], "campsite"],
          "campsite-11",
          ["==", ["get", "class"], "car"],
          "car-11",
          ["==", ["get", "class"], "castle"],
          "castle-11",
          ["==", ["get", "class"], "cemetery"],
          "cemetery-11",
          ["==", ["get", "class"], "college"],
          "college-11",
          ["==", ["get", "class"], "golf"],
          "golf-11",
          ["==", ["get", "class"], "grocery"],
          "grocery-11",
          ["==", ["get", "class"], "harbor"],
          "harbor-11",
          ["==", ["get", "class"], "hospital"],
          "hospital-11",
          ["==", ["get", "class"], "information"],
          "information-11",
          ["==", ["get", "class"], "library"],
          "library-11",
          ["==", ["get", "class"], "laundry"],
          "laundry-11",
          ["==", ["get", "class"], "lodging"],
          "lodging-11",
          ["==", ["get", "class"], "post"],
          "post-11",
          ["==", ["get", "class"], "school"],
          "school-11",
          ["==", ["get", "class"], "shop"],
          "shop-11",
          ["==", ["get", "class"], "stadium"],
          "stadium-11",
          ["==", ["get", "class"], "swimming"],
          "swimming-11",
          ["==", ["get", "class"], "town_hall"],
          "town-hall-11",
          "marker-11"
        ],
        "text-font": ["Noto Sans Regular"],
        "text-padding": 2,
        "text-offset": [0, 1.4],
        "text-anchor": "top",
        "text-field": [
          "case",
          ["has", "name:fr"],
          ["get", "name:fr"],
          ["get", "name"]
        ],
        "text-optional": true,
        "text-max-width": 9
      },
      paint: {
        "text-halo-blur": 0.5,
        "text-color": [
          "case",
          [
            "all",
            ["==", ["get", "subclass"], "station"],
            ["==", ["get", "class"], "aerialway"]
          ],
          "#8665E7",
          [
            "all",
            ["==", ["get", "subclass"], "station"],
            ["==", ["get", "class"], "railway"]
          ],
          "#8665E7",
          ["==", ["get", "subclass"], "halt"],
          "#8665E7",
          [
            "all",
            ["==", ["get", "subclass"], "tram_stop"],
            ["==", ["get", "class"], "railway"]
          ],
          "#8665E7",
          ["==", ["get", "subclass"], "subway_entrance"],
          "#8665E7",
          ["==", ["get", "subclass"], "train_station_entrance"],
          "#8665E7",
          ["==", ["get", "subclass"], "bank"],
          "#495063",
          ["==", ["get", "subclass"], "car_rental"],
          "#495063",
          ["==", ["get", "subclass"], "car_repair"],
          "#495063",
          ["==", ["get", "subclass"], "confectionary"],
          "#EF8000",
          ["==", ["get", "subclass"], "ice_cream"],
          "#EF8000",
          ["==", ["get", "subclass"], "beverages"],
          "#EF8000",
          ["==", ["get", "subclass"], "bbq"],
          "#EF8000",
          ["==", ["get", "subclass"], "toilets"],
          "#5C6F84",
          ["==", ["get", "subclass"], "police"],
          "#495063",
          ["==", ["get", "subclass"], "theatre"],
          "#E93865",
          ["==", ["get", "subclass"], "arts_centre"],
          "#E93865",
          ["==", ["get", "subclass"], "restaurant"],
          "#EF8000",
          ["==", ["get", "subclass"], "bar"],
          "#EF8000",
          ["==", ["get", "subclass"], "equestrian"],
          "#5C6F84",
          ["==", ["get", "subclass"], "swimming_pool"],
          "#5C6F84",
          ["==", ["get", "subclass"], "bicycle_rental"],
          "#495063",
          [
            "all",
            ["==", ["get", "subclass"], "christian"],
            ["==", ["get", "class"], "place_of_worship"]
          ],
          "#495063",
          [
            "all",
            ["==", ["get", "subclass"], "muslim"],
            ["==", ["get", "class"], "place_of_worship"]
          ],
          "#495063",
          [
            "all",
            ["==", ["get", "subclass"], "jewish"],
            ["==", ["get", "class"], "place_of_worship"]
          ],
          "#495063",
          ["==", ["get", "class"], "place_of_worship"],
          "#495063",
          ["==", ["get", "subclass"], "place_of_worship"],
          "#495063",
          ["==", ["get", "subclass"], "embassy"],
          "#495063",
          ["==", ["get", "subclass"], "fire_station"],
          "#495063",
          ["==", ["get", "subclass"], "bakery"],
          "#EF8000",
          ["==", ["get", "subclass"], "mobile_phone"],
          "#C17900",
          ["==", ["get", "subclass"], "florist"],
          "#C17900",
          ["==", ["get", "subclass"], "cafe"],
          "#EF8000",
          ["==", ["get", "subclass"], "hairdresser"],
          "#C17900",
          ["==", ["get", "subclass"], "telephone"],
          "#5C6F84",
          ["==", ["get", "subclass"], "waste_basket"],
          "#5C6F84",
          ["==", ["get", "subclass"], "pharmacy"],
          "#4AA0E7",
          ["==", ["get", "subclass"], "convenience"],
          "#C17900",
          ["==", ["get", "subclass"], "clothes"],
          "#C17900",
          ["==", ["get", "subclass"], "shoes"],
          "#C17900",
          ["==", ["get", "subclass"], "boutique"],
          "#C17900",
          ["==", ["get", "subclass"], "furniture"],
          "#C17900",
          ["==", ["get", "subclass"], "hardware"],
          "#C17900",
          ["==", ["get", "subclass"], "jewelry"],
          "#C17900",
          ["==", ["get", "subclass"], "optician"],
          "#C17900",
          ["==", ["get", "subclass"], "interior_decoration"],
          "#C17900",
          ["==", ["get", "subclass"], "watches"],
          "#C17900",
          ["==", ["get", "subclass"], "fast_food"],
          "#EF8000",
          ["==", ["get", "subclass"], "bus_stop"],
          "#8665E7",
          ["==", ["get", "subclass"], "subway"],
          "#8665E7",
          ["==", ["get", "subclass"], "ferry_terminal"],
          "#8665E7",
          ["==", ["get", "subclass"], "entrance"],
          "#8665E7",
          ["==", ["get", "subclass"], "park"],
          "#538C37",
          ["==", ["get", "subclass"], "dog_park"],
          "#538C37",
          ["==", ["get", "subclass"], "playground"],
          "#5C6F84",
          ["==", ["get", "subclass"], "food_court"],
          "#5C6F84",
          ["==", ["get", "subclass"], "picnic_site"],
          "#538C37",
          ["==", ["get", "subclass"], "garden"],
          "#538C37",
          ["==", ["get", "subclass"], "veterinary"],
          "#4AA0E7",
          ["==", ["get", "subclass"], "zoo"],
          "#E93865",
          ["==", ["get", "subclass"], "aquarium"],
          "#E93865",
          ["==", ["get", "subclass"], "gallery"],
          "#E93865",
          ["==", ["get", "subclass"], "doctors"],
          "#4AA0E7",
          ["==", ["get", "subclass"], "clinic"],
          "#4AA0E7",
          ["==", ["get", "subclass"], "dentist"],
          "#4AA0E7",
          ["==", ["get", "subclass"], "museum"],
          "#E93865",
          ["==", ["get", "subclass"], "public_building"],
          "#495063",
          ["==", ["get", "subclass"], "artwork"],
          "#5C6F84",
          ["==", ["get", "subclass"], "viewpoint"],
          "#5C6F84",
          ["==", ["get", "subclass"], "theme_park"],
          "#E93865",
          ["==", ["get", "subclass"], "cinema"],
          "#E93865",
          ["==", ["get", "subclass"], "nightclub"],
          "#E93865",
          ["==", ["get", "subclass"], "prison"],
          "#495063",
          ["==", ["get", "subclass"], "sports_centre"],
          "#5C6F84",
          ["==", ["get", "subclass"], "fuel"],
          "#5C6F84",
          ["==", ["get", "subclass"], "gift"],
          "#C17900",
          ["==", ["get", "subclass"], "recycling"],
          "#5C6F84",
          ["==", ["get", "subclass"], "mall"],
          "#C17900",
          ["==", ["get", "subclass"], "marketplace"],
          "#C17900",
          ["==", ["get", "subclass"], "video_games"],
          "#C17900",
          ["==", ["get", "subclass"], "toys"],
          "#C17900",
          ["==", ["get", "subclass"], "gate"],
          "#5C6F84",
          ["==", ["get", "subclass"], "cycle_barrier"],
          "#5C6F84",
          ["==", ["get", "subclass"], "stile"],
          "#5C6F84",
          ["==", ["get", "subclass"], "shelter"],
          "#5C6F84",
          ["==", ["get", "subclass"], "sally_port"],
          "#5C6F84",
          ["==", ["get", "subclass"], "basin"],
          "#538C37",
          ["==", ["get", "subclass"], "reservoir"],
          "#538C37",
          ["==", ["get", "subclass"], "monument"],
          "#5C6F84",
          ["==", ["get", "subclass"], "airport"],
          "#8665E7",
          ["==", ["get", "subclass"], "athletics"],
          "#5C6F84",
          ["==", ["get", "subclass"], "pitch"],
          "#5C6F84",
          ["==", ["get", "class"], "alcohol_shop"],
          "#C17900",
          ["==", ["get", "class"], "art_gallery"],
          "#E93865",
          ["==", ["get", "class"], "attraction"],
          "#E93865",
          ["==", ["get", "class"], "barrier"],
          "#5C6F84",
          ["==", ["get", "class"], "beer"],
          "#EF8000",
          ["==", ["get", "class"], "bicycle"],
          "#EF8000",
          ["==", ["get", "class"], "bus"],
          "#8665E7",
          ["==", ["get", "class"], "campsite"],
          "#538C37",
          ["==", ["get", "class"], "car"],
          "#C17900",
          ["==", ["get", "class"], "castle"],
          "#5C6F84",
          ["==", ["get", "class"], "cemetery"],
          "#495063",
          ["==", ["get", "class"], "college"],
          "#495063",
          ["==", ["get", "class"], "golf"],
          "#5C6F84",
          ["==", ["get", "class"], "grocery"],
          "#C17900",
          ["==", ["get", "class"], "harbor"],
          "#495063",
          ["==", ["get", "class"], "hospital"],
          "#4AA0E7",
          ["==", ["get", "class"], "information"],
          "#495063",
          ["==", ["get", "class"], "library"],
          "#495063",
          ["==", ["get", "class"], "laundry"],
          "#495063",
          ["==", ["get", "class"], "lodging"],
          "#495063",
          ["==", ["get", "class"], "post"],
          "#495063",
          ["==", ["get", "class"], "school"],
          "#495063",
          ["==", ["get", "class"], "shop"],
          "#C17900",
          ["==", ["get", "class"], "stadium"],
          "#5C6F84",
          ["==", ["get", "class"], "swimming"],
          "#5C6F84",
          ["==", ["get", "class"], "town_hall"],
          "#495063",
          "#5C6F84"
        ],
        "text-halo-width": 1,
        "text-halo-color": "#ffffff"
      }
    },
    {
      id: "poi-level-public-tranports-1",
      type: "symbol",
      source: "poi",
      "source-layer": "poi",
      minzoom: 14,
      filter: [
        "all",
        ["==", "$type", "Point"],
        ["==", "class", "railway"],
        ["in", "subclass", "station", "subway", "halt"]
      ],
      layout: {
        "text-size": 10,
        "icon-image": [
          "case",
          [
            "all",
            ["==", ["get", "subclass"], "station"],
            ["==", ["get", "class"], "aerialway"]
          ],
          "aerialway-11",
          [
            "all",
            ["==", ["get", "subclass"], "station"],
            ["==", ["get", "class"], "railway"]
          ],
          "rail-11",
          ["==", ["get", "subclass"], "halt"],
          "rail-11",
          [
            "all",
            ["==", ["get", "subclass"], "tram_stop"],
            ["==", ["get", "class"], "railway"]
          ],
          "rail-light-11",
          ["==", ["get", "subclass"], "subway_entrance"],
          "entrance-11",
          ["==", ["get", "subclass"], "train_station_entrance"],
          "entrance-11",
          ["==", ["get", "subclass"], "bank"],
          "bank-11",
          ["==", ["get", "subclass"], "car_rental"],
          "car-rental-11",
          ["==", ["get", "subclass"], "car_repair"],
          "car-repair-11",
          ["==", ["get", "subclass"], "confectionary"],
          "confectionary-11",
          ["==", ["get", "subclass"], "ice_cream"],
          "ice-cream-11",
          ["==", ["get", "subclass"], "beverages"],
          "teahouse-11",
          ["==", ["get", "subclass"], "bbq"],
          "bbq-11",
          ["==", ["get", "subclass"], "toilets"],
          "toilet-11",
          ["==", ["get", "subclass"], "police"],
          "police-11",
          ["==", ["get", "subclass"], "theatre"],
          "theatre-11",
          ["==", ["get", "subclass"], "arts_centre"],
          "theatre-11",
          ["==", ["get", "subclass"], "restaurant"],
          "restaurant-11",
          ["==", ["get", "subclass"], "bar"],
          "bar-11",
          ["==", ["get", "subclass"], "equestrian"],
          "horse-riding-11",
          ["==", ["get", "subclass"], "swimming_pool"],
          "swimming-11",
          ["==", ["get", "subclass"], "bicycle_rental"],
          "bicycle-share-11",
          [
            "all",
            ["==", ["get", "subclass"], "christian"],
            ["==", ["get", "class"], "place_of_worship"]
          ],
          "religious-christian-11",
          [
            "all",
            ["==", ["get", "subclass"], "muslim"],
            ["==", ["get", "class"], "place_of_worship"]
          ],
          "religious-muslim-11",
          [
            "all",
            ["==", ["get", "subclass"], "jewish"],
            ["==", ["get", "class"], "place_of_worship"]
          ],
          "religious-jewish-11",
          ["==", ["get", "class"], "place_of_worship"],
          "place-of-worship-11",
          ["==", ["get", "subclass"], "place_of_worship"],
          "place-of-worship-11",
          ["==", ["get", "subclass"], "embassy"],
          "embassy-11",
          ["==", ["get", "subclass"], "fire_station"],
          "fire-station-11",
          ["==", ["get", "subclass"], "bakery"],
          "bakery-11",
          ["==", ["get", "subclass"], "mobile_phone"],
          "mobile-phone-11",
          ["==", ["get", "subclass"], "florist"],
          "florist-11",
          ["==", ["get", "subclass"], "cafe"],
          "cafe-11",
          ["==", ["get", "subclass"], "hairdresser"],
          "hairdresser-11",
          ["==", ["get", "subclass"], "telephone"],
          "telephone-11",
          ["==", ["get", "subclass"], "waste_basket"],
          "waste-basket-11",
          ["==", ["get", "subclass"], "pharmacy"],
          "pharmacy-11",
          ["==", ["get", "subclass"], "convenience"],
          "convenience-store-11",
          ["==", ["get", "subclass"], "clothes"],
          "clothing-store-11",
          ["==", ["get", "subclass"], "shoes"],
          "clothing-store-11",
          ["==", ["get", "subclass"], "boutique"],
          "clothing-store-11",
          ["==", ["get", "subclass"], "furniture"],
          "furniture-11",
          ["==", ["get", "subclass"], "hardware"],
          "hardware-11",
          ["==", ["get", "subclass"], "jewelry"],
          "jewelry-store-11",
          ["==", ["get", "subclass"], "optician"],
          "optician-11",
          ["==", ["get", "subclass"], "interior_decoration"],
          "paint-11",
          ["==", ["get", "subclass"], "watches"],
          "paint-11",
          ["==", ["get", "subclass"], "fast_food"],
          "fast-food-11",
          ["==", ["get", "subclass"], "bus_stop"],
          "bus-11",
          ["==", ["get", "subclass"], "subway"],
          "rail-metro-11",
          ["==", ["get", "subclass"], "ferry_terminal"],
          "ferry-11",
          ["==", ["get", "subclass"], "entrance"],
          "entrance-11",
          ["==", ["get", "subclass"], "park"],
          "park-alt1-11",
          ["==", ["get", "subclass"], "dog_park"],
          "dog-park-11",
          ["==", ["get", "subclass"], "playground"],
          "playground-11",
          ["==", ["get", "subclass"], "food_court"],
          "food-court-11",
          ["==", ["get", "subclass"], "picnic_site"],
          "picnic-site-11",
          ["==", ["get", "subclass"], "garden"],
          "garden-11",
          ["==", ["get", "subclass"], "veterinary"],
          "veterinary-11",
          ["==", ["get", "subclass"], "zoo"],
          "zoo-11",
          ["==", ["get", "subclass"], "aquarium"],
          "aquarium-11",
          ["==", ["get", "subclass"], "gallery"],
          "art-gallery-11",
          ["==", ["get", "subclass"], "doctors"],
          "doctor-11",
          ["==", ["get", "subclass"], "clinic"],
          "doctor-11",
          ["==", ["get", "subclass"], "dentist"],
          "dentist-11",
          ["==", ["get", "subclass"], "museum"],
          "museum-11",
          ["==", ["get", "subclass"], "public_building"],
          "building-15",
          ["==", ["get", "subclass"], "artwork"],
          "artwork-11",
          ["==", ["get", "subclass"], "viewpoint"],
          "viewpoint-11",
          ["==", ["get", "subclass"], "theme_park"],
          "amusement-park-11",
          ["==", ["get", "subclass"], "cinema"],
          "cinema-11",
          ["==", ["get", "subclass"], "nightclub"],
          "music-11",
          ["==", ["get", "subclass"], "prison"],
          "prison-11",
          ["==", ["get", "subclass"], "sports_centre"],
          "basketball-11",
          ["==", ["get", "subclass"], "fuel"],
          "fuel-11",
          ["==", ["get", "subclass"], "gift"],
          "gift-11",
          ["==", ["get", "subclass"], "recycling"],
          "recycling-11",
          ["==", ["get", "subclass"], "mall"],
          "commercial-11",
          ["==", ["get", "subclass"], "marketplace"],
          "commercial-11",
          ["==", ["get", "subclass"], "video_games"],
          "gaming-11",
          ["==", ["get", "subclass"], "toys"],
          "gaming-11",
          ["==", ["get", "subclass"], "gate"],
          "barrier-11",
          ["==", ["get", "subclass"], "cycle_barrier"],
          "barrier-11",
          ["==", ["get", "subclass"], "stile"],
          "barrier-11",
          ["==", ["get", "subclass"], "shelter"],
          "shelter-11",
          ["==", ["get", "subclass"], "sally_port"],
          "ranger-station-11",
          ["==", ["get", "subclass"], "basin"],
          "dam-11",
          ["==", ["get", "subclass"], "reservoir"],
          "dam-11",
          ["==", ["get", "subclass"], "monument"],
          "monument-11",
          ["==", ["get", "subclass"], "airport"],
          "airport-11",
          ["==", ["get", "subclass"], "athletics"],
          "soccer-11",
          ["==", ["get", "subclass"], "pitch"],
          "soccer-11",
          ["==", ["get", "class"], "alcohol_shop"],
          "alcohol-shop-11",
          ["==", ["get", "class"], "art_gallery"],
          "art-gallery-11",
          ["==", ["get", "class"], "attraction"],
          "attraction-11",
          ["==", ["get", "class"], "barrier"],
          "barrier-11",
          ["==", ["get", "class"], "beer"],
          "beer-11",
          ["==", ["get", "class"], "bicycle"],
          "bicycle-11",
          ["==", ["get", "class"], "bus"],
          "bus-11",
          ["==", ["get", "class"], "campsite"],
          "campsite-11",
          ["==", ["get", "class"], "car"],
          "car-11",
          ["==", ["get", "class"], "castle"],
          "castle-11",
          ["==", ["get", "class"], "cemetery"],
          "cemetery-11",
          ["==", ["get", "class"], "college"],
          "college-11",
          ["==", ["get", "class"], "golf"],
          "golf-11",
          ["==", ["get", "class"], "grocery"],
          "grocery-11",
          ["==", ["get", "class"], "harbor"],
          "harbor-11",
          ["==", ["get", "class"], "hospital"],
          "hospital-11",
          ["==", ["get", "class"], "information"],
          "information-11",
          ["==", ["get", "class"], "library"],
          "library-11",
          ["==", ["get", "class"], "laundry"],
          "laundry-11",
          ["==", ["get", "class"], "lodging"],
          "lodging-11",
          ["==", ["get", "class"], "post"],
          "post-11",
          ["==", ["get", "class"], "school"],
          "school-11",
          ["==", ["get", "class"], "shop"],
          "shop-11",
          ["==", ["get", "class"], "stadium"],
          "stadium-11",
          ["==", ["get", "class"], "swimming"],
          "swimming-11",
          ["==", ["get", "class"], "town_hall"],
          "town-hall-11",
          "marker-11"
        ],
        "text-font": ["Noto Sans Regular"],
        "text-padding": 2,
        "text-offset": [0, 1.4],
        "text-anchor": "top",
        "text-field": [
          "case",
          ["has", "name:fr"],
          ["get", "name:fr"],
          ["get", "name"]
        ],
        "text-optional": true,
        "text-max-width": 9
      },
      paint: {
        "text-halo-blur": 0.5,
        "text-color": [
          "case",
          [
            "all",
            ["==", ["get", "subclass"], "station"],
            ["==", ["get", "class"], "aerialway"]
          ],
          "#8665E7",
          [
            "all",
            ["==", ["get", "subclass"], "station"],
            ["==", ["get", "class"], "railway"]
          ],
          "#8665E7",
          ["==", ["get", "subclass"], "halt"],
          "#8665E7",
          [
            "all",
            ["==", ["get", "subclass"], "tram_stop"],
            ["==", ["get", "class"], "railway"]
          ],
          "#8665E7",
          ["==", ["get", "subclass"], "subway_entrance"],
          "#8665E7",
          ["==", ["get", "subclass"], "train_station_entrance"],
          "#8665E7",
          ["==", ["get", "subclass"], "bank"],
          "#495063",
          ["==", ["get", "subclass"], "car_rental"],
          "#495063",
          ["==", ["get", "subclass"], "car_repair"],
          "#495063",
          ["==", ["get", "subclass"], "confectionary"],
          "#EF8000",
          ["==", ["get", "subclass"], "ice_cream"],
          "#EF8000",
          ["==", ["get", "subclass"], "beverages"],
          "#EF8000",
          ["==", ["get", "subclass"], "bbq"],
          "#EF8000",
          ["==", ["get", "subclass"], "toilets"],
          "#5C6F84",
          ["==", ["get", "subclass"], "police"],
          "#495063",
          ["==", ["get", "subclass"], "theatre"],
          "#E93865",
          ["==", ["get", "subclass"], "arts_centre"],
          "#E93865",
          ["==", ["get", "subclass"], "restaurant"],
          "#EF8000",
          ["==", ["get", "subclass"], "bar"],
          "#EF8000",
          ["==", ["get", "subclass"], "equestrian"],
          "#5C6F84",
          ["==", ["get", "subclass"], "swimming_pool"],
          "#5C6F84",
          ["==", ["get", "subclass"], "bicycle_rental"],
          "#495063",
          [
            "all",
            ["==", ["get", "subclass"], "christian"],
            ["==", ["get", "class"], "place_of_worship"]
          ],
          "#495063",
          [
            "all",
            ["==", ["get", "subclass"], "muslim"],
            ["==", ["get", "class"], "place_of_worship"]
          ],
          "#495063",
          [
            "all",
            ["==", ["get", "subclass"], "jewish"],
            ["==", ["get", "class"], "place_of_worship"]
          ],
          "#495063",
          ["==", ["get", "class"], "place_of_worship"],
          "#495063",
          ["==", ["get", "subclass"], "place_of_worship"],
          "#495063",
          ["==", ["get", "subclass"], "embassy"],
          "#495063",
          ["==", ["get", "subclass"], "fire_station"],
          "#495063",
          ["==", ["get", "subclass"], "bakery"],
          "#EF8000",
          ["==", ["get", "subclass"], "mobile_phone"],
          "#C17900",
          ["==", ["get", "subclass"], "florist"],
          "#C17900",
          ["==", ["get", "subclass"], "cafe"],
          "#EF8000",
          ["==", ["get", "subclass"], "hairdresser"],
          "#C17900",
          ["==", ["get", "subclass"], "telephone"],
          "#5C6F84",
          ["==", ["get", "subclass"], "waste_basket"],
          "#5C6F84",
          ["==", ["get", "subclass"], "pharmacy"],
          "#4AA0E7",
          ["==", ["get", "subclass"], "convenience"],
          "#C17900",
          ["==", ["get", "subclass"], "clothes"],
          "#C17900",
          ["==", ["get", "subclass"], "shoes"],
          "#C17900",
          ["==", ["get", "subclass"], "boutique"],
          "#C17900",
          ["==", ["get", "subclass"], "furniture"],
          "#C17900",
          ["==", ["get", "subclass"], "hardware"],
          "#C17900",
          ["==", ["get", "subclass"], "jewelry"],
          "#C17900",
          ["==", ["get", "subclass"], "optician"],
          "#C17900",
          ["==", ["get", "subclass"], "interior_decoration"],
          "#C17900",
          ["==", ["get", "subclass"], "watches"],
          "#C17900",
          ["==", ["get", "subclass"], "fast_food"],
          "#EF8000",
          ["==", ["get", "subclass"], "bus_stop"],
          "#8665E7",
          ["==", ["get", "subclass"], "subway"],
          "#8665E7",
          ["==", ["get", "subclass"], "ferry_terminal"],
          "#8665E7",
          ["==", ["get", "subclass"], "entrance"],
          "#8665E7",
          ["==", ["get", "subclass"], "park"],
          "#538C37",
          ["==", ["get", "subclass"], "dog_park"],
          "#538C37",
          ["==", ["get", "subclass"], "playground"],
          "#5C6F84",
          ["==", ["get", "subclass"], "food_court"],
          "#5C6F84",
          ["==", ["get", "subclass"], "picnic_site"],
          "#538C37",
          ["==", ["get", "subclass"], "garden"],
          "#538C37",
          ["==", ["get", "subclass"], "veterinary"],
          "#4AA0E7",
          ["==", ["get", "subclass"], "zoo"],
          "#E93865",
          ["==", ["get", "subclass"], "aquarium"],
          "#E93865",
          ["==", ["get", "subclass"], "gallery"],
          "#E93865",
          ["==", ["get", "subclass"], "doctors"],
          "#4AA0E7",
          ["==", ["get", "subclass"], "clinic"],
          "#4AA0E7",
          ["==", ["get", "subclass"], "dentist"],
          "#4AA0E7",
          ["==", ["get", "subclass"], "museum"],
          "#E93865",
          ["==", ["get", "subclass"], "public_building"],
          "#495063",
          ["==", ["get", "subclass"], "artwork"],
          "#5C6F84",
          ["==", ["get", "subclass"], "viewpoint"],
          "#5C6F84",
          ["==", ["get", "subclass"], "theme_park"],
          "#E93865",
          ["==", ["get", "subclass"], "cinema"],
          "#E93865",
          ["==", ["get", "subclass"], "nightclub"],
          "#E93865",
          ["==", ["get", "subclass"], "prison"],
          "#495063",
          ["==", ["get", "subclass"], "sports_centre"],
          "#5C6F84",
          ["==", ["get", "subclass"], "fuel"],
          "#5C6F84",
          ["==", ["get", "subclass"], "gift"],
          "#C17900",
          ["==", ["get", "subclass"], "recycling"],
          "#5C6F84",
          ["==", ["get", "subclass"], "mall"],
          "#C17900",
          ["==", ["get", "subclass"], "marketplace"],
          "#C17900",
          ["==", ["get", "subclass"], "video_games"],
          "#C17900",
          ["==", ["get", "subclass"], "toys"],
          "#C17900",
          ["==", ["get", "subclass"], "gate"],
          "#5C6F84",
          ["==", ["get", "subclass"], "cycle_barrier"],
          "#5C6F84",
          ["==", ["get", "subclass"], "stile"],
          "#5C6F84",
          ["==", ["get", "subclass"], "shelter"],
          "#5C6F84",
          ["==", ["get", "subclass"], "sally_port"],
          "#5C6F84",
          ["==", ["get", "subclass"], "basin"],
          "#538C37",
          ["==", ["get", "subclass"], "reservoir"],
          "#538C37",
          ["==", ["get", "subclass"], "monument"],
          "#5C6F84",
          ["==", ["get", "subclass"], "airport"],
          "#8665E7",
          ["==", ["get", "subclass"], "athletics"],
          "#5C6F84",
          ["==", ["get", "subclass"], "pitch"],
          "#5C6F84",
          ["==", ["get", "class"], "alcohol_shop"],
          "#C17900",
          ["==", ["get", "class"], "art_gallery"],
          "#E93865",
          ["==", ["get", "class"], "attraction"],
          "#E93865",
          ["==", ["get", "class"], "barrier"],
          "#5C6F84",
          ["==", ["get", "class"], "beer"],
          "#EF8000",
          ["==", ["get", "class"], "bicycle"],
          "#EF8000",
          ["==", ["get", "class"], "bus"],
          "#8665E7",
          ["==", ["get", "class"], "campsite"],
          "#538C37",
          ["==", ["get", "class"], "car"],
          "#C17900",
          ["==", ["get", "class"], "castle"],
          "#5C6F84",
          ["==", ["get", "class"], "cemetery"],
          "#495063",
          ["==", ["get", "class"], "college"],
          "#495063",
          ["==", ["get", "class"], "golf"],
          "#5C6F84",
          ["==", ["get", "class"], "grocery"],
          "#C17900",
          ["==", ["get", "class"], "harbor"],
          "#495063",
          ["==", ["get", "class"], "hospital"],
          "#4AA0E7",
          ["==", ["get", "class"], "information"],
          "#495063",
          ["==", ["get", "class"], "library"],
          "#495063",
          ["==", ["get", "class"], "laundry"],
          "#495063",
          ["==", ["get", "class"], "lodging"],
          "#495063",
          ["==", ["get", "class"], "post"],
          "#495063",
          ["==", ["get", "class"], "school"],
          "#495063",
          ["==", ["get", "class"], "shop"],
          "#C17900",
          ["==", ["get", "class"], "stadium"],
          "#5C6F84",
          ["==", ["get", "class"], "swimming"],
          "#5C6F84",
          ["==", ["get", "class"], "town_hall"],
          "#495063",
          "#5C6F84"
        ],
        "text-halo-width": 1,
        "text-halo-color": "#ffffff"
      }
    },
    {
      id: "highway-name-path",
      type: "symbol",
      metadata: {
        "taxonomy:group": "roads-labels"
      },
      source: "basemap",
      "source-layer": "transportation_name",
      minzoom: 15.5,
      filter: ["==", "class", "path"],
      layout: {
        "text-size": {
          base: 1,
          stops: [[13, 10], [16, 12]]
        },
        "text-font": ["Noto Sans Regular"],
        "text-field": [
          "case",
          ["has", "name:fr"],
          ["get", "name:fr"],
          ["get", "name"]
        ],
        "symbol-placement": "line",
        "text-rotation-alignment": "map"
      },
      paint: {
        "text-halo-color": "#f8f4f0",
        "text-color": "hsl(30, 23%, 62%)",
        "text-halo-width": 0.5
      }
    },
    {
      id: "highway-name-minor",
      type: "symbol",
      metadata: {
        "taxonomy:group": "roads-labels"
      },
      source: "basemap",
      "source-layer": "transportation_name",
      minzoom: 15,
      filter: [
        "all",
        ["==", "$type", "LineString"],
        ["in", "class", "minor", "service", "track"]
      ],
      layout: {
        "text-size": {
          base: 1,
          stops: [[13, 10], [16, 14]]
        },
        "text-font": ["Noto Sans Regular"],
        "text-field": [
          "case",
          ["has", "name:fr"],
          ["get", "name:fr"],
          ["get", "name"]
        ],
        "symbol-placement": "line",
        "text-rotation-alignment": "map"
      },
      paint: {
        "text-halo-blur": 0,
        "text-color": "#666",
        "text-halo-width": 1,
        "text-halo-color": "hsl(0, 0%, 100%)"
      }
    },
    {
      id: "highway-name-major",
      type: "symbol",
      metadata: {
        "taxonomy:group": "roads-labels"
      },
      source: "basemap",
      "source-layer": "transportation_name",
      minzoom: 12.2,
      filter: ["in", "class", "primary", "secondary", "tertiary", "trunk"],
      layout: {
        "text-size": {
          base: 1,
          stops: [[13, 10], [16, 13]]
        },
        "text-font": ["Noto Sans Regular"],
        "text-field": [
          "case",
          ["has", "name:fr"],
          ["get", "name:fr"],
          ["get", "name"]
        ],
        "symbol-placement": "line",
        "text-rotation-alignment": "map"
      },
      paint: {
        "text-halo-blur": 0,
        "text-color": "#666",
        "text-halo-width": 1,
        "text-halo-color": "hsl(0, 0%, 100%)"
      }
    },
    {
      id: "highway-shield",
      type: "symbol",
      metadata: {
        "taxonomy:group": "roads-labels"
      },
      source: "basemap",
      "source-layer": "transportation_name",
      minzoom: 8,
      filter: [
        "all",
        ["==", "$type", "LineString"],
        [
          "all",
          ["!in", "network", "us-highway", "us-interstate", "us-state"],
          ["<=", "ref_length", 6]
        ]
      ],
      layout: {
        "text-size": 10,
        "icon-image": "road_{ref_length}",
        "icon-rotation-alignment": "viewport",
        "symbol-spacing": 200,
        "text-font": ["Noto Sans Regular"],
        "symbol-placement": {
          base: 1,
          stops: [[10, "point"], [11, "line"]]
        },
        "text-rotation-alignment": "viewport",
        "icon-size": 1,
        "text-field": "{ref}"
      },
      paint: {}
    },
    {
      id: "highway-shield-us-interstate",
      type: "symbol",
      metadata: {
        "taxonomy:group": "roads-labels"
      },
      source: "basemap",
      "source-layer": "transportation_name",
      minzoom: 7,
      filter: [
        "all",
        ["==", "$type", "LineString"],
        ["all", ["<=", "ref_length", 6], ["==", "network", "us-interstate"]]
      ],
      layout: {
        "text-size": 10,
        "icon-image": "{network}_{ref_length}",
        "icon-rotation-alignment": "viewport",
        "symbol-spacing": 200,
        "text-font": ["Noto Sans Regular"],
        "symbol-placement": {
          base: 1,
          stops: [[7, "point"], [7, "line"], [8, "line"]]
        },
        "text-rotation-alignment": "viewport",
        "icon-size": 1,
        "text-field": "{ref}"
      },
      paint: {
        "text-color": "rgba(255, 255, 255, 1)"
      }
    },
    {
      id: "highway-shield-us-other",
      type: "symbol",
      metadata: {
        "taxonomy:group": "roads-labels"
      },
      source: "basemap",
      "source-layer": "transportation_name",
      minzoom: 9,
      filter: [
        "all",
        ["==", "$type", "LineString"],
        [
          "all",
          ["<=", "ref_length", 6],
          ["in", "network", "us-highway", "us-state"]
        ]
      ],
      layout: {
        "text-size": 10,
        "icon-image": "{network}_{ref_length}",
        "icon-rotation-alignment": "viewport",
        "symbol-spacing": 200,
        "text-font": ["Noto Sans Regular"],
        "symbol-placement": {
          base: 1,
          stops: [[10, "point"], [11, "line"]]
        },
        "text-rotation-alignment": "viewport",
        "icon-size": 1,
        "text-field": "{ref}"
      },
      paint: {
        "text-color": "rgba(0, 0, 0, 1)"
      }
    },
    {
      id: "airport-label-major",
      type: "symbol",
      source: "basemap",
      "source-layer": "aerodrome_label",
      minzoom: 10,
      filter: ["all", ["has", "iata"]],
      layout: {
        "text-padding": 2,
        "text-font": ["Noto Sans Regular"],
        "text-anchor": "top",
        "icon-image": "airport-11",
        "text-field": [
          "case",
          ["has", "name:fr"],
          ["get", "name:fr"],
          ["get", "name"]
        ],
        "text-offset": [0, 0.6],
        "text-size": 12,
        "text-max-width": 9,
        visibility: "visible",
        "icon-size": 1,
        "text-optional": true
      },
      paint: {
        "text-halo-blur": 0.5,
        "text-color": "#8665E7",
        "text-halo-width": 1,
        "text-halo-color": "#ffffff"
      }
    },
    {
      id: "place-other",
      type: "symbol",
      metadata: {
        "mapbox:group": "1444849242106.713",
        "taxonomy:group": "places"
      },
      source: "basemap",
      "source-layer": "place",
      filter: [
        "!in",
        "class",
        "city",
        "town",
        "village",
        "country",
        "continent"
      ],
      layout: {
        "text-letter-spacing": 0.1,
        "text-size": {
          base: 1.2,
          stops: [[12, 10], [15, 14]]
        },
        "text-font": ["Noto Sans Bold"],
        "text-field": "{name}",
        "text-max-width": 9
      },
      paint: {
        "text-color": "hsl(0, 0%, 24%)",
        "text-halo-width": 1.2,
        "text-halo-color": "rgba(255,255,255,0.8)"
      }
    },
    {
      id: "place-village",
      type: "symbol",
      metadata: {
        "mapbox:group": "1444849242106.713",
        "taxonomy:group": "places"
      },
      source: "basemap",
      "source-layer": "place",
      filter: ["==", "class", "village"],
      layout: {
        "text-font": ["Noto Sans Regular"],
        "text-size": {
          base: 1.2,
          stops: [[10, 12], [15, 22]]
        },
        "text-field": [
          "case",
          ["has", "name:fr"],
          [
            "case",
            [
              "==",
              ["concat", ["get", "name:fr"], ""],
              ["concat", ["get", "name"], ""]
            ],
            ["get", "name:fr"],
            [
              "concat",
              ["get", "name:fr"],
              "\n",
              ["concat", ["get", "name"], ""]
            ]
          ],
          [
            "case",
            ["has", "name:latin"],
            [
              "case",
              [
                "==",
                ["concat", ["get", "name:latin"], ""],
                ["concat", ["get", "name"], ""]
              ],
              ["get", "name"],
              ["concat", ["get", "name:latin"], "\n", ["get", "name"]]
            ],
            ["get", "name"]
          ]
        ],
        "text-max-width": 8,
        visibility: "visible"
      },
      paint: {
        "text-color": "#333",
        "text-halo-width": 1.2,
        "text-halo-color": "rgba(255,255,255,0.8)"
      }
    },
    {
      id: "place-town",
      type: "symbol",
      metadata: {
        "mapbox:group": "1444849242106.713",
        "taxonomy:group": "places"
      },
      source: "basemap",
      "source-layer": "place",
      filter: ["==", "class", "town"],
      layout: {
        "text-font": ["Noto Sans Regular"],
        "text-size": {
          base: 1.2,
          stops: [[10, 14], [15, 24]]
        },
        "text-field": [
          "case",
          ["has", "name:fr"],
          [
            "case",
            [
              "==",
              ["concat", ["get", "name:fr"], ""],
              ["concat", ["get", "name"], ""]
            ],
            ["get", "name:fr"],
            [
              "concat",
              ["get", "name:fr"],
              "\n",
              ["concat", ["get", "name"], ""]
            ]
          ],
          [
            "case",
            ["has", "name:latin"],
            [
              "case",
              [
                "==",
                ["concat", ["get", "name:latin"], ""],
                ["concat", ["get", "name"], ""]
              ],
              ["get", "name"],
              ["concat", ["get", "name:latin"], "\n", ["get", "name"]]
            ],
            ["get", "name"]
          ]
        ],
        "text-max-width": 8,
        visibility: "visible"
      },
      paint: {
        "text-color": "#333",
        "text-halo-width": 1.2,
        "text-halo-color": "rgba(255,255,255,0.8)"
      }
    },
    {
      id: "place-city",
      type: "symbol",
      metadata: {
        "mapbox:group": "1444849242106.713",
        "taxonomy:group": "places"
      },
      source: "basemap",
      "source-layer": "place",
      filter: ["all", ["!=", "capital", 2], ["==", "class", "city"]],
      layout: {
        "text-font": ["Noto Sans Regular"],
        "text-size": {
          base: 1.2,
          stops: [[7, 14], [11, 24]]
        },
        "text-field": [
          "case",
          ["has", "name:fr"],
          [
            "case",
            [
              "==",
              ["concat", ["get", "name:fr"], ""],
              ["concat", ["get", "name"], ""]
            ],
            ["get", "name:fr"],
            [
              "concat",
              ["get", "name:fr"],
              "\n",
              ["concat", ["get", "name"], ""]
            ]
          ],
          [
            "case",
            ["has", "name:latin"],
            [
              "case",
              [
                "==",
                ["concat", ["get", "name:latin"], ""],
                ["concat", ["get", "name"], ""]
              ],
              ["get", "name"],
              ["concat", ["get", "name:latin"], "\n", ["get", "name"]]
            ],
            ["get", "name"]
          ]
        ],
        "text-max-width": 8,
        visibility: "visible"
      },
      paint: {
        "text-color": "#333",
        "text-halo-width": 1.2,
        "text-halo-color": "rgba(255,255,255,0.8)"
      }
    },
    {
      id: "place-city-capital",
      type: "symbol",
      metadata: {
        "mapbox:group": "1444849242106.713",
        "taxonomy:group": "places"
      },
      source: "basemap",
      "source-layer": "place",
      filter: ["all", ["==", "capital", 2], ["==", "class", "city"]],
      layout: {
        "text-font": ["Noto Sans Regular"],
        "text-size": {
          base: 1.2,
          stops: [[7, 14], [11, 24]]
        },
        "text-field": [
          "case",
          ["has", "name:fr"],
          [
            "case",
            [
              "==",
              ["concat", ["get", "name:fr"], ""],
              ["concat", ["get", "name"], ""]
            ],
            ["get", "name:fr"],
            [
              "concat",
              ["get", "name:fr"],
              "\n",
              ["concat", ["get", "name"], ""]
            ]
          ],
          [
            "case",
            ["has", "name:latin"],
            [
              "case",
              [
                "==",
                ["concat", ["get", "name:latin"], ""],
                ["concat", ["get", "name"], ""]
              ],
              ["get", "name"],
              ["concat", ["get", "name:latin"], "\n", ["get", "name"]]
            ],
            ["get", "name"]
          ]
        ],
        "text-max-width": 8,
        "icon-image": "star_11",
        "text-offset": [0.4, 0],
        "icon-size": 0.8,
        "text-anchor": "left",
        visibility: "visible"
      },
      paint: {
        "text-color": "#333",
        "text-halo-width": 1.2,
        "text-halo-color": "rgba(255,255,255,0.8)"
      }
    },
    {
      id: "place-country-other",
      type: "symbol",
      metadata: {
        "mapbox:group": "1444849242106.713",
        "taxonomy:group": "places"
      },
      source: "basemap",
      "source-layer": "place",
      filter: [
        "all",
        ["==", "class", "country"],
        [">=", "rank", 3],
        ["!has", "iso_a2"]
      ],
      layout: {
        "text-font": ["Noto Sans Italic"],
        "text-field": [
          "case",
          ["has", "name:fr"],
          ["get", "name:fr"],
          ["get", "name"]
        ],
        "text-size": {
          stops: [[3, 11], [7, 17]]
        },
        "text-transform": "uppercase",
        "text-max-width": 6.25,
        visibility: "visible"
      },
      paint: {
        "text-halo-blur": 1,
        "text-color": "#334",
        "text-halo-width": 2,
        "text-halo-color": "rgba(255,255,255,0.8)"
      }
    },
    {
      id: "place-country-3",
      type: "symbol",
      metadata: {
        "mapbox:group": "1444849242106.713",
        "taxonomy:group": "places"
      },
      source: "basemap",
      "source-layer": "place",
      filter: [
        "all",
        ["==", "class", "country"],
        [">=", "rank", 3],
        ["has", "iso_a2"]
      ],
      layout: {
        "text-font": ["Noto Sans Bold"],
        "text-field": [
          "case",
          ["has", "name:fr"],
          ["get", "name:fr"],
          ["get", "name"]
        ],
        "text-size": {
          stops: [[3, 11], [7, 17]]
        },
        "text-transform": "uppercase",
        "text-max-width": 6.25,
        visibility: "visible"
      },
      paint: {
        "text-halo-blur": 1,
        "text-color": "#334",
        "text-halo-width": 2,
        "text-halo-color": "rgba(255,255,255,0.8)"
      }
    },
    {
      id: "place-country-2",
      type: "symbol",
      metadata: {
        "mapbox:group": "1444849242106.713",
        "taxonomy:group": "places"
      },
      source: "basemap",
      "source-layer": "place",
      filter: [
        "all",
        ["==", "class", "country"],
        ["==", "rank", 2],
        ["has", "iso_a2"]
      ],
      layout: {
        "text-font": ["Noto Sans Bold"],
        "text-field": [
          "case",
          ["has", "name:fr"],
          ["get", "name:fr"],
          ["get", "name"]
        ],
        "text-size": {
          stops: [[2, 11], [5, 17]]
        },
        "text-transform": "uppercase",
        "text-max-width": 6.25,
        visibility: "visible"
      },
      paint: {
        "text-halo-blur": 1,
        "text-color": "#334",
        "text-halo-width": 2,
        "text-halo-color": "rgba(255,255,255,0.8)"
      }
    },
    {
      id: "place-country-1",
      type: "symbol",
      metadata: {
        "mapbox:group": "1444849242106.713",
        "taxonomy:group": "places"
      },
      source: "basemap",
      "source-layer": "place",
      filter: [
        "all",
        ["==", "class", "country"],
        ["==", "rank", 1],
        ["has", "iso_a2"]
      ],
      layout: {
        "text-font": ["Noto Sans Bold"],
        "text-field": [
          "case",
          ["has", "name:fr"],
          ["get", "name:fr"],
          ["get", "name"]
        ],
        "text-size": {
          stops: [[1, 11], [4, 17]]
        },
        "text-transform": "uppercase",
        "text-max-width": 6.25,
        visibility: "visible"
      },
      paint: {
        "text-halo-blur": 1,
        "text-color": "#334",
        "text-halo-width": 2,
        "text-halo-color": "rgba(255,255,255,0.8)"
      }
    },
    {
      id: "place-continent",
      type: "symbol",
      metadata: {
        "mapbox:group": "1444849242106.713"
      },
      source: "basemap",
      "source-layer": "place",
      maxzoom: 1,
      filter: ["==", "class", "continent"],
      layout: {
        "text-font": ["Noto Sans Bold"],
        "text-field": [
          "case",
          ["has", "name:fr"],
          ["get", "name:fr"],
          ["get", "name"]
        ],
        "text-size": 14,
        "text-max-width": 6.25,
        "text-transform": "uppercase",
        visibility: "visible"
      },
      paint: {
        "text-halo-blur": 1,
        "text-color": "#334",
        "text-halo-width": 2,
        "text-halo-color": "rgba(255,255,255,0.8)"
      }
    }
  ],
  id: "cjbdftwmm936t2rquyt8ycvor",
  visibility: "private"
};
/* apply("map", mapStyle); */
olms.apply(map, mapStyle);

const pathToFile = '../../data/sample_data.gpx';

const gpxLayer = new ol.layer.Vector({
  source: new ol.source.Vector({
    format: new ol.format.GPX(),
    url: pathToFile,
  }),
});

new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(),
      opacity: 0.5,
    }),
    gpxLayer,
  ],
  view: new ol.View({
    center: [1771934, 5745515],
    zoom: 14,
  }),
});

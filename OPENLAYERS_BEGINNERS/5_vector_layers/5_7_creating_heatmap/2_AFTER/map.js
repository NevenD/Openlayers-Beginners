const pathToFile = '../../data/poi.json';

const geojsonData = new ol.source.Vector({
  url: pathToFile,
  format: new ol.format.GeoJSON(),
});

const heatmapLayer = new ol.layer.Heatmap({
  source: geojsonData,
  blur: 5,
  radius: 5,
});

new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(),
    }),
    heatmapLayer,
  ],
  view: new ol.View({
    center: [0, 0],
    zoom: 2,
  }),
});

const blurSizeElement = document.getElementById('blurSize');
const radiusSizeElement = document.getElementById('radiusSize');

const blurTagValue = document.getElementById('blurTag');
const radiusTagValue = document.getElementById('radiusTag');

blurSizeElement.addEventListener('input', function (evt) {
  // get input value
  const blurValue = evt.target.value;
  blurTagValue.innerHTML = blurValue;

  heatmapLayer.setBlur(parseInt(blurValue));
});
radiusSizeElement.addEventListener('input', function (evt) {
  // get input value
  const radiusValue = evt.target.value;
  radiusTagValue.innerHTML = radiusValue;
  heatmapLayer.setRadius(parseInt(radiusValue));
});

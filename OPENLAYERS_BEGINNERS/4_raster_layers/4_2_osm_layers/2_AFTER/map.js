const defaultOSM = 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const humanitarianOSM = 'http://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png';

const osmLayer = new ol.layer.Tile({
  source: new ol.source.OSM({
    url: defaultOSM,
  }),
});
// http://tile2.opencyclemap.org/transport/{z}/{x}/{y}.png --openclycle
// https://www.thunderforest.com/maps/
// http://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png -- humanitarian

// https://www.thunderforest.com/maps/
new ol.Map({
  target: 'map',
  layers: [osmLayer],
  view: new ol.View({
    center: [0, 0],
    zoom: 0,
  }),
});

const selectElement = document.getElementById('osmLayers');

selectElement.addEventListener('change', function (evt) {
  var selectedLayer = evt.target.value;
  if (selectedLayer === 'humanitarian') {
    osmLayer.getSource().setUrl(humanitarianOSM);
  } else {
    osmLayer.getSource().setUrl(defaultOSM);
  }
});

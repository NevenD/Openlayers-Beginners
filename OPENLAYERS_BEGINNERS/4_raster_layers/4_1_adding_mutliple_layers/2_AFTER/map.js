const stamenLayer = new ol.layer.Tile({
  visible: true,
  source: new ol.source.XYZ({
    url: 'http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg',
  }),
});
const osmLayer = new ol.layer.Tile({
  visible: false,
  source: new ol.source.OSM(),
});

const topoLayer = new ol.layer.Tile({
  visible: false,
  source: new ol.source.XYZ({
    url: 'https://{a-c}.tile.opentopomap.org/{z}/{x}/{y}.png',
  }),
});

new ol.Map({
  target: 'map',
  layers: [stamenLayer, osmLayer, topoLayer],
  view: new ol.View({
    center: [0, 0],
    zoom: 0,
  }),
});

const reliefLayerCheckbox = document.getElementById('reliefLayer');
const osmLayerCheckbox = document.getElementById('osmLayer');
const topoLayerCheckbox = document.getElementById('topoLayer');

reliefLayerCheckbox.addEventListener('click', function () {
  const tileLayerVisible = stamenLayer.getVisible();
  if (tileLayerVisible) {
    stamenLayer.setVisible(false);
  } else {
    stamenLayer.setVisible(true);
  }
});

osmLayerCheckbox.addEventListener('click', function () {
  const osmLayerVisible = osmLayer.getVisible();
  if (osmLayerVisible) {
    osmLayer.setVisible(false);
  } else {
    osmLayer.setVisible(true);
  }
});

topoLayerCheckbox.addEventListener('click', function () {
  const topoVisible = topoLayer.getVisible();
  if (topoVisible) {
    topoLayer.setVisible(false);
  } else {
    topoLayer.setVisible(true);
  }
});

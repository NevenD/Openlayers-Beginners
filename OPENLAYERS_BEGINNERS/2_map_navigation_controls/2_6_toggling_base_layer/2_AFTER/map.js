const tileStamen = new ol.layer.Tile({
  source: new ol.source.XYZ({
    url: 'http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg',
  }),
});

new ol.Map({
  target: 'map',
  layers: [tileStamen],
  view: new ol.View({
    center: [0, 0],
    zoom: 0,
  }),
});

const checkBox = document.getElementById('layerToggle');

checkBox.addEventListener('click', function () {
  const tileLayerVisible = tileStamen.getVisible();
  console.log(tileLayerVisible);
  if (tileLayerVisible) {
    tileStamen.setVisible(false);
  } else {
    tileStamen.setVisible(true);
  }
});

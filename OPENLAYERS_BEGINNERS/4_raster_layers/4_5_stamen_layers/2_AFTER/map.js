const toner = 'http://{a-c}.tile.stamen.com/toner/{z}/{x}/{y}.png';
const terrain = 'http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg';
const watercolor = 'http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg';
const stamen = new ol.layer.Tile({
  source: new ol.source.XYZ({
    url: watercolor,
  }),
});

new ol.Map({
  target: 'map',
  layers: [stamen],
  view: new ol.View({
    center: [0, 0],
    zoom: 0,
  }),
});

const selectElement = document.getElementById('stamenLayer');

selectElement.addEventListener('change', function (evt) {
  const selectedLayer = evt.target.value;

  switch (selectedLayer) {
    case 'watercolor':
      stamen.getSource().setUrl(watercolor);
      break;
    case 'terrain':
      stamen.getSource().setUrl(terrain);
      break;
    default:
      stamen.getSource().setUrl(toner);
      break;
  }
});

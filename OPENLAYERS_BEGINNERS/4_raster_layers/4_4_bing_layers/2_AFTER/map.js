const bingKey = 'AnISFbsMaV6_D662NLFGGe4OJXoRrQ0FrDy-c5dcNQKWh6ijCd1-K2DDh_zikU_b';

const aerial = new ol.layer.Tile({
  source: new ol.source.BingMaps({
    key: bingKey,
    imagerySet: 'Aerial',
  }),
});

const road = new ol.layer.Tile({
  visible: false,
  source: new ol.source.BingMaps({
    key: bingKey,
    imagerySet: 'RoadOnDemand',
  }),
});

const canvasDark = new ol.layer.Tile({
  visible: false,
  source: new ol.source.BingMaps({
    key: bingKey,
    imagerySet: 'CanvasDark',
  }),
});

new ol.Map({
  target: 'map',
  layers: [aerial, road, canvasDark],
  view: new ol.View({
    center: [0, 0],
    zoom: 0,
  }),
});

const aerialLayerCheckbox = document.getElementById('aerial');
const roadLayerCheckbox = document.getElementById('road');
const canvasLayerCheckbox = document.getElementById('canvasDark');

aerialLayerCheckbox.addEventListener('click', function () {
  const aerialVisible = aerial.getVisible();
  if (aerialVisible) {
    aerial.setVisible(false);
  } else {
    aerial.setVisible(true);
  }
});

roadLayerCheckbox.addEventListener('click', function () {
  const roadOnDemandLayerVisible = road.getVisible();
  if (roadOnDemandLayerVisible) {
    road.setVisible(false);
  } else {
    road.setVisible(true);
  }
});

canvasLayerCheckbox.addEventListener('click', function () {
  const canvasDarkLayerVisible = canvasDark.getVisible();
  if (canvasDarkLayerVisible) {
    canvasDark.setVisible(false);
  } else {
    canvasDark.setVisible(true);
  }
});

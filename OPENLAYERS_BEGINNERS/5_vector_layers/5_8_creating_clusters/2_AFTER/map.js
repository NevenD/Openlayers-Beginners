const pathToFile = '../../data/poi.json';

const geojsonData = new ol.source.Vector({
  url: pathToFile,
  format: new ol.format.GeoJSON(),
});

const clusterSource = new ol.source.Cluster({
  source: geojsonData,
});

const getStyle = function (feature) {
  // features inside cluster property
  const length = feature.get('features').length;
  return [
    new ol.style.Style({
      image: new ol.style.Circle({
        radius: Math.min(Math.max(length * 1.2, 15), 20),
        fill: new ol.style.Fill({
          color: [0, 204, 0, 0.6],
        }),
      }),
      text: new ol.style.Text({
        text: length.toString(),
        fill: new ol.style.Fill({
          color: 'white',
        }),
        stroke: new ol.style.Stroke({
          color: [0, 51, 0, 1],
          width: 1,
        }),
      }),
    }),
  ];
};

const clusterLayer = new ol.layer.Vector({
  source: clusterSource,
  style: getStyle,
});

new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.XYZ({
        url: 'http://{a-c}.tile.stamen.com/toner/{z}/{x}/{y}.png',
      }),
    }),
    clusterLayer,
  ],
  view: new ol.View({
    center: [-11608956.681, 5033316.195],
    zoom: 4,
  }),
});

const distanceElement = document.getElementById('distanceSize');
const distanceTagValue = document.getElementById('distanceTag');

distanceElement.addEventListener('input', function () {
  distanceTagValue.innerHTML = distanceElement.value;
  clusterSource.setDistance(parseInt(distanceElement.value, 10));
});

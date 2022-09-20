const pathToFile = '../../data/poi.json';

const geojsonData = new ol.source.Vector({
  url: pathToFile,
  format: new ol.format.GeoJSON(),
});

const afGuard = new ol.style.Style({
  image: new ol.style.Icon({
    crossOrigin: 'anonymous',
    src: '../../icons/bunker.png',
  }),
});

const army = new ol.style.Style({
  image: new ol.style.Icon({
    src: '../../icons/army.png',
  }),
});

const waco = new ol.style.Style({
  image: new ol.style.Icon({
    src: '../../icons/waco.png',
  }),
});

const defaultIcon = new ol.style.Style({
  image: new ol.style.Icon({
    src: '../../icons/radar.png',
  }),
});

function styleFunction(feature) {
  if (feature.get('COMPONENT') == 'AF Guard') {
    return [afGuard];
  } else if (feature.get('COMPONENT') == 'Army Guard') {
    return [army];
  } else if (feature.get('COMPONENT') == 'Navy Active') {
    return [waco];
  } else {
    return [defaultIcon];
  }
}
const geojsonLayer = new ol.layer.Vector({
  source: geojsonData,
  style: styleFunction,
});

const map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(),
    }),
    geojsonLayer,
  ],
  view: new ol.View({
    center: [0, 0],
    zoom: 3,
  }),
});

// zooming to feature extent
setTimeout(() => {
  const extentOfPolygon = geojsonLayer.getSource().getExtent();

  if (extentOfPolygon) {
    map.getView().fit(extentOfPolygon);
  }
}, 100);

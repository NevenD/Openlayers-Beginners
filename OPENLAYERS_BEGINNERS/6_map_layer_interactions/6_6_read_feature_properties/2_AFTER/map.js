const geojsonLayer = new ol.layer.Vector({
  source: new ol.source.Vector({
    format: new ol.format.GeoJSON(),
    url: '../../data/testData.json',
  }),
});

const wmsLayer = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    url: 'http://geoportal.dgu.hr/wms?',
    params: {
      LAYERS: 'DOF5_2011',
      FORMAT: 'image/png',
      TRANSPARENT: true,
    },
    attributions: 'State Geodetic Administration (2011)',
  }),
});

const map = new ol.Map({
  target: 'map',
  layers: [wmsLayer, geojsonLayer],
  view: new ol.View({
    center: ol.proj.fromLonLat([16.413374, 44.698299]),
    zoom: 8,
  }),
});

const featureListElement = document.getElementById('featureList');

setTimeout(() => {
  const features = geojsonLayer.getSource().getFeatures();
  for (let feature of features) {
    const aElement = document.createElement('a');
    aElement.classList.add('list-item');
    featureListElement.appendChild(aElement);
    aElement.innerHTML = feature.get('Name');
    aElement.onclick = function () {
      const extentOfPolygon = feature.getGeometry().getExtent();
      map.getView().fit(extentOfPolygon);
    };
  }
}, 500);

const fieldNameElement = document.getElementById('fieldName');
const fieldCultureElement = document.getElementById('fieldCulture');
const fieldDescElement = document.getElementById('fieldDesc');
const fieldAreaElement = document.getElementById('fieldArea');

map.on('click', function (evt) {
  let features = geojsonLayer.getSource().getFeaturesAtCoordinate(evt.coordinate);
  if (features.length > 0) {
    let feature = features[0];
    fieldNameElement.innerHTML = `Field name: ${feature.get('Name')}`;
    fieldCultureElement.innerHTML = `Culture: ${feature.get('Culture')}`;
    fieldDescElement.innerHTML = `Description: ${feature.get('Desc')}`;
    fieldAreaElement.innerHTML = `Area: ${feature.get('Area')} m2`;
  }
});

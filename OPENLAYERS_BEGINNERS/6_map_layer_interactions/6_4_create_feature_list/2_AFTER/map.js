const geojsonLayer = new ol.layer.Vector({
  source: new ol.source.Vector({
    format: new ol.format.GeoJSON(),
    url: '../../data/testData.json',
  }),
});

new ol.Map({
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

let featureListElement = document.getElementById('featureList');

setTimeout(() => {
  const features = geojsonLayer.getSource().getFeatures();

  for (let feature of features) {
    const aElement = document.createElement('a');
    aElement.classList.add('list-item');
    featureListElement.appendChild(aElement);
    aElement.innerHTML = feature.get('Name');
  }
}, 100);

const watercolor = 'http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg';
const stamen = new ol.layer.Tile({
  source: new ol.source.XYZ({
    url: watercolor,
  }),
});

const dragAndDropSource = new ol.source.Vector();
const dragAndDropLayer = new ol.layer.Vector({
  source: dragAndDropSource,
});

const dragAndDrop = new ol.interaction.DragAndDrop({
  formatConstructors: [ol.format.GeoJSON],
});

// there are several vector formats besides GeoJSON
// GPX, IGC, KML, TopoJSON

const map = new ol.Map({
  target: 'map',
  layers: [stamen, dragAndDropLayer],
  view: new ol.View({
    center: [0, 0],
    zoom: 2,
  }),
});

map.addInteraction(dragAndDrop);

const featureListElement = document.getElementById('featureProperties');

dragAndDrop.on('addfeatures', function (evt) {
  // console.log(evt);

  let features = evt.features;
  dragAndDropSource.addFeatures(features);

  for (let feature of features) {
    const liElement = document.createElement('li');
    featureListElement.appendChild(liElement);
    liElement.innerHTML = feature.get('name');
  }

  map.getView().fit(dragAndDropSource.getExtent(), { duration: 2000 });
});

const deleteButton = document.getElementById('buttonDelete');
deleteButton.addEventListener('click', function () {
  dragAndDropSource.clear();
});

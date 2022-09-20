const vectorForDrawing = new ol.layer.Vector({
  source: new ol.source.Vector(),
});

const map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(),
    }),
    vectorForDrawing,
  ],
  view: new ol.View({
    center: [0, 0],
    zoom: 3,
  }),
});

let drawInteraction;

const drawingType = document.getElementById('drawFeatures');
const selectedValue = drawingType.options[drawingType.selectedIndex].value;
drawingType.addEventListener('change', function (evt) {
  const selectedItem = evt.target.value;
  map.removeInteraction(drawInteraction);
  addDrawingInteraction(selectedItem);
});

function addDrawingInteraction(typeValue) {
  drawInteraction = new ol.interaction.Draw({
    source: vectorForDrawing.getSource(),
    type: typeValue,
  });
  map.addInteraction(drawInteraction);
}

addDrawingInteraction(selectedValue);

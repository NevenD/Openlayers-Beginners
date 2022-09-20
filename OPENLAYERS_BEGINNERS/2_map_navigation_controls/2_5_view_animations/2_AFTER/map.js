const mouseZoom = new ol.interaction.MouseWheelZoom({
  duration: 1050,
});

const view = new ol.View({
  center: [0, 0],
  zoom: 5,
});

const map = new ol.Map({
  target: 'map',
  controls: new ol.control.defaults({
    attributionOptions: { collapsible: true },
    zoomOptions: { duration: 1050 },
  }),
  interactions: ol.interaction.defaults({ mouseWheelZoom: false }).extend([
    new ol.interaction.MouseWheelZoom({
      duration: 1050,
    }),
  ]),
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(),
    }),
  ],
  view: view,
});

const elementSelect = document.getElementById('cityCoords');
elementSelect.addEventListener('change', function (event) {
  const selectedCentar = event.target.value;
  console.log(selectedCentar);
  const splitedValue = selectedCentar.split(',');
  view.animate({
    center: [parseFloat(splitedValue[0]), parseFloat(splitedValue[1])],
    duration: 1500,
  });
});

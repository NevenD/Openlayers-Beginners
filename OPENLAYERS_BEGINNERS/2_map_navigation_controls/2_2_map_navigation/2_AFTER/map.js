const homeView = ol.proj.fromLonLat([15.7, 45.9]);

const map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(),
    }),
  ],
  view: new ol.View({
    center: homeView,
    zoom: 0,
  }),
});

const lon = document.getElementById('long');
const lat = document.getElementById('lat');

const coords = ol.proj.toLonLat(map.getView().getCenter());

lon.value = coords[0].toFixed();
lat.value = coords[1].toFixed();

function onZoomInput() {
  const zoomElementValue = document.getElementById('zoom').value;
  const view = map.getView();
  view.animate({
    zoom: zoomElementValue,
    duration: 750,
  });
}

function onRotationInput() {
  const rotationElementValue = document.getElementById('rot').value;
  const view = map.getView();
  view.animate({
    rotation: rotationElementValue,
    duration: 750,
  });
}

function onCoordsInput() {
  const long = document.getElementById('long').value;
  const lat = document.getElementById('lat').value;
  const view = map.getView();
  view.animate({
    center: ol.proj.fromLonLat([parseFloat(lat), parseFloat(long)]),
    duration: 750,
  });
}

function goHome() {
  const view = map.getView();
  view.animate({
    zoom: 0,
    center: homeView,
    duration: 2000,
  });
}

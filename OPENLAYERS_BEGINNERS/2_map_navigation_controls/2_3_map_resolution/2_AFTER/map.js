const map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(),
    }),
  ],
  view: new ol.View({
    center: [0, 0],
    zoom: 0,
  }),
});

function getExtentResolution() {
  const view = map.getView();
  const extent = view.calculateExtent();
  const elementResolution = document.getElementById('extentReso');
  elementResolution.innerHTML = view.getResolutionForExtent(extent);
}

function getZoomResolution() {
  const view = map.getView();
  const zoom = view.getZoom();
  const elementResolution = document.getElementById('zoomReso');
  elementResolution.innerHTML = view.getResolutionForZoom(zoom);
}

function getMaxResolution() {
  const view = map.getView();
  const elementResolution = document.getElementById('maxReso');
  elementResolution.innerHTML = view.getMaxResolution();
}

function getMinResolution() {
  const view = map.getView();
  const elementResolution = document.getElementById('minReso');
  elementResolution.innerHTML = view.getMinResolution();
}

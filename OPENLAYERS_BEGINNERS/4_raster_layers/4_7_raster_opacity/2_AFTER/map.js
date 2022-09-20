const wmsLayer = new ol.layer.Tile({
  visible: false,
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

new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.XYZ({
        url: 'http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg',
      }),
    }),
    wmsLayer,
  ],
  view: new ol.View({
    center: [0, 0],
    zoom: 0,
  }),
});

const DEFAULT_OPACITY_VALUE = 100;

const wmsLayerCheckbox = document.getElementById('wmsLayer');
const opacitySlider = document.getElementById('opacitySlider');

wmsLayerCheckbox.addEventListener('click', function () {
  const wmsLayerVisibility = wmsLayer.getVisible();
  if (wmsLayerVisibility) {
    opacitySlider.disabled = true;
    opacitySlider.value = DEFAULT_OPACITY_VALUE;
    wmsLayer.setOpacity(DEFAULT_OPACITY_VALUE);
    wmsLayer.setVisible(false);
  } else {
    opacitySlider.disabled = false;

    wmsLayer.setVisible(true);
  }
});

opacitySlider.addEventListener('input', function (evt) {
  var opacity = parseInt(evt.target.value);
  wmsLayer.setOpacity(opacity / DEFAULT_OPACITY_VALUE);
});

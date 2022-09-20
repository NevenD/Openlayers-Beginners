const extent = [1753362.7533378314692527, 5806208.4788289712741971, 1753575.8854801233392209, 5806362.8498225072398782];
var DEFAULT_OPACITY_VALUE = 100;

const imageLayer = new ol.layer.Image({
  visible: false,
  source: new ol.source.ImageStatic({
    url: '../img/dof.png',
    imageExtent: extent,
  }),
});

const wmsLayer = new ol.layer.Tile({
  visible: true,
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
  layers: [wmsLayer, imageLayer],
  view: new ol.View({
    center: ol.proj.fromLonLat([15.751836, 46.161757]),
    zoom: 19,
  }),
});

const imageLayerCheckbox = document.getElementById('imageLayer');
const opacitySlider = document.getElementById('opacitySlider');

imageLayerCheckbox.addEventListener('click', function () {
  const imageLayerVisible = imageLayer.getVisible();
  if (imageLayerVisible) {
    opacitySlider.disabled = true;
    opacitySlider.value = DEFAULT_OPACITY_VALUE;
    imageLayer.setOpacity(DEFAULT_OPACITY_VALUE);
    imageLayer.setVisible(false);
  } else {
    opacitySlider.disabled = false;

    imageLayer.setVisible(true);
  }
});

opacitySlider.addEventListener('input', function (evt) {
  var opacity = parseInt(evt.target.value);
  imageLayer.setOpacity(opacity / DEFAULT_OPACITY_VALUE);
});

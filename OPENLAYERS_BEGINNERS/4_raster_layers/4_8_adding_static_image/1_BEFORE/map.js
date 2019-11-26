
var extent = [1753362.7533378314692527, 5806208.4788289712741971, 1753575.8854801233392209, 5806362.8498225072398782];


var wmsLayer = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: "http://geoportal.dgu.hr/wms?",
        params: {
            LAYERS: "DOF5_2011",
            FORMAT: "image/png",
            TRANSPARENT: true
        },
        attributions: "State Geodetic Administration (2011)",
    })
})

var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.XYZ({
                url: "http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg",
            })
        }),
        wmsLayer
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([15.751836, 46.161757]),
        zoom: 19,
    }),
});

var DEFAULT_OPACITY_VALUE = 100;

var wmsLayerCheckbox = document.getElementById("wmsLayer");
var opacitySlider = document.getElementById("opacitySlider");

wmsLayerCheckbox.addEventListener('click', function () {

    var wmsLayerVisibility = wmsLayer.getVisible();
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


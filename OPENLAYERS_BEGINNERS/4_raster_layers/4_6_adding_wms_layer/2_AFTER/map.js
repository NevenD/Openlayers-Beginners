
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
        center: [0, 0],
        zoom: 0,
    }),
});


var wmsLayerCheckbox = document.getElementById("wmsLayer");
wmsLayerCheckbox.addEventListener('click', function () {

    var wmsLayerVisibility = wmsLayer.getVisible();
    if (wmsLayerVisibility) {
        wmsLayer.setVisible(false);
    } else {
        wmsLayer.setVisible(true);
    }

});



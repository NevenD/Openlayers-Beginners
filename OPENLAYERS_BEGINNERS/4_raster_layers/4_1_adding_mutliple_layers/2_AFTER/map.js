
var stamenLayer = new ol.layer.Tile({
    visible: true,
    source: new ol.source.XYZ({
        url: 'http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg'
    })
});
var osmLayer = new ol.layer.Tile({
    visible: false,
    source: new ol.source.OSM()
});

var topoLayer = new ol.layer.Tile({
    visible: false,
    source: new ol.source.XYZ({
        url: "https://{a-c}.tile.opentopomap.org/{z}/{x}/{y}.png",
    })
});

var map = new ol.Map({
    target: 'map',
    layers: [
        stamenLayer,
        osmLayer,
        topoLayer
    ],
    view: new ol.View({
        center: [0, 0],
        zoom: 0
    }),
});


var reliefLayerCheckbox = document.getElementById("reliefLayer");
var osmLayerCheckbox = document.getElementById("osmLayer");
var topoLayerCheckbox = document.getElementById("topoLayer");

reliefLayerCheckbox.addEventListener('click', function () {
    var tileLayerVisible = stamenLayer.getVisible();
    if (tileLayerVisible) {
        stamenLayer.setVisible(false);
    } else {
        stamenLayer.setVisible(true);
    }
});

osmLayerCheckbox.addEventListener('click', function () {
    var osmLayerVisible = osmLayer.getVisible();
    if (osmLayerVisible) {
        osmLayer.setVisible(false);
    } else {
        osmLayer.setVisible(true);
    }
});

topoLayerCheckbox.addEventListener('click', function () {
    var topoVisible = topoLayer.getVisible();
    if (topoVisible) {
        topoLayer.setVisible(false);
    } else {
        topoLayer.setVisible(true);
    }
}); 
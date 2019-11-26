
var bingKey = "AnISFbsMaV6_D662NLFGGe4OJXoRrQ0FrDy-c5dcNQKWh6ijCd1-K2DDh_zikU_b";

var aerial = new ol.layer.Tile({
    source: new ol.source.BingMaps({
        key: bingKey,
        imagerySet: 'Aerial'
    })
});

var road = new ol.layer.Tile({
    visible: false,
    source: new ol.source.BingMaps({
        key: bingKey,
        imagerySet: 'RoadOnDemand'
    })
});

var canvasDark = new ol.layer.Tile({
    visible: false,
    source: new ol.source.BingMaps({
        key: bingKey,
        imagerySet: 'CanvasDark'
    })
});

var map = new ol.Map({
    target: 'map',
    layers: [
        aerial,
        road,
        canvasDark
    ],
    view: new ol.View({
        center: [0, 0],
        zoom: 0
    }),
});


var aerialLayerCheckbox = document.getElementById("aerial");
var roadLayerCheckbox = document.getElementById("road");
var canvasLayerCheckbox = document.getElementById("canvasDark");



aerialLayerCheckbox.addEventListener('click', function () {
    var aerialVisible = aerial.getVisible();
    if (aerialVisible) {
        aerial.setVisible(false);
    } else {
        aerial.setVisible(true);
    }
});

roadLayerCheckbox.addEventListener('click', function () {
    var roadOnDemandLayerVisible = road.getVisible();
    if (roadOnDemandLayerVisible) {
        road.setVisible(false);
    } else {
        road.setVisible(true);
    }
});


canvasLayerCheckbox.addEventListener('click', function () {
    var canvasDarkLayerVisible = canvasDark.getVisible();
    if (canvasDarkLayerVisible) {
        canvasDark.setVisible(false);
    } else {
        canvasDark.setVisible(true);
    }
});



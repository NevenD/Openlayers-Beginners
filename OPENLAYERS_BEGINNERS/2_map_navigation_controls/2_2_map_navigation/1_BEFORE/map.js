
var homeView = ol.proj.fromLonLat([15.7, 45.9]);
var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: homeView,
        zoom: 0
    }),
});



function onZoomInput() {

}

function onRotationInput() {

}

function onCoordsInput() {

}

function goHome() {

}
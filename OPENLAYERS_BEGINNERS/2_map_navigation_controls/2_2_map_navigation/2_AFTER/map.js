

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


var lon = document.getElementById("long");
var lat = document.getElementById("lat");

var coords = ol.proj.toLonLat(map.getView().getCenter());

lon.value = coords[0].toFixed();
lat.value = coords[1].toFixed();


function onZoomInput() {
    var zoomElementValue = document.getElementById("zoom").value;
    var view = map.getView();
    view.animate({
        zoom: zoomElementValue,
        duration: 750
    });
}

function onRotationInput() {
    var rotationElementValue = document.getElementById("rot").value;
    var view = map.getView();
    view.animate({
        rotation: rotationElementValue,
        duration: 750
    });
}

function onCoordsInput() {
    var long = document.getElementById("long").value;
    var lat = document.getElementById("lat").value;
    var view = map.getView();
    view.animate({
        center: ol.proj.fromLonLat([
            parseFloat(lat), parseFloat(long)
        ]),
        duration: 750
    });
}

function goHome() {
    var view = map.getView();
    view.animate({
        zoom: 0,
        center: homeView,
        duration: 2000
    })
}
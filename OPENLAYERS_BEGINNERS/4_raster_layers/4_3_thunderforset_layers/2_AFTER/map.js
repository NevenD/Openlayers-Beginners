
var openCycle = "https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png";
var transport = "http://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png";
var landscape = "https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png";
var spinalMap = "https://tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png";
var pioneer = "https://tile.thunderforest.com/pioneer/{z}/{x}/{y}.png";

var thunderLayer = new ol.layer.Tile({
    source: new ol.source.OSM({
        url: openCycle
    })
});

var map = new ol.Map({
    target: 'map',
    layers: [
        thunderLayer,
    ],
    view: new ol.View({
        center: [0, 0],
        zoom: 0
    }),
});


var selectElement = document.getElementById("thunderForest");

selectElement.addEventListener("change", function (evt) {
    var selectedLayer = evt.target.value;

    switch (selectedLayer) {
        case "transport":
            thunderLayer.getSource().setUrl(transport);
            break;
        case "landscape":
            thunderLayer.getSource().setUrl(landscape);
            break;
        case "spinal-map":
            thunderLayer.getSource().setUrl(spinalMap);
            break;
        case "pioneer":
            thunderLayer.getSource().setUrl(pioneer);
            break;
        default:
            thunderLayer.getSource().setUrl(openCycle);
            break;
    }
});



var defaultOSM = "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";
var humanitarianOSM = "http://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png";



var osmLayer = new ol.layer.Tile({
    source: new ol.source.OSM({
        url: defaultOSM
    })
});

var map = new ol.Map({
    target: 'map',
    layers: [
        osmLayer,
    ],
    view: new ol.View({
        center: [0, 0],
        zoom: 0
    }),
});




var pathToFile = '../../data/poi.json';


var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        }),

    ],
    view: new ol.View({
        center: [0, 0],
        zoom: 2
    })
});





var blurSizeElement = document.getElementById("blurSize");
var radiusSizeElement = document.getElementById("radiusSize");


var blurTagValue = document.getElementById("blurTag");
var radiusTagValue = document.getElementById("radiusTag");



var pathToFile = '../../data/poi.json';

var geojsonData = new ol.source.Vector({
    url: pathToFile,
    format: new ol.format.GeoJSON()
});

var heatmapLayer = new ol.layer.Heatmap({
    source: geojsonData,
    blur: 5,
    radius: 5
});

var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        }),
        heatmapLayer
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

blurSizeElement.addEventListener("input", function (evt) {
    // get input value
    var blurValue = evt.target.value;
    blurTagValue.innerHTML = blurValue;

    heatmapLayer.setBlur(parseInt(blurValue));
});
radiusSizeElement.addEventListener("input", function (evt) {
    // get input value
    var radiusValue = evt.target.value;
    radiusTagValue.innerHTML = radiusValue;
    heatmapLayer.setRadius(parseInt(radiusValue));
});
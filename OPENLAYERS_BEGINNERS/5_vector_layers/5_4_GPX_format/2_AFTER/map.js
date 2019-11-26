
var pathToFile = '../../data/sample_data.gpx';

var kmlLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
        format: new ol.format.GPX(),
        url: pathToFile
    })
});

var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM(),
            opacity: 0.5
        }),
        kmlLayer
    ],
    view: new ol.View({
        center: [1771934, 5745515],
        zoom: 14
    })
});




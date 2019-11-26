var pathToFile = '../../data/sample_data.gpx';


var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM(),
        }),

    ],
    view: new ol.View({
        center: [1771934, 5745515],
        zoom: 14
    })
});

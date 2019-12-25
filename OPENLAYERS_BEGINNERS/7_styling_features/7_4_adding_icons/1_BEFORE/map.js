var pathToFile = '../../data/poi.json';

var geojsonData = new ol.source.Vector({
    url: pathToFile,
    format: new ol.format.GeoJSON()
});

var geojsonLayer = new ol.layer.Vector({
    source: geojsonData,

});


var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        }),
        geojsonLayer
    ],
    view: new ol.View({
        center: [0, 0],
        zoom: 3
    })
});

// zooming to feature extent
setTimeout(() => {
    var extentOfPolygon = geojsonLayer.getSource().getExtent();
    map.getView().fit(extentOfPolygon);
}, 100);

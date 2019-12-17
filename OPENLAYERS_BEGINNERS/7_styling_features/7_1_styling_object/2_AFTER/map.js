
var customStyle = new ol.style.Style({
    fill: new ol.style.Fill({
        color: 'red'
    }),
    stroke: new ol.style.Stroke({
        color: 'white',
        lineCap: 'square',
        lineJoin: 'round',
        lineDash: [5, 10],
        lineDashOffset: 0.94,
        width: 10
    })
});

var pathToFile = '../../data/country.json';

var geojsonLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: pathToFile
    }),
    style: customStyle
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

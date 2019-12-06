var vectorForDrawing = new ol.layer.Vector({
    source: new ol.source.Vector()
});


var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        }),
        vectorForDrawing
    ],
    view: new ol.View({
        center: [0, 0],
        zoom: 3
    })
});

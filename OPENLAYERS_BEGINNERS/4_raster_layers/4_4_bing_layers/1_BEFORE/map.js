
var bingKey = "";

var aerial = new ol.layer.Tile({
    source: new ol.source.BingMaps({
        key: bingKey,
        imagerySet: 'Aerial'
    })
});

var road = new ol.layer.Tile({
    visible: false,
    source: new ol.source.BingMaps({
        key: bingKey,
        imagerySet: 'RoadOnDemand'
    })
});

var canvasDark = new ol.layer.Tile({
    visible: false,
    source: new ol.source.BingMaps({
        key: bingKey,
        imagerySet: 'CanvasDark'
    })
});

var map = new ol.Map({
    target: 'map',
    layers: [
        aerial,
        road,
        canvasDark
    ],
    view: new ol.View({
        center: [0, 0],
        zoom: 0
    }),
});






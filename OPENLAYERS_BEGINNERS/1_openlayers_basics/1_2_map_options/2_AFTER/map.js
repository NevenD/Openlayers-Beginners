



var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    // if this is
    keyboardEventTarget: document,
    moveTolerance: 50,
    view: new ol.View({
        center: [0, 0],
        zoom: 3,
        enableRotation: true,
        projection: 'EPSG:3857',
        rotation: -2
    })
});
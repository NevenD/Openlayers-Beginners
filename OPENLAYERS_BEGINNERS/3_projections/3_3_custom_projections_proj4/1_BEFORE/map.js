var tileStamen = new ol.layer.Tile({
    source: new ol.source.Stamen({
        layer: 'watercolor'
    })
});

var map = new ol.Map({
    target: 'map',
    layers: [
        tileStamen
    ],
    view: new ol.View({
        center: [0, 0],
        zoom: 0
    }),
});





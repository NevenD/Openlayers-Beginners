var stamenLayer = new ol.layer.Tile({
    visible: true,
    source: new ol.source.XYZ({
        url: 'http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg'
    })
});
var map = new ol.Map({
    target: 'map',
    layers: [
        stamenLayer
    ],
    view: new ol.View({
        center: [0, 0],
        zoom: 0
    }),
});



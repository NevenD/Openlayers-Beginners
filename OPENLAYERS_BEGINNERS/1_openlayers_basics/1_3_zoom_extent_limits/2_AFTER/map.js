
var extentView = [1235376.552,
    5298991.550,
    2629587.948,
    5996097.248];

var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.XYZ({
                url: 'http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg'
            })
        })
    ],
    view: new ol.View({
        center: [0, 0],
        zoom: 3,
        maxZoom: 10,
        extent: extentView
    })
});
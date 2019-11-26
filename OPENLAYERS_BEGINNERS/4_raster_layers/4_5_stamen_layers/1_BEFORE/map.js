
var watercolor = "http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg";

var stamen = new ol.layer.Tile({
    source: new ol.source.XYZ({
        url: watercolor
    })
})

var map = new ol.Map({
    target: 'map',
    layers: [
        stamen
    ],
    view: new ol.View({
        center: [0, 0],
        zoom: 0
    }),
});







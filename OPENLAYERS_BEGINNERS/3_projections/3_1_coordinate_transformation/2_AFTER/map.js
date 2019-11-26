
var tileStamen = new ol.layer.Tile({
    source: new ol.source.XYZ({
        url: 'http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg'
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

var code3857 = document.getElementById("code3857");
var code4326 = document.getElementById("code4326");

map.on('click', function (evt) {


    var coordinates = evt.coordinate;
    var transformedCoordinates = ol.proj.transform(coordinates, 'EPSG:3857', 'EPSG:4326');

    code3857.innerHTML = [coordinates[0].toFixed(3), coordinates[1].toFixed(3),
    ].join('<br>');

    code4326.innerHTML = [transformedCoordinates[0].toFixed(3), transformedCoordinates[1].toFixed(3),
    ].join('<br>');

});
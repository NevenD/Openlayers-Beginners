

proj4.defs(
    'EPSG:3765',
    '+proj=tmerc +lat_0=0 +lon_0=16.5 +k=0.9999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs'
);


ol.proj.proj4.register(proj4);

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

var code3857 = document.getElementById("code3857");
var code4326 = document.getElementById("code4326");
var code3765 = document.getElementById("code3765");

map.on('pointermove', function (evt) {

    var coordinates = evt.coordinate;
    var transformedEpsg4326 = ol.proj.transform(coordinates, 'EPSG:3857', 'EPSG:4326');
    var transformedEpsg3765 = ol.proj.transform(coordinates, 'EPSG:3857', 'EPSG:3765');

    code3857.innerHTML = [
        coordinates[0].toFixed(3),
        coordinates[1].toFixed(3),
    ].join('<br>');

    code4326.innerHTML = [
        transformedEpsg4326[0].toFixed(3),
        transformedEpsg4326[1].toFixed(3),
    ].join('<br>');

    code3765.innerHTML = [
        transformedEpsg3765[0].toFixed(3),
        transformedEpsg3765[1].toFixed(3),
    ].join('<br>');

});


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

var extentCode3857 = document.getElementById("extentCode3857");
var extentCode4326 = document.getElementById("extentCode4326");

map.on('click', function (evt) {

    var extent = map.getView().calculateExtent();
    console.log(extent);

    // EPSG:3857 is source
    // EPSG:4326 is destination projection of extent
    var transformedExtent = ol.proj.transformExtent(extent, 'EPSG:3857', 'EPSG:4326');

    extentCode3857.innerHTML = [
        extent[0].toFixed(3),
        extent[1].toFixed(3),
        extent[2].toFixed(3),
        extent[3].toFixed(3),
    ].join('<br>');

    extentCode4326.innerHTML = [
        transformedExtent[0].toFixed(3),
        transformedExtent[1].toFixed(3),
        transformedExtent[2].toFixed(3),
        transformedExtent[3].toFixed(3),
    ].join('<br>');
    // extentCode4326.innerHTML = [coordinates[0].toFixed(3), coordinates[1].toFixed(3),
    // ].join('<br>');

});

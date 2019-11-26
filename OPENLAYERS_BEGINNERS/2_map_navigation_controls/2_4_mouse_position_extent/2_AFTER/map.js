var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: [0, 0],
        zoom: 0
    }),
});

var mousePositionControl = new ol.control.MousePosition({
    coordinateFormat: ol.coordinate.createStringXY(2),
    projection: 'EPSG:3857',
    undefinedHTML: '..OUTSIDE..' // if we want empty value then we pass &nbsp; 
});
map.addControl(mousePositionControl);

map.on('click', function (evt) {

    var coordsElement = document.getElementById('mouseClickCoords');
    var extentElement = document.getElementById('mouseClickExtent');

    var coordinates = evt.coordinate;
    var extent = evt.map.getView().calculateExtent();

    console.log(coordinates);
    console.log(extent);

    coordsElement.innerHTML = [
        coordinates[0].toFixed(),
        coordinates[1].toFixed(),
    ];

    extentElement.innerHTML = [
        extent[0].toFixed(),
        extent[1].toFixed(),
        extent[2].toFixed(),
        extent[3].toFixed()
    ].join('<br>');

});

map.on('pointermove', function (evt) {
    var extentElement = document.getElementById('mouseMoveExtent');
    var extent = evt.map.getView().calculateExtent();
    console.log(extent);
    extentElement.innerHTML = [
        extent[0].toFixed(),
        extent[1].toFixed(),
        extent[2].toFixed(),
        extent[3].toFixed()
    ].join('<br>');

});
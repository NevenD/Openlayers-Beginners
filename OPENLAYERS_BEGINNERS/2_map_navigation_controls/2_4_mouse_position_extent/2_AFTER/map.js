var wmsLayer = new ol.layer.Tile({
    visible: true,
    source: new ol.source.TileWMS({
        url: "https://geoportal.dgu.hr/wms",
        params: {
            LAYERS: "DOF",
            FORMAT: "image/png",
        },
        attributions: "State Geodetic Administration (2011)",
    })
})

var map = new ol.Map({
    target: 'map',
    layers: [
        // new ol.layer.Tile({
        //     source: new ol.source.OSM()
        // }),
        wmsLayer
    ],
    view: new ol.View({
        center: [16.025, 46.111],
        zoom: 11,
        projection: 'EPSG:4326'
    })
});

// var mousePositionControl = new ol.control.MousePosition({
//     coordinateFormat: ol.coordinate.createStringXY(2),
//     projection: 'EPSG:3857',
//     undefinedHTML: '..OUTSIDE..' // if we want empty value then we pass &nbsp; 
// });
// map.addControl(mousePositionControl);

map.on('click', function (evt) {

    var coordsElement = document.getElementById('mouseClickCoords');
    var extentElement = document.getElementById('mouseClickExtent');

    var coordinates = evt.coordinate;
    var extent = evt.map.getView().calculateExtent();

    console.log(coordinates);
    console.log(extent);

    coordsElement.innerHTML = [
        coordinates[0].toFixed(2),
        coordinates[1].toFixed(2),
    ];

    extentElement.innerHTML = [
        extent[0].toFixed(2),
        extent[1].toFixed(2),
        extent[2].toFixed(2),
        extent[3].toFixed(2)
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

//#region "Custom controls"

// define minimap object
var source = new ol.source.OSM();
var minimap = new ol.control.OverviewMap({
    layers: [
        new ol.layer.Tile({
            source: source
        })
    ]
});

// define scale line
var scaleLine = new ol.control.ScaleLine({
    className: 'ol-scale-line',
    minWidth: 100,
    units: 'metric',
});

// define zoom slider
var zoomSlider = new ol.control.ZoomSlider({
    duration: 750
});

//define fullscreen
var fullscreen = new ol.control.FullScreen({
    className: 'ol-full-screen'
});

// define mouse position
var mousePosition = new ol.control.MousePosition({
    coordinateFormat: ol.coordinate.createStringXY(4),
    projection: 'EPSG:4326'
});


// define ZoomToExtent
var zoomToExtent = new ol.control.ZoomToExtent({
    // extent: [
    //     813079.7791264898, 5929220.284081122,
    //     848966.9639063801, 5936863.986909639
    // ]
});
//#endregion

var map = new ol.Map({
    controls: new ol.control.defaults({
        attributionOptions: { collapsible: true },
        zoomOptions: { duration: 750 },
    }).extend([
        minimap,
        scaleLine,
        zoomSlider,
        fullscreen,
        mousePosition,
        zoomToExtent
    ]),
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: [0, 0],
        zoom: 3,
        rotation: 45
    })
});
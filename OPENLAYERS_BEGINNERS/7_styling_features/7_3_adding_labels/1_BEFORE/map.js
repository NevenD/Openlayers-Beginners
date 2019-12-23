var pathToFile = '../../data/europe.json';


let highValue = new ol.style.Style({
    fill: new ol.style.Fill({
        color: "rgba(21,84,45,0.56)"
    }),
    stroke: new ol.style.Stroke({
        color: "rgba(21,84,45,0.56)",
        width: 2
    })
});
let midValue = new ol.style.Style({
    fill: new ol.style.Fill({
        color: "rgba(253,254,3,0.58)"
    }),
    stroke: new ol.style.Stroke({
        color: "rgba(253,254,3,0.58)",
        width: 2
    })
});
let lowValue = new ol.style.Style({
    fill: new ol.style.Fill({
        color: "rgba(131,236,87,0.71)"
    }),
    stroke: new ol.style.Stroke({
        color: "rgba(131,236,87,0.71)",
        width: 2
    })
});


var geojsonLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: pathToFile
    }),

});


var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        }),
        geojsonLayer
    ],
    view: new ol.View({
        center: [0, 0],
        zoom: 3
    })
});

// zooming to feature extent
setTimeout(() => {
    var extentOfPolygon = geojsonLayer.getSource().getExtent();
    map.getView().fit(extentOfPolygon);
}, 100);

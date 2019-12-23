var pathToFile = '../../data/countries.json';

var styleWithText = new ol.style.Style({
    fill: new ol.style.Fill({
        color: "rgba(255, 255, 255, 0.6)"
    }),
    stroke: new ol.style.Stroke({
        color: "#319FD3",
        width: 1
    }),
    text: new ol.style.Text({
        font: '13px Calibri,',
        fill: new ol.style.Fill({
            color: '#000'
        }),
        stroke: new ol.style.Stroke({
            color: '#fff',
            width: 3
        }),
        overflow: true
    })
});

var geojsonLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: pathToFile
    }),
    style: function (feature) {
        styleWithText.getText().setText(feature.get('name'));
        return styleWithText;
    }
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

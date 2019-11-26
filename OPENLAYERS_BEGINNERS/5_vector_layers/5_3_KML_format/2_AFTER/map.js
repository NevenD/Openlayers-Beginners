
var pathToFile = '../../data/croatia.kml';


var kmlLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
        format: new ol.format.KML(),
        url: pathToFile
    })
});

var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.XYZ({
                url: "http://{a-c}.tile.stamen.com/watercolor/{z}/{x}/{y}.png"
            })
        }),
        kmlLayer
    ],
    view: new ol.View({
        center: [1839211, 5731198],
        zoom: 6
    })
});




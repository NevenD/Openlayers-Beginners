
var pathToFile = '../../data/croatia.gml';


var vectorSource = new ol.source.Vector({
    format: new ol.format.GML2(),
    loader: function () {
        var url = pathToFile;
        // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function () {
            if (xhr.status == 200) {
                vectorSource.addFeatures(
                    vectorSource.getFormat().readFeatures(xhr.responseText));
            }
        }
        xhr.send();
    },
});

var gmlLayer = new ol.layer.Vector({
    source: vectorSource
});

var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.XYZ({
                url: "http://{a-c}.tile.stamen.com/watercolor/{z}/{x}/{y}.png"
            })
        }),
        gmlLayer
    ],
    view: new ol.View({
        center: [1839211, 5731198],
        zoom: 6
    })
});




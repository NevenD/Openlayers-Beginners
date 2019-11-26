
var pathToFile = '../../data/croatia.kml';




var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.XYZ({
                url: "http://{a-c}.tile.stamen.com/watercolor/{z}/{x}/{y}.png"
            })
        }),

    ],
    view: new ol.View({
        center: [1839211, 5731198],
        zoom: 6
    })
});
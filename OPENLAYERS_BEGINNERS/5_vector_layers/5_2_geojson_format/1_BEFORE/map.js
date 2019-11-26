


var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.XYZ({
                url: "http://{a-c}.tile.stamen.com/toner/{z}/{x}/{y}.png"
            })
        })
    ],
    view: new ol.View({
        center: [0, 0],
        zoom: 3
    })
});
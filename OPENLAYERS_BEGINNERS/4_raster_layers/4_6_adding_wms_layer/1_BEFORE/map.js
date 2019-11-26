

var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.XYZ({
                url: "http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg";
            })
        })

    ],
    view: new ol.View({
        center: [0, 0],
        zoom: 0,
    }),
});



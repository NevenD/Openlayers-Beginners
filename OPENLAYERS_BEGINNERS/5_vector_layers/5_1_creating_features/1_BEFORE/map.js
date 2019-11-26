

var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.XYZ({
                url: "http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg"
            })
        })
    ],
    view: new ol.View({
        center: [0, 0],
        zoom: 3
    })
});
// point coordinates
// [399756, 967789]

// line coordinates
// [771789, 6711782], [6744133, 4465733]

//  polygon coordinates
// [506604, 6475365], [5124376, 3933143],
// [787755, 323447], [65544, 3248267]


var pathToFile = '../../data/poi.json';


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
        center: [-11608956.681, 5033316.195],
        zoom: 4
    })
});


var distanceElement = document.getElementById('distanceSize');
var distanceTagValue = document.getElementById("distanceTag");




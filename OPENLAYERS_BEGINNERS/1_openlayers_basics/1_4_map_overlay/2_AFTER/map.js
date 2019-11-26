

var popup = new ol.Overlay({
    element: document.getElementById('popup')
});

var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: [0, 0],
        zoom: 3
    })
});

map.addOverlay(popup);

//
map.on('click', function (event) {
    console.log(event);
    var documentElement = document.getElementById('popup');
    documentElement.style.display = "inline";
    documentElement.innerHTML = `Coordinates (EPSG:3857) ${ol.coordinate.toStringXY(event.coordinate, 2)} `;

    // setting position of overlay element
    popup.setPosition(event.coordinate);
});
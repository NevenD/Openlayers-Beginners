var geojsonLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: '../../data/testData.json'
    })
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

let featureListElement = document.getElementById("featureList");

setTimeout(() => {
    var features = geojsonLayer.getSource().getFeatures();

    for (var feature of features) {
        var aElement = document.createElement("a");
        aElement.classList.add("list-item");
        featureListElement.appendChild(aElement);
        aElement.innerHTML = feature.get("Name");
    }

}, 100);




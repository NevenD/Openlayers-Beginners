var geojsonLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: '../../data/testData.json'
    })
});


var wmsLayer = new ol.layer.Tile({
    source: new ol.source.TileWMS({
        url: "http://geoportal.dgu.hr/wms?",
        params: {
            LAYERS: "DOF5_2011",
            FORMAT: "image/png",
            TRANSPARENT: true
        },
        attributions: "State Geodetic Administration (2011)",
    })
});

var map = new ol.Map({
    target: 'map',
    layers: [
        wmsLayer,
        geojsonLayer
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([16.413374, 44.698299]),
        zoom: 8,
    })
});

var featureListElement = document.getElementById("featureList");

setTimeout(() => {
    var features = geojsonLayer.getSource().getFeatures();
    for (let feature of features) {

        var aElement = document.createElement("a");
        aElement.classList.add("list-item");
        featureListElement.appendChild(aElement);
        aElement.innerHTML = feature.get("Name");
        aElement.onclick = function () {
            var extentOfPolygon = feature.getGeometry().getExtent();
            map.getView().fit(extentOfPolygon);
        }
    }

}, 500);




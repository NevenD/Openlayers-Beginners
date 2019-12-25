var pathToFile = '../../data/poi.json';

var geojsonData = new ol.source.Vector({
    url: pathToFile,
    format: new ol.format.GeoJSON()
});


let afGuard = new ol.style.Style({
    image: new ol.style.Icon({
        crossOrigin: 'anonymous',
        src: '../../icons/bunker.png'
    })
});

let army = new ol.style.Style({
    image: new ol.style.Icon({
        src: '../../icons/army.png'
    })
});

let waco = new ol.style.Style({
    image: new ol.style.Icon({
        src: '../../icons/waco.png'
    })
});

let defaultIcon = new ol.style.Style({
    image: new ol.style.Icon({
        src: '../../icons/radar.png'
    })
});


function styleFunction(feature) {

    if (feature.get("COMPONENT") == "AF Guard") {
        return [afGuard];
    } else if (feature.get("COMPONENT") == "Army Guard") {
        return [army];
    } else if (feature.get("COMPONENT") == "Navy Active") {
        return [waco];
    } else {
        return [defaultIcon];
    }
}
var geojsonLayer = new ol.layer.Vector({
    source: geojsonData,
    style: styleFunction
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

// zooming to feature extent
setTimeout(() => {
    var extentOfPolygon = geojsonLayer.getSource().getExtent();
    map.getView().fit(extentOfPolygon);
}, 100);


var featurePoly = new ol.Feature(
    new ol.geom.Polygon([[
        [506604, 6475365], [5124376, 3933143],
        [787755, 323447], [65544, 3248267], [506604, 6475365]
    ]])
);

var baseLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
        features: [featurePoly]
    })
});

var vectorForDrawing = new ol.layer.Vector({
    source: new ol.source.Vector()
});

var restrictionStyle = new ol.style.Style({
    fill: new ol.style.Fill({
        color: "rgba(255, 10, 10, 0.6)"
    }),
    stroke: new ol.style.Stroke({
        color: "#fff",
        width: 4,
        lineCap: 'square',
        lineJoin: 'bevel',
        lineDash: [1, 5]
    }),
    text: new ol.style.Text({
        font: '13px Calibri,',
        fill: new ol.style.Fill({
            color: '#000'
        }),
        stroke: new ol.style.Stroke({
            color: '#fff',
            width: 3
        }),
        text: "Polygon is overlapping!",
        overflow: true
    })
});


var defaultStyle = new ol.style.Style({
    fill: new ol.style.Fill({
        color: 'rgba(255,255,255,0.4)'
    }),
    stroke: new ol.style.Stroke({
        color: '#3399CC',
        width: 1.25
    })
});

var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        }),
        baseLayer,
        vectorForDrawing
    ],
    view: new ol.View({
        center: [0, 0],
        zoom: 3
    })
});

var drawInteraction = new ol.interaction.Draw({
    source: vectorForDrawing.getSource(),
    type: 'Polygon'
});


//  transform to wgs84
//  unprojected WGS84 coordinate system
var transformedCoordinates = featurePoly.getGeometry().clone().transform('EPSG:3857', 'EPSG:4326');
// we area fetching mutliarray of coordinates
console.log(transformedCoordinates.getCoordinates());


var baseTurfPolygon = turf.polygon(transformedCoordinates.getCoordinates());

var drawing = document.getElementById("startDrawing");
drawing.addEventListener("click", function () {
    // added interaction
    map.addInteraction(drawInteraction);

    // fire event upon finishing drawing
    drawInteraction.on("drawend", function (evt) {
        var drawnFeature = evt.feature;
        // transforming polygon to wgs84
        var transformedPolygon = drawnFeature.getGeometry().clone().transform('EPSG:3857', 'EPSG:4326');
        var drawnFeatureTurf = turf.polygon(transformedPolygon.getCoordinates());

        var arePolygonsOverlapping = turf.booleanOverlap(baseTurfPolygon, drawnFeatureTurf)

        if (arePolygonsOverlapping) {
            // if polygons are overlapping then set new style on feature
            drawnFeature.setStyle(restrictionStyle);
        } else {
            drawnFeature.setStyle(defaultStyle);
        }

    });
});

var deleteFeatures = document.getElementById("deleteDrawing");
deleteFeatures.onclick = function () {
    vectorForDrawing.getSource().clear();
    map.removeInteraction(drawInteraction);
}



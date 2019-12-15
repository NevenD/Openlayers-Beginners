

var watercolor = "http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg";
var stamen = new ol.layer.Tile({
    source: new ol.source.XYZ({
        url: watercolor
    })
});

var dragAndDropSource = new ol.source.Vector();
var dragAndDropLayer = new ol.layer.Vector({
    source: dragAndDropSource
});

var dragAndDrop = new ol.interaction.DragAndDrop({
    formatConstructors: [
        ol.format.GeoJSON
    ]
});

// there are several vector formats besides GeoJSON
// GPX, IGC, KML, TopoJSON



var map = new ol.Map({
    target: 'map',
    layers: [
        stamen,
        dragAndDropLayer
    ],
    view: new ol.View({
        center: [0, 0],
        zoom: 2,
    })
});


map.addInteraction(dragAndDrop);



var featureListElement = document.getElementById("featureProperties");


dragAndDrop.on('addfeatures', function (evt) {
    // console.log(evt);

    let features = (evt.features)
    dragAndDropSource.addFeatures(features);


    for (var feature of features) {
        var liElement = document.createElement("li");
        featureListElement.appendChild(liElement);
        liElement.innerHTML = feature.get("name");
    }

    map.getView().fit(dragAndDropSource.getExtent(), { duration: 2000 })


});


var deleteButton = document.getElementById("buttonDelete");
deleteButton.addEventListener("click", function () {
    dragAndDropSource.clear();
});






var vectorForDrawing = new ol.layer.Vector({
    source: new ol.source.Vector()
});


var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        }),
        vectorForDrawing
    ],
    view: new ol.View({
        center: [0, 0],
        zoom: 3
    })
});

var drawInteraction;


var select = new ol.interaction.Select();
var modify = new ol.interaction.Modify({
    features: select.getFeatures()
});



map.addInteraction(select);
map.addInteraction(modify);

var drawingType = document.getElementById("drawFeatures");
var selectedValue = drawingType.options[drawingType.selectedIndex].value;
drawingType.addEventListener("change", function (evt) {
    var selectedItem = evt.target.value;
    map.removeInteraction(drawInteraction);
    addDrawingInteraction(selectedItem);
});


function addDrawingInteraction(typeValue) {
    drawInteraction = new ol.interaction.Draw({
        source: vectorForDrawing.getSource(),
        type: typeValue
    });
    map.addInteraction(drawInteraction);
}

addDrawingInteraction(selectedValue);
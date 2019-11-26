var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: [0, 0],
        zoom: 0
    }),
});

function getExtentResolution() {
    var view = map.getView();
    var extent = view.calculateExtent();
    var elementResolution = document.getElementById("extentReso");
    elementResolution.innerHTML = view.getResolutionForExtent(extent);
}

function getZoomResolution() {
    var view = map.getView();
    var zoom = view.getZoom();
    var elementResolution = document.getElementById("zoomReso");
    elementResolution.innerHTML = view.getResolutionForZoom(zoom);
}

function getMaxResolution() {
    var view = map.getView();
    var elementResolution = document.getElementById("maxReso");
    elementResolution.innerHTML = view.getMaxResolution();
}

function getMinResolution() {
    var view = map.getView();
    var elementResolution = document.getElementById("minReso");
    elementResolution.innerHTML = view.getMinResolution();
}


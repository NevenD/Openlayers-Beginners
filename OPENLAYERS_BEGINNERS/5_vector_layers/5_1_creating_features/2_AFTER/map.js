
var vectorPointSource = new ol.source.Vector();

var vectorPointLayer = new ol.layer.Vector({
    source: vectorPointSource
});


var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.XYZ({
                url: "http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg"
            })
        }),
        vectorPointLayer
    ],
    view: new ol.View({
        center: [0, 0],
        zoom: 3
    })
});


//  1. EXAMPLE OF ADDING GEOMETRY
//  create instance of Feature object with geometry POINT type
var point = new ol.Feature({
    geometry: new ol.geom.Point([399756, 967789])
});
// adding instance of feature point object to source
vectorPointSource.addFeature(point);


//  create instance of Feature object with geometry CIRCLE type
var circle = new ol.Feature(
    new ol.geom.Circle([-391357, 4774562], 6e5)
);
vectorPointSource.addFeature(circle);


//  2. EXAMPLE OF ADDING GEOMETRY
//  create instance of Feature object with geometry POINT, POLYGON 

var line = new ol.Feature(
    new ol.geom.LineString([
        [771789, 6711782], [6744133, 4465733]
    ])
);
var polygon = new ol.Feature(
    new ol.geom.Polygon([[
        [506604, 6475365], [5124376, 3933143],
        [787755, 323447], [65544, 3248267]
    ]])
);

var featureCollection = new ol.Collection([line, polygon]);

map.addLayer(new ol.layer.Vector({
    source: new ol.source.Vector({
        features: featureCollection
    })
}));
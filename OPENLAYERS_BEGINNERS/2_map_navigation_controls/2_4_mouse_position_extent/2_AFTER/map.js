const wmsLayer = new ol.layer.Tile({
  visible: true,
  source: new ol.source.TileWMS({
    url: 'https://geoportal.dgu.hr/wms',
    params: {
      LAYERS: 'DOF',
      FORMAT: 'image/png',
    },
    attributions: 'State Geodetic Administration (2011)',
  }),
});

const map = new ol.Map({
  target: 'map',
  layers: [
    // new ol.layer.Tile({
    //     source: new ol.source.OSM()
    // }),
    wmsLayer,
  ],
  view: new ol.View({
    center: [16.025, 46.111],
    zoom: 11,
    projection: 'EPSG:4326',
  }),
});

// const mousePositionControl = new ol.control.MousePosition({
//     coordinateFormat: ol.coordinate.createStringXY(2),
//     projection: 'EPSG:3857',
//     undefinedHTML: '..OUTSIDE..' // if we want empty value then we pass &nbsp;
// });
// map.addControl(mousePositionControl);

map.on('click', function (evt) {
  const coordsElement = document.getElementById('mouseClickCoords');
  const extentElement = document.getElementById('mouseClickExtent');

  const coordinates = evt.coordinate;
  const extent = evt.map.getView().calculateExtent();

  console.log(coordinates);
  console.log(extent);

  coordsElement.innerHTML = [coordinates[0].toFixed(2), coordinates[1].toFixed(2)];

  extentElement.innerHTML = [extent[0].toFixed(2), extent[1].toFixed(2), extent[2].toFixed(2), extent[3].toFixed(2)].join('<br>');
});

map.on('pointermove', function (evt) {
  const extentElement = document.getElementById('mouseMoveExtent');
  const extent = evt.map.getView().calculateExtent();
  console.log(extent);
  extentElement.innerHTML = [extent[0].toFixed(), extent[1].toFixed(), extent[2].toFixed(), extent[3].toFixed()].join('<br>');
});

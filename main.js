import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj';
import {ZoomSlider} from 'ol/control';


function createMap(divId) {
  const source = new OSM();
  const layer = new TileLayer({
    source: source,
  });


const mexico = [-98.70, 23.4]; // caution partner, read on...
// since we are using OSM, we have to transform the coordinates...
const mexicoMercator = fromLonLat(mexico);

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: mexicoMercator,
    zoom: 5, 
    maxZoom: 12,
    minZoom: 5
  })
});
const zoomslider = new ZoomSlider();
map.addControl(zoomslider);
return map;
}

const map1 = createMap('map');
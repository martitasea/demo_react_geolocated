import React, {Component}  from 'react';
import { geolocated } from 'react-geolocated';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';

const defaultLat= 40;
const defaultLong=-3;


class App extends Component {
  render(){
    const longitude=this.props.coords? 
    this.props.coords.longitude
    : defaultLong
  
    const latitude=this.props.coords? 
    this.props.coords.latitude
    : defaultLat
  
    return (
     <Map center={[latitude, longitude]} zoom={12}>
       <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}.png"
              // attribution="Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community"
            />
        {
          !this.props.coords?
          <div>Loaging</div>
          :<Marker position={[latitude, longitude]}>
    
            <Popup>You are here!</Popup>
          </Marker>
        }
      </Map>
  );
}}
export default geolocated({
  positionOptions:{
    enableHighAccuracy: false
  },
  userDecisionTimeout: 10000
})(App);

// export default App;

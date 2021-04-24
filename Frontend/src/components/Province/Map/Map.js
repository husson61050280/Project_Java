import { React, useRef, useCallback , useState } from "react";
import useStyles from "./Map_style";
import PublicIcon from '@material-ui/icons/Public';

// google Map api
import {GoogleMap,useLoadScript,Marker,InfoWindow } from "@react-google-maps/api";
import { Typography} from "@material-ui/core";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};
const center = { lat: 13.72917, lng: 100.52389 };

const Map = ({marker}) => {
  const classes = useStyles();
      
  // Load Map
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBeM9qIm1p8JsFIBhf-akX3vUPtET6ExDY",
    libraries,
  });
  console.log("marker_in Map", marker);

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const [selected, setSelected] = useState(null);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        onLoad={onMapLoad}
      >
        {marker.map((markers) => (
          <Marker
            key={markers.PROVINCE_ID}
            position={{ lat: markers.LAT, lng: markers.LNG }}
            onClick={() => {
              setSelected(markers);
            }}
          
            icon={{
              url: markers.color === "red" ? "/Marker.svg" : <PublicIcon/>,
              scaledSize: new window.google.maps.Size(30, 30),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
            }}
          />
        ))}
       

        {selected ? (
          <InfoWindow
            position={{ lat: selected.LAT, lng: selected.LNG }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <Typography variant="h6" color="secondary"><PublicIcon/>{selected.PROVINCE_ID},{selected.PROVINCE_NAME}</Typography>
              <Typography variant="body2" color="textSecondary">Latitude: {selected.LAT} Longitude: {selected.LNG}</Typography>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
};

export default Map;

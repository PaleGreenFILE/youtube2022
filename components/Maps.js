import Map, { Marker, Popup } from "react-map-gl";
import { useState } from "react";
import getCenter from "geolib/es/getCenter";
import "mapbox-gl/dist/mapbox-gl.css";

function Maps({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});
  

  const coordinates = searchResults?.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));
  // The latitude and longitude of the center of the coordinates
const center = getCenter(coordinates);
const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });
  return (
    <Map
      mapStyle="mapbox://styles/palegreenfile/cl2b2vunf004a14p7udom76ad"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onMove={(evt) => setViewport(evt.viewport)}
    >
      
      {searchResults?.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
            >
              📌
            </p>
          </Marker>

          {/* The popup that should show if we click on a pin*/}

          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </Map>
  );
}

export default Maps;

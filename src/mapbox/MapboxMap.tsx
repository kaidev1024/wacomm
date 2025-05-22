import { useEffect, useRef, useState } from "react";
import Map, { Marker, NavigationControl, MapRef } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import {
  MapboxLocationProps,
  MapStyle,
  NavigationControlPosition
} from "./util";
import MapboxMarkerList from "./MapboxMarkerList";

interface navigationControlProps {
  isDisplayed: boolean;
  position: NavigationControlPosition;
}

interface MapboxMapProps {
  mapboxToken: string;
  latitude: number;
  longitude: number;
  locations?: MapboxLocationProps[];
  mapStyle: MapStyle;
  navigationControl: navigationControlProps;
}

const MapboxMap = ({
  longitude,
  latitude,
  locations = [],
  mapboxToken,
  mapStyle,
  navigationControl,
}: MapboxMapProps) => {
  const mapRef = useRef<MapRef>(null);
  const [viewState, setViewState] = useState({
    longitude,
    latitude,
    zoom: 10,
  });
  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.flyTo({
        center: [longitude, latitude],
        zoom: 10,
        duration: 3000,
        essential: true
      });
    }
  }, [latitude, longitude]);
  return (
    <Map
      ref={mapRef}
      {...viewState}
      mapboxAccessToken={mapboxToken}
      mapStyle={mapStyle}
      style={{ width: "100%", height: "100%" }}
      onMove={(evt) => setViewState(evt.viewState)}
    >
      <Marker longitude={longitude} latitude={latitude}>
        📌
      </Marker>
      <MapboxMarkerList locations={locations} />
      {navigationControl.isDisplayed && <NavigationControl position={navigationControl.position} />}
    </Map>
  );
};

export default MapboxMap;
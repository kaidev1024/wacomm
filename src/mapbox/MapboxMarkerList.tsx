import { Marker } from "react-map-gl";
import { MapboxLocationProps } from "./util";
import { ArrayUtil } from 'waujs';
import List from "../List";

interface MapboxMarkerListProps {
  locations?: MapboxLocationProps[];
}

export default function MapboxMarkerList({ locations }: MapboxMarkerListProps) {
  if (ArrayUtil.IsZeroArray(locations)) return null;
  const itemRenderer = ({ id, longitude, latitude, icon }: MapboxLocationProps) => {
    return (
      <li key={id}>
        <Marker longitude={longitude} latitude={latitude}>
          {icon}
        </Marker>
      </li>
    );
  };
  return <List items={locations!} itemRenderer={itemRenderer} />;
}
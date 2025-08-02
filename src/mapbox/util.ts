import { ReactElement } from 'react';

export enum MapStyle {
  SV11 = 'mapbox://styles/mapbox/streets-v11'
}

export enum NavigationControlPosition {
  TR = 'top-right'
}

export interface MapboxLocationProps {
  id: string;
  latitude: number;
  longitude: number;
  icon: ReactElement;
}

import React, { useEffect } from 'react';
import L from 'leaflet';

import { MapContainer, OSMMap } from './map.styles';

const Map = () => {
  useEffect(() => {
    const osmMap = L.map('mapId', { center: [23.8759391, 120.588669], zoom: 8, zoomControl: false });
    L.control.zoom({ position: 'bottomright' }).addTo(osmMap);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
    }).addTo(osmMap);
  }, []);

  return (
    <>
      <MapContainer>
        <OSMMap id="mapId" />
      </MapContainer>
    </>
  );
};

export default Map;

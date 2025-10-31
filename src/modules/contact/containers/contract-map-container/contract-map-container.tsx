"use client";

import { GoogleMap, Marker } from "@react-google-maps/api";
import React, { useEffect, useRef, useState } from "react";
import { useContactMapContainer } from "../../hooks";

interface ContractMapContainerProps {
  onLocationSelect?: (location: {
    lat: number;
    lng: number;
    address: string;
  }) => void;
  initialLocation?: { lat: number; lng: number; address: string };
}

const ContractMapContainer: React.FC<ContractMapContainerProps> = ({
  onLocationSelect,
  initialLocation,
}) => {
  const [marker, setMarker] = useState<google.maps.LatLng | null>(
    initialLocation && window.google
      ? new window.google.maps.LatLng(initialLocation.lat, initialLocation.lng)
      : null
  );
  const mapRef = useRef<google.maps.Map | null>(null);
  const { isLoaded, loadError, config } = useContactMapContainer();

  // Set initial location
  useEffect(() => {
    if (initialLocation && isLoaded) {
      setMarker(
        new google.maps.LatLng(initialLocation.lat, initialLocation.lng)
      );
    }
  }, [initialLocation, isLoaded]);

  if (!isLoaded) return null;

  if (loadError) {
    return (
      <div className="p-4 rounded-md text-center">
        <h3 className="text-sm font-medium text-muted-foreground mb-2">
          Google Maps Error
        </h3>
      </div>
    );
  }

  return (
    <div className="h-64 md:h-96 lg:h-[550px] overflow-hidden">
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        zoom={config.defaultZoom}
        center={marker ? marker.toJSON() : config.defaultCenter}
        options={{
          ...config.mapOptions,
          mapTypeControl: true,
          streetViewControl: false,
          fullscreenControl: true,
        }}
        onLoad={(map) => {
          mapRef.current = map;
          if (marker) {
            map.panTo(marker);
            map.setZoom(15);
          }
        }}
        onClick={(e) => {
          if (!e.latLng) return;

          setMarker(e.latLng);

          // Reverse geocode to get address
          if (!window.google) return;
          const geocoder = new window.google.maps.Geocoder();
          geocoder.geocode({ location: e.latLng }, (results, status) => {
            if (status === "OK" && results?.[0]) {
              const address = results[0].formatted_address;
              onLocationSelect?.({
                lat: e.latLng!.lat(),
                lng: e.latLng!.lng(),
                address,
              });
            }
          });
        }}
      >
        {marker && <Marker position={marker} />}
      </GoogleMap>
    </div>
  );
};

export default ContractMapContainer;

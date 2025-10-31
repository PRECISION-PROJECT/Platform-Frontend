"use client";

import { env } from "@/utils/const";
import { Libraries, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";

// bounds (approximate) for restricting map view
export const BOUNDS = {
  north: 35.513327, // Northern India
  south: 6.4626999, // Southern India
  east: 97.395561, // Eastern India
  west: 68.7917517, // Western India
};

export const GOOGLE_MAPS_CONFIG = {
  libraries: ["places", "geometry"] as Libraries,
  defaultCenter: { lat: 20.5937, lng: 78.9629 }, // 🇮🇳 New Delhi
  defaultZoom: 12,
  mapOptions: {
    disableDefaultUI: false,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    zoomControl: true,
    gestureHandling: "cooperative",
    mapTypeId: "roadmap",
    restriction: {
      latLngBounds: BOUNDS,
      strictBounds: false,
    },
    styles: [
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
    ],
  },
  autocompleteOptions: {
    componentRestrictions: { country: "in" },
    types: ["geocode", "establishment"],
    fields: ["formatted_address", "geometry", "name"],
  },
};

export const useContactMapContainer = () => {
  const apiKey = useMemo(() => env.GOOGLE_MAP_KEY, []);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey || "",
    libraries: GOOGLE_MAPS_CONFIG.libraries,
  });

  const error = useMemo(() => {
    if (!apiKey) {
      return {
        message: "Google Maps API key is not configured",
        details: "Please add GOOGLE_MAP_KEY to your environment variables",
      };
    }
    if (loadError) {
      return {
        message: "Failed to load Google Maps",
        details: loadError.message,
      };
    }
    return null;
  }, [apiKey, loadError]);

  return {
    isLoaded,
    loadError: error,
    config: GOOGLE_MAPS_CONFIG,
  };
};

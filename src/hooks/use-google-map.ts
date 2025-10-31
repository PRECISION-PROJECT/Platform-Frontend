import { env } from "@/utils/const";
import { Libraries, useJsApiLoader } from "@react-google-maps/api";

const libraries: Libraries = ["places", "marker"];

export const useGoogleMaps = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: env.GOOGLE_MAP_KEY,
    libraries,
    version: "quarterly",
  });

  return {
    isLoaded,
    loadError,
    libraries,
  };
};

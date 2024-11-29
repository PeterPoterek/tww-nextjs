"use client";

import React, { useState } from "react";
import {
  APIProvider,
  Map as GoogleMap,
  AdvancedMarker,
  InfoWindow,
} from "@vis.gl/react-google-maps";

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

if (!apiKey) {
  throw new Error("Google Maps API key is missing");
}

const center = {
  lat: 50.01856687159472,
  lng: 19.874802848197707,
};

const Map = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-[416px] border-b-[5px] border-[#075985]">
      <APIProvider apiKey={apiKey}>
        <GoogleMap
          mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAPID}
          defaultCenter={center}
          defaultZoom={12}
          gestureHandling="auto"
          className="w-full h-full"
        >
          <AdvancedMarker position={center} onClick={() => setIsOpen(true)} />
          {isOpen && (
            <InfoWindow position={center} onCloseClick={() => setIsOpen(false)}>
              <div>
                <h4 className="text-secondary font-black">
                  Technologia Wykonana Wnętrz
                </h4>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </APIProvider>
    </div>
  );
};

export default Map;

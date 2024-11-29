"use client";

import React, { useState } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "416px",
  borderBottom: "5px solid #075985",
};

const center = {
  lat: 50.01856687159472,
  lng: 19.874802848197707,
};

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

if (!apiKey) {
  throw new Error("Google Maps API key is missing");
}

const Map = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: apiKey,
  });

  return (
    <div style={containerStyle}>
      {!isLoaded ? (
        <div className="flex items-center justify-center h-full">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-t-transparent rounded-full text-primary"></div>
        </div>
      ) : (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
          <Marker position={center} onClick={() => setIsOpen(true)} />
          {isOpen && (
            <InfoWindow position={center} onCloseClick={() => setIsOpen(false)}>
              <div>
                <h4 className={"text-secondary font-black"}>
                  Technologia Wykonana Wnętrz
                </h4>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      )}
    </div>
  );
};

export default Map;

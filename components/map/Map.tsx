"use client";
import React, { useState } from "react";
import {
  GoogleMap,
  LoadScriptNext,
  Marker,
  InfoWindow,
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

  return (
    <LoadScriptNext googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        <Marker position={center} onClick={() => setIsOpen(true)} />
        {isOpen && (
          <InfoWindow position={center} onCloseClick={() => setIsOpen(false)}>
            <div>
              <h4 className={"text-secondary font-black"}>
                Technologia Wykonana Wnęrz
              </h4>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScriptNext>
  );
};

export default Map;

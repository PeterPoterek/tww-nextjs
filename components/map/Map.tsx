"use client";
import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "416px",
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
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
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
    </LoadScript>
  );
};

export default Map;

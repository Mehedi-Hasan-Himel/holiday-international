import React from "react";
import Hotel from "@/components/Hotel/Hotel";

import destination from "@/data/domestic/RatargulHotel.json";
export default function Ratargul() {
  return (
    <div className="mt-40">
      <h2 className="text-center text-2xl font-semibold">Ratargul</h2>
      <Hotel destination={destination} />
    </div>
  );
}


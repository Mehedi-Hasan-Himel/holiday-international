import React from "react";
import Hotel from "@/components/Hotel/Hotel";
import destination from "@/data/domestic/SreemongolHotel.json"

export default function Sreemongol() {
  return (
    <div className="mt-40">
      <h2 className="text-center text-2xl font-semibold">Sreemongol</h2>
      <Hotel destination={destination} />
    </div>
  );
}

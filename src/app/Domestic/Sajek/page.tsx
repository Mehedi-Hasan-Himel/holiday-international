import React from "react";
import Hotel from "@/components/Hotel/Hotel";
import destination from "@/data/domestic/SajekHotel.json"

export default function Sajek() {
  return (
    <div className="mt-40">
      <h2 className="text-center text-2xl font-semibold">Sajek</h2>
      <Hotel destination={destination} />
    </div>
  );
}

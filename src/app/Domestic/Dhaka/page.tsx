import React from "react";
import Hotel from "@/components/Hotel/Hotel";
import destination from "@/data/domestic/DhakaHotel.json";

export default function Dhaka() {
  return (
    <div className="mt-40">
      <h2 className="text-center text-2xl font-semibold">Dhaka</h2>
      <Hotel destination={destination} />
    </div>
  );
}

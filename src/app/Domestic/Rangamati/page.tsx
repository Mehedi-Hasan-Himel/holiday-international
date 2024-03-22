import React from "react";
import Hotel from "@/components/Hotel/Hotel";
import destination from "@/data/domestic/RangamatiHotel.json"

export default function Rangamati() {
  return (
    <div className="mt-40">
      <h2 className="text-center text-2xl font-semibold">Rangamati</h2>
      <Hotel destination={destination} />
    </div>
  );
}

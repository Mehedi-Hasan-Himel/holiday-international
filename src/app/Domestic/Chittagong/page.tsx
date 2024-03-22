import React from "react";
import Hotel from "@/components/Hotel/Hotel";
import destination from "@/data/domestic/ChittagongHotel.json";

export default function Chittagong() {
  return (
    <div className="mt-40">
      <h2 className="text-center text-2xl font-semibold">Chittagong</h2>
      <Hotel destination={destination} />
    </div>
  );
}

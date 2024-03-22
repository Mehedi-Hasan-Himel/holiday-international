import React from "react";
import Hotel from "@/components/Hotel/Hotel";
import destination from "@/data/domestic/BandarbanHotel.json";

export default function Bandarban() {
  return (
    <div className="mt-40">
      <h2 className="text-center text-2xl font-semibold">Bandarban</h2>
      <Hotel destination={destination} />
    </div>
  );
}

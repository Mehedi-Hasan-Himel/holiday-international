import React from "react";
import Hotel from "@/components/Hotel/Hotel";

import destination from "@/data/domestic/SlyhetHotel.json";
export default function Slyhet() {
  return (
    <div className="mt-40">
      <h2 className="text-center text-2xl font-semibold">Slyhet</h2>
      <Hotel destination={destination} />
    </div>
  );
}

import React from "react";
import Hotel from "@/components/Hotel/Hotel";
import destination from "@/data/domestic/CoxsHotel.json";

export default function CoxsBazar() {
  return (
    <div className="mt-40">
      <h2 className="text-center text-2xl font-semibold">CoxsBazar</h2>
      <Hotel destination={destination} />
    </div>
  );
}

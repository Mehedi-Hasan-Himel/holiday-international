import React from "react";
import Hotel from "@/components/Hotel/Hotel";

import destination from "@/data/international/internationalDemoHotel.json";
export default function page() {
  return (
    <div className="mt-40">
      <h2 className="text-center text-2xl font-semibold"> Hotel&#39;s</h2>
      <Hotel destination={destination} />
    </div>
  );
}

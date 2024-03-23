import Room from "@/components/Hotel/Room";
import React from "react";
import slides from "@/data/domestic/Dhaka-Hotel/CentralInnHotelSuites.json"

export default function page() {
  return (
    <div>
      <Room slides={slides} />
    </div>
  );
}


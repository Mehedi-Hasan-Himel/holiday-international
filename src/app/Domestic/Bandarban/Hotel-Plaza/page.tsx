import Room from "@/components/Hotel/Room";
import React from "react";
import slides from "@/data/domestic/Bandarban-Hotel/HotelPlaza.json"

export default function page() {
  return (
    <div>
      <Room slides={slides} />
    </div>
  );
}


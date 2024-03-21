import React from "react";
import Hotel from "@/components/Hotel/Hotel";

const destination = [
  {
    id: 1,
    name: "Well Park Residence",
    image: "https://i.ibb.co/PTy5vs6/Well-Park-Residence.jpg",
    href: "Well-Park-Residence",
  },
  {
    id: 2,
    name: "HOTEL HERITAGE",
    image: "https://i.ibb.co/1Z6fDtK/HOTEL-HERITAGE.jpg",
    href: "HOTEL-HERITAGE",
  },
  {
    id: 3,
    name: "Orchid Business Hotel",
    image: "https://i.ibb.co/H7nBsBF/Orchid-Business-Hotel.webp",
    href: "Orchid-Business-Hotel",
  },
];
export default function Chittagong() {
  return (
    <div className="mt-40">
      <h2 className="text-center text-2xl font-semibold">Chittagong</h2>
      <Hotel destination={destination} />
    </div>
  );
}

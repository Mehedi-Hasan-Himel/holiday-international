import React from "react";
import Hotel from "@/components/Hotel/Hotel";

const destination = [
  {
    id: 1,
    name: "Megh Kabbo Hilltop Cottage",
    image: "https://i.ibb.co/LnHM0dz/Megh-Kabbo-Hilltop-Cottage.jpg",
    href: "Megh-Kabbo-Hilltop-Cottage",
  },
];
export default function Sajek() {
  return (
    <div className="mt-40">
      <h2 className="text-center text-2xl font-semibold">Sajek</h2>
      <Hotel destination={destination} />
    </div>
  );
}

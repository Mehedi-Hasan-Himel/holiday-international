import React from "react";
import Hotel from "@/components/Hotel/Hotel";

const destination = [
  {
    id: 1,
    name: "Rose View Hotel",
    image: "https://i.ibb.co/1z3c4hB/Rose-View-Hotel.jpg",
    href: "Rose-View-Hotel",
  },
  {
    id: 2,
    name: "Hotel Noorjahan Grand",
    image: "https://i.ibb.co/8cGfhj8/Hotel-Noorjahan-Grand.jpg",
    href: "Hotel-Noorjahan-Grand",
  },
];
export default function Slyhet() {
  return (
    <div className="mt-40">
      <h2 className="text-center text-2xl font-semibold">Slyhet</h2>
      <Hotel destination={destination} />
    </div>
  );
}

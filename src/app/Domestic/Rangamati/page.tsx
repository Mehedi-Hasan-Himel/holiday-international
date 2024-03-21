import React from "react";
import Hotel from "@/components/Hotel/Hotel";

const destination = [
  {
    id: 1,
    name: "Hotel-Jum-Palace",
    image: "https://i.ibb.co/RSXJXBd/Hotel-Jum-Palace.jpg",
    href: "Hotel-Jum-Palace",
  },
  {
    id: 2,
    name: "Aronnok-Lakeshore-Holiday-Resort",
    image: "https://i.ibb.co/fXw6gW8/Aronnok-Lakeshore-Holiday-Resort.jpg",
    href: "Aronnok-Lakeshore-Holiday-Resort",
  },
  {
    id: 3,
    name: "Hill Taj Resort",
    image: "https://i.ibb.co/vdH7gfT/Hill-Taj-Resort.jpg",
    href: "Hill-Taj-Resort",
  },
];
export default function Rangamati() {
  return (
    <div className="mt-40">
      <h2 className="text-center text-2xl font-semibold">Rangamati</h2>
      <Hotel destination={destination} />
    </div>
  );
}

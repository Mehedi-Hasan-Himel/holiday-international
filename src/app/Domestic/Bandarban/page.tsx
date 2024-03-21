import React from "react";
import Hotel from "@/components/Hotel/Hotel";

const destination = [
  {
    id: 1,
    name: "Bono Nibash Hill Resort",
    image: "https://i.ibb.co/th7PZKT/Bono-Nibash.jpg",
    href: "Bono-Nibash-Hill-Resort",
  },
  {
    id: 2,
    name: "Hill Crown Hotel Resort",
    image: "https://i.ibb.co/vcfDD5M/Hill-Crown-Hotel-Resort.jpg",
    href: "Hill-Crown-Hotel-Resort",
  },
  {
    id: 3,
    name: "Hotel Aranna Residential",
    image: "https://i.ibb.co/HrCdFs1/Hotel-Aranna-Residential.jpg",
    href: "Hotel-Aranna-Residential",
  },
  {
    id: 4,
    name: "Hotel Plaza",
    image: "https://i.ibb.co/hgP1GVy/Hotel-Plaza.jpg",
    href: "Hotel-Plaza",
  },
  {
    id: 5,
    name: "Venus Resort Coffee House",
    image: "https://i.ibb.co/ChyYf53/Venus-Resort-Coffee-House.jpg",
    href: "Venus-Resort-Coffee-House",
  },
];
export default function Bandarban() {
  return (
    <div className="mt-40">
      <h2 className="text-center text-2xl font-semibold">Bandarban</h2>
      <Hotel destination={destination} />
    </div>
  );
}

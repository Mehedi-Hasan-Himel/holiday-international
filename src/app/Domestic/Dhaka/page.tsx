import React from "react";
import Hotel from "@/components/Hotel/Hotel";

const destination = [
  {
    id: 1,
    name: "HOTEL BLUE BIRD",
    image: "https://i.ibb.co/vqscdvL/HOTEL-BLUE-BIRD.jpg",
    href: "HOTEL-BLUE-BIRD",
  },
  {
    id: 2,
    name: "Empyrean-Dhaka-City-Centre",
    image: "https://i.ibb.co/MkGBJkS/Empyrean-Dhaka-City-Centre.jpg",
    href: "Empyrean-Dhaka-City-Centre",
  },
  {
    id: 3,
    name: "Central Inn Hotel Suites",
    image: "https://i.ibb.co/ZHjRjgc/Central-Inn-Hotel-Suites.jpg",
    href: "Central-Inn-Hotel-Suites",
  },
];
export default function Dhaka() {
  return (
    <div className="mt-40">
      <h2 className="text-center text-2xl font-semibold">Dhaka</h2>
      <Hotel destination={destination} />
    </div>
  );
}

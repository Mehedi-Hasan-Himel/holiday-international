import React from "react";
import Hotel from "@/components/Hotel/Hotel";

const destination = [
  {
    id: 1,
    name: "Balishira Resort Ltd",
    image: "https://i.ibb.co/nzbqWfv/Balishira-Resort-Ltd.jpg",
    href: "Balishira-Resort-Ltd",
  },
  {
    id: 2,
    name: "Grand Sultan Tea Resort Golf",
    image: "https://i.ibb.co/Fnkggwb/Grand-Sultan-Tea-Resort-Golf.jpg",
    href: "Grand-Sultan-Tea-Resort-Golf",
  },
];
export default function Sreemongol() {
  return (
    <div className="mt-40">
      <h2 className="text-center text-2xl font-semibold">Sreemongol</h2>
      <Hotel destination={destination} />
    </div>
  );
}

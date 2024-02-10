import React from "react";

import Image from "next/image";
const destination = [
  {
    id: 1,
    name: "Bali",
    image: "/images/international/bali.jpeg",
  },
  {
    id: 2,
    name: "Dubai",
    image: "/images/international/dubai.jpeg",
  },
  {
    id: 3,
    name: "Finland-Aurora",
    image: "/images/international/Finland_Aurora.jpeg",
  },
  {
    id: 4,
    name: "Great-Wall-of-China",
    image: "/images/international/great-wall.jpeg",
  },
  {
    id: 5,
    name: "Kashmir",
    image: "/images/international/kashmir.webp",
  },
  {
    id: 6,
    name: "Maldives",
    image: "/images/international/maldives.jpeg",
  },
  {
    id: 7,
    name: "Morisas",
    image: "/images/international/morisas.webp",
  },
  {
    id: 8,
    name: "Sri Lanka",
    image: "/images/international/sri-lanka.jpeg",
  },
  {
    id: 9,
    name: "Vietnam",
    image: "/images/international/vietnam.webp",
  },
];

export default function InternationalPlaces() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 px-5 md:grid-cols-2 lg:grid-cols-3">
        {destination.map((place) => (
          <div
            key={place.id}
            className="relative h-60 overflow-hidden rounded-lg shadow-md"
          >
            <Image
              // height={240}
              // width={433}
              src={place.image}
              alt={place.name}
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
              <h1 className="text-3xl font-bold text-white">{place.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

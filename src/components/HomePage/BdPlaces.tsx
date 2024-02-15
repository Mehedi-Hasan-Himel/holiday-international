import React from "react";

import Image from "next/image";
const destination = [
  {
    id: 1,
    name: "Bandarban",
    image: "/images/bangladesh/bandarban.jpeg",
  },
  {
    id: 2,
    name: "Chittagong",
    image: "/images/bangladesh/chittagong.jpeg",
  },
  {
    id: 3,
    name: "Cox's Bazar",
    image: "/images/bangladesh/coxs-bazar.jpeg",
  },
  {
    id: 4,
    name: "Dhaka",
    image: "/images/bangladesh/dhaka.jpeg",
  },
  {
    id: 5,
    name: "Rangamati",
    image: "/images/bangladesh/rangamati.jpeg",
  },
  {
    id: 6,
    name: "Sreemongol",
    image: "/images/bangladesh/sreemongol.jpeg",
  },
  {
    id: 7,
    name: "Sajek",
    image: "/images/bangladesh/sajek.jpeg",
  },
  {
    id: 8,
    name: "Sylhet",
    image: "/images/bangladesh/sylhet.jpeg",
  },
  {
    id: 9,
    name: "Ratargul",
    image: "/images/bangladesh/ratargul.jpeg",
  },
];

export default function BdPlaces() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 px-5 md:grid-cols-2 lg:grid-cols-3">
        {destination.map((place) => (
          <div
            key={place.id}
            className="relative h-60 overflow-hidden rounded-lg shadow-md"
          >
            <Image
              className="object-cover	"
              src={place.image}
              alt={place.name}
              fill
              sizes="100%"
              // height={240}
              // width={433}
              // layout="fill"
              // style={{objectFit:"cover"}}
              // objectFit="cover"
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

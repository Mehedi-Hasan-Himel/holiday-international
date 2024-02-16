import React from "react";
import Image from "next/image";
import Link from "next/link";

const destination = [
  {
    id: 1,
    name: "Bandarban",
    image: "/images/bangladesh/bandarban.jpeg",
    href: "Domestic/Bandarban",
  },
  {
    id: 2,
    name: "Chittagong",
    image: "/images/bangladesh/chittagong.jpeg",
    href: "Domestic/Chittagong",
  },
  {
    id: 3,
    name: "Cox's Bazar",
    image: "/images/bangladesh/coxs-bazar.jpeg",
    href: "Domestic/Coxs-Bazar",
  },
  {
    id: 4,
    name: "Dhaka",
    image: "/images/bangladesh/dhaka.jpeg",
    href: "Domestic/Dhaka",
  },
  {
    id: 5,
    name: "Rangamati",
    image: "/images/bangladesh/rangamati.jpeg",
    href: "Domestic/Rangamati",
  },
  {
    id: 6,
    name: "Sreemongol",
    image: "/images/bangladesh/sreemongol.jpeg",
    href: "Domestic/Sreemongol",
  },
  {
    id: 7,
    name: "Sajek",
    image: "/images/bangladesh/sajek.jpeg",
    href: "Domestic/Sajek",
  },
  {
    id: 8,
    name: "Sylhet",
    image: "/images/bangladesh/sylhet.jpeg",
    href: "Domestic/Sylhet",
  },
  {
    id: 9,
    name: "Ratargul",
    image: "/images/bangladesh/ratargul.jpeg",
    href: "Domestic/Ratargul",
  },
];

export default function BdPlaces() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 px-5 md:grid-cols-2 lg:grid-cols-3">
        {destination.map((place) => (
          <div
            key={place.id}
            className="group relative h-60 cursor-pointer overflow-hidden rounded-lg shadow-md"
          >
            <Link href={`${place.href}`}>
              <Image
                className="object-cover	"
                src={place.image}
                alt={place.name}
                fill
                sizes="100%"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                <h1 className="group-hover:text-5xl ease-in-out duration-100 text-3xl font-bold text-white">
                  {place.name}
                </h1>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

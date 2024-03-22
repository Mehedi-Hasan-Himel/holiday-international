import React from "react";
import Image from "next/image";
import Link from "next/link";
import BDPlaces from "@/data/BDPlaces.json";

const destination = [
  {
    id: 1,
    name: "Bandarban",
    image: "/images/Domestic/bandarban.jpeg",
    href: "Domestic/Bandarban",
  },
  {
    id: 2,
    name: "Chittagong",
    image: "/images/Domestic/chittagong.jpeg",
    href: "Domestic/Chittagong",
  },
  {
    id: 3,
    name: "Cox's Bazar",
    image: "/images/Domestic/coxs-bazar.jpeg",
    href: "Domestic/Coxs-Bazar",
  },
  {
    id: 4,
    name: "Dhaka",
    image: "/images/Domestic/dhaka.jpeg",
    href: "Domestic/Dhaka",
  },
  {
    id: 5,
    name: "Rangamati",
    image: "/images/Domestic/sreemongol.jpeg",
    href: "Domestic/Rangamati",
  },
  {
    id: 6,
    name: "Sreemongol",
    image: "/images/Domestic/sreemongol.jpeg",
    href: "Domestic/Sreemongol",
  },
  {
    id: 7,
    name: "Sajek",
    image: "/images/Domestic/sajek.jpeg",
    href: "Domestic/Sajek",
  },
  {
    id: 8,
    name: "Sylhet",
    image: "/images/Domestic/sylhet.jpeg",
    href: "Domestic/Sylhet",
  },
  {
    id: 9,
    name: "Ratargul",
    image: "/images/Domestic/ratargul.jpeg",
    href: "Domestic/Ratargul",
  },
];

export default function BdPlaces() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 px-5 md:grid-cols-2 lg:grid-cols-3">
        {BDPlaces.map((place) => (
          <div
            key={place.id}
            className="group relative h-60 cursor-pointer overflow-hidden rounded-lg shadow-md"
          >
            <Link href={`${place.href}`}>
              <img
                className="h-full w-full scale-110 transform object-fill transition duration-100 ease-in-out group-hover:scale-125	"
                src={place.image}
                alt={place.name}
                sizes="100%"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                <h1 className="text-3xl font-bold text-white duration-100 ease-in-out group-hover:text-5xl">
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

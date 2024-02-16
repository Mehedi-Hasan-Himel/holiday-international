import React from "react";

import Image from "next/image";
import Link from "next/link";
const destination = [
  {
    id: 1,
    name: "Bali",
    image: "/images/international/bali.jpeg",
    href: "International/Bali",
  },
  {
    id: 2,
    name: "Dubai",
    image: "/images/international/dubai.jpeg",
    href: "International/Dubai",
  },
  {
    id: 3,
    name: "Finland-Aurora",
    image: "/images/international/Finland_Aurora.jpeg",
    href: "International/Finland",
  },
  {
    id: 4,
    name: "Great-Wall-of-China",
    image: "/images/international/great-wall.jpeg",
    href: "International/China",
  },
  {
    id: 5,
    name: "Kashmir",
    image: "/images/international/kashmir.webp",
    href: "International/Kashmir",
  },
  {
    id: 6,
    name: "Maldives",
    image: "/images/international/maldives.jpeg",
    href: "International/Maldives",
  },
  {
    id: 7,
    name: "Morisas",
    image: "/images/international/morisas.webp",
    href: "International/Morisas",
  },
  {
    id: 8,
    name: "Sri Lanka",
    image: "/images/international/sri-lanka.jpeg",
    href: "International/SriLanka",
  },
  {
    id: 9,
    name: "Vietnam",
    image: "/images/international/Vietnam.jpeg",
    href: "International/Vietnam",
  },
];

export default function InternationalPlaces() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 px-5 md:grid-cols-2 lg:grid-cols-3">
        {destination.map((place) => (
          <div
            key={place.id}
            className="group relative h-60 overflow-hidden rounded-lg shadow-md"
          >
            <Link href={`${place.href}`}>
              <Image
                className="object-cover	"
                src={place.image}
                alt={place.name}
                fill
                sizes="100%"

                // layout="fill"
                // height={240}
                // width={433}
                // style={{ objectFit: "cover" }}
                // objectFit="cover"
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

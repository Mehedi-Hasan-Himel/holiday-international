import React from "react";

import Image from "next/image";
import Link from "next/link";
const destination = [
  {
    id: 1,
    name: "Bali",
    image: "https://i.ibb.co/2tKWnJY/bali.jpg",
    href: "International/Bali",
  },
  {
    id: 2,
    name: "Dubai",
    image: "https://i.ibb.co/gyR1Sz5/dubai.jpg",
    href: "International/Dubai",
  },
  {
    id: 3,
    name: "Finland-Aurora",
    image: "https://i.ibb.co/T43f9v8/Finland-Aurora.jpg",
    href: "International/Finland",
  },
  {
    id: 4,
    name: "Great-Wall-of-China",
    image: "https://i.ibb.co/QpYMqsW/great-wall.jpg",
    href: "International/China",
  },
  {
    id: 5,
    name: "Kashmir",
    image: "https://i.ibb.co/MDmyXBj/kashmir.webp",
    href: "International/Kashmir",
  },
  {
    id: 6,
    name: "Maldives",
    image: "https://i.ibb.co/qCpbFG6/maldives.jpg",
    href: "International/Maldives",
  },
  {
    id: 7,
    name: "Morisas",
    image: "https://i.ibb.co/f2kwqsj/morisas.webp",
    href: "International/Morisas",
  },
  {
    id: 8,
    name: "Sri Lanka",
    image: "https://i.ibb.co/0nq68Bm/sri-lanka.jpg",
    href: "International/SriLanka",
  },
  {
    id: 9,
    name: "Vietnam",
    image: "https://i.ibb.co/VMpjjMz/Vietnam.jpg",
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

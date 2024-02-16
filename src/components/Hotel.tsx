import React from "react";
import Image from "next/image";
import Link from "next/link";

const destination = [
  {
    id: 1,
    name: "Fu-Wang Dominoes Resort",
    image: "/images/hotel/fuwang.jpeg",
    href: "",
  },
  {
    id: 2,
    name: "Ocean Paradise Hotel & Resort",
    image: "/images/hotel/OceanParadise.jpeg",
    href: "",
  },
  {
    id: 3,
    name: "Seagull Hotel",
    image: "/images/hotel/Seagull-Hotel .jpeg",
    href: "",
  },
  {
    id: 4,
    name: "Bashati Bay Resort",
    image: "/images/hotel/Bashati-Bay.jpeg",
    href: "",
  },
  {
    id: 5,
    name: "Hotel Prime Park",
    image: "/images/hotel/HotelPrime.jpeg",
    href: "",
  },
  {
    id: 6,
    name: "Long Beach Hotel Cox's Bazar",
    image: "/images/hotel/Long-Beach.jpeg",
    href: "",
  },
  {
    id: 7,
    name: "Best Western Heritage Hotel",
    image: "/images/hotel/Best-Western.jpeg",
    href: "",
  },
  {
    id: 8,
    name: "The Cox's Today",
    image: "/images/hotel/The-Coxs-Today .jpeg",
    href: "",
  },
  {
    id: 9,
    name: "Royal Tulip Beach Resort & Spa",
    image: "/images/hotel/Royal-Tulip.jpeg",
    href: "",
  },
];

export default function Hotel() {
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
                <h1 className="text-xl font-bold text-white duration-100 ease-in-out group-hover:text-3xl">
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

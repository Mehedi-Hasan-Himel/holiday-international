import React from "react";
import Image from "next/image";
import Link from "next/link";

const destination = [
  {
    id: 1,
    name: "Fu-Wang Dominoes Resort",
    image: "https://i.ibb.co/TvVQRY5/fuwang.jpg",
    href: "",
  },
  {
    id: 2,
    name: "Ocean Paradise Hotel & Resort",
    image: "https://i.ibb.co/1Qq0kD3/Ocean-Paradise.jpg",
    href: "",
  },
  {
    id: 3,
    name: "Seagull Hotel",
    image: "https://i.ibb.co/sPyhqTf/Seagull-Hotel.jpg",
    href: "",
  },
  {
    id: 4,
    name: "Bashati Bay Resort",
    image: "https://i.ibb.co/9bLCXkM/Bashati-Bay.jpg",
    href: "",
  },
  {
    id: 5,
    name: "Hotel Prime Park",
    image: "https://i.ibb.co/P6jzKsq/Hotel-Prime.jpg",
    href: "",
  },
  {
    id: 6,
    name: "Long Beach Hotel Cox's Bazar",
    image: "https://i.ibb.co/Qj55wNf/Long-Beach.jpg",
    href: "",
  },
  {
    id: 7,
    name: "Best Western Heritage Hotel",
    image: "https://i.ibb.co/Kj9tz0d/Best-Western.jpg",
    href: "",
  },
  {
    id: 8,
    name: "The Cox's Today",
    image: "https://i.ibb.co/82M3yKT/The-Coxs-Today.jpg",
    href: "",
  },
  {
    id: 9,
    name: "Royal Tulip Beach Resort & Spa",
    image: "https://i.ibb.co/rQtLdbn/Royal-Tulip.jpg",
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

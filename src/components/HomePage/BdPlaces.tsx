import React from "react";
import Image from "next/image";
import Link from "next/link";

const destination = [
  {
    id: 1,
    name: "Bandarban",
    image: "https://i.ibb.co/NTvp02M/bandarban.jpg",
    href: "Domestic/Bandarban",
  },
  {
    id: 2,
    name: "Chittagong",
    image: "https://i.ibb.co/Qkm1zsq/chittagong.jpg",
    href: "Domestic/Chittagong",
  },
  {
    id: 3,
    name: "Cox's Bazar",
    image: "https://i.ibb.co/7YcCKdR/coxs-bazar.jpg",
    href: "Domestic/Coxs-Bazar",
  },
  {
    id: 4,
    name: "Dhaka",
    image: "https://i.ibb.co/ZVhdBMr/dhaka.jpg",
    href: "Domestic/Dhaka",
  },
  {
    id: 5,
    name: "Rangamati",
    image: "https://i.ibb.co/1bVB4mD/rangamati.jpg",
    href: "Domestic/Rangamati",
  },
  {
    id: 6,
    name: "Sreemongol",
    image: "https://i.ibb.co/VMCpp2C/sreemongol.jpg",
    href: "Domestic/Sreemongol",
  },
  {
    id: 7,
    name: "Sajek",
    image: "https://i.ibb.co/7JHTg9t/sajek.jpg",
    href: "Domestic/Sajek",
  },
  {
    id: 8,
    name: "Sylhet",
    image: "https://i.ibb.co/Swjh1LB/sylhet.jpg",
    href: "Domestic/Sylhet",
  },
  {
    id: 9,
    name: "Ratargul",
    image: "https://i.ibb.co/hHG0NJ1/ratargul.jpg",
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

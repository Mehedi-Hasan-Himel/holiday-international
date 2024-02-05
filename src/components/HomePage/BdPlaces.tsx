import React from "react";
import bandarban from "../../../public/images/bangladesh/bandarban.jpeg";
import chittagong from "../../../public/images/bangladesh/chittagong.jpeg";
import coxsbazar from "../../../public/images/bangladesh/coxs-bazar.jpeg";
import dhaka from "../../../public/images/bangladesh/dhaka.jpeg";
import rangamati from "../../../public/images/bangladesh/rangamati.jpeg";
import sreemongol from "../../../public/images/bangladesh/sreemongol.jpeg";
import sajek from "../../../public/images/bangladesh/sajek.jpeg";
import sylhet from "../../../public/images/bangladesh/sylhet.jpeg";
import Image from "next/image";
const destination = [
  {
    id: 1,
    name: "Bandarban",
    image: bandarban,
  },
  {
    id: 2,
    name: "Chittagong",
    image: chittagong,
  },
  {
    id: 3,
    name: "Cox's Bazar",
    image: coxsbazar,
  },
  {
    id: 4,
    name: "Dhaka",
    image: dhaka,
  },
  {
    id: 5,
    name: "Rangamati",
    image: rangamati,
  },
  {
    id: 6,
    name: "Sreemongol",
    image: sreemongol,
  },
  {
    id: 7,
    name: "Sajek",
    image: sajek,
  },
  {
    id: 8,
    name: "Sylhet",
    image: sylhet,
  },
];

export default function BdPlaces() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Image
          src={bandarban}
          alt="bandarban"
          width={434}
          height={280}
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
}

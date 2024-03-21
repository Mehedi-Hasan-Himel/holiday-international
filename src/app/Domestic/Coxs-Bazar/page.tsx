import React from "react";
import Hotel from "@/components/Hotel/Hotel";
const destination = [
  {
    id: 1,
    name: "Fu-Wang Dominoes Resort",
    image: "https://i.ibb.co/171VXtK/fuwang.jpg",
    href: "Fu-Wang-Dominoes-Resort",
  },
  {
    id: 2,
    name: "Ocean Paradise Hotel & Resort",
    image: "https://i.ibb.co/9GdSW8P/Ocean-Paradise.jpg",
    href: "Ocean-Paradise-Hotel-&-Resort",
  },
  {
    id: 3,
    name: "Seagull Hotel",
    image: "https://i.ibb.co/vLr6Wwg/Seagull-Hotel.jpg",
    href: "Seagull-Hotel",
  },
  {
    id: 4,
    name: "Bashati Bay Resort",
    image: "https://i.ibb.co/x3t5CSb/Bashati-Bay.jpg",
    href: "Bashati-Bay-Resort",
  },
  {
    id: 5,
    name: "Hotel Prime Park",
    image: "https://i.ibb.co/7RNgnVG/Hotel-Prime.jpg",
    href: "Hotel-Prime-Park",
  },
  {
    id: 6,
    name: "Long Beach Hotel Cox's Bazar",
    image: "https://i.ibb.co/0s1pr2Q/Long-Beach.jpg",
    href: "Long-Beach-Hotel-Coxs-Bazar",
  },
  {
    id: 7,
    name: "Best Western Heritage Hotel",
    image: "https://i.ibb.co/yVMFz7s/Best-Western.jpg",
    href: "Best-Western-Heritage-Hotel",
  },
  {
    id: 8,
    name: "The Cox's Today",
    image: "https://i.ibb.co/Tms6mJH/The-Coxs-Today.jpg",
    href: "The-Coxs-Today",
  },
  {
    id: 9,
    name: "Royal Tulip Beach Resort & Spa",
    image: "https://i.ibb.co/GnjVKYw/Royal-Tulip.jpg",
    href: "Royal-Tulip-Beach-Resort-&-Spa",
  },
];
export default function CoxsBazar() {
  return (
    <div className="mt-40">
      <h2 className="text-center text-2xl font-semibold">CoxsBazar</h2>
      <Hotel destination={destination} />
    </div>
  );
}

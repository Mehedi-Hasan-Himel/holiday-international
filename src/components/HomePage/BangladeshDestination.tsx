import React from "react";
import Image from "next/image";
import BdPlaces from "./bdPlaces";

export default function BangladeshDestination() {
   return (
      <section>
         <h1 className="lg:text-5xl text-center font-semibold">
            Bangladesh&apos;s Destination
         </h1>
         <BdPlaces />
      </section>
   );
}

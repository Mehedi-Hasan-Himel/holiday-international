import React from "react";
import Hotel from "@/components/Hotel";
import BDPlaces from "@/data/bdPlaces.json";

export async function generateStaticParams() {
  const paths = BDPlaces.map((place) => ({
    params: { placeName: place.name },
  }));

  return paths;
}

export default function page({ params }: { params: { placeName: string } }) {
  return (
    <div className="mt-40">
      <h2 className="text-center text-2xl font-semibold">{params.placeName}</h2>
      <Hotel />
    </div>
  );
}

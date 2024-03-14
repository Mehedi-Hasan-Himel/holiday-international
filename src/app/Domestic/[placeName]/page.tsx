import React from 'react'
import Hotel from "@/components/Hotel";

export default function page({params}:{params:{placeName:string}}) {
  return (
    <div className="mt-40">
      <h2 className="text-2xl font-semibold text-center">{params.placeName}</h2>
      <Hotel />
    </div>
  )
}


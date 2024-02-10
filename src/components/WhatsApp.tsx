import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function WhatsApp() {
  return (
    <div
      className="absolute  cursor-pointer
    	"
    >
      <Link target="_blank" href="https://wa.me/8801312778360">
        <Image
          className="fixed bottom-20 right-5 z-50 "
          src="/images/whatsapp.svg"
          alt="whatsapp"
          width={50}
          height={50}
        />
      </Link>
    </div>
  );
}

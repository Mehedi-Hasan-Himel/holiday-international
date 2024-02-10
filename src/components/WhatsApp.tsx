import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function WhatsApp() {
  return (
    <div
      className="absolute  cursor-pointer
    	"
    >
      <Link
        target="_blank"
        href="https://wa.me/8801712345678"
      >
        {/* https://api.whatsapp.com/send?phone=01312778360&text */}
        {/* https://wa.me/8801712345678 */}
        <Image
          className="fixed bottom-20 right-5 z-50 animate-ping hover:animate-none"
          src="/images/whatsapp.svg"
          alt="whatsapp"
          width={100}
          height={100}
        />
      </Link>
    </div>
  );
}

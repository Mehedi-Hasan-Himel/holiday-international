"use client";
import Link from "next/link";
import React from "react";
import ThemeButton from "./ThemeButton";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const navigation = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Experience",
      href: "/experience",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];
  const pathName = usePathname();
  return (
    <nav className=" fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* className=" fixed top-0 z-50 w-full backdrop-blur " */}
      <section className=" max-w-screen-xl mx-auto h-20 flex items-center justify-between ">
        <Link
          href="/"
          className="uppercase font-semibold underline decoration-[1px] underline-offset-2 hover:text-blue-600 flex gap-1 items-center cursor-pointe"
        >
          <Image
            className="rounded-md"
            height={80}
            width={80}
            src="/images/Logo.png"
            alt="logo of Holiday International"
          />
          <span className="lg:text-2xl mt-7">Holiday International</span>
        </Link>
        <div className="hidden md:inline-flex items-center gap-7">
          {navigation.map((item) => (
            <Link
              href={item.href}
              key={item.name}
              className={`relative group overflow-hidden ${pathName === item.href && "text-blue-600"}`}
            >
              {item.name}
              <span
                className={`w-full h-[1px] inline-flex absolute bottom-0 left-0 dark:bg-white -translate-x-[105%] group-hover:translate-x-0 duration-300 ${pathName === item.href ? "bg-blue-600 dark:bg-blue-600 translate-x-0" : "bg-black dark:bg-white"}`}
              />
            </Link>
          ))}
        </div>
        <ThemeButton />
      </section>
    </nav>
  );
}

import Container from "@/components/Container";
import Hero from "@/components/HomePage/Hero";
import Image from "next/image";
import { Poppins } from "next/font/google";
import HomePage from "@/components/HomePage/HomePage";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <main className={poppins.className}>
      <HomePage />
      
    </main>
  );
}

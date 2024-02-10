import React from "react";
import Hero from "./Hero";
import Container from "../Container";
import BangladeshDestination from "./BangladeshDestination";
import InternationalDestination from "./InternationalDestination";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Container>
        <BangladeshDestination />
        <InternationalDestination />
      </Container>
    </main>
  );
}

import React from "react";
import Hero from "./Hero";
import Container from "../Container";
import BangladeshDestination from "./BangladeshDestination";
import InternationalDestination from "./InternationalDestination";
import WhatsApp from "../WhatsApp";
import Promotions from "./Promotions";

export default function HomePage() {
  return (
    <main>
      <WhatsApp />
      <Hero />
      <Container>
        <BangladeshDestination />
      </Container>
      <Promotions />
      <Container>
        <InternationalDestination />
      </Container>
    </main>
  );
}

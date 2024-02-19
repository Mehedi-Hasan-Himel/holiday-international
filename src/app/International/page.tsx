import Container from "@/components/Container";
import React from "react";
import InternationalDestination from "@/components/HomePage/InternationalDestination";

export default function International() {
  return (
    <Container className="mt-20 flex flex-col gap-3">
      <InternationalDestination />
    </Container>
  );
}

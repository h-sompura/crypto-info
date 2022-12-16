import React from "react";
import Container from "../components/Container";
// Component Imports
import Heading from "../components/Heading";
import StyledInput from "../components/StyledInput";
const Home = () => {
  return (
    <Container justifyContent="space-between" alignItems="center">
      <Heading>Crypto Info</Heading>
      <StyledInput placeholder="🔍  Search for a coin" />
    </Container>
  );
};

export default Home;

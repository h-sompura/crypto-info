import React from "react";
// Component Imports
import Container from "./Container";
import Heading from "./Heading";
import StyledInput from "./StyledInput";
const Header = () => {
  return (
    <Container isFlex justifyContent="space-between" alignItems="center">
      <Heading>Crypto Info</Heading>
      <StyledInput placeholder="🔍  Search for a coin" />
    </Container>
  );
};

export default Header;

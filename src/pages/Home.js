import React from "react";
import CoinTable from "../components/CoinTable";
import Container from "../components/Container";
import Header from "../components/Header";

const Home = () => {
  return (
    <Container>
      <Header />
      <br />
      <CoinTable />
    </Container>
  );
};

export default Home;

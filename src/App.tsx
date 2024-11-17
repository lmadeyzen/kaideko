import styled from "styled-components";
import { Navigation } from "./sections/Navigation";
import { Header } from "./sections/Header";
import { AboutUs } from "./sections/AboutUs";
import { Duties } from "./sections/Duties";
import { Outsourcing } from "./sections/Outsourcing";
import { Expertise } from "./sections/Expertise";
import { Footer } from "./sections/Footer";

const Main = styled.main`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1400px) {
    padding: 0 4rem;
  }

  @media (max-width: 1200px) {
    padding: 0 3rem;
  }

  @media (max-width: 992px) {
    padding: 0 2rem;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  @media (max-width: 576px) {
    padding: 0 0.5rem;
  }

  @media (max-width: 430px) {
    padding: 0 0.5rem;
  }
`;

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <Main>
        <AboutUs />
        <Duties />
        <Outsourcing />
        <Expertise />
      </Main>
      <Footer />
    </>
  );
}

export default App;

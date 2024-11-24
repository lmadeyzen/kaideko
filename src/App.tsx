import styled from "styled-components";
import { Navigation } from "./sections/Navigation";
import { Header } from "./sections/Header";
import { AboutUs } from "./sections/AboutUs";
import { Duties } from "./sections/Duties";
import { Outsourcing } from "./sections/Outsourcing";
import { Expertise } from "./sections/Expertise";
import { Footer } from "./sections/Footer";
import { breakpoints } from "./constants";

const { s, l, m, xs } = breakpoints;

const Main = styled.main`
  max-width: 1380px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 0.5rem;

  @media (min-width: ${xs}) {
    padding: 0 0.5rem;
  }

  @media (min-width: ${s}) {
    padding: 0 1rem;
  }

  @media (min-width: ${m}) {
    padding: 0 2rem;
  }

  @media (min-width: ${l}) {
    padding: 0 3rem;
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

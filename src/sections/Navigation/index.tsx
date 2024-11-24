import styled from "styled-components";
import { sectionIds } from "../../constants";
import { NavigationHamburger } from "./components/NavigationHamburger";

export type NavigationLinks = Array<{ label: string; id: string }>;

const { aboutUs, duties, outsourcing, expertise, contact } = sectionIds;

const Nav = styled.nav`
  top: 0;
  position: fixed;
  height: 5rem;
  width: 100%;
  z-index: 1;
`;

export const Navigation = () => {
  const navigationList = [
    { label: "KIM JESTEŚMY ?", id: aboutUs },
    { label: "OBOWIĄZKI PRZEDSIĘBIORCY", id: duties },
    { label: "OUTSOURCING FIRM", id: outsourcing },
    { label: "OPRACOWANIA I EKSPERTYZY ŚRODOWISKOWE", id: expertise },
    { label: "KONTAKT", id: contact },
  ];

  return (
    <Nav>
      <NavigationHamburger links={navigationList} />
    </Nav>
  );
};

import styled from "styled-components";
import { icons } from "../../assets/icons";
import { FlowerSection } from "../../components/FlowerSection";
import { SectionHeader } from "../../components/SectionHeader";
import { breakpoints, sectionIds } from "../../constants";
import { TextContainer } from "../../components/StyledComponets";

const list = [
  "Raport początkowy i raport końcowy",
  "Raport o oddziaływaniu przedsięwzięcia na środowisko",
  "Karta informacyjna przedsięwzięcia (KIP)",
  "Wniosek o wydanie pozwolenia zintegrowanego",
  "Wniosek o wydanie pozwolenia na wprowadzanie gazów lub pyłów do powietrza",
  "Wniosek o wydanie pozwolenia wodnoprawnego",
  "Wniosek o wydanie decyzji w zakresie gospodarki odpadami",
  "Zgłoszenie instalacji",
  "Przegląd ekologiczny",
  "Analiza porealizacyjna",
  "Program / plan gospodarki odpadami",
  "Program ochrony środowiska",
  "Programy niskiej emisji",
];

const List = styled.ul`
  margin-top: 1rem;
  padding-left: 1.5rem;
`;

const P = styled.p`
  text-align: center;

  @media (min-width: ${breakpoints.m}) {
    font-size: 1.2rem;
  }
`;

export const Expertise = () => {
  return (
    <FlowerSection id={sectionIds.expertise}>
      <>
        <SectionHeader
          iconSize={2.8}
          icon={icons.list}
          text="Opracowania i eskpertyzy środowiskowe"
        />
        <TextContainer>
          <P>
            <b>
              Uczestniczymy w projektach, na każdym etapie procesu
              inwestycyjnego.
            </b>
          </P>
          <P>
            Sporządzamy profesjonalne opracowania i dokumentacje z zakresu
            ochrony środowiska zgodnie z obowiązującymi wymaganiami prawnymi
            tj.:
          </P>
          <List>
            {list.map((label, i) => (
              <li key={i}>{label}</li>
            ))}
          </List>
        </TextContainer>
      </>
    </FlowerSection>
  );
};

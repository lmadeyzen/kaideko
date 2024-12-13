import styled from "styled-components";
import { SectionHeader } from "../../components/SectionHeader";
import { icons } from "../../assets/icons";
import { Text } from "../../components/Text";
import { FlowerSection } from "../../components/FlowerSection";
import { breakpoints, sectionIds } from "../../constants";
import {
  ChildList,
  MainList,
  TextContainer,
} from "../../components/StyledComponets";

const list = [
  { label: <b>Audyt środowiskowy</b> },
  {
    label: "Kontrola zgodności działalności z aktualnymi wymaganiami prawnymi",
  },
  { label: "Doradztwo formalno-prawne" },
  { label: "Realizacja zarządzeń pokontrolnych WIOŚ" },
  {
    label: (
      <>
        <b>Kompleksowa obsługa systemu BDO</b>, w tym m.in.
      </>
    ),
    list: [
      "Rejestracja w systemie BDO",
      "Ewidencja odpadów w BDO",
      "Sprawozdania roczne w BDO",
    ],
  },
  { label: "Bilans LZO" },
  { label: "Opłaty środowiskowe" },
  { label: <b>Raporty KOBIZE</b> },
  { label: "Sprawozdanie PRTR" },
  {
    label: (
      <>
        <b>Raporty ESG</b> i obliczanie śladu węglowego
      </>
    ),
  },
];

const P = styled.p`
  text-align: center;
  margin-bottom: 1rem;

  @media (min-width: ${breakpoints.m}) {
    font-size: 1.2rem;
  }
`;

export const Outsourcing = () => {
  return (
    <FlowerSection id={sectionIds.outsourcing}>
      <>
        <SectionHeader text="Outsourcing firm" icon={icons.puzzle} />
        <TextContainer>
          <P>
            Nasza obsługa abonamentowa pozwala na przejęcie całości bądź części
            obowiązków firmy z zakresu ochrony środowiska. Do każdego Klienta
            podchodzimy indywidualnie przygotowując ofertę cenową tak aby była
            ona dostosowana do jego indywidualnych potrzeb i oczekiwań.
          </P>
          <Text>{"Zakres naszej abonamentowej obsługi:"}</Text>
          <MainList>
            {list.map((listElement) => {
              if (listElement.list) {
                return (
                  <>
                    <li>{listElement.label}</li>
                    <ChildList>
                      {listElement.list.map((label) => (
                        <li>{label}</li>
                      ))}
                    </ChildList>
                  </>
                );
              }
              return <li>{listElement.label}</li>;
            })}
          </MainList>
        </TextContainer>
      </>
    </FlowerSection>
  );
};

import styled from "styled-components";
import { icons } from "../../assets/icons";
import { FlowerSection } from "../../components/FlowerSection";
import { SectionHeader } from "../../components/SectionHeader";
import { breakpoints, sectionIds } from "../../constants";
import {
  ChildList,
  MainList,
  TextContainer,
} from "../../components/StyledComponets";

const list = [
  { label: "Raport początkowy i raport końcowy" },
  { label: "Raport o oddziaływaniu przedsięwzięcia na środowisko" },
  { label: "Karta informacyjna przedsięwzięcia (KIP)" },
  { label: "Wniosek o wydanie pozwolenia zintegrowanego" },
  {
    label:
      "Wniosek o wydanie pozwolenia na wprowadzanie gazów lub pyłów do powietrza",
  },
  { label: "Wniosek o wydanie pozwolenia wodnoprawnego" },
  {
    label: "Wniosek o wydanie decyzji w zakresie gospodarki odpadami",
    list: [
      "Pozwolenie na wytwarzanie odpadów",
      "Zezwolenie na przetwarzanie odpadów",
      "Zezwolenie na zbieranie odpadów ",
    ],
  },
  { label: "Zgłoszenie instalacji" },
  { label: "Przegląd ekologiczny" },
  { label: "Analiza porealizacyjna" },
  { label: "Program / plan gospodarki odpadami" },
  { label: "Program ochrony środowiska" },
  { label: "Programy niskiej emisji" },
];

const List = styled(MainList)`
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
          text="Opracowania i ekspertyzy środowiskowe"
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
          </List>
        </TextContainer>
      </>
    </FlowerSection>
  );
};

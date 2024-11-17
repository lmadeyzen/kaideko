import styled from "styled-components";
import { icons } from "../../assets/icons";
import { SectionHeader } from "../../components/SectionHeader";
import { sectionIds } from "../../constants";

const Wrapper = styled.div`
  /* border: 1px solid red; */
  padding: 3rem 0;
  color: black;
  scroll-margin: 2rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;
  gap: 1rem;
`;

const P = styled.p`
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
`;

const H3 = styled.h3`
  font-size: 1.5rem;
  font-weight: 300;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  gap: 0.5rem;
`;

const ListElement = styled.li`
  display: flex;
  gap: 1rem;
  align-items: center;
  svg {
    min-height: 1.5rem;
    max-height: 1.5rem;
    min-width: 1.5rem;
    max-width: 1.5rem;
  }
`;

const list = [
  "oferujemy obsługę na najwyższym poziomie",
  "dysponujemy doświadczonym i kompetentnym zespołem",
  "jesteśmy terminowi",
  "zapewniamy pełną poufność i dyskrecje",
  "działamy w branży od 2012 r. i mamy setki zadowolonych Klientów !",
];

export const AboutUs = () => {
  return (
    <Wrapper id={sectionIds.aboutUs}>
      <SectionHeader
        text="Kim Jesteśmy?"
        iconSize={4}
        icon={icons.flowerSmall}
      />
      <TextContainer>
        <P>
          Specjalizujemy się w bieżącej obsłudze firm w zakresie ochrony
          środowiska
          <br />- oferujemy kompleksowe doradztwo, audyty i szkolenia.
        </P>
        <P>
          Współpracujemy z branżystami o dużym doświadczeniu praktycznym i
          naukowym w zakresie prawa, ekologii, ochrony przyrody, gospodarki
          odpadami jak i przepisów przeciwpożarowych.
        </P>
        <H3>Dlaczego my?</H3>
        <List>
          {list.map((label, i) => (
            <ListElement key={i}>
              {icons.checkMarc}
              <p>{label}</p>
            </ListElement>
          ))}
        </List>
      </TextContainer>
    </Wrapper>
  );
};

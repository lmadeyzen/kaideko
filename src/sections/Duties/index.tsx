import styled from "styled-components";
import { icons } from "../../assets/icons";
import { SectionHeader } from "../../components/SectionHeader";
import { colors, sectionIds } from "../../constants";
import { Text } from "../../components/Text";
import { RotatingTile, Tile } from "./components/Tile";

const Wrapper = styled.section`
  padding: 2rem 0;
  scroll-margin: 2.9rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, calc(50vw - 0.12rem));
  gap: 0.4rem;

  p {
    font-size: 1.1rem;
    font-weight: 600;
  }
`;

const RectangleText = styled.p`
  display: flex;
  flex-direction: column;
`;

const TextWithCheckmark = styled.p`
  font-size: 1.6rem !important;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  margin: 0.3rem 0;

  svg {
    height: 1.6rem;
    path {
      fill: white;
    }
  }
`;

export const Duties = () => {
  return (
    <Wrapper id={sectionIds.duties}>
      <SectionHeader text="Obowiązki przedsiębiorcy" icon={icons.light} />
      <Grid>
        <Tile color={colors.lightBlue}>
          <Text fontWeight={300}>
            Czy wiesz, że 90% przedsiębiorców posiada obowiązki w zakresie
            ochrony środowiska ?
          </Text>
          <RectangleText>
            <Text fontWeight={300}>
              Jeśli na któreś z pytań na kafelkach odpowiesz:
            </Text>
            <TextWithCheckmark>TAK {icons.checkMarc}</TextWithCheckmark>
            <Text fontWeight={300}>- Skontaktuj się z nami!</Text>
          </RectangleText>
          <Text fontWeight={300}>
            Pomożemy zweryfikować twoje obowiązki i zajmiemy się nimi!
          </Text>
        </Tile>
        <RotatingTile
          color={colors.lightGreen}
          frontText="Czy wytwarzasz odpady?"
          backText="Lorem ipsum dolor sit amet"
        />
        <RotatingTile
          backText="Lorem ipsum dolor sit amet"
          frontText="Czy planujesz nową inwestycję albo chcesz rozwinąć już działającą
            firmę?"
        />
        <RotatingTile
          backText="Lorem ipsum dolor sit amet"
          frontText="Czy emitujesz zanieczyszczenia do powietrza?"
        />
        <RotatingTile
          color={colors.lightGreen}
          backText="Lorem ipsum dolor sit amet"
          frontText="Czy posiadasz pozwolenia w zakresie korzystania ze środowiska?"
        />
        <RotatingTile
          color={colors.lightGreen}
          backText="Lorem ipsum dolor sit amet"
          frontText="Czy pobierasz wodę i generujesz ścieki?"
        />
        <RotatingTile
          backText="Lorem ipsum dolor sit amet"
          frontText="Czy ponosisz opłaty za korzystanie ze środowiska?"
        />
      </Grid>
    </Wrapper>
  );
};

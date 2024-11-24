import styled from "styled-components";
import { icons } from "../../assets/icons";
import { SectionHeader } from "../../components/SectionHeader";
import { breakpoints, colors, sectionIds } from "../../constants";
import { Text } from "../../components/Text";
import { RotatingTile, Tile } from "./components/Tile";
import { useEffect, useRef, useState } from "react";

const { s, xl, l, m, xs, xxl } = breakpoints;

const Wrapper = styled.section`
  padding: 2rem 0;
  scroll-margin: 2.9rem;
`;

const Grid = styled.div<{ currentWidth: number }>`
  display: grid;
  grid-template-rows: ${({ currentWidth }) =>
    `repeat(4, calc(${currentWidth / 2}px - 0.25rem))`};
  grid-template-columns: ${({ currentWidth }) =>
    `repeat(2, calc(${currentWidth / 2}px - 0.25rem))`};
  gap: 0.4rem;

  p {
    font-size: 1.1rem;
    font-weight: 600;
  }

  @media (min-width: ${xs}) {
  }

  @media (min-width: ${s}) {
    gap: 1rem;
    p {
      font-size: 1.2rem;
    }

    grid-template-rows: ${({ currentWidth }) =>
      `repeat(4, calc(${currentWidth / 2}px - 0.5rem))`};
    grid-template-columns: ${({ currentWidth }) =>
      `repeat(2, calc(${currentWidth / 2}px - 0.5rem))`};
  }

  @media (min-width: ${m}) {
    gap: 1.5rem;
    p {
      font-size: 1.4rem;
    }

    grid-template-rows: ${({ currentWidth }) =>
      `repeat(4, calc(${currentWidth / 2}px - 0.75rem))`};
    grid-template-columns: ${({ currentWidth }) =>
      `repeat(2, calc(${currentWidth / 2}px - 0.75rem))`};
  }

  @media (min-width: ${l}) {
    p {
      font-size: 1.2rem;
    }

    grid-template-rows: ${({ currentWidth }) =>
      `repeat(2, calc(${currentWidth / 4}px - 0.25rem))`};
    grid-template-columns: ${({ currentWidth }) =>
      `repeat(4, calc(${currentWidth / 4}px - 0.25rem))`};
    gap: 0.5rem;
  }

  @media (min-width: ${xl}) {
    p {
      font-size: 1.4rem;
    }

    grid-template-rows: ${({ currentWidth }) =>
      `repeat(2, calc(${currentWidth / 4}px - 1rem))`};
    grid-template-columns: ${({ currentWidth }) =>
      `repeat(4, calc(${currentWidth / 4}px - 1rem))`};
    gap: 1.5rem;
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

  @media (min-width: ${m}) {
    font-size: 2rem !important;

    svg {
      height: 2rem;
    }
  }

  @media (min-width: ${l}) {
    font-size: 1.6 !important;

    svg {
      height: 1.6rem;
    }
  }

  @media (min-width: ${xxl}) {
  }
`;

export const Duties = () => {
  const [currentWidth, setCurrentWidth] = useState(0);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (wrapperRef.current) {
      setCurrentWidth(wrapperRef.current.getBoundingClientRect().width);
    }

    window.addEventListener("resize", () => {
      if (wrapperRef.current) {
        setCurrentWidth(wrapperRef.current.getBoundingClientRect().width);
      }
    });
  }, []);

  return (
    <Wrapper ref={wrapperRef} id={sectionIds.duties}>
      <SectionHeader text="Obowiązki przedsiębiorcy" icon={icons.light} />
      <Grid currentWidth={currentWidth}>
        <Tile key={1} color={colors.lightBlue}>
          <Text fontWeight={300}>
            Czy wiesz, że 90% przedsiębiorców posiada obowiązki w zakresie
            ochrony środowiska?
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
          key={2}
          color={colors.lightGreen}
          frontText="Czy wytwarzasz odpady?"
          backText="Lorem ipsum dolor sit amet"
        />
        <RotatingTile
          key={3}
          backText="Lorem ipsum dolor sit amet"
          frontText="Czy planujesz nową inwestycję albo chcesz rozwinąć już działającą
            firmę?"
        />
        <RotatingTile
          key={4}
          backText="Lorem ipsum dolor sit amet"
          frontText="Czy emitujesz zanieczyszczenia do powietrza?"
        />
        <RotatingTile
          key={5}
          color={colors.lightGreen}
          backText="Lorem ipsum dolor sit amet"
          frontText="Czy posiadasz pozwolenia w zakresie korzystania ze środowiska?"
        />
        <RotatingTile
          key={6}
          color={colors.lightGreen}
          backText="Lorem ipsum dolor sit amet"
          frontText="Czy pobierasz wodę i generujesz ścieki?"
        />
        <RotatingTile
          key={7}
          backText="Lorem ipsum dolor sit amet"
          frontText="Czy ponosisz opłaty za korzystanie ze środowiska?"
        />
      </Grid>
    </Wrapper>
  );
};

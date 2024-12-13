import styled from "styled-components";
import { icons } from "../../assets/icons";
import { SectionHeader } from "../../components/SectionHeader";
import { breakpoints, colors, sectionIds } from "../../constants";
import { Text } from "../../components/Text";
import { RotatingTile, Tile } from "./components/Tile";
import { useEffect, useRef, useState } from "react";

const { s, xl, l, m, xs, xxl } = breakpoints;

const tilesData = [
  {
    color: colors.lightGreen,
    frontText: "Czy wytwarzasz odpady?",
    backText: `Jeśli wytwarzasz odpady inne niż odpady komunalne jesteś zobowiązany do prowadzenia ich
ewidencji i uzyskania wpisu do rejestru BDO.<br /><br />
Jeśli eksploatujesz instalację, w której wytwarzasz  odpady w ilościach przekraczających ustawowe
progi - jesteś zobowiązany do uzyskania decyzji – pozwolenia na wytwarzanie odpadów.<br /><br />
Jeśli przetwarzasz odpady musisz posiadać decyzje na zbieranie i przetwarzanie odpadów.<br /><br />
Jeśli transportujesz odpady jesteś zobowiązany do uzyskania odpowiedniego wpisu w systemie BDO.`,
    orderLeft: false,
  },
  {
    color: colors.gray,
    frontText:
      "Czy planujesz nową inwestycję albo chcesz rozwinąć już działającą firmę?",
    backText:
      "Wspieramy Klientów na różnych etapach procesu inwestycyjnego – pomagamy w uzyskaniu niezbędnych decyzji na etapie realizacji - tj. decyzja o środowiskowych uwarunkowaniach, decyzja pozwolenie na budowę, a następnie decyzji sektorowych niezbędnych do prawidłowej eksploatacji inwestycji m.in. w zakresie emisji do powietrza, gospodarki odpadami czy gospodarki wodno-ściekowej.",
    orderLeft: false,
  },
  {
    color: colors.gray,
    frontText: "Czy emitujesz zanieczyszczenia do powietrza?",
    backText:
      "Jeśli emitujesz gazy lub pyły do powietrza musisz uzyskać pozwolenie na emisję lub dokonać zgłoszenia. Ponadto musisz sporządzić raport do KOBIZE oraz składać do Marszałka wykazy zawierające zbiorcze zestawienie informacji o zakresie korzystania ze środowiska.",
    orderLeft: true,
  },
  {
    color: colors.lightGreen,
    frontText: "Czy posiadasz pozwolenia w zakresie korzystania ze środowiska?",
    backText:
      "Skontaktuj się z nami, jeśli chcesz przeprowadzić audyt środowiskowy prowadzonej działalności lub potrzebujesz wsparcia we wdrożeniu zarządzeń pokontrolnych lub jeśli wprowadziłeś istotne zmiany w prowadzonej działalności objętej pozwoleniami.",
    orderLeft: false,
  },
  {
    color: colors.lightGreen,
    frontText: "Czy pobierasz wodę i generujesz ścieki?",
    backText:
      "Jeśli w sposób szczególny korzystasz z wód np. wprowadzając ścieki do urządzeń kanalizacyjnych innych podmiotów, korzystasz z usług wodnych (odprowadzasz wody deszczowe, pobierasz wody podziemne) - podlegasz pod obowiązek sporządzenia operatu wodnoprawnego – uzyskania pozwolenia wodnoprawnego.<br /><br /> Korzystanie z usług wodnych nakłada opłaty stałe i zmienne wnoszone do Wód Polskich,<br /><br /> Jeżeli planujesz wykonać urządzenie wodne w postaci m.in. studni, wylotu, rowu, kanału, budowli piętrzącej lub planujesz zarurować rów, również musisz uzyskać pozwolenie wodnoprawne!",
    orderLeft: true,
  },
  {
    color: colors.gray,
    frontText: "Czy ponosisz opłaty za korzystanie ze środowiska?",
    backText:
      "Jeśli np. eksploatujesz samochody, wózki widłowe, maszyny, posiadasz klimatyzacje w samochodach firmowych i budynkach, ogrzewasz pomieszczenia kotłami spalającymi gaz, drewno, węgiel i inne paliwa, posiadasz zbiorniki na paliwo lub agregat, lakierujesz, spawasz lub prowadzisz procesy technologiczne - jesteś zobowiązany składać raporty w KOBIZE, składać do Marszałka oświadczenia lub wykazy zawierające zbiorcze zestawienie informacji o zakresie korzystania ze środowiska, a po przekroczeniu ustawowych progów wnosić opłaty za korzystanie ze środowiska!",
    orderLeft: false,
  },
];

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
  const [openedTile, setOpenedTile] = useState(-1);

  const handleTile = (index: number) => {
    setOpenedTile(index);
  };

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
        <Tile
          preventToFlip={true}
          isFlipped={false}
          key={0}
          color={colors.lightBlue}
        >
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
        {tilesData.map((tile, i) => (
          <RotatingTile
            key={i + 1}
            index={i + 1}
            openedTile={openedTile}
            handleTile={handleTile}
            backText={tile.backText}
            frontText={tile.frontText}
            color={tile.color}
            currentWidth={currentWidth}
          />
        ))}
      </Grid>
    </Wrapper>
  );
};

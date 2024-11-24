import styled from "styled-components";
import { SectionHeader } from "../../components/SectionHeader";
import { breakpoints, colors, sectionIds } from "../../constants";
import { icons } from "../../assets/icons";

const { s, l, m, xs, xxl } = breakpoints;

const StyledFooter = styled.footer`
  padding: 2rem 0;
  padding-bottom: 6rem;
  position: relative;
  max-width: 100vw;
  overflow: hidden;
  font-size: 1.3rem;
`;

const LeftElement = styled.div`
  position: absolute;
  z-index: -1;
  right: -50%;
  top: -30px;
  svg {
    height: 100vw;
    width: 100%;
    path {
      fill: #92b2b75e;
    }
  }

  @media (min-width: ${xxl}) {
    top: -300px;
    right: -900px;

    svg {
      path {
        fill: ${colors.lightBlue};
      }
    }
  }
`;

const RightElement = styled.div`
  position: absolute;
  z-index: -1;
  top: 70px;
  left: -40%;
  svg {
    height: 100vw;
    width: 100%;
    path {
      fill: #95ad734e;
    }
  }

  @media (min-width: ${xxl}) {
    /* top: -300px;
    left: -300px; */
    top: 100px;
    left: -350px;
    svg {
      width: 1000px;
      height: 1000px;
      path {
        fill: ${colors.lightGreen};
      }
    }
  }
`;

const Contact = styled.div`
  margin-top: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  max-width: 1380px;
  margin-left: auto;
  margin-right: auto;

  & > :last-child {
    margin-top: 1rem;
  }

  @media (min-width: ${xs}) {
    padding: 2rem 0.5rem;
  }

  @media (min-width: ${s}) {
    padding: 2rem 1rem;
  }

  @media (min-width: ${m}) {
    padding: 2rem 2rem;
  }

  @media (min-width: ${l}) {
    padding: 2rem 3rem;
  }
`;

const P = styled.p``;

const ContactText = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 36.5rem;

  @media (min-width: ${s}) {
    margin-left: auto;
    margin-right: auto;

    & > :first-child {
      margin-bottom: 2rem;
    }

    & > :last-child {
      margin-top: 2rem;
    }
  }

  @media (min-width: ${m}) {
    max-width: 42rem;

    p {
      font-size: 1.3rem;
    }
    & > :first-child {
      font-size: 1.6rem;
    }

    & > :last-child {
      font-size: 1.6rem;
    }
  }
`;

const ContactElement = styled.div`
  display: flex;
  font-size: 1.1rem;
  align-items: center;
  gap: 0.5rem;

  svg {
    height: 1.6rem;
  }
`;

export const Footer = () => {
  return (
    <StyledFooter id={sectionIds.contact}>
      <LeftElement>{icons.footerRight}</LeftElement>
      <RightElement>{icons.footer}</RightElement>
      <Contact>
        <SectionHeader text="Kontakt" iconSize={2.8} icon={icons.people} />

        <ContactText>
          <P>Skontaktuj się z nami i umów na darmową konsultacje!</P>
          <ContactElement>
            {icons.pin}
            <p>
              Kaideko sp. z o.o.
              <br /> ul. Skośna 12, 30-383 Kraków
            </p>
          </ContactElement>
          <ContactElement>
            {icons.phone}
            <p>tel.: 508 505 986</p>
          </ContactElement>
          <ContactElement>
            {icons.mail}
            <p>e-mail: biuro@kaideko.pl</p>
          </ContactElement>
          <ContactElement>
            {icons.web}
            <p>www.kaideko.pl</p>
          </ContactElement>
          <p>Dzięki nam przestaniesz martwić się o swój biznes!</p>
        </ContactText>
      </Contact>
    </StyledFooter>
  );
};

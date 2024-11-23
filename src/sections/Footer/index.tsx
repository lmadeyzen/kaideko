import styled from "styled-components";
import { SectionHeader } from "../../components/SectionHeader";
import { sectionIds } from "../../constants";
import { icons } from "../../assets/icons";

const StyledFooter = styled.footer`
  padding: 2rem 0.5rem;
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
`;

const Contact = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-left: 4rem;
  padding-right: 4rem;

  & > :last-child {
    margin-top: 1rem;
  }
`;

const P = styled.p``;

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
      <SectionHeader text="Kontakt" iconSize={2.8} icon={icons.people} />
      <LeftElement>{icons.footerRight}</LeftElement>
      <RightElement>{icons.footer}</RightElement>
      <Contact>
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
      </Contact>
    </StyledFooter>
  );
};

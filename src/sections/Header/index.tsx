import styled from "styled-components";
import { icons } from "../../assets/icons";
import logo from "../../assets/logo.png";
import { breakpoints } from "../../constants";

const HeaderStyled = styled.header`
  position: relative;
  padding: 0 0.2rem;
  overflow: hidden;
  background-color: #fefefe;
  margin-bottom: 1rem;
`;

const LeftElement = styled.div`
  left: -5rem;
  max-width: 200px;
  position: absolute;
  top: -1rem;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const RightElement = styled.div`
  max-width: 100%;
  position: absolute;

  top: -11rem;
  right: -7rem;

  svg {
    width: 400px;
    height: 100%;
  }
`;

const ElementsWrapper = styled.div`
  position: relative;
  top: 5rem;
  height: 15.5rem;
`;

const LogoMain = styled.img`
  width: 100%;
  padding-bottom: 1rem;
`;

const P = styled.p`
  font-size: 1.05rem;
  margin-left: 0.5rem;
  border-left: 2px solid black;
  padding-left: 0.4rem;
  font-family: "Archivo Narrow", sans-serif;
  font-weight: 300;

  @media (max-width: ${breakpoints.xs}) {
    font-size: 1.05rem;
    border: 1px solid red;
  }

  @media (max-width: ${breakpoints.xxs}) {
    font-size: 1.02rem;
  }
`;

const Logo = styled.div``;

export const Header = () => {
  return (
    <HeaderStyled>
      <ElementsWrapper>
        <LeftElement>{icons.headerRight}</LeftElement>
        <RightElement>{icons.header}</RightElement>
      </ElementsWrapper>
      <Logo>
        <LogoMain src={logo} />
        <P>
          OUTSOURCING FIRM
          <br />
          OPRACOWANIA I EKSPERTYZY ŚRODOWISKOWE
        </P>
      </Logo>
    </HeaderStyled>
  );
};

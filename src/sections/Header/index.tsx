import styled from "styled-components";
import { icons } from "../../assets/icons";
import logo from "../../assets/logo-big.png";
import { breakpoints } from "../../constants";

const { xxl, xl, l, m, s, xs } = breakpoints;

const HeaderStyled = styled.header`
  position: relative;
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

  @media (min-width: ${s}) {
    max-width: 300px;
  }

  @media (min-width: ${l}) {
    max-width: 400px;
  }

  @media (min-width: ${xl}) {
    max-width: 500px;
    left: -8rem;
  }

  @media (min-width: ${xxl}) {
    max-width: 600px;
    left: -8rem;
  }
`;

const RightElement = styled.div`
  max-width: 400px;
  position: absolute;

  top: -11rem;
  right: -7rem;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (min-width: ${s}) {
    top: -18rem;
    max-width: 600px;
  }

  @media (min-width: ${l}) {
    top: -24rem;
    max-width: 800px;
  }

  @media (min-width: ${xl}) {
    top: -28rem;
    max-width: 1000px;
  }

  @media (min-width: ${xxl}) {
    top: -36rem;
    max-width: 1400px;
    right: -16rem;
  }
`;

const ElementsWrapper = styled.div`
  position: relative;
  top: 5rem;
  height: 15.5rem;

  @media (min-width: ${s}) {
    height: 22rem;
  }

  @media (min-width: ${l}) {
    height: 26rem;
  }

  @media (min-width: ${xl}) {
    height: 32rem;
  }

  @media (min-width: ${xxl}) {
    height: 32rem;
  }
`;

const LogoImg = styled.img`
  width: 100%;
  padding-bottom: 1rem;
`;

const P = styled.p`
  font-size: 1.05rem;
  font-family: "Archivo Narrow", sans-serif;
  font-weight: 300;
`;

const Logo = styled.div`
  max-width: 1380px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  padding: 0 0.2rem;

  @media (min-width: ${xs}) {
    padding: 0 0.5rem;

    img {
      width: 90%;
    }

    p {
      font-size: 1.08 rem;
    }
  }

  @media (min-width: ${s}) {
    padding: 0 1rem;

    img {
      width: 80%;
    }

    p {
      font-size: 1.4rem;
    }
  }

  @media (min-width: ${m}) {
    padding: 0 2rem;
    flex-direction: row;
    justify-content: center;

    img {
      width: 35%;
      margin-right: 0.5rem;
    }

    span {
      margin: 0.8rem 0;
      margin-top: 1.5rem;
    }

    p {
      font-size: 1.2rem;
      top: 0.2rem;
      position: relative;
    }
  }

  @media (min-width: ${l}) {
    padding: 0 3rem;

    img {
      width: 45%;
    }

    span {
      margin: 1.5rem 0;
      margin-top: 3rem;
    }
  }

  @media (min-width: ${xl}) {
    padding: 0 2rem;

    img {
      width: 55%;
    }

    span {
      margin: 1.5rem 0;
      margin-top: 5.5rem;
    }

    p {
      font-size: 1.3rem;
    }
  }

  @media (min-width: ${xxl}) {
    padding: 0 0;

    img {
      width: 55%;
      margin-right: 1.2rem;
    }

    span {
      margin: 1.5rem 0;
      margin-top: 6rem;
    }

    p {
      padding-left: 1rem;
      font-size: 1.3rem;
    }
  }
`;

const TextContainer = styled.span`
  padding-left: 0.4rem;
  display: flex;
  align-items: end;
  border-left: 2px solid black;
`;

export const Header = () => {
  return (
    <HeaderStyled>
      <ElementsWrapper>
        <LeftElement>{icons.headerRight}</LeftElement>
        <RightElement>{icons.header}</RightElement>
      </ElementsWrapper>
      <Logo>
        <LogoImg src={logo} />
        <TextContainer>
          <P>
            OUTSOURCING FIRM
            <br />
            OPRACOWANIA I EKSPERTYZY ŚRODOWISKOWE
          </P>
        </TextContainer>
      </Logo>
    </HeaderStyled>
  );
};

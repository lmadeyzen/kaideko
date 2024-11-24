import styled from "styled-components";
import { icons } from "../assets/icons";
import { breakpoints, colors } from "../constants";

interface Props {
  text: string;
  icon: JSX.Element;
  iconSize?: number;
}

const Wrapper = styled.div`
  color: black;
  display: flex;
  position: relative;
  margin-bottom: 1rem;

  &::after {
    position: absolute;
    content: "";
    height: 1px;
    width: 78%;
    left: 11%;
    background-color: ${colors.darkGreen};
    top: -0.2rem;
  }

  @media (min-width: ${breakpoints.m}) {
    h2 {
      font-size: 2.5rem;
    }
  }

  @media (min-width: ${breakpoints.xl}) {
    h2 {
      font-size: 3.5rem;
    }
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const H2 = styled.h2`
  font-size: 1.8rem;
  font-weight: 300;
`;

const IconContainer = styled.div<{ iconSize?: number }>`
  background-color: black;
  min-height: 5rem;
  max-height: 5rem;
  min-width: 5rem;
  border-radius: 50%;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${breakpoints.m}) {
    min-height: 6rem;
    max-height: 6rem;
    min-width: 6rem;
  }

  @media (min-width: ${breakpoints.xl}) {
    min-height: 8rem;
    max-height: 8rem;
    min-width: 8rem;
  }

  svg {
    flex: 0 0 auto;
    height: ${({ iconSize }) => (iconSize ? `${iconSize}rem` : "3rem")};
    width: ${({ iconSize }) => (iconSize ? `${iconSize}rem` : "3rem")};
  }
`;

const Arrows = styled.div`
  margin-left: 3rem;
  svg {
    height: 1rem;
  }

  @media (min-width: ${breakpoints.m}) {
    svg {
      height: 1.4rem;
    }
  }

  @media (min-width: ${breakpoints.xl}) {
    svg {
      height: 2rem;
    }
  }
`;

export const SectionHeader = (props: Props) => {
  const { text, icon, iconSize } = props;

  return (
    <Wrapper>
      <TextContainer>
        <H2>{text}</H2>
        <Arrows>{icons.arrowsDown}</Arrows>
      </TextContainer>
      <IconContainer iconSize={iconSize}>{icon}</IconContainer>
    </Wrapper>
  );
};

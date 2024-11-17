import styled from "styled-components";
import { icons } from "../assets/icons";
import { colors } from "../constants";

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

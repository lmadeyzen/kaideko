import styled from "styled-components";
import { icons } from "../assets/icons";
import { breakpoints } from "../constants";

const { s } = breakpoints;

const Wrapper = styled.section`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  scroll-margin: 3rem;
  position: relative;
`;

const FlowerBg = styled.div`
  svg {
    z-index: -1;
    position: absolute;
    width: 80%;
    right: -20%;
    top: 0;
  }

  @media (min-width: ${s}) {
    svg {
      width: 50%;
      right: 0;
      top: 0;
    }
  }
`;

const ImgWrapper = styled.div`
  position: relative;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
`;

interface Props {
  children: JSX.Element;
  id: string;
}

export const FlowerSection = (props: Props) => {
  const { id, children } = props;

  return (
    <Wrapper id={id}>
      <ImgWrapper>
        <FlowerBg>{icons.flower}</FlowerBg>
      </ImgWrapper>
      {children}
    </Wrapper>
  );
};

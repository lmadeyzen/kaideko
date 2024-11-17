import styled from "styled-components";
import { icons } from "../assets/icons";

const Wrapper = styled.section`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  scroll-margin: 3rem;
  position: relative;
`;

const FlowerBg = styled.div`
  z-index: -1;
  position: absolute;
  left: 45%;
  top: 20%;
  width: 100%;

  svg {
    width: 80%;
    height: 20%;
  }
`;

const ImgWrapper = styled.div`
  position: relative;
  overflow-x: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
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

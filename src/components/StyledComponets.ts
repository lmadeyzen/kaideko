import styled from "styled-components";

export const TextContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;
  gap: 1rem;
  max-width: 54rem;
`;

export const MainList = styled.ul`
  text-align: left;
  padding-left: 1.5rem;
  font-size: 1rem;

  b {
    font-weight: 600;
  }
`;

export const ChildList = styled.ul`
  padding-left: 2rem;
`;

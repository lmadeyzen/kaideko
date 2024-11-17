import styled from "styled-components";

interface Styles {
  white?: boolean;
  fontSize?: number;
  fontWeight?: number;
}

interface Props extends Styles {
  children: JSX.Element | string;
}

const P = styled.p<Styles>`
  font-size: ${({ fontSize }) =>
    fontSize ? `${fontSize}rem !important` : "1rem"};
  font-weight: ${({ fontWeight }) =>
    fontWeight ? `${fontWeight} !important` : "normal"};
  color: ${({ white }) => (white ? "white !important" : "black")};
`;

export const Text = (props: Props) => {
  return <P {...props}>{props.children}</P>;
};

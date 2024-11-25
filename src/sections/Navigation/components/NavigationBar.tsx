import styled from "styled-components";
import { NavigationLinks } from "..";
import { breakpoints, colors } from "../../../constants";

interface Props {
  links: NavigationLinks;
}

const Wrapper = styled.div`
  display: none;
  height: 100%;
  width: 100%;
  background-color: rgba(256, 256, 256, 0.5);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  padding: 0 3rem;

  &::after {
    position: absolute;
    content: "";
    height: 1px;
    width: 78%;
    left: 11%;
    background-color: ${colors.darkGreen};
    bottom: 0;
  }

  @media (min-width: ${breakpoints.l}) {
    display: flex;
  }
`;

const List = styled.ul`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1380px;
  margin-top: 1rem;
  font-size: 0.9rem;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${breakpoints.xl}) {
    font-size: 1rem;
  }
`;

const Link = styled.a`
  color: black;
  text-decoration: none;
`;

export const NavigationBar = (props: Props) => {
  const { links } = props;

  return (
    <Wrapper>
      <List>
        {links.map(({ label, id }) => (
          <Link key={id} href={`#${id}`}>
            {label}
          </Link>
        ))}
      </List>
    </Wrapper>
  );
};

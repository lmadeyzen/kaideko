import styled from "styled-components";
import { NavigationLinks } from "..";

interface Props {
  links: NavigationLinks;
}

const List = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  font-size: 0.8125rem;
  height: 4rem;
  background-color: rgba(256, 256, 256, 0.8);
  padding-bottom: 0.6rem;
`;

const Link = styled.a`
  color: black;
  text-decoration: none;
`;

export const NavigationBar = (props: Props) => {
  const { links } = props;

  return (
    <List>
      {links.map(({ label, id }) => (
        <Link key={id} href={`#${id}`}>
          {label}
        </Link>
      ))}
    </List>
  );
};

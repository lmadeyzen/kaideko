import { useState } from "react";
import { NavigationLinks } from "..";
import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowRoundForward } from "react-icons/io";
import { breakpoints, colors } from "../../../constants";
import logo from "../../../assets/logo.png";

interface Props {
  links: NavigationLinks;
}

const transition = "0.4s";

const Wrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  width: 100%;
  position: relative;
  align-items: center;
  padding-left: 1rem;
  background-color: rgba(256, 256, 256, 0.5);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  height: 100%;

  &::after {
    position: absolute;
    content: "";
    height: 1px;
    width: 78%;
    left: 11%;
    background-color: ${colors.darkGreen};
    bottom: 0;
    transform: ${({ isOpen }) => `translateX(${isOpen ? "-60%" : 0})`};
    transition: all ${transition};
  }

  @media (min-width: ${breakpoints.l}) {
    display: none;
  }
`;

const HamburgerButton = styled.button`
  padding: 1rem;
  width: 4.5rem;
  height: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-left: auto;
`;

const IconWrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  min-width: 9rem;
  height: 4.5rem;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  transform: ${({ isOpen }) => `translate(${isOpen ? "-2.25rem" : "2.25rem"})`};
  transition: all 0.1s;
`;

const Menu = styled.ul<{ isOpen: boolean }>`
  transform: ${({ isOpen }) => `translateX(${isOpen ? 0 : "-100%"})`};
  transition: all ${transition};
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 1rem;
  padding: 1rem 0;
  background-color: rgba(256, 256, 256, 0.5);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  list-style-type: none;
  padding-left: 1rem;
  font-size: 1.2rem;

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
    display: none;
  }
`;

const Link = styled.a`
  color: black;
  text-decoration: none;
`;

const Logo = styled.img`
  height: 40px;
`;

export const NavigationHamburger = (props: Props) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Wrapper isOpen={isOpen}>
        <Logo src={logo} />
        <HamburgerButton onClick={() => setOpen((prev) => !prev)}>
          <IconWrapper isOpen={isOpen}>
            <RxHamburgerMenu size={40} color={colors.darkGreen} />
            <IoIosArrowRoundForward size={40} color={colors.darkGreen} />
          </IconWrapper>
        </HamburgerButton>
      </Wrapper>
      <Menu isOpen={isOpen}>
        {props.links.map(({ label, id }) => (
          <li onClick={() => setOpen(false)}>
            <Link href={`#${id}`}>{label}</Link>
          </li>
        ))}
      </Menu>
    </>
  );
};

import styled, { css } from "styled-components";
import { breakpoints, colors } from "../../../constants";
import { useState } from "react";
import { Text } from "../../../components/Text";

const { s, l, xs } = breakpoints;

interface Props {
  frontText: string;
  backText: string;
  color?: string;
}

export const Tile = styled.div<{ color?: string; preventToFlip?: boolean }>`
  width: 100%;
  background-color: ${({ color }) => (color ? color : "transparent")};
  border-radius: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 1s;
  perspective: 1000px;
  cursor: ${({ preventToFlip }) => (preventToFlip ? "auto" : "pointer")};

  p {
    color: white;
  }

  &:nth-child(1) {
    grid-column: span 2 / span 2;
    gap: 1rem;
    padding: 0 1rem;

    @media (max-width: ${breakpoints.xxs}) {
      padding: 0 0.5rem;
      gap: 0.5rem;
    }
  }

  &:nth-child(2) {
    grid-row-start: 2;
  }

  &:nth-child(3) {
    grid-row-start: 2;
  }

  &:nth-child(4) {
    grid-row-start: 3;
  }

  &:nth-child(5) {
    grid-row-start: 3;
  }

  &:nth-child(6) {
    grid-row-start: 4;
  }

  &:nth-child(7) {
    grid-column: span 1 / span 1;
  }

  @media (min-width: ${l}) {
    &:nth-child(1) {
      grid-row: span 2 / span 2;
      grid-column: span 1 / span 3;
    }

    &:nth-child(2) {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 1;
    }

    &:nth-child(3) {
      grid-column-start: 2;
      grid-row-start: 2;
    }

    &:nth-child(4) {
      grid-column-start: 3;
      grid-row-start: 1;
    }

    &:nth-child(5) {
      grid-column-start: 3;
      grid-row-start: 2;
    }

    &:nth-child(6) {
      grid-column-start: 4;
      grid-row-start: 1;
    }

    &:nth-child(7) {
      grid-column-start: 4;
      grid-row-start: 2;
    }
  }
`;

const TileContent = styled.div<{ isFlipped: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 0.5s;
  transform-style: preserve-3d; // Preserve 3D effect

  ${({ isFlipped }) =>
    isFlipped &&
    css`
      transform: rotateY(180deg);
    `}
`;

const TileFace = styled.div<{ color?: string }>`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => (color ? color : colors.gray)};
  border-radius: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.1rem;

  &.back {
    transform: rotateY(180deg);
  }

  @media (min-width: ${xs}) {
    padding: 0.2rem;
  }

  @media (min-width: ${s}) {
    padding: 0.5rem;
  }
`;

export const RotatingTile = (props: Props) => {
  const { frontText, backText, color } = props;
  const [isFilpped, setIsFlipped] = useState(false);

  return (
    <Tile onClick={() => setIsFlipped((prev) => !prev)}>
      <TileContent isFlipped={isFilpped}>
        <TileFace color={color}>
          <Text>{frontText}</Text>
        </TileFace>
        <TileFace color={color} className="back">
          <Text>{backText}</Text>
        </TileFace>
      </TileContent>
    </Tile>
  );
};

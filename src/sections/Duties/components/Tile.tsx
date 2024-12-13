import styled, { css } from "styled-components";
import { breakpoints } from "../../../constants";
import { useEffect, useState } from "react";
import { Text } from "../../../components/Text";
import { darken } from "polished";

const { s, l, xs, m } = breakpoints;

interface Props {
  frontText: string;
  backText: string;
  color: string;
  currentWidth: number;
  index: number;
  openedTile: number;
  handleTile: (index: number) => void;
}

export const Tile = styled.div<{
  color?: string;
  preventToFlip?: boolean;
  isFlipped: boolean;
}>`
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
  z-index: ${({ isFlipped }) => (isFlipped ? 10 : 0)};
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

const TileContent = styled.div<{
  isFlipped: boolean;
  color: string;
  currentWidth: number;
  orderLeft?: boolean;
}>`
  z-index: ${({ isFlipped }) => (isFlipped ? 10 : 0)};
  background-color: ${({ color }) => color};
  box-shadow: ${({ color }) => `0px 0px 24px -7px ${color}`};
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all 0.5s 0.1s;
  transform-style: preserve-3d;
  border-radius: 1rem;

  ${({ isFlipped, color, currentWidth, orderLeft }) =>
    isFlipped &&
    css`
      background-color: ${darken(0.12, color)};
      transform: ${`translateX(${
        (currentWidth / 4) * (orderLeft ? 1 : -1)
      }px) rotateY(180deg) scale(1.8)`};
    `}

  @media (min-width: ${s}) {
    ${({ isFlipped, color, currentWidth, orderLeft }) =>
      isFlipped &&
      css`
        background-color: ${darken(0.12, color)};
        transform: ${`translateX(${
          (currentWidth / 4) * (orderLeft ? 1 : -1)
        }px) rotateY(180deg) scale(1.4)`};
      `}
  }

  @media (min-width: ${m}) {
    ${({ isFlipped, color }) =>
      isFlipped &&
      css`
        background-color: ${darken(0.12, color)};
        transform: ${` rotateY(180deg) scale(1.135)`};
      `}
  }

  @media (min-width: ${l}) {
    ${({ isFlipped, color }) =>
      isFlipped &&
      css`
        background-color: ${darken(0.12, color)};
        transform: ${` rotateY(180deg) scale(1.4)`};
      `}
  }

  @media (min-width: ${l}) {
    ${({ isFlipped, color }) =>
      isFlipped &&
      css`
        background-color: ${darken(0.12, color)};
        transform: ${` rotateY(180deg) scale(1.35)`};
      `}
  }
`;

const TileFace = styled.div<{ color?: string }>`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  left: 0;
  padding: 0.1rem;

  &.back {
    transform: rotateY(180deg);

    p {
      font-size: 0.53rem;

      @media (min-width: ${s}) {
        font-size: 0.75rem;
      }
      @media (min-width: ${m}) {
        font-size: 0.95rem;
      }
      @media (min-width: ${l}) {
        font-size: 0.65rem;
      }
      @media (min-width: ${l}) {
        font-size: 0.63rem;
      }
    }
  }

  @media (min-width: ${xs}) {
    padding: 0.2rem;
  }

  @media (min-width: ${s}) {
    padding: 0.5rem;
  }
`;

export const RotatingTile = (props: Props) => {
  const {
    frontText,
    backText,
    color,
    currentWidth,
    index,
    handleTile,
    openedTile,
  } = props;
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (openedTile !== index) {
      setIsFlipped(false);
    }
  }, [index, openedTile]);

  return (
    <Tile
      isFlipped={isFlipped}
      onClick={() => {
        handleTile(index);
        setIsFlipped((prev) => !prev);
      }}
    >
      <TileContent
        color={color}
        currentWidth={currentWidth}
        isFlipped={isFlipped}
        orderLeft={index % 2 !== 0}
      >
        <TileFace color={isFlipped ? darken(0.2, color) : color}>
          <Text>{frontText}</Text>
        </TileFace>
        <TileFace
          color={isFlipped ? darken(0.1, color) : color}
          className="back"
        >
          <p dangerouslySetInnerHTML={{ __html: backText }}></p>
        </TileFace>
      </TileContent>
    </Tile>
  );
};

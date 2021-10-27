import styled from "styled-components";
import { WIDTH, SPACE } from "../utilities/Constants";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  padding: ${SPACE.container};
`;
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: ${WIDTH.desktop};
`;
export const Header = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  justify-content: space-between;
`;

export const Link = styled.a`
  display: block;
  cursor: pointer;
`;
export const Logo = styled.img`
  pointer-events: none;
  object-fit: contain;
`;

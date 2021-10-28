import styled from "styled-components";
import { WIDTH, SPACE, DEVICE } from "../utilities/Constants";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  padding: ${SPACE.container};
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${WIDTH.desktop};
`;
export const Header = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  justify-content: space-between;
  @media ${DEVICE.sm} {
    flex-direction: column;
  }
`;
export const Link = styled.a`
  display: block;
  cursor: pointer;
`;
export const Logo = styled.img`
  pointer-events: none;
  object-fit: contain;
`;
export const Main = styled.div`
  display: flex;
  margin-top: 2.5rem;
  width: 100%;
  min-height: 40rem;
  justify-content: space-between;
`;
export const SearchResultWrapper = styled.section`
  flex: 0 1 35rem;
  height: fit-content;
`;

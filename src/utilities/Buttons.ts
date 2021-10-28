import styled from "styled-components";
import { SPACE, COLORS, TRANSITION } from "./Constants";
import { FaTimes } from "react-icons/fa";

export const ButtonSearch = styled.button`
  display: flex;
  height: 5rem;
  cursor: pointer;
  border-radius: 0 2px 2px 0;
  background: ${COLORS.lightGray};
  border: 1px solid ${COLORS.darkGray};
  padding: ${SPACE.button};
  align-items: center;
  position: relative;
  transition: ${TRANSITION.ease};
  transform: translateX(-1px);
  &:hover {
    background: ${COLORS.darkGray};
  }
`;

export const ButtonRemove = styled(FaTimes)`
  display: ${(props: any) => (props["data-hide"] ? "flex" : "none")};
  position: absolute;
  z-index: 3;
  right: 1.5rem;
  bottom: 0.2rem;
  opacity: 0.6;
  height: 100%;
  cursor: pointer;
  transition: ${TRANSITION.ease};
  &:hover {
    opacity: 1;
  }
`;

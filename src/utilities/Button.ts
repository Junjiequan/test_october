import styled from "styled-components";
import { SPACE, COLORS, TRANSITION } from "./Constants";

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
  &:hover {
    background: ${COLORS.darkGray};
  }
`;

export const ButtonRemove = styled.button`
  display: flex;
`;

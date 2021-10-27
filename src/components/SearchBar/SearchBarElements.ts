import styled from "styled-components";
import { COLORS, SPACE } from "../../utilities/Constants";

export const Wrapper = styled.section`
  display: flex;
  margin-right: 20rem;
  width: 45%;
  justify-content: space-between;
`;
export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;

export const Input = styled.input`
  display: flex;
  width: 100%;
  height: 5rem;
  outline: 0;
  box-shadow: inset 0 0 1px 1px ${COLORS.darkGray};
  font-size: 1.5rem;
  padding: ${SPACE.button};
  &:focus,
  &:hover {
    box-shadow: inset 0 0 1px 1px ${COLORS.darkGray};
  }
`;

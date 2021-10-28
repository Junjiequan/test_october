import styled from "styled-components";
import { COLORS, SPACE, DEVICE, TRANSITION } from "../../utilities/Constants";

export const Form = styled.form`
  display: flex;
  margin-right: 20rem;
  width: 45%;
  justify-content: space-between;
  @media ${DEVICE.sm} {
    width: 100%;
  }
`;
export const InputWrapper = styled.label`
  display: flex;
  width: 100%;
  position: relative;
`;

export const Input = styled.input`
  display: flex;
  width: 100%;
  height: 5rem;
  outline: 0;
  border-radius: 2px;
  border: 1px solid ${COLORS.darkGray};
  font-size: 1.5rem;
  padding: ${SPACE.button};
  transition: ${TRANSITION.easeFast};
  &:focus {
    border-color: hsl(0, 0%, 26%);
    z-index: 2;
  }
`;

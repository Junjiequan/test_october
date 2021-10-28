import styled from "styled-components";
import playerIcon from "../../assets/playIcon.png";
import { TRANSITION } from "../../utilities/Constants";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0.5rem;
  min-height: 40rem;
`;

//Snippet
export const ImageWrapper = styled.div`
  position: relative;
  &:before {
    opacity: 0;
    position: absolute;
    content: "";
    background: url(${playerIcon}) center / contain no-repeat;
    bottom: 0;
    margin: auto;
    left: 0;
    top: 0;
    right: 0;
    width: 4.5rem;
    height: 4.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: ${TRANSITION.ease};
  }
`;

export const SnippetWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
  max-width: 33rem;
  cursor: pointer;
  &:hover ${ImageWrapper} {
    &:before {
      opacity: 1;
    }
  }
`;
export const Image = styled.img`
  object-fit: cover;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.7rem;
`;

export const Title = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
export const Desc = styled.p`
  font-size: 1.2rem;
  opacity: 0.7;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

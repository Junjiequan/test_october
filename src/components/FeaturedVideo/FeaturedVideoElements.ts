import styled from "styled-components";
import playerIcon from "../../assets/playIcon.png";
import { TRANSITION, DEVICE } from "../../utilities/Constants";

export const Container = styled.section`
  flex: 0 1 73.7rem;
  min-width: 30rem;
`;
export const VideoWrapper = styled.div`
  flex: 1 1 100%;
  display: flex;
  overflow: hidden;
  position: relative;
  max-height: 40rem;
  height: 100%;

  iframe {
    height: 100%;
    width: 100%;
    position: absolute;
  }
`;

export const VideoInfo = styled.div`
  margin: 2.5rem 0;
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 1.8rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
export const Date = styled.p`
  margin-top: 1rem;
  font-size: 1.4rem;
  opacity: 0.8;
  position: relative;
  &::after {
    content: "";
    display: block;
    margin-top: 2rem;
    position: relative;
    width: 100%;
    height: 1px;
    background: black;
    opacity: 0.2;
  }
`;

export const Desc = styled.a`
  margin-top: 2rem;
  font-size: 1.3rem;
  max-width: fit-content;
  opacity: 0.8;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const DetailDesc = styled.p`
  margin-top: 1rem;
  font-size: 1.4rem;
  &::after {
    content: "";
    display: block;
    margin-top: 2rem;
    position: relative;
    width: 100%;
    height: 1px;
    background: black;
    opacity: 0.2;
  }
`;

//RelatedVideo

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  @media ${DEVICE.spec} {
    justify-content: flex-start;
  }
`;

export const IMAGE = styled.button`
  position: relative;
  cursor: pointer;
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
  &:hover {
    &:before {
      opacity: 1;
    }
  }
`;

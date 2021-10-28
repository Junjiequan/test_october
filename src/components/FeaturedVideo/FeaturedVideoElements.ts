import styled from "styled-components";

export const Container = styled.section`
  flex: 0 1 73.7rem;
`;
export const VideoWrapper = styled.div`
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
  margin-top: 2.5rem;
`;

export const Title = styled.h1``;

export const Desc = styled.p``;

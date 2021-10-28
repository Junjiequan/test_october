import styled from "styled-components";

export const VideoWrapper = styled.section`
  flex: 0 1 73.7rem;
  overflow: hidden;
  position: relative;
  border: 1px solid gray;
  max-height: 60rem;
  height: 100%;
  iframe {
    height: 100%;
    width: 100%;
    position: absolute;
  }
`;

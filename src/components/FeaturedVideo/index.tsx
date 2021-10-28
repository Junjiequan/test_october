import React from "react";
import * as F from "./FeaturedVideoElements";
import { useSelector } from "react-redux";
import type { RootState } from "../../utilities/Types";

const FeaturedVideo = () => {
  const videoId = useSelector((state: RootState) => state.video);
  return (
    <F.VideoWrapper>
      <iframe
        width="737"
        height="400"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allowFullScreen
        title="Embedded youtube"
      />
    </F.VideoWrapper>
  );
};

export default FeaturedVideo;

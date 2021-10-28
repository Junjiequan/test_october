import React from "react";
import * as F from "./FeaturedVideoElements";

type TembedId = {
  embedId: string;
};

const FeaturedVideo: React.FC<TembedId> = ({ embedId }) => {
  return (
    <F.VideoWrapper>
      <iframe
        width="737"
        height="400"
        data-autoplay="1"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </F.VideoWrapper>
  );
};

export default FeaturedVideo;

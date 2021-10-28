import React from "react";
import * as F from "./FeaturedVideoElements";
import { useSelector } from "react-redux";
import type { RootState } from "../../utilities/Types";

const FeaturedVideo = () => {
  const videoId = useSelector((state: RootState) => state.video);
  const DATA = useSelector((state: RootState) => state.search?.items[0]);
  console.log(DATA);
  const title = DATA.snippet.title;
  const description = DATA.snippet.description;
  const author = DATA.snippet.channelTitle;
  const date: any = DATA.snippet.publishTime;
  return (
    <F.Container>
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
      {DATA && (
        <F.VideoInfo>
          <F.Title>{title}</F.Title>
          <F.Desc>{description}</F.Desc>
        </F.VideoInfo>
      )}
    </F.Container>
  );
};

export default FeaturedVideo;

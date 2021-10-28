import React, { useEffect, useState } from "react";
import * as R from "./FeaturedVideoElements";
import { getRelatedData } from "../../api";
import type { RootState } from "../../utilities/Types";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getVideo, fetchData } from "../../actions";

const RelatedVideo = (props: any) => {
  const dispatch = useDispatch();
  const [relatedVideos, setRelatedVideos] = useState<any>(null);
  const channelId = props["data-channelId"];
  const videoId = useSelector((state: RootState) => state.video);
  useEffect(() => {
    const getRelatedVideo = async () => {
      try {
        const DATA = await getRelatedData(channelId);
        setRelatedVideos(DATA.data.items);
      } catch (err: any) {
        console.log(err.message);
      }
    };
    getRelatedVideo();
  }, [videoId, channelId]);

  const handleClick = (props: any) => {
    const noVideoFound = props.id.videoId ? props.id.videoId : "aDm5WZ3QiIE";
    dispatch(getVideo(noVideoFound));
    dispatch(fetchData(props.snippet.title));
  };
  return (
    <R.Wrapper>
      {relatedVideos &&
        relatedVideos.map((props: any, index: number) => {
          return (
            <R.IMAGE onClick={() => handleClick(props)} key={index}>
              <img width="120" height="90" src={props.snippet.thumbnails.default.url} alt="" />
            </R.IMAGE>
          );
        })}
    </R.Wrapper>
  );
};

export default RelatedVideo;

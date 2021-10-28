import * as F from "./FeaturedVideoElements";
import { useSelector } from "react-redux";
import type { RootState } from "../../utilities/Types";
import RelatedVideo from "./RelatedVideo";
import IsLoading from "../../helpers/IsLoading";

const FeaturedVideo = () => {
  const videoId = useSelector((state: RootState) => state.video);
  const DATA = useSelector((state: RootState) => state.search.items);
  const channelURL = "https://www.youtube.com/channel/";
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
      {DATA ? (
        <>
          <F.VideoInfo>
            <F.Title>{DATA[0].snippet.title}</F.Title>
            <F.Date>Premiered {DATA[0].snippet.publishTime.toString().slice(0, 10)}</F.Date>
            <F.Desc
              href={channelURL + DATA[0].snippet.channelId}
              title={DATA[0].snippet.channelTitle}
              rel="noreferrer noopenner"
              target="_blank"
            >
              {DATA[0].snippet.channelTitle}
            </F.Desc>
            <F.DetailDesc>{DATA[0].snippet.description ? DATA[0].snippet.description : "No description"}</F.DetailDesc>
          </F.VideoInfo>
          <RelatedVideo data-channelId={DATA[0].snippet.channelId} />
        </>
      ) : (
        <F.Error>
          <IsLoading />
        </F.Error>
      )}
    </F.Container>
  );
};

export default FeaturedVideo;

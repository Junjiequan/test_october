import React from "react";
import { Item } from "../../utilities/Types";
import * as S from "./SearchResultsElements";
import { useDispatch } from "react-redux";
import { getVideo } from "../../actions";

const Snippet = (props: Item) => {
  const dispatch = useDispatch();
  const thumbnail = props.snippet.thumbnails.default.url;
  const title = props.snippet.title;
  const author = props.snippet.channelTitle;
  const date: any = props.snippet.publishTime;
  const videoId = props.id.videoId;
  console.log(videoId);
  const handleClick = () => {
    dispatch(getVideo(videoId));
  };

  return (
    <S.SnippetWrapper onClick={handleClick}>
      <S.ImageWrapper>
        <S.Image width="120" height="90" src={thumbnail} alt="video image" />
      </S.ImageWrapper>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Desc>{author}</S.Desc>
        <S.Desc>Premiered {date.toString().slice(0, 10)}</S.Desc>
      </S.Info>
    </S.SnippetWrapper>
  );
};

export default Snippet;

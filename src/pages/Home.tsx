import * as H from "./HomeElements";
import SearchBar from "../components/SearchBar";
import FeaturedVideo from "../components/FeaturedVideo";
import SearchResults from "../components/SearchResults";

const Home = () => {
  const youtubeUrl = "https://www.youtube.com/";
  const logo =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png";
  return (
    <H.Container>
      <H.Wrapper>
        <H.Header>
          <H.Link href={youtubeUrl} target="_blank" rel="noopenner noreferrer">
            <H.Logo width={100} height={50} src={logo} />
          </H.Link>
          <SearchBar />
        </H.Header>
        <H.Main>
          <FeaturedVideo />
          <H.SearchResultWrapper>
            <SearchResults />
          </H.SearchResultWrapper>
        </H.Main>
      </H.Wrapper>
    </H.Container>
  );
};

export default Home;

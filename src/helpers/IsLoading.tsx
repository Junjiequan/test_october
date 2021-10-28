import Styled from "styled-components";
import PacmanLoader from "react-spinners/PacmanLoader";

const Container = Styled.div`
    display:flex;
    width:100%;
    justify-content:center;
    align-items:center;
`;

const IsLoading = () => {
  return (
    <Container>
      <PacmanLoader color={"#df2b2b"} speedMultiplier={1} />
    </Container>
  );
};

export default IsLoading;

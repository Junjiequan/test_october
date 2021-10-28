import { useEffect } from "react";
import Home from "./pages/Home";
import GlobalStyle from "./utilities/GlobalStyle";
import { useDispatch } from "react-redux";
import { fetchData } from "./actions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData("never gonna give you up"));
  }, [dispatch]);
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
};

export default App;

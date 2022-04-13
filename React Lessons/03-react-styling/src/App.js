// import Inline from "./components/inline-style/Inline";
// import StyleSheet from "./components/regular-style/StyleSheet";
import Card from "./components/card/Card";
import data from "./data"

const App = () => {
  return (
    <>
      <Card veri={data} />
      {/* <Inline /> */}
      {/* <StyleSheet secenek={false}/> */}
    </>
  );
};

export default App;

// import Inline from "./components/inline-style/Inline";
// import StyleSheet from "./components/regular-style/StyleSheet";
import Card from "./components/card/Card";
import ModuleBtn from "./components/moduleCss/ModuleBtn";
import data from "./data";

const App = () => {
  return (
    <>
    {/* <Inline/> */}
    {/* <StyleSheet secenek={true}/> */}
    <Card veri={data}/>
    <ModuleBtn btnStyle="birinci" btnName= "Kaydet"/>
    <ModuleBtn btnStyle="ikinci" btnName= "Sil"/>
    </>
  );
};

export default App;

// import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import ProductItem from "./components/Card/productItem";

function App() {
  //!     okuma      yazma  değeri
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/").then(({ data }) => {
      console.log("hello world", data);
      setProducts(data);
    });

    // const res = await axios.get("https://fakestoreapi.com/products/");
    // console.log("naber", res.data);
  }, []);

  return (
    <div className="App">
      {products.map((product) => {
        return (
          <>
           {/* <ProductItem product={data}/> */}
          </>
        );
      })}
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Details from "./pages/Details";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="main">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/details/:id" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

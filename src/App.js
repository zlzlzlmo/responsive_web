import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Hero from "./components/Hero";
import Dropdown from "./components/Dropdown";
import { useState } from "react";
const { default: Navbar } = require("./components/Navbar");
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Hero />
      </BrowserRouter>
    </>
  );
}

export default App;

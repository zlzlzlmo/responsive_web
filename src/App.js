import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Hero from "./components/Hero";
const { default: Navbar } = require("./components/Navbar");
function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Navbar />
        <Hero />
      </BrowserRouter>
    </>
  );
}

export default App;

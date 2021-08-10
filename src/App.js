import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./globalStyles";
const { default: Navbar } = require("./components/Navbar");
function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Navbar />
      </BrowserRouter>
    </>
  );
}

export default App;

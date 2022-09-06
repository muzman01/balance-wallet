import GlobalStyles from "./styles/GlobalStyles";
import { light, dark } from "./styles/Themes";
import { ThemeProvider } from "styled-components";

import { Routes, Route } from "react-router-dom";
import Docs from "./Docs";
import Homee from "./Home";
import DockHome from "./components/docsoages/DockHome";
import About from "./components/docsoages/About";

function App() {
  
  return (
    <Routes>
      <Route path="/docs" element={<Docs />} exact />
      <Route path="/docshome" element={<DockHome />} exact />
      <Route path="/about" element={<About />} exact />
      <Route path="/" element={<Homee />} exact />
    </Routes>
  );
}

export default App;

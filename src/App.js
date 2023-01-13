import { Routes, Route } from "react-router-dom";

//import layouts
import ExternalLayouts from "./layouts/external";

//import external pages
import Home from "./pages/home";
import About from "./pages/about";
import Parents from "./pages/parents";
import Faq from "./pages/Faq/Faq";
import UserSelect from "./pages/UserSelect/UserSelect";
//import dashboard pages

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<ExternalLayouts />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/parents" element={<Parents />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/UserSelect" element={<UserSelect />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

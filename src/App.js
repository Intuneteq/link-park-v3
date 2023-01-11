import { Routes, Route } from "react-router-dom";

//import layouts
import ExternalLayouts from "./layouts/external";

//import external pages
import Home from "./pages/home";
import About from "./pages/about";
import Parents from "./pages/parents";
import SignIn from "./pages/signIn";

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
          <Route path="/signin" element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

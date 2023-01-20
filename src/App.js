import { Routes, Route } from "react-router-dom";

//import layouts
import ExternalLayouts from "./layouts/external";
import DashboardLayout from "./layouts/dashboard";

//import external pages
import Home from "./pages/home";
import About from "./pages/about";
import Parents from "./pages/parents";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signup";
import Faq from "./pages/Faq/Faq";
import UserSelect from "./pages/UserSelect/UserSelect";
//import dashboard pages

import "./App.scss";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<ExternalLayouts />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/parents" element={<Parents />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/UserSelect" element={<UserSelect />} />
        </Route>

        <Route element={<DashboardLayout />}>
          <Route path="/username/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

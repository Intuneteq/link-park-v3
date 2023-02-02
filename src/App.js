import { Routes, Route } from "react-router-dom";

//import layouts
import { ExternalLayouts, DashboardLayout, StudentLayout } from "./components/templates";

//import external pages
import Home from "./pages/home";
import About from "./pages/about";
import Parents from "./pages/parents";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signup";
import Faq from "./pages/faq/Faq";
import UserSelect from "./pages/userselect/UserSelect";

//import dashboard pages
import Dashboard from "./pages/parent/dashboard";
import Results from "./pages/parent/results";
import Subjects from "./pages/parent/subjects";
import Events from "./pages/parent/events";
import NewEvents from "./pages/parent/events/NewEvents";
import PastEvents from "./pages/parent/events/PastEvents";
import AllEvents from "./pages/parent/events/AllEvents";
import StudentDashboard from "./pages/student/dashboard";

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
          <Route path="/signup" element={<SignUp />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/UserSelect" element={<UserSelect />} />
        </Route>

        {/* student dashboard */}
        <Route element={<StudentLayout />}>
          <Route path="/student/dashboard" element={<StudentDashboard />} />
        </Route>

        {/* Parent dashboard */}
        <Route element={<DashboardLayout />}>
          <Route path="/username/dashboard" element={<Dashboard />} />
          <Route path="/username/results" element={<Results />} />
          <Route path="/username/subjects" element={<Subjects />} />
          <Route path="/username/events" element={<Events />}>
            <Route path="/username/events/new" element={<NewEvents />} />
            <Route path="/username/events/past-events" element={<PastEvents />} />
            <Route path="/username/events/all" element={<AllEvents />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

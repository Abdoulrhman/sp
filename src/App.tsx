// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import StudentLogin from "./pages/login";
import Exams from "./pages/exams";
import Assessments from "./pages/assessments";
import AssessmentsDetails from "./pages/assessments-details";
import PreLogin from "./pages/pre-login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exams" element={<Exams />} />
        <Route path="/login" element={<StudentLogin />} />
        <Route path="/assessments" element={<Assessments />} />
        <Route path="/details" element={<AssessmentsDetails />} />
        <Route path="/pre-login" element={<PreLogin />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;

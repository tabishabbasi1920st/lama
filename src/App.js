import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/project-details/:projectId"
          element={<ProjectDetails />}
        />
      </Routes>
    </>
  );
}

export default App;

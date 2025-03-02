import "./css/App.css";

import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import ProjectsPage from "./pages/ProjectsPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<HomePage />} />
        <Route path="/portfolio/ProjectsPage" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

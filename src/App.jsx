import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/App.css";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";

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

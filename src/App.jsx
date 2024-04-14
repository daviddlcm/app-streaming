import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import MoviePlayer from "./pages/MoviePlayer.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/movie/:id" element={<MoviePlayer />} />
      </Routes>
    </Router>
  );
}

export default App;

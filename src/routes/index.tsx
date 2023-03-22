import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/user/:id" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;

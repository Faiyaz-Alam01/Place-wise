import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/dashboard" element={<Layout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;

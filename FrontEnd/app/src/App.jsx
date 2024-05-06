import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Profile from "./components/profile";
import Register from "./components/register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Courses from "./pages/Courses";
import Dashboard from "./pages/Dashboard";
import ChatBot from "./components/ChatBot";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
         <Route path="/Courses" element={<Courses />} />
           <Route path="/dashboard" element={<Dashboard />} />
        
      </Routes>
        <ChatBot />
    </BrowserRouter>
      
  );
}
export default App;

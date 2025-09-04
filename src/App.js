import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import InstructorProfile from "./pages/InstructorProfile";
import StudentProfile from "./pages/StudentProfile";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import Chatbot from "./components/ChatBot";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/InstructorProfile" element={<InstructorProfile />} />
        <Route path="/student-dashboard" element={<StudentProfile />} />
      </Routes>
      <Footer />
      <Chatbot/>
    </BrowserRouter>
  );
}

export default App;

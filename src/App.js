// App.js
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Courses from "./pages/Courses";
import StudentDashboard from "./pages/StudentDashBoard";
import ChatBot from "./components/ChatBot";
import InstructorCreateTask from "./pages/InstructorCreateTask";
import CreateCourse from "./pages/inatructorCreate";
import CourseDetails from "./pages/CourseDetails";
import InstructorCreate from "./pages/inatructorCreate";
import InstructorCreateLesson from "./pages/InstructorAddLesson";

function App() {
  const [user, setUser] = useState(null); 
  // user = { role: "student" | "instructor" }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<SignUp setUser={setUser} />} />

        <Route path="/courses" element={<Courses />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />

        <Route path="/create-course" element={<CreateCourse />} />
        
          <Route path="/course/:courseId/add-lesson" element={<InstructorCreateLesson />} />
        <Route path="/lesson/:lessonId/create-task" element={<InstructorCreateTask />} />
        
        <Route path="/courses/:id" element={<CourseDetails />} />
       
      </Routes>

      <ChatBot />
    </BrowserRouter>
  );
}

export default App;

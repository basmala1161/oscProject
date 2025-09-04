
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [enrolledCourses, setEnrolledCourses] = useState([
    { id: 1, title: "React.js Mastery", progress: 40 },
    { id: 2, title: "Python Programming", progress: 70 },
  ]);

  return (
    <div className="student-dashboard">
      <h1>My Dashboard</h1>

      {enrolledCourses.length === 0 ? (
        <div className="no-courses">
          <p>You haven’t enrolled in any courses yet.</p>
          <button onClick={() => navigate("/courses")}>
            Explore Courses
          </button>
        </div>
      ) : (
        <div className="courses-grid">
          {enrolledCourses.map((course) => (
            <div className="course-card" key={course.id}>
              <h2>{course.title}</h2>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <p>{course.progress}% complete</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;

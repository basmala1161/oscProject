import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/courses")
      .then(res => res.json())
      .then(data => setCourses(data))
      .catch(err => console.error("Error fetching courses:", err));
  }, []);

  return (
    <div className="courses-page">
      <h1 className="courses-title">Our Programming Courses</h1>
      <div className="courses-grid">
        {courses.map((course) => (
          <div className="edu-card" key={course._id}>
            <iframe
              src={course.videoUrl}
              title={course.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <button 
              className="cta-button" 
              onClick={() => navigate(`/courses/${course._id}`)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;

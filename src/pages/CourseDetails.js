import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
  
    fetch(`http://localhost:5000/api/courses/${id}`)
      .then(res => res.json())
      .then(data => setCourse(data))
      .catch(err => console.error("Error fetching course details:", err));
  }, [id]);

  const handleLessonComplete = () => {
    setProgress((prev) => Math.min(prev + 20, 100)); 
  };

  if (!course) return <p>Loading course details...</p>;

  return (
    <div className="course-details">
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <iframe
        src={course.videoUrl}
        title={course.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <div className="progress-container">
        <p>Progress: {progress}%</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <button className="cta-button" onClick={handleLessonComplete}>
        Mark Lesson as Complete
      </button>
    </div>
  );
};

export default CourseDetails;
